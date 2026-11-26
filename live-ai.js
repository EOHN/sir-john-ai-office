'use strict';
const aiUrl=document.getElementById('workerUrl'), aiToken=document.getElementById('officeToken'), aiStatus=document.getElementById('aiStatus');
let aiBusy=false;
async function callOfficeAI(payload){
 const url=new URL(aiUrl.value.trim());
 if(url.protocol!=='https:'||!url.hostname.endsWith('.workers.dev')||url.username||url.password||url.search||url.hash) throw Error('Enter your HTTPS workers.dev URL.');
 if(!aiToken.value.trim()) throw Error('Enter your office access token.');
 const response=await fetch(url.origin+'/api/ai',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+aiToken.value.trim()},body:JSON.stringify(payload),signal:AbortSignal.timeout(90000)});
 const data=await response.json();if(!response.ok)throw Error(data.error||'Request failed: '+response.status);return data;
}
document.getElementById('testAI').addEventListener('click',async()=>{aiStatus.textContent='Checking configuration…';try{await callOfficeAI({test:true});aiStatus.textContent='Authenticated backend connected. Run a task to test the model.';}catch(e){aiStatus.textContent=e.message;}});
async function runLiveAI(t){if(aiBusy){say('An AI task is already running.');return;}if(t.result&&!confirm('Replace the existing saved result if generation succeeds?'))return;if(!confirm('Send this task to the Cloudflare AI service? Do not send confidential or student information.'))return;aiBusy=true;say('AI generating for '+bots[t.agent].name+'…');try{const data=await callOfficeAI({agent:t.agent,task:t.text});if(typeof data.response!=='string'||!data.response.trim())throw Error('No text returned.');if(!tasks.includes(t)){say('Task was removed before completion.');return;}t.result=data.response;t.status='Completed';const persisted=save();render();if(persisted)say('AI response saved. Review for accuracy before use.');}catch(e){say('AI request failed: '+e.message);}finally{aiBusy=false;}}
