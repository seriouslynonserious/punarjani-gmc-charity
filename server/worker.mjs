import schemas from '../backend/schemas.json' with {type:'json'};
import {validateSubmission,validateUpdate} from '../backend/validation.mjs';
const adminActions=new Set(['adminLogin','records','update','summary','exportAll']);
const tabs=new Set([...Object.values(schemas).map(s=>s.tab),'Impact_Statistics']);
const encoder=new TextEncoder();
const hex=buffer=>Array.from(new Uint8Array(buffer),n=>n.toString(16).padStart(2,'0')).join('');
async function sign(text,secret){const key=await crypto.subtle.importKey('raw',encoder.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return hex(await crypto.subtle.sign('HMAC',key,encoder.encode(text)))}
function equal(a,b){if(typeof a!=='string'||typeof b!=='string'||a.length!==b.length)return false;let n=0;for(let i=0;i<a.length;i++)n|=a.charCodeAt(i)^b.charCodeAt(i);return n===0}
const json=(data,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
export default {async fetch(request,env){const url=new URL(request.url);if(!url.pathname.startsWith('/api/')){if(!env.ASSETS)return new Response('Site assets unavailable',{status:503});const asset=await env.ASSETS.fetch(request);if(asset.status!==404)return asset;return env.ASSETS.fetch(new Request(new URL('/index.html',request.url),request));}
 if(request.method!=='POST')return json({ok:false,error:'Use POST.'},405);
 const origin=request.headers.get('origin');if(origin&&origin!==url.origin)return json({ok:false,error:'This origin is not authorized.'},403);
 if(Number(request.headers.get('content-length')||0)>32000)return json({ok:false,error:'Request is too large.'},413);
 try{const text=await request.text();if(text.length>32000)return json({ok:false,error:'Request is too large.'},413);const b=JSON.parse(text),action=b.action;
 if(!env.APPS_SCRIPT_URL||!env.APPS_SCRIPT_SECRET||!env.CHALLENGE_SECRET)return json({ok:false,error:'Registrations are not open yet.'},503);
 const ip=request.headers.get('cf-connecting-ip')||'unknown';const ipHash=await sign(ip,env.CHALLENGE_SECRET);
 if(action==='challenge'){if(!schemas[b.kind]||! /^[a-f0-9-]{36}$/i.test(b.requestId||''))throw Error('Invalid form reference.');const challenge={id:b.requestId,kind:b.kind,expires:Date.now()+300000,salt:crypto.randomUUID(),ip:ipHash};const payload=JSON.stringify(challenge);return json({ok:true,data:{payload,signature:await sign(payload,env.CHALLENGE_SECRET),difficulty:4}});}
 let body={action};
 if(adminActions.has(action)){const email=request.headers.get('oai-authenticated-user-email')?.toLowerCase();const id=request.headers.get('oai-authenticated-user-id');const admins=(env.ADMIN_EMAILS||'').split(',').map(x=>x.trim().toLowerCase());if(!id||!email)return json({ok:false,error:'Please sign in to your administrator account.'},401);if(!admins.includes(email))return json({ok:false,error:'This account is not an authorized administrator.'},403);
 if(action==='adminLogin')return json({ok:true,data:{email,sheetUrl:env.GOOGLE_SHEET_URL||''}});
 if(['records','update'].includes(action)){if(!tabs.has(b.tab))throw Error('Unknown data section.');body.tab=b.tab;}
 if(action==='update'){if(typeof b.id!=='string'||b.id.length>100)throw Error('Invalid record.');body.id=b.id;body.changes=validateUpdate(b.tab,b.changes);body.admin=email;}
 }else if(action==='submit'){
 const schema=schemas[b.kind];body.values=validateSubmission(schema,b.values);body.kind=b.kind;body.requestId=b.requestId;
 const proof=b.proof;if(!proof||typeof proof.payload!=='string'||proof.payload.length>1000||!equal(await sign(proof.payload,env.CHALLENGE_SECRET),proof.signature))throw Error('Security check failed. Please try again.');
 const challenge=JSON.parse(proof.payload);if(challenge.id!==b.requestId||challenge.kind!==b.kind||challenge.ip!==ipHash||challenge.expires<Date.now()||challenge.expires>Date.now()+300000)throw Error('Security check expired. Please retry.');
 if(!Number.isSafeInteger(proof.nonce)||proof.nonce<0||proof.nonce>4000000)throw Error('Invalid security proof.');const digest=hex(await crypto.subtle.digest('SHA-256',encoder.encode(proof.payload+':'+proof.nonce)));if(!digest.startsWith('0000'))throw Error('Security check failed.');
 if(!Number.isFinite(b.startedAt)||Date.now()-b.startedAt<2000)throw Error('Please review your form before sending.');body.rateKey=ipHash;
 }else if(action==='donors'){const f=b.filters||{};body.filters={};for(const key of ['bloodGroup','district','city','availability']){if(typeof f[key]!=='string'||f[key].length>100)throw Error('Invalid search.');body.filters[key]=f[key];}}
 else if(action!=='impact')throw Error('Unknown operation.');
 const response=await fetch(env.APPS_SCRIPT_URL,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({...body,secret:env.APPS_SCRIPT_SECRET}),redirect:'follow',signal:AbortSignal.timeout(22000)});if(!response.ok)throw Error('Storage is temporarily unavailable. Please retry.');const result=await response.json();return json(result,result.ok?200:400);
 }catch(e){return json({ok:false,error:e instanceof SyntaxError?'Invalid request.':e?.name==='TimeoutError'?'The request timed out. Retry to safely check your submission.':e?.message||'Unable to process your request.'},400);}
}};
