const SCHEMAS = {
  "blood-donor": {
    "key": "blood-donor",
    "title": "Register as a Blood Donor",
    "tab": "Blood_Donors",
    "description": "Be a connection that could make a difference.",
    "fields": [
      {
        "key": "Name",
        "label": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Age",
        "label": "Age",
        "type": "number",
        "required": true
      },
      {
        "key": "Gender",
        "label": "Gender",
        "type": "select",
        "required": true,
        "options": [
          "Female",
          "Male",
          "Non-binary",
          "Prefer not to say"
        ]
      },
      {
        "key": "Blood Group",
        "label": "Blood Group",
        "type": "select",
        "required": true,
        "options": [
          "A+",
          "A-",
          "B+",
          "B-",
          "AB+",
          "AB-",
          "O+",
          "O-"
        ]
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": false
      },
      {
        "key": "District",
        "label": "District",
        "type": "text",
        "required": true
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "Last Donation Date",
        "label": "Last Blood Donation Date",
        "type": "date",
        "required": false
      },
      {
        "key": "Availability",
        "label": "Current Availability",
        "type": "select",
        "required": true,
        "options": [
          "Available",
          "Temporarily Unavailable",
          "Contact Before Request"
        ]
      },
      {
        "key": "Preferred Contact",
        "label": "Preferred Contact Method",
        "type": "select",
        "required": true,
        "options": [
          "Phone",
          "WhatsApp",
          "Email"
        ]
      }
    ],
    "status": "Active"
  },
  "blood-request": {
    "key": "blood-request",
    "title": "Request Blood",
    "tab": "Blood_Requests",
    "description": "Share the details so our student volunteers can coordinate support.",
    "fields": [
      {
        "key": "Patient Name",
        "label": "Patient Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Blood Group",
        "label": "Required Blood Group",
        "type": "select",
        "required": true,
        "options": [
          "A+",
          "A-",
          "B+",
          "B-",
          "AB+",
          "AB-",
          "O+",
          "O-"
        ]
      },
      {
        "key": "Units",
        "label": "Number of Units",
        "type": "number",
        "required": true
      },
      {
        "key": "Hospital",
        "label": "Hospital Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Location",
        "label": "Hospital Location",
        "type": "text",
        "required": true
      },
      {
        "key": "District",
        "label": "District",
        "type": "text",
        "required": true
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "Contact Person",
        "label": "Contact Person",
        "type": "text",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Required Date",
        "label": "Required Date",
        "type": "date",
        "required": true
      },
      {
        "key": "Urgency",
        "label": "Urgency",
        "type": "select",
        "required": true,
        "options": [
          "Normal",
          "Urgent",
          "Emergency"
        ]
      },
      {
        "key": "Additional Message",
        "label": "Additional Message",
        "type": "textarea",
        "required": false
      }
    ],
    "status": "Pending"
  },
  "hair-donor": {
    "key": "hair-donor",
    "title": "Donate Hair",
    "tab": "Hair_Donors",
    "description": "A part of you can help someone feel like themselves again.",
    "fields": [
      {
        "key": "Name",
        "label": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Age",
        "label": "Age",
        "type": "number",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": false
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "District",
        "label": "District",
        "type": "text",
        "required": true
      },
      {
        "key": "Hair Length",
        "label": "Hair Length (cm)",
        "type": "number",
        "required": true
      },
      {
        "key": "Donation Date",
        "label": "Expected Donation Date",
        "type": "date",
        "required": true
      },
      {
        "key": "Hair Status",
        "label": "Already Cut Hair?",
        "type": "select",
        "required": true,
        "options": [
          "Yes",
          "No"
        ]
      },
      {
        "key": "Notes",
        "label": "Additional Notes",
        "type": "textarea",
        "required": false
      }
    ],
    "status": "Pending"
  },
  "wig-request": {
    "key": "wig-request",
    "title": "Request a Wig",
    "tab": "Wig_Requests",
    "description": "Tell us how to reach you and what support you are looking for.",
    "fields": [
      {
        "key": "Patient Name",
        "label": "Patient Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Age",
        "label": "Age",
        "type": "number",
        "required": true
      },
      {
        "key": "Contact Person",
        "label": "Contact Person",
        "type": "text",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Hospital",
        "label": "Hospital Name",
        "type": "text",
        "required": true
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "District",
        "label": "District",
        "type": "text",
        "required": true
      },
      {
        "key": "Treatment Information",
        "label": "Treatment Information",
        "type": "textarea",
        "required": false
      },
      {
        "key": "Wig Details",
        "label": "Preferred Wig Details",
        "type": "textarea",
        "required": false
      },
      {
        "key": "Notes",
        "label": "Additional Notes",
        "type": "textarea",
        "required": false
      }
    ],
    "status": "Pending"
  },
  "medicine-request": {
    "key": "medicine-request",
    "title": "Request Medicine Assistance",
    "tab": "Medicine_Requests",
    "description": "Our volunteers will review your request and get in touch.",
    "fields": [
      {
        "key": "Patient Name",
        "label": "Patient Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Age",
        "label": "Age",
        "type": "number",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": false
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "District",
        "label": "District",
        "type": "text",
        "required": true
      },
      {
        "key": "Hospital",
        "label": "Hospital",
        "type": "text",
        "required": true
      },
      {
        "key": "Doctor",
        "label": "Doctor Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Medicine Required",
        "label": "Medicine Required",
        "type": "textarea",
        "required": true
      },
      {
        "key": "Estimated Cost",
        "label": "Estimated Medicine Cost (\u20b9)",
        "type": "number",
        "required": false
      },
      {
        "key": "Duration",
        "label": "Duration Required",
        "type": "text",
        "required": true
      },
      {
        "key": "Description",
        "label": "Description of Need",
        "type": "textarea",
        "required": true
      },
      {
        "key": "Reference",
        "label": "Reference Information",
        "type": "textarea",
        "required": false
      }
    ],
    "status": "Pending"
  },
  "birthday-pledge": {
    "key": "birthday-pledge",
    "title": "Birthday Giving Pledge",
    "tab": "Birthday_Pledges",
    "description": "Make your special day a reason for someone else to smile. This is an expression of interest, with no payment collected.",
    "fields": [
      {
        "key": "Name",
        "label": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Birthday",
        "label": "Birthday",
        "type": "date",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": false
      },
      {
        "key": "City",
        "label": "City",
        "type": "text",
        "required": true
      },
      {
        "key": "Interest",
        "label": "Area of Interest",
        "type": "text",
        "required": true
      },
      {
        "key": "Preferred Wing",
        "label": "Preferred Charity Wing",
        "type": "select",
        "required": true,
        "options": [
          "Blood Wing",
          "Hair to Care",
          "Drug Wing",
          "Gift of Giving"
        ]
      },
      {
        "key": "Message",
        "label": "Message",
        "type": "textarea",
        "required": false
      },
      {
        "key": "Recognition Consent",
        "label": "I agree to public recognition of my participation",
        "type": "checkbox",
        "required": false
      }
    ],
    "status": "Interested"
  },
  "volunteer": {
    "key": "volunteer",
    "title": "Join Our Student Volunteers",
    "tab": "Volunteers",
    "description": "Bring your time, ideas and compassion. We will find a way to put them to work.",
    "fields": [
      {
        "key": "Name",
        "label": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone Number",
        "type": "tel",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": false
      },
      {
        "key": "Batch",
        "label": "Year / Batch",
        "type": "text",
        "required": true
      },
      {
        "key": "Interest",
        "label": "Area of Interest",
        "type": "text",
        "required": true
      },
      {
        "key": "Preferred Wing",
        "label": "Preferred Wing",
        "type": "select",
        "required": true,
        "options": [
          "Blood Wing",
          "Hair to Care",
          "Drug Wing",
          "Gift of Giving"
        ]
      },
      {
        "key": "Message",
        "label": "Message",
        "type": "textarea",
        "required": false
      }
    ],
    "status": "Pending"
  },
  "contact": {
    "key": "contact",
    "title": "Send Us a Message",
    "tab": "Contact_Messages",
    "description": "Have a question or an idea? We would love to hear from you.",
    "fields": [
      {
        "key": "Name",
        "label": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "key": "Email",
        "label": "Email",
        "type": "email",
        "required": true
      },
      {
        "key": "Phone",
        "label": "Phone",
        "type": "tel",
        "required": false
      },
      {
        "key": "Subject",
        "label": "Subject",
        "type": "text",
        "required": true
      },
      {
        "key": "Message",
        "label": "Message",
        "type": "textarea",
        "required": true
      }
    ],
    "status": "New"
  }
};
const STATUSES=['Pending','Contacted','Approved','Completed','Rejected','Active','Inactive','Interested','New'];
function safeCell(value){const s=String(value??'').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,'').trim();return /^[\s]*[=+@-]/.test(s)?"'"+s:s}
function validateSubmission(schema,values){
 if(!schema||!values||typeof values!=='object'||Array.isArray(values))throw Error('Invalid form.');
 if(values.website)throw Error('Submission rejected.');
 if(values.Consent!==true)throw Error('Consent is required.');
 const out={};
 for(const f of schema.fields){let raw=values[f.key];if(f.type==='checkbox'){out[f.key]=raw===true;continue}if(raw!==undefined&&raw!==null&&typeof raw!=='string'&&typeof raw!=='number')throw Error('Invalid '+f.label+'.');const s=String(raw??'').trim();if(f.required&&!s)throw Error(f.label+' is required.');if(s.length>(f.type==='textarea'?3000:300))throw Error(f.label+' is too long.');if(s){if(f.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))throw Error('Enter a valid email address.');if(f.type==='tel'&&(!/^\+?[0-9 ()-]{7,20}$/.test(s)||s.replace(/\D/g,'').length<7||s.replace(/\D/g,'').length>15))throw Error('Enter a valid phone number.');if(f.type==='select'&&!f.options.includes(s))throw Error('Invalid '+f.label+'.');if(f.type==='number'){const n=Number(s);if(!Number.isFinite(n)||n<0||n>10000000||(f.key==='Units'&&(!Number.isInteger(n)||n<1||n>100))||(f.key==='Age'&&(!Number.isInteger(n)||n>120)))throw Error('Invalid '+f.label+'.');}if(f.type==='date'&&(!/^\d{4}-\d{2}-\d{2}$/.test(s)||!Number.isFinite(Date.parse(s))||new Date(s).toISOString().slice(0,10)!==s))throw Error('Invalid '+f.label+'.');}out[f.key]=s}
 if(schema.key==='blood-donor'&&out['Preferred Contact']==='Email'&&!out.Email)throw Error('Add an email address for your preferred contact method.');
 out.Consent=true;return out;
}
function publicDonor(row){return {name:String(row.Name||'Donor').trim().split(/\s+/)[0],bloodGroup:row['Blood Group'],city:row.City,availability:row.Availability};}
function validateUpdate(tab,changes){if(!changes||typeof changes!=='object')throw Error('Invalid update.');if(tab==='Impact_Statistics'){const value=Number(changes.Value);if(!Number.isSafeInteger(value)||value<0)throw Error('Impact must be a non-negative whole number.');return {Value:value,Published:changes.Published===true||changes.Published==='TRUE'?'TRUE':'FALSE'}}if(!STATUSES.includes(changes.Status))throw Error('Invalid status.');if(typeof changes['Admin Notes']!=='string'||changes['Admin Notes'].length>3000)throw Error('Invalid notes.');return {Status:changes.Status,'Admin Notes':safeCell(changes['Admin Notes'])}}

// Deploy as an Apps Script web app, executing as the sheet owner.
// All calls must come through the serverless API with its private shared secret.
function doPost(e){try{if(!e.postData||e.postData.contents.length>40000)throw Error('Invalid request.');const b=JSON.parse(e.postData.contents);const secret=PropertiesService.getScriptProperties().getProperty('API_SECRET');if(!secret||typeof b.secret!=='string'||!constantEqual(secret,b.secret))throw Error('Unauthorized.');const data=dispatch(b);return json({ok:true,data:data});}catch(e){return json({ok:false,error:e.message||'Unable to process request.'});}}
function json(v){return ContentService.createTextOutput(JSON.stringify(v)).setMimeType(ContentService.MimeType.JSON);}
function constantEqual(a,b){const x=Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,a),y=Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,b);let result=0;for(let i=0;i<x.length;i++)result|=x[i]^y[i];return result===0;}
function book(){const id=PropertiesService.getScriptProperties().getProperty('SHEET_ID');if(!id)throw Error('Storage is not configured.');return SpreadsheetApp.openById(id);}
function headers(schema){return ['ID','Submission Date','Submission Time',...schema.fields.map(f=>f.key),'Consent','Status','Admin Notes','Updated By','Updated At'];}
function sheet(tab){const allowed=Object.values(SCHEMAS).some(s=>s.tab===tab)||tab==='Impact_Statistics';if(!allowed)throw Error('Unknown sheet.');const sh=book().getSheetByName(tab);if(!sh)throw Error('Run setupSheets before accepting submissions.');return sh;}
function records(tab){const sh=sheet(tab),data=sh.getDataRange().getDisplayValues();const columns=data.shift();return {tab:tab,columns:columns,rows:data.filter(r=>r.some(Boolean)).map(r=>Object.fromEntries(columns.map((c,i)=>[c,r[i]])))};}
function setupSheets(){const ss=book();Object.values(SCHEMAS).forEach(s=>{let sh=ss.getSheetByName(s.tab);if(!sh)sh=ss.insertSheet(s.tab);if(!sh.getLastRow()){const h=headers(s);sh.getRange(1,1,1,h.length).setValues([h]).setFontWeight('bold').setBackground('#154d43').setFontColor('#ffffff');sh.setFrozenRows(1);sh.getRange(2,1,Math.max(1,sh.getMaxRows()-1),h.length).setNumberFormat('@');}});let impact=ss.getSheetByName('Impact_Statistics');if(!impact)impact=ss.insertSheet('Impact_Statistics');if(!impact.getLastRow()){impact.appendRow(['ID','Label','Value','Published','Updated By','Updated At']);['Blood Donors Registered','Patients Supported','Hair Donations','Medicine Requests Supported','Student Volunteers','Requests Completed'].forEach((label,i)=>impact.appendRow(['impact-'+i,label,0,'FALSE','','']));impact.setFrozenRows(1);}}
function dispatch(b){
 if(b.action==='impact')return records('Impact_Statistics').rows.filter(r=>r.Published==='TRUE'&&/^\d+$/.test(r.Value)).map(r=>({Label:r.Label,Value:Number(r.Value)}));
 if(b.action==='donors'){const f=b.filters||{};return records('Blood_Donors').rows.filter(r=>r.Status==='Active'&&String(r.Consent).toLowerCase()==='true'&&(!f.bloodGroup||r['Blood Group']===f.bloodGroup)&&(!f.district||r.District.toLowerCase().includes(f.district.toLowerCase()))&&(!f.city||r.City.toLowerCase().includes(f.city.toLowerCase()))&&(!f.availability||r.Availability===f.availability)).slice(0,100).map(publicDonor);}
 if(b.action==='records')return records(b.tab);
 if(b.action==='exportAll')return [...Object.values(SCHEMAS).map(s=>records(s.tab)),records('Impact_Statistics')];
 if(b.action==='summary'){const data={};Object.values(SCHEMAS).forEach(s=>data[s.tab]=records(s.tab).rows);return [{label:'Total Blood Donors',value:data.Blood_Donors.length},{label:'Available Blood Donors',value:data.Blood_Donors.filter(r=>r.Status==='Active'&&r.Availability==='Available').length},{label:'Pending Blood Requests',value:data.Blood_Requests.filter(r=>r.Status==='Pending').length},{label:'Hair Donations',value:data.Hair_Donors.filter(r=>r.Status==='Completed').length},{label:'Wig Requests',value:data.Wig_Requests.length},{label:'Medicine Requests',value:data.Medicine_Requests.length},{label:'Birthday Pledges',value:data.Birthday_Pledges.length},{label:'Volunteers',value:data.Volunteers.length},{label:'Unresolved Contact Messages',value:data.Contact_Messages.filter(r=>!['Completed','Rejected'].includes(r.Status)).length}];}
 const lock=LockService.getScriptLock();if(!lock.tryLock(20000))throw Error('The service is busy. Please retry.');try{
 if(b.action==='submit'){
 const schema=SCHEMAS[b.kind],values=validateSubmission(schema,b.values),sh=sheet(schema.tab);const data=records(schema.tab);if(data.rows.some(r=>r.ID===b.requestId))return {id:b.requestId,duplicate:true};
 const networkCache=CacheService.getScriptCache();if(b.rateKey){const nk='network-'+b.rateKey;const hits=Number(networkCache.get(nk)||0);if(hits>=5)throw Error('Too many submissions. Please wait a minute.');networkCache.put(nk,String(hits+1),60);}
 const identity=String(values.Phone||values.Email||'').replace(/[^a-zA-Z0-9]/g,'').toLowerCase();const key='rate-'+Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,b.kind+identity));const cache=CacheService.getScriptCache();if(cache.get(key))throw Error('Please wait a minute before making another submission.');
 const now=new Date();const date=Utilities.formatDate(now,'Asia/Kolkata','yyyy-MM-dd'),time=Utilities.formatDate(now,'Asia/Kolkata','HH:mm:ss');
 const row=Object.assign({},values,{ID:b.requestId,'Submission Date':date,'Submission Time':time,Status:schema.status,'Admin Notes':''});
 if(data.rows.some(r=>r['Submission Date']===date&&schema.fields.every(f=>String(r[f.key]).toLowerCase()===String(values[f.key]).toLowerCase())))throw Error('These details have already been submitted today. Please contact the team to make changes.');
 sh.appendRow(data.columns.map(c=>row[c]===undefined?'':typeof row[c]==='boolean'?row[c]:safeCell(row[c])));SpreadsheetApp.flush();cache.put(key,'1',60);return {id:b.requestId};
 }
 if(b.action==='update'){const changes=validateUpdate(b.tab,b.changes),sh=sheet(b.tab),data=records(b.tab);const match=data.rows.findIndex(r=>r.ID===b.id);if(match<0)throw Error('Record not found.');const ids=sh.getRange(2,data.columns.indexOf('ID')+1,Math.max(1,sh.getLastRow()-1),1).getDisplayValues();const rowIndex=ids.findIndex(r=>r[0]===b.id)+2;if(rowIndex<2)throw Error('Record not found.');changes['Updated By']=safeCell(b.admin);changes['Updated At']=new Date().toISOString();Object.keys(changes).forEach(key=>{const col=data.columns.indexOf(key);if(col>=0)sh.getRange(rowIndex,col+1).setValue(changes[key]);});SpreadsheetApp.flush();return {saved:true};}
 throw Error('Unknown operation.');
 }finally{lock.releaseLock();}
}
