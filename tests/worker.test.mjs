import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../server/worker.mjs';
const env={APPS_SCRIPT_URL:'https://example.org/storage',APPS_SCRIPT_SECRET:'test-secret',CHALLENGE_SECRET:'test-challenge-secret',ADMIN_EMAILS:'admin@example.org'};
const call=(body,headers={},config=env)=>worker.fetch(new Request('https://charity.example/api/index',{method:'POST',headers:{'Content-Type':'text/plain',...headers},body:JSON.stringify(body)}),config);
test('Sites worker blocks missing configuration, foreign origins and anonymous admin requests',async()=>{
 assert.equal((await call({action:'impact'},{},{})).status,503);
 assert.equal((await call({action:'impact'},{origin:'https://foreign.example'})).status,403);
 for(const action of ['adminLogin','summary','records','update','exportAll'])assert.equal((await call({action})).status,401);
 assert.equal((await call({action:'adminLogin'},{'oai-authenticated-user-id':'123','oai-authenticated-user-email':'other@example.org'})).status,403);
 assert.equal((await call({action:'adminLogin'},{'oai-authenticated-user-id':'123','oai-authenticated-user-email':'admin@example.org'})).status,200);
});
test('Sites proof challenge is bound to the request and tampered signatures fail',async()=>{
 const id=crypto.randomUUID(); const result=await (await call({action:'challenge',kind:'contact',requestId:id})).json();
 assert.equal(result.ok,true);const payload=JSON.parse(result.data.payload);assert.equal(payload.id,id);assert.equal(payload.kind,'contact');assert.ok(payload.expires>Date.now());
 const res=await (await call({action:'submit',kind:'contact',requestId:id,startedAt:Date.now()-3000,values:{Name:'Test',Email:'test@example.org',Subject:'General',Message:'Test message',Consent:true},proof:{...result.data,signature:'invalid',nonce:0}})).json();
 assert.equal(res.ok,false);
});
