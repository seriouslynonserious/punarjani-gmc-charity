import { OAuth2Client } from 'google-auth-library';
import { readFileSync } from 'node:fs';
import { validateSubmission,validateUpdate } from '../backend/validation.mjs';
const schemas=JSON.parse(readFileSync(new URL('../backend/schemas.json',import.meta.url),'utf8'));
const client=new OAuth2Client();
const adminActions=new Set(['adminLogin','records','update','summary','exportAll']);
const tabs=new Set([...Object.values(schemas).map(s=>s.tab),'Impact_Statistics']);
export default async function handler(req,res){
 res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');
 const origins=(process.env.ALLOWED_ORIGINS||'').split(',').map(s=>s.trim()).filter(Boolean);const origin=req.headers.origin;
 if(origin&&origins.includes(origin)){res.setHeader('Access-Control-Allow-Origin',origin);res.setHeader('Vary','Origin');res.setHeader('Access-Control-Allow-Methods','POST, OPTIONS');res.setHeader('Access-Control-Allow-Headers','Content-Type');}
 if(origin&&!origins.includes(origin))return res.status(403).json({ok:false,error:'This website is not authorized.'});
 if(req.method==='OPTIONS')return res.status(204).end();
 if(req.method!=='POST')return res.status(405).json({ok:false,error:'Use POST.'});
 try{
 if(!process.env.APPS_SCRIPT_URL||!process.env.APPS_SCRIPT_SECRET) return res.status(503).json({ok:false,error:'The service has not opened yet.'});
 let raw=typeof req.body==='string'?req.body:JSON.stringify(req.body||{});if(raw.length>30000)return res.status(413).json({ok:false,error:'Submission is too large.'});
 const body=JSON.parse(raw);const action=body.action;let request={action};
 if(adminActions.has(action)){
 if(typeof body.token!=='string'||body.token.length>10000)throw Error('Please sign in again.');
 if(!process.env.GOOGLE_CLIENT_ID)throw Error('Administrator sign-in is unavailable.');
 let payload;try{const ticket=await client.verifyIdToken({idToken:body.token,audience:process.env.GOOGLE_CLIENT_ID});payload=ticket.getPayload()}catch{throw Error('Your sign-in has expired. Please sign in again.')}
 const admins=(process.env.ADMIN_EMAILS||'').split(',').map(e=>e.trim().toLowerCase());
 if(!payload?.email_verified||!payload.email||!admins.includes(payload.email.toLowerCase()))return res.status(403).json({ok:false,error:'This account is not an authorized administrator.'});
 if(action==='adminLogin')return res.status(200).json({ok:true,data:{email:payload.email,sheetUrl:process.env.GOOGLE_SHEET_URL||''}});
 if(['records','update'].includes(action)){if(!tabs.has(body.tab))throw Error('Unknown data section.');request.tab=body.tab;}
 if(action==='update'){if(typeof body.id!=='string'||body.id.length>100)throw Error('Invalid record.');request.id=body.id;request.changes=validateUpdate(body.tab,body.changes);request.admin=payload.email;}
 }else if(action==='submit'){
 const schema=schemas[body.kind];request.values=validateSubmission(schema,body.values);request.kind=body.kind;
 if(typeof body.requestId!=='string'||! /^[a-f0-9-]{36}$/i.test(body.requestId))throw Error('Invalid submission reference. Please reload the form.');request.requestId=body.requestId;
 if(!Number.isFinite(body.startedAt)||Date.now()-body.startedAt<2000)throw Error('Please take a moment to review the form.');
 if(typeof body.captcha!=='string'||body.captcha.length>2048||!process.env.TURNSTILE_SECRET)throw Error('Please complete the security check.');
 const verification=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',body:new URLSearchParams({secret:process.env.TURNSTILE_SECRET,response:body.captcha}),signal:AbortSignal.timeout(10000)}).then(r=>r.json());
 const hosts=(process.env.TURNSTILE_HOSTNAMES||'').split(',').map(x=>x.trim());if(!verification.success||verification.action!=='submit'||!hosts.includes(verification.hostname))throw Error('Security verification expired. Please try again.');
 }else if(action==='donors'){const f=body.filters||{};request.filters={};for(const key of ['bloodGroup','district','city','availability']){if(typeof f[key]!=='string'||f[key].length>100)throw Error('Invalid search.');request.filters[key]=f[key];}}
 else if(action!=='impact')throw Error('Unknown operation.');
 const response=await fetch(process.env.APPS_SCRIPT_URL,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({...request,secret:process.env.APPS_SCRIPT_SECRET}),redirect:'follow',signal:AbortSignal.timeout(22000)});
 if(!response.ok)throw Error('Storage is temporarily unavailable. Please retry.');const result=await response.json();return res.status(result.ok?200:400).json(result);
 }catch(e){const message=e instanceof SyntaxError?'Invalid request.':e?.name==='TimeoutError'?'The request timed out. Please retry.':e?.message||'Unable to process this request.';return res.status(400).json({ok:false,error:message})}
}
