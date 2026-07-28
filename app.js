const CASE_LIBRARY = [
  {
    id:'CASE-001', reference:'SR-102384', title:'Duplicate account lock', queueTitle:'Driver chat', channel:'Chat', customerType:'Driver', customer:'Avery Morgan', initials:'AM', priority:'Normal priority', wait:'Waiting 00:42', status:'available', difficulty:'Guided', rootCause:'Account > Maintenance > Account Lock Inquiry', category:'Account Management',
    preview:'"hi. i cant get into my account..."',
    opening:'hi. i cant get into my account. it keeps saying its locked and i need to work today. i tried making another account because i thought maybe i used the wrong email but now nothing is working. can someone help please?',
    contactLine:'Phone: (555) 010-1002', replyPlaceholder:'Type your reply to Avery...', xp:320, readiness:3, resultTitle:'Customer access restored',
    resultDescription:'You investigated related profiles, preserved the duplicates, and restored access to the verified account.',
    detailedAdmin:true
  },
  {
    id:'CASE-002', reference:'SR-102417', title:'Update profile phone number', queueTitle:'Driver phone', channel:'Phone', customerType:'Driver', customer:'Jordan Lee', initials:'JL', priority:'Normal priority', wait:'Queued next', status:'queued', difficulty:'Foundational', rootCause:'Account > Maintenance > Update Profile Details', category:'Account Management',
    preview:'Driver needs to replace an outdated phone number.',
    opening:'I got a new phone number and need it updated on my driver account. My old number no longer works.',
    contactLine:'Current phone: (555) 010-2041', replyPlaceholder:'Document what you would tell Jordan...', xp:180, readiness:2, resultTitle:'Profile details updated',
    resultDescription:'You documented the request and communicated the next step after identity verification.'
  },
  {
    id:'CASE-003', reference:'SR-102451', title:'Pickup status update', queueTitle:'Sender chat', channel:'Chat', customerType:'Sender', customer:'Morgan Ellis', initials:'ME', priority:'Normal priority', wait:'Queued', status:'queued', difficulty:'Foundational', rootCause:'Gig Updates > Status Update', category:'Gig Support',
    preview:'Sender wants to know when the driver will arrive.',
    opening:'Can you tell me when the driver is expected to arrive for pickup? The order is ready.',
    contactLine:'Gig: TRN-GIG-204583', replyPlaceholder:'Type the status update for Morgan...', xp:160, readiness:2, resultTitle:'Sender updated',
    resultDescription:'You reviewed the contact and provided a clear, documented status update.'
  },
  {
    id:'CASE-004', reference:'SR-102489', title:'Incorrect delivery address', queueTitle:'Driver email', channel:'Email', customerType:'Driver', customer:'Taylor Brooks', initials:'TB', priority:'Elevated priority', wait:'Queued', status:'queued', difficulty:'Intermediate', rootCause:'Undeliverable Gig > Incorrect Delivery Information > Incorrect Address', category:'Gig Support',
    preview:'Driver reports the pinned address is incorrect.',
    opening:'The GPS took me to the pinned location, but the recipient says the delivery address is somewhere else. I cannot reach them now.',
    contactLine:'Gig: TRN-GIG-204611', replyPlaceholder:'Draft the response to Taylor...', xp:240, readiness:3, resultTitle:'Delivery issue documented',
    resultDescription:'You captured the incorrect-address issue and documented the appropriate next step.'
  },
  {
    id:'CASE-005', reference:'SR-102533', title:'Items unavailable for pickup', queueTitle:'Driver phone', channel:'Phone', customerType:'Driver', customer:'Casey Nguyen', initials:'CN', priority:'Normal priority', wait:'Queued', status:'queued', difficulty:'Intermediate', rootCause:'Pickup Issues > Cancel Gig > Gig Items Unavailable for Pickup', category:'Gig Support',
    preview:'Pickup location cannot locate or release the items.',
    opening:'I am at the pickup location, but the store says they cannot find the order and have nothing to give me.',
    contactLine:'Gig: TRN-GIG-204640', replyPlaceholder:'Document the resolution for Casey...', xp:220, readiness:3, resultTitle:'Pickup issue resolved',
    resultDescription:'You documented the unavailable-items issue and communicated the resolution to the driver.'
  }
];

const initialProfiles = [
  { id:'TRN-ACC-001', type:'Driver', name:'Avery Morgan', email:'avery.primary@example.test', phone:'5550101002', status:'Locked', created:'Apr 12, 2025', updated:'Jul 20, 2026', consumer:'Clear', license:'TRAINING-LIC-001', primary:false, completedGigs:18, lastGig:'Jul 18, 2026', trustSafety:'No permanent deactivation', notes:[] },
  { id:'TRN-ACC-002', type:'Driver', name:'Avery Morgan', email:'avery.duplicate@example.test', phone:'5550101002', status:'Locked', created:'Jul 18, 2026', updated:'Jul 18, 2026', consumer:'Not started', license:'TRAINING-LIC-002', primary:false, completedGigs:0, lastGig:'None', trustSafety:'No permanent deactivation', notes:[] },
  { id:'TRN-ACC-003', type:'Driver', name:'Avery Morgan', email:'avery.old@example.test', phone:'5550101002', status:'Locked', created:'Jun 19, 2024', updated:'Jan 4, 2025', consumer:'Pending', license:'TRAINING-LIC-003', primary:false, completedGigs:0, lastGig:'None', trustSafety:'No permanent deactivation', notes:[] },
  { id:'TRN-PRO-1001', type:'Sender', name:'Northstar Gig Support', email:'northstar@example.test', phone:'5550101100', status:'Active', created:'Jan 19, 2025', updated:'Jul 19, 2026', consumer:'N/A', license:'N/A', primary:false, completedGigs:'N/A', lastGig:'N/A', trustSafety:'N/A', notes:[] }
];
const gigs=[{id:'TRN-GIG-169385215',title:'Return to Store',sender:'Northstar Gig Support',state:'Delivered',deadline:'Jul 21, 2026 10:00 AM',offers:4,event:'Delivery Confirmed',support:'TRN-SUP-1N139DFL'}];
const hints=['Start with the information the customer provided. What could you use in Global Search?','The customer provided a phone number. Search it and review every related driver profile.','Compare consumer report status, completed Gigs, and recent activity before changing any account.','The established profile with the completed consumer report and Gig history should remain the primary account.','Duplicate profiles should remain locked. Clear their license information and document the relationship on every affected profile.'];
let profiles=[];
let state={route:'landing',currentCaseIndex:0,caseStatuses:CASE_LIBRARY.map((_,i)=>i===0?'available':'queued'),activeProfileId:null,query:'',startedAt:null,caseAccepted:false,casePanelOpen:true,caseTab:'reply',messages:[],customerResponse:'',caseNotes:'',caseFields:{category:'',rootCause:'',gigId:''},hintsUsed:0,reviewedIds:[],actions:[],progress:{},casesCompleted:0,xp:0,readiness:0,streak:0,lastCompletedCaseIndex:null};
const app=document.getElementById('app');
const $=s=>document.querySelector(s);
const clone=v=>JSON.parse(JSON.stringify(v));
const currentCase=()=>CASE_LIBRARY[state.currentCaseIndex];
function resetCurrentCase(){profiles=clone(initialProfiles);Object.assign(state,{activeProfileId:null,query:'',startedAt:Date.now(),caseAccepted:false,casePanelOpen:true,caseTab:'reply',messages:[],customerResponse:'',caseNotes:'',caseFields:{category:'',rootCause:'',gigId:''},hintsUsed:0,reviewedIds:[],actions:[],progress:{}});}
function resetShift(){state.currentCaseIndex=0;state.caseStatuses=CASE_LIBRARY.map((_,i)=>i===0?'available':'queued');state.casesCompleted=0;state.xp=0;state.readiness=0;state.streak=0;state.lastCompletedCaseIndex=null;resetCurrentCase();}
function template(id){return document.getElementById(id).content.cloneNode(true)}
function go(route,options={}){state.route=route;Object.assign(state,options);render();window.scrollTo({top:0,behavior:'smooth'})}
function bindRoutes(){document.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>go(b.dataset.route));}
function record(type,targetId=null){state.actions.push({type,targetId,time:Date.now()});}
function escapeHtml(value){const d=document.createElement('div');d.textContent=value;return d.innerHTML}
function formatPhone(phone){return phone==='5550101002'?'(555) 010-1002':phone}
function updateHeader(){document.getElementById('headerReadiness').textContent=`${state.readiness}%`;document.getElementById('headerXp').textContent=state.xp;document.getElementById('headerStreak').textContent=state.streak;document.getElementById('currentProfileNav').disabled=!state.activeProfileId;}
function render(){app.innerHTML='';if(state.route==='landing')renderLanding();if(state.route==='dashboard')renderDashboard();if(state.route==='search')renderSearch();if(state.route==='profile')renderProfile();if(state.route==='results')renderResults();if(state.route==='shiftComplete')renderShiftComplete();bindRoutes();updateHeader();bindGlobalControls();}
function bindGlobalControls(){document.querySelector('.brand').onclick=()=>go('landing');document.getElementById('coachToggle').onclick=openCoach;document.querySelectorAll('#openCoachFromNav').forEach(b=>b.onclick=openCoach);document.querySelectorAll('#openCaseFromNav').forEach(b=>{b.onclick=()=>{state.casePanelOpen=true;render();}});}
function renderLanding(){app.append(template('landing-template'));$('#startShiftBtn').onclick=()=>{resetShift();go('dashboard')}}
function renderDashboard(){
  app.append(template('dashboard-template'));
  const c=currentCase();
  $('#dashboardCases').textContent=`${state.casesCompleted} / ${CASE_LIBRARY.length}`;$('#dashboardReadiness').textContent=`${state.readiness}%`;$('#dashboardStreak').textContent=state.streak;$('#dashboardXp').textContent=state.xp;
  const status=state.caseStatuses[state.currentCaseIndex];
  $('#activeContactEyebrow').textContent=status==='active'?`CASE ${state.currentCaseIndex+1} OF ${CASE_LIBRARY.length} · ACTIVE CONTACT`:`CASE ${state.currentCaseIndex+1} OF ${CASE_LIBRARY.length} · AVAILABLE CONTACT`;
  $('#activeContactTitle').textContent=`${c.queueTitle} · ${c.title}`;$('#activeContactPreview').textContent=c.preview;$('#activeContactWait').textContent=status==='active'?'Contact accepted':c.wait;$('#activeContactPriority').textContent=c.priority;
  $('#activeContactCard').classList.toggle('is-active',status==='active');
  $('#acceptContactBtn').textContent=status==='active'?'Open Active Contact':'Accept Contact';
  $('#acceptContactBtn').onclick=()=>{state.caseAccepted=true;state.caseStatuses[state.currentCaseIndex]='active';state.startedAt=state.startedAt||Date.now();record('CONTACT_ACCEPTED',c.id);state.casePanelOpen=true;go(c.detailedAdmin?'search':'dashboard')};
  renderQueue();mountCasePanel();
}
function renderQueue(){
  const list=$('#assignedContactsList');
  const completed=state.caseStatuses.filter(s=>s==='completed').length;
  const active=state.caseStatuses.filter(s=>s==='active').length;
  $('#queueSummary').textContent=`${completed} completed · ${active||1} available · ${CASE_LIBRARY.length-completed-active-(active?0:1)} queued`;
  list.innerHTML=CASE_LIBRARY.map((c,i)=>{
    const s=state.caseStatuses[i];
    const label=s==='completed'?'Completed':s==='active'?'Active':s==='available'?'Available':'Queued';
    return `<div class="contact-row ${s}"><span class="contact-dot"></span><div><strong class="contact-channel">${escapeHtml(c.queueTitle)}</strong><span class="contact-topic">${escapeHtml(c.title)}</span><small>${escapeHtml(c.channel)} · ${escapeHtml(c.customerType)} · ${escapeHtml(c.difficulty)}</small></div><span class="contact-status">${label}</span></div>`;
  }).join('');
}
function filteredProfiles(){const q=state.query.trim().toLowerCase();return profiles.filter(p=>!q||[p.id,p.type,p.name,p.email,p.phone,p.status].some(v=>String(v).toLowerCase().includes(q)))}
function filteredGigs(){const q=state.query.trim().toLowerCase();return gigs.filter(g=>!q||Object.values(g).some(v=>String(v).toLowerCase().includes(q)))}
function renderSearch(){
  app.append(template('search-template'));
  const input=$('#searchInput');
  input.value=state.query;
  const doSearch=()=>{
    state.query=input.value.trim();
    const matchingProfiles=filteredProfiles().filter(profile=>profile.type==='Driver');
    const foundCustomer=state.query.length>0&&matchingProfiles.some(profile=>profile.name==='Avery Morgan');
    if(foundCustomer){state.progress.found=true;record('CUSTOMER_SEARCHED')}
    render();
  };
  $('#searchBtn').onclick=doSearch;
  input.onkeydown=e=>{if(e.key==='Enter')doSearch()};
  const ps=filteredProfiles().filter(profile=>profile.type==='Driver');
  $('#profileCount').textContent=`${ps.length} result${ps.length===1?'':'s'}`;
  $('#profilesBody').innerHTML=ps.length?ps.map(p=>`<tr>
    <td><a data-profile="${p.id}">${p.id}</a></td>
    <td>${p.name}</td>
    <td>${p.email}</td>
    <td>${formatPhone(p.phone)}</td>
    <td><span class="mini-pill ${p.status.toLowerCase()}">${p.status}</span></td>
    <td>${p.primary?'<span class="primary-indicator">Yes</span>':'No'}</td>
    <td><button class="secondary compact-button" data-profile="${p.id}">Open Profile</button></td>
  </tr>`).join(''):'<tr><td colspan="7" class="empty-row">No fictional driver profiles found.</td></tr>';
  document.querySelectorAll('[data-profile]').forEach(el=>el.onclick=()=>{
    state.activeProfileId=el.dataset.profile;
    if(!state.reviewedIds.includes(el.dataset.profile))state.reviewedIds.push(el.dataset.profile);
    record('PROFILE_REVIEWED',el.dataset.profile);
    state.progress.reviewed=['TRN-ACC-001','TRN-ACC-002','TRN-ACC-003'].every(id=>state.reviewedIds.includes(id));
    go('profile');
  });
  mountCasePanel();
}
function renderProfile(){
  const p=profiles.find(x=>x.id===state.activeProfileId)||profiles[0];
  app.append(template('profile-template'));
  $('#profileName').textContent=`${p.name} · ${p.id}`;
  $('#profileEmail').textContent=p.email;
  $('#profileStatusPill').textContent=p.status;
  $('#profileStatusPill').className=`pill ${p.status.toLowerCase()}`;

  const renderOverview=()=>{
    document.querySelectorAll('.profile-nav button').forEach(b=>b.classList.remove('active'));
    $('#profileOverviewBtn').classList.add('active');
    $('#profileContent').innerHTML=`
      <section class="admin-card profile-card">
        <div class="section-title"><h2>Profile details</h2><small id="profileCreated"></small></div>
        <div class="detail-grid" id="profileDetails"></div>
      </section>
      <section class="admin-card notes-card">
        <div class="section-title"><h2>Notes</h2><button class="secondary" id="addNoteTopBtn">Add Note</button></div>
        <ul id="notesList"></ul>
      </section>`;
    $('#profileCreated').textContent=`Created ${p.created}`;
    $('#profileDetails').innerHTML=detailRows([
      ['Account ID',p.id],['Account status',p.status],['Primary account',p.primary?'Yes':'No'],
      ['Trust & Safety status',p.trustSafety],['Consumer report status',p.consumer],
      ['Completed Gigs',p.completedGigs],['Most recent Gig',p.lastGig],
      ['License information',p.license],['Phone number',formatPhone(p.phone)],
      ['Email',p.email],['Created on',p.created],['Updated on',p.updated]
    ]);
    $('#notesList').innerHTML=p.notes.length?p.notes.map(n=>`<li>${escapeHtml(n)}</li>`).join(''):'<li>No notes added.</li>';
    $('#addNoteTopBtn').onclick=()=>openNote(p);
  };

  const renderAccounts=()=>{
    document.querySelectorAll('.profile-nav button').forEach(b=>b.classList.remove('active'));
    $('#accountsBtn').classList.add('active');
    const accounts=profiles.filter(x=>x.type==='Driver'&&x.phone===p.phone);
    $('#profileContent').innerHTML=`
      <section class="admin-card related-profiles-card">
        <div class="section-title">
          <div><h2>Accounts</h2><small>Driver accounts associated with this customer</small></div>
          <span>${accounts.length} accounts</span>
        </div>
        <div class="related-profile-list">
          ${accounts.map(r=>`
            <article class="related-profile-row">
              <div class="related-profile-avatar">${r.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div>
              <div class="related-profile-summary">
                <strong>${escapeHtml(r.name)}${r.id===p.id?' · Current':''}</strong>
                <span>${r.id} · ${escapeHtml(r.email)}</span>
                <small>${formatPhone(r.phone)} · ${r.completedGigs} completed Gigs · Consumer report: ${r.consumer}</small>
              </div>
              <div class="related-profile-actions">
                ${r.primary?'<span class="mini-pill active">Primary</span>':''}
                <span class="mini-pill ${r.status.toLowerCase()}">${r.status}</span>
                <button class="secondary" data-account-profile="${r.id}" ${r.id===p.id?'disabled':''}>${r.id===p.id?'Current Profile':'Open Profile'}</button>
              </div>
            </article>`).join('')}
        </div>
      </section>`;
    document.querySelectorAll('[data-account-profile]').forEach(b=>b.onclick=()=>{
      state.activeProfileId=b.dataset.accountProfile;
      if(!state.reviewedIds.includes(state.activeProfileId))state.reviewedIds.push(state.activeProfileId);
      record('PROFILE_REVIEWED',state.activeProfileId);
      state.progress.reviewed=['TRN-ACC-001','TRN-ACC-002','TRN-ACC-003'].every(id=>state.reviewedIds.includes(id));
      render();
    });
  };

  const renderRelatedProfiles=()=>{
    document.querySelectorAll('.profile-nav button').forEach(b=>b.classList.remove('active'));
    $('#relatedProfilesBtn').classList.add('active');
    const related=profiles.filter(x=>x.type==='Driver'&&x.phone===p.phone&&x.id!==p.id);
    $('#profileContent').innerHTML=`
      <section class="admin-card related-profiles-card">
        <div class="section-title">
          <div><h2>Related Profiles</h2><small>Profiles sharing the same phone number</small></div>
          <span>${related.length} related</span>
        </div>
        <div class="related-profile-list">
          ${related.map(r=>`
            <article class="related-profile-row">
              <div class="related-profile-avatar">${r.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div>
              <div class="related-profile-summary">
                <strong>${escapeHtml(r.name)}</strong>
                <span>${r.id} · ${escapeHtml(r.email)}</span>
                <small>${formatPhone(r.phone)} · ${r.completedGigs} completed Gigs · Consumer report: ${r.consumer}</small>
              </div>
              <div class="related-profile-actions">
                <span class="mini-pill ${r.status.toLowerCase()}">${r.status}</span>
                <button class="secondary" data-related-profile="${r.id}">Open Profile</button>
              </div>
            </article>`).join('')}
        </div>
      </section>`;
    document.querySelectorAll('[data-related-profile]').forEach(b=>b.onclick=()=>{
      state.activeProfileId=b.dataset.relatedProfile;
      if(!state.reviewedIds.includes(state.activeProfileId))state.reviewedIds.push(state.activeProfileId);
      record('PROFILE_REVIEWED',state.activeProfileId);
      state.progress.reviewed=['TRN-ACC-001','TRN-ACC-002','TRN-ACC-003'].every(id=>state.reviewedIds.includes(id));
      render();
    });
  };

  $('#markPrimaryBtn').disabled=p.primary;
  $('#unlockBtn').disabled=p.status!=='Locked';
  $('#clearLicenseBtn').disabled=p.license==='None'||p.license==='N/A';
  $('#markPrimaryBtn').onclick=()=>confirmAction('Mark primary account',`Mark ${p.id} as the primary account?`,()=>actionMarkPrimary(p));
  $('#unlockBtn').onclick=()=>confirmAction('Unlock account',`Unlock ${p.id}?`,()=>actionUnlock(p));
  $('#clearLicenseBtn').onclick=()=>confirmAction('Clear license information',`Remove the fictional license information from ${p.id}?`,()=>actionClear(p));
  $('#addNoteBtn').onclick=()=>openNote(p);
  $('#profileOverviewBtn').onclick=renderOverview;
  $('#accountsBtn').onclick=renderAccounts;
  $('#relatedProfilesBtn').onclick=renderRelatedProfiles;
  renderOverview();
  mountCasePanel();
}
function detailRows(rows){return rows.map(([l,v])=>`<span>${l}</span><strong>${v}</strong>`).join('')}
function actionMarkPrimary(p){profiles.forEach(x=>x.primary=x.id===p.id);state.progress.primary=p.id==='TRN-ACC-001';record('MARK_PRIMARY',p.id);render()}
function actionUnlock(p){p.status='Active';state.progress.unlocked=p.id==='TRN-ACC-001';record('UNLOCK_ACCOUNT',p.id);render()}
function actionClear(p){p.license='None';record('CLEAR_LICENSE',p.id);const d=profiles.filter(x=>['TRN-ACC-002','TRN-ACC-003'].includes(x.id));state.progress.cleared=d.every(x=>x.license==='None');render()}
function openNote(p){const d=$('#noteDialog');$('#noteText').value='';d.showModal();$('#saveNoteBtn').onclick=e=>{e.preventDefault();const text=$('#noteText').value.trim();if(!text)return;p.notes.push(text);record('ADD_PROFILE_NOTE',p.id);const primary=profiles.find(x=>x.id==='TRN-ACC-001');const dupNotes=profiles.filter(x=>['TRN-ACC-002','TRN-ACC-003'].includes(x.id)).every(x=>x.notes.some(n=>/duplicate/i.test(n)&&/TRN-ACC-001|primary/i.test(n)));const primaryNote=primary.notes.some(n=>/duplicate/i.test(n)&&/(TRN-ACC-002|TRN-ACC-003)/i.test(n));state.progress.noted=dupNotes&&primaryNote;d.close();render()}}
function confirmAction(title,text,action){$('#confirmTitle').textContent=title;$('#confirmText').textContent=text;const d=$('#confirmDialog');d.showModal();$('#confirmActionBtn').onclick=e=>{e.preventDefault();d.close();action()}}
function mountCasePanel(){const host=$('#casePanelMount');if(!host)return;const c=currentCase();if(!state.caseAccepted||!state.casePanelOpen){host.innerHTML=`<div class="case-panel"><div class="case-panel-header"><div><p class="eyebrow">CASE ${state.currentCaseIndex+1} OF ${CASE_LIBRARY.length}</p><strong>${state.caseAccepted?c.reference:'No accepted contact'}</strong></div></div><div class="case-tab-pane"><p class="subtle">${state.caseAccepted?'Open Active Case from the Training navigation.':'Accept the available contact from the dashboard to begin.'}</p></div></div>`;return}host.innerHTML='';host.append(template('case-panel-template'));$('#casePositionLabel').textContent=`CASE ${state.currentCaseIndex+1} OF ${CASE_LIBRARY.length} · ACTIVE CASE`;$('#caseReference').textContent=c.reference;$('#caseAvatar').textContent=c.initials;$('#caseCustomerName').textContent=c.customer;$('#caseCustomerMeta').textContent=`${c.customerType} · ${c.channel}`;$('#caseAcceptedTime').textContent='Contact received · Begin your investigation';$('#caseMessageAuthor').textContent=c.customer;$('#caseOpeningMessage').textContent=c.opening;$('#caseContactLine').textContent=c.contactLine;$('#collapseCaseBtn').onclick=()=>{state.casePanelOpen=false;render()};renderCaseChecklist();document.querySelectorAll('[data-case-tab]').forEach(b=>{b.classList.toggle('active',b.dataset.caseTab===state.caseTab);b.onclick=()=>{state.caseTab=b.dataset.caseTab;mountCasePanel()}});renderCaseTab();}
function caseChecklistItems(){const c=currentCase();const items=c.detailedAdmin?[['found','Search for the customer'],['reviewed','Review all related profiles'],['primary','Confirm the primary profile'],['unlocked','Restore account access'],['cleared','Clear duplicate license information'],['noted','Add profile relationship notes'],['caseDetails','Save case details'],['caseNotes','Save case notes'],['responded','Save the customer response']]:[['caseDetails','Save case details'],['caseNotes','Save case notes'],['responded','Save the customer response']];return items}
function renderCaseChecklist(){
  const host=$('#caseChecklistItems');
  if(!host)return;
  const items=caseChecklistItems();
  const done=items.filter(([key])=>Boolean(state.progress[key])).length;
  const complete=done===items.length;
  $('#caseChecklistCount').textContent=`${done} / ${items.length} complete`;
  host.innerHTML=items.map(([key,label])=>`<div class="case-checklist-item ${state.progress[key]?'complete':''}"><span aria-hidden="true">${state.progress[key]?'✓':'○'}</span><span>${label}</span></div>`).join('');
  const notice=$('#caseReadyNotice');
  if(notice){
    notice.hidden=!complete;
    notice.innerHTML=complete?`<strong>Ready to submit</strong><span>All required work is complete. Review your case notes, then submit the case for coaching feedback.</span><button type="button" class="primary full" id="reviewSubmitBtn">Review and Submit Case</button>`:'';
    const button=$('#reviewSubmitBtn');
    if(button)button.onclick=()=>{state.caseTab='notes';mountCasePanel();setTimeout(()=>$('#closeCaseBtn')?.scrollIntoView({behavior:'smooth',block:'center'}),0)};
  }
}

function renderCaseTab(){const mount=$('#caseTabContent');const c=currentCase();if(state.caseTab==='reply'){mount.innerHTML=`<div class="case-tab-pane"><p class="case-tab-instruction">Draft the final response you would send after completing the investigation. The customer will not reply in this release.</p><textarea id="chatReply" rows="5" placeholder="${escapeHtml(c.replyPlaceholder)}">${escapeHtml(state.customerResponse)}</textarea><div class="response-save-status" id="responseSaveStatus">${state.progress.responded?'Response saved':'Not yet saved'}</div><div class="case-actions"><button class="secondary full" id="saveResponseBtn">Save Customer Response</button></div></div>`;$('#saveResponseBtn').onclick=()=>{const text=$('#chatReply').value.trim();if(!text)return;state.customerResponse=text;state.messages=[{text}];record('SAVE_CUSTOMER_RESPONSE');state.progress.responded=text.length>=20;mountCasePanel()}}
if(state.caseTab==='details'){mount.innerHTML=`<div class="case-tab-pane"><div class="field-grid"><div><label>Customer type</label><input value="${escapeHtml(c.customerType)}" disabled></div><div><label>Channel</label><input value="${escapeHtml(c.channel)}" disabled></div></div><label>Category</label><select id="caseCategory"><option value="">Select category</option><option>Account Management</option><option>Gig Support</option></select><label>Root cause</label><input id="caseRoot" value="${escapeHtml(state.caseFields.rootCause)}" placeholder="Enter the root cause"><label>Gig ID</label><input id="caseGig" value="${escapeHtml(state.caseFields.gigId)}" placeholder="Not applicable"><button class="secondary full" id="saveCaseDetailsBtn">Save Case Details</button></div>`;$('#caseCategory').value=state.caseFields.category;$('#saveCaseDetailsBtn').onclick=()=>{state.caseFields={category:$('#caseCategory').value,rootCause:$('#caseRoot').value.trim(),gigId:$('#caseGig').value.trim()};state.progress.caseDetails=state.caseFields.category===c.category&&state.caseFields.rootCause.length>=8;record('SAVE_CASE_DETAILS');mountCasePanel()}}
if(state.caseTab==='notes'){
  const required=c.detailedAdmin?['found','reviewed','primary','unlocked','cleared','noted','responded','caseDetails','caseNotes']:['responded','caseDetails','caseNotes'];
  const ready=required.every(k=>state.progress[k]);
  mount.innerHTML=`<div class="case-tab-pane"><textarea id="caseNotes" rows="5" placeholder="Document the interaction, investigation, and outcome...">${escapeHtml(state.caseNotes)}</textarea><button class="secondary full" id="saveCaseNotesBtn">Save Case Notes</button><button class="primary full" id="closeCaseBtn" style="margin-top:9px" ${ready?'':'disabled'}>Submit Case</button><p class="submit-helper">${ready?'All checklist items are complete. Submit the case to view coaching feedback.':'Complete all checklist items before submitting the case.'}</p></div>`;
  $('#saveCaseNotesBtn').onclick=()=>{state.caseNotes=$('#caseNotes').value.trim();state.progress.caseNotes=state.caseNotes.length>=30;record('SAVE_CASE_NOTES');mountCasePanel()};
  $('#closeCaseBtn').onclick=closeCase;
}
}
function closeCase(){const c=currentCase();state.caseNotes=$('#caseNotes')?$('#caseNotes').value.trim():state.caseNotes;state.progress.caseNotes=state.caseNotes.length>=30;const required=c.detailedAdmin?['found','reviewed','primary','unlocked','cleared','noted','responded','caseDetails','caseNotes']:['responded','caseDetails','caseNotes'];const complete=required.every(k=>state.progress[k]);if(!complete){alert(c.detailedAdmin?'The case is not ready to submit. Complete the remaining checklist items before submitting.':'The case is not ready to submit. Save the customer response, case details, and complete case notes.');return}state.caseStatuses[state.currentCaseIndex]='completed';state.lastCompletedCaseIndex=state.currentCaseIndex;state.casesCompleted+=1;state.xp+=c.xp;state.readiness=Math.min(100,state.readiness+c.readiness);state.streak+=1;go('results')}
function openCoach(){const d=$('#coachDialog');$('#coachCases').textContent=`${state.casesCompleted} / ${CASE_LIBRARY.length}`;$('#coachHints').textContent=state.hintsUsed;$('#coachStreak').textContent=state.streak;$('#hintText').hidden=true;d.showModal();$('#hintBtn').onclick=()=>{const c=currentCase();const hint=c.detailedAdmin?hints[Math.min(state.hintsUsed,hints.length-1)]:'Complete the customer response, select the matching category, enter the root cause shown in the contact, and document the investigation and outcome.';state.hintsUsed+=1;$('#coachHints').textContent=state.hintsUsed;$('#hintText').hidden=false;$('#hintText').textContent=hint;record('HINT_USED')};$('#kbaBtn').onclick=()=>{$('#guideDialog').showModal()};$('#resetCaseBtn').onclick=()=>{d.close();resetCurrentCase();state.caseStatuses[state.currentCaseIndex]='available';go('dashboard')}}
function renderResults(){app.append(template('results-template'));const c=CASE_LIBRARY[state.lastCompletedCaseIndex??state.currentCaseIndex];const elapsed=Math.max(1,Math.round((Date.now()-state.startedAt)/60000));$('#resultTitle').textContent=c.resultTitle;$('#resultDescription').textContent=c.resultDescription;$('#resultOutcome').textContent='Resolved';$('#resultXp').textContent=`+${c.xp}`;$('#resultReadiness').textContent=`+${c.readiness}%`;$('#resultTime').textContent=`${elapsed} min`;const wrongPrimary=state.actions.some(a=>a.type==='MARK_PRIMARY'&&a.targetId!=='TRN-ACC-001');const wrongUnlock=state.actions.some(a=>a.type==='UNLOCK_ACCOUNT'&&a.targetId!=='TRN-ACC-001');$('#processRating').textContent=wrongPrimary||wrongUnlock?'Recovered':'Strong';$('#coachingSummary').textContent=c.detailedAdmin?(wrongPrimary||wrongUnlock?'You ultimately resolved the case, but made an account change before confirming the correct primary profile. Compare consumer report status and account activity before taking action.':'You compared related profiles, selected the established account, preserved the duplicates, documented the relationship, and clearly returned the outcome to the customer.'):'You completed the contact requirements and moved the shift forward. Later Release 2 epics will add case-specific Admin actions, evidence checks, and coaching rules for this interaction.';$('#continueShiftBtn').textContent=state.casesCompleted===CASE_LIBRARY.length?'View Shift Summary':'Continue Shift';$('#continueShiftBtn').onclick=()=>advanceShift();$('#repeatCaseBtn').onclick=()=>{const idx=state.lastCompletedCaseIndex;state.caseStatuses[idx]='available';state.currentCaseIndex=idx;state.casesCompleted=Math.max(0,state.casesCompleted-1);state.xp=Math.max(0,state.xp-c.xp);state.readiness=Math.max(0,state.readiness-c.readiness);state.streak=Math.max(0,state.streak-1);resetCurrentCase();go('dashboard')}}
function advanceShift(){if(state.casesCompleted===CASE_LIBRARY.length){go('shiftComplete');return}const next=state.caseStatuses.findIndex(s=>s==='queued');state.currentCaseIndex=next;state.caseStatuses[next]='available';resetCurrentCase();go('dashboard')}
function renderShiftComplete(){app.append(template('shift-complete-template'));$('#shiftCasesComplete').textContent=`${state.casesCompleted} / ${CASE_LIBRARY.length}`;$('#shiftXpTotal').textContent=state.xp;$('#shiftReadinessTotal').textContent=`${state.readiness}%`;$('#shiftStreakTotal').textContent=state.streak;$('#restartShiftBtn').onclick=()=>{resetShift();go('dashboard')}}
resetShift();state.route='landing';render();
