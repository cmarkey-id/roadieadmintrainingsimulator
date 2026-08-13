const CASE_LIBRARY = [
  {
    id:'CASE-001', reference:'SR-102384', title:'Duplicate account lock', queueTitle:'Driver chat', channel:'Chat', customerType:'Driver', customer:'Avery Morgan', initials:'AM', priority:'Normal priority', wait:'Waiting 00:42', status:'available', difficulty:'Guided', rootCause:'Account > Maintenance > Account Lock Inquiry', rootCauseOptions:['Account > Maintenance > Account Lock Inquiry','Account > Maintenance > Password Reset','Account > Maintenance > Update Profile Details','Account > Other'], category:'Account Management',
    preview:'"hi. i cant get into my account..."',
    opening:'hi. i cant get into my account. it keeps saying its locked and i need to work today. i tried making another account because i thought maybe i used the wrong email but now nothing is working. can someone help please?',
    contactLine:'Phone: (555) 010-1002', replyPlaceholder:'Type your reply to Avery...', xp:420, readiness:5, resultTitle:'Primary account restored',
    resultDescription:'You applied the duplicate-profile workflow, preserved the locked duplicates, documented every affected profile, and restored access to the verified primary account.',
    detailedAdmin:true,
    kba:{title:'Handling duplicate profiles, bank accounts, and cases',shortTitle:'Handling duplicate profiles',url:'https://roadie.lightning.force.com/lightning/r/Knowledge__kav/ka0cv000000FcwDAAS/view'}
  },
  {
    id:'CASE-002', reference:'SR-102417', title:'Locked account access', queueTitle:'Driver phone', channel:'Phone', customerType:'Driver', customer:'Jordan Lee', initials:'JL', priority:'Normal priority', wait:'Queued next', status:'queued', difficulty:'Foundational', rootCause:'Account > Maintenance > Account Lock Inquiry', rootCauseOptions:['Account > Maintenance > Account Lock Inquiry','Account > Maintenance > Password Reset','Account > ID Verification > IDV Failure','Account > Consumer Reports > Questions about Next Steps'], category:'Account Management',
    preview:'Driver is unable to access a locked account.',
    opening:'My account says it is locked, and I cannot sign in. Can you help me get back into it?',
    contactLine:'Phone: (555) 010-2041', replyPlaceholder:'Tell Jordan the account is unlocked and ask them to confirm login...', xp:320, readiness:4, resultTitle:'Driver access restored',
    resultDescription:'You verified the driver, ruled out Consumer Report and disciplinary restrictions, unlocked the inactive profile, reset the password, and confirmed login.', workflow:'locked',
    kba:{title:'Helping users with their locked accounts',shortTitle:'Helping users with locked accounts',url:'https://roadie.lightning.force.com/lightning/r/Knowledge__kav/ka0cv000000HU6XAAW/view'}
  },
  {
    id:'CASE-003', reference:'SR-102451', title:'Consumer report question', queueTitle:'Driver chat', channel:'Chat', customerType:'Driver', customer:'Morgan Ellis', initials:'ME', priority:'Normal priority', wait:'Queued', status:'queued', difficulty:'Foundational', rootCause:'Account > Consumer Reports > Questions about Next Steps', rootCauseOptions:['Account > Consumer Reports > Questions about Next Steps','Account > Consumer Reports > Consumer Report Failed','Account > Consumer Reports > Consumer Report Suspended','Account > Maintenance > Account Lock Inquiry'], category:'Account Management',
    preview:'Driver has a question about their consumer report.',
    opening:'My app says my consumer report is still being reviewed. What does that mean, and is there anything I need to do?',
    contactLine:'Phone: (555) 010-3058', replyPlaceholder:'Provide the approved In Progress explanation to Morgan...', xp:300, readiness:4, resultTitle:'Consumer report inquiry transferred',
    resultDescription:'You identified the General compliance region and In Progress status, used the approved communication, and transferred the case to Trust & Safety.', workflow:'consumer',
    kba:{title:'Customer support: Handling consumer report inquiries',shortTitle:'Consumer report inquiries',url:'https://roadie.lightning.force.com/lightning/r/Knowledge__kav/ka0cv000000Br0zAAC/view'}
  },
  {
    id:'CASE-004', reference:'SR-102489', title:'Incorrect delivery address', queueTitle:'Driver email', channel:'Email', customerType:'Driver', customer:'Taylor Brooks', initials:'TB', priority:'Elevated priority', wait:'Queued', status:'queued', difficulty:'Intermediate', rootCause:'Undeliverable Gig > Incorrect Delivery Information > Incorrect Address', rootCauseOptions:['Undeliverable Gig > Incorrect Delivery Information > Incorrect Address','Undeliverable Gig > Incorrect Delivery Information > Invalid Address','Delivered with Issues > Delivery Location Issue > Incorrect Address Provided by Sender','Delivered with Issues > Delivery Location Issue > Trouble Locating Delivery Address'], category:'Gig Support',
    preview:'Driver reports the pinned address is incorrect.',
    opening:'The GPS took me to the pinned location, but the recipient says the delivery address is six miles away. I can complete it, but I need help with the delivery and mileage.',
    contactLine:'Gig: TRN-GIG-204611', replyPlaceholder:'Explain the POD and corrected-address process to Taylor...', xp:380, readiness:5, resultTitle:'Corrected-address delivery completed',
    resultDescription:'You verified the assigned Gig and six-mile route, collected POD, manually delivered the Gig, and issued the appropriate $6 mileage credit.', workflow:'address',
    kba:{title:'Customer support: Resolving address issues',shortTitle:'Resolving address issues',url:'https://roadie.lightning.force.com/lightning/r/Knowledge__kav/ka0cv000000KppZAAS/view'}
  },
  {
    id:'CASE-005', reference:'SR-102533', title:'Duplicate bank account', queueTitle:'Driver phone', channel:'Phone', customerType:'Driver', customer:'Casey Nguyen', initials:'CN', priority:'Normal priority', wait:'Queued', status:'queued', difficulty:'Intermediate', rootCause:'Account > Other', rootCauseOptions:['Account > Other','Account > Maintenance > Update Profile Details','User Education > Driver Experience > Bank Account Verification','Gig Payment > Other'], category:'Account Management',
    preview:'Driver cannot add a bank account or debit card.',
    opening:'I am trying to add my payment information, but the app says it is already linked to another account. What should I do?',
    contactLine:'Phone: (555) 010-4640', replyPlaceholder:'Use the Duplicate Bank Account macro language...', xp:300, readiness:4, resultTitle:'Duplicate payment issue resolved',
    resultDescription:'You found the payment-service note, protected account privacy, repeated the approved macro after pushback, and directed the driver to use a different payment method.', workflow:'bank',
    kba:{title:'Handling duplicate profiles, bank accounts, and cases',shortTitle:'Duplicate bank accounts',url:'https://roadie.lightning.force.com/lightning/r/Knowledge__kav/ka0cv000000FcwDAAS/view'}
  }
];

const initialProfiles = [
  { id:'TRN-ACC-001', type:'Driver', name:'Avery Morgan', legalName:'Avery Morgan', birthDate:'May 14, 1992', address:'410 Training Lane, Atlanta, GA 30308', email:'avery.primary@example.test', phone:'5550101002', status:'Locked', created:'Apr 12, 2025', updated:'Jul 20, 2026', consumer:'Completed', license:'TRAINING-LIC-001', primary:false, completedGigs:18, lastGig:'Jul 18, 2026', trustSafety:'No permanent deactivation', notes:[] },
  { id:'TRN-ACC-002', type:'Driver', name:'Avery Morgan', legalName:'Avery Morgan', birthDate:'May 14, 1992', address:'410 Training Lane, Atlanta, GA 30308', email:'avery.duplicate@example.test', phone:'5550101002', status:'Locked', created:'Jul 18, 2026', updated:'Jul 18, 2026', consumer:'Not started', license:'TRAINING-LIC-002', primary:false, completedGigs:0, lastGig:'None', trustSafety:'No permanent deactivation', notes:[] },
  { id:'TRN-ACC-003', type:'Driver', name:'Avery Morgan', legalName:'Avery Morgan', birthDate:'May 14, 1992', address:'410 Training Lane, Atlanta, GA 30308', email:'avery.old@example.test', phone:'5550101002', status:'Locked', created:'Jun 19, 2024', updated:'Jan 4, 2025', consumer:'Pending', license:'TRAINING-LIC-003', primary:false, completedGigs:0, lastGig:'None', trustSafety:'No permanent deactivation', notes:[] },
  { id:'TRN-PRO-1001', type:'Sender', name:'Northstar Gig Support', legalName:'N/A', birthDate:'N/A', address:'N/A', email:'northstar@example.test', phone:'5550101100', status:'Active', created:'Jan 19, 2025', updated:'Jul 19, 2026', consumer:'N/A', license:'N/A', primary:false, completedGigs:'N/A', lastGig:'N/A', trustSafety:'N/A', notes:[] }
];
const gigs=[{id:'TRN-GIG-169385215',title:'Return to Store',sender:'Northstar Gig Support',state:'Delivered',deadline:'Jul 21, 2026 10:00 AM',offers:4,event:'Delivery Confirmed',support:'TRN-SUP-1N139DFL'}];
const hints=['Start with the information the customer provided. What could you use in Global Search?','Search the phone number and open every related profile before taking action.','Before updating anything, confirm that no related account was permanently deactivated by Trust & Safety.','Compare the legal name, date of birth, address, consumer report status, completed Gigs, license information, and account creation dates.','TRN-ACC-001 has the completed consumer report and the most completed Gigs, so it should be the primary account.','Keep the duplicate profiles locked, clear their license information, and add the required relationship note to every affected profile.','After restoring access, save a customer response and confirm that the driver successfully logged in.'];
const WORKFLOWS={
  locked:{recordTitle:'Driver profile · TRN-DRV-2041',recordFacts:['Jordan Lee · Atlanta, GA','Status: Locked · Last active 118 days ago','Consumer Report: Passed','Notes: No disciplinary or T&S restriction'],steps:[['profileFound','Find the Admin profile','Open Jordan’s fictional driver profile.'],['identityVerified','Verify the driver','Confirm name, phone, email, and date of birth.'],['lockReviewed','Review lock reason and notes','Confirm inactivity—not failed CR, Washington inactivity, research, or discipline.'],['consumerClear','Confirm Consumer Report is clear','Verify the Passed status and absence of the screening-not-clear note.'],['unlocked','Unlock the driver profile','Restore access only after the preceding checks.'],['passwordReset','Reset the forgotten password','Send the fictional password-reset action.'],['loginConfirmed','Confirm successful login','Receive Jordan’s confirmation before closing.']]},
  consumer:{recordTitle:'Driver profile · TRN-DRV-3058',recordFacts:['Morgan Ellis · Atlanta, GA','Compliance Region: General','Consumer Report: In Progress','Report updated: Aug 8, 2026'],steps:[['profileFound','Open the driver profile','Locate Morgan’s fictional Admin record.'],['locationVerified','Verify preferred address','Confirm the driver is outside Washington and Colorado.'],['statusVerified','Inspect Consumer Report status','Identify the report as In Progress.'],['macroSelected','Select approved In Progress communication','Use the case-specific voice/chat language.'],['transferSelected','Choose Consumer Reports transfer reason','Route the inquiry to Trust & Safety.'],['transferred','Transfer to Trust & Safety','Complete the fictional transfer after communicating the next step.']]},
  address:{recordTitle:'Gig · TRN-GIG-204611',recordFacts:['Business sender · Driver assigned','Original: 18 Market St, Atlanta','Corrected: 742 Peachtree Ave, Atlanta','Additional distance: 6.0 miles · Non-CA/Seattle'],steps:[['gigFound','Open the Gig in Admin','Review the fictional Gig, sender, and delivery details.'],['assignmentVerified','Confirm a driver is assigned','Address edits are no longer permitted.'],['complianceChecked','Rule out special compliance and consumer Gig paths','Confirm this is not CA, Seattle, or a consumer-sender Gig.'],['routeConfirmed','Confirm driver can travel six miles','Use the under-10-mile assigned-driver path.'],['podRequested','Request proof of delivery','Tell Taylor to send POD after delivery.'],['podUploaded','Upload the POD','Attach the fictional delivery photo to the Gig.'],['delivered','Manually mark the Gig delivered','Complete delivery because the geofence is off.'],['creditAdded','Add a $6 mileage credit','Apply $1 per additional mile, within the $8 cap.']]},
  bank:{recordTitle:'Driver profile · TRN-DRV-4640',recordFacts:['Casey Nguyen · New driver','Payment enrollment blocked','Profile note: Payments Service Instant Payment Issue (016)','Duplicate account indicator present'],steps:[['profileFound','Open the driver profile','Review Casey’s fictional Admin record.'],['paymentNoteFound','Review profile notes','Locate the Payment Service Instant Payment Issue (016) duplicate-account note.'],['privacyConfirmed','Protect linked-account privacy','Do not search for or disclose details about another account.'],['macroSelected','Select Duplicate Bank Account macro','Use the approved payment-method explanation.'],['pushbackReceived','Handle customer pushback','The driver asks why the payment method cannot be reused.'],['macroRepeated','Repeat the approved communication','Reinforce that a different bank account or debit card is required.']]}
};
let profiles=[];
const PRACTICE_HISTORY_KEY='roadie-training-practice-history-v1';
function loadPracticeHistory(){try{return JSON.parse(localStorage.getItem(PRACTICE_HISTORY_KEY))||{}}catch{return{}}}
let state={route:'landing',practiceMode:'shift',libraryFilters:{category:'all',difficulty:'all'},practiceHistory:loadPracticeHistory(),currentCaseIndex:0,caseStatuses:CASE_LIBRARY.map((_,i)=>i===0?'available':'queued'),activeProfileId:null,query:'',startedAt:null,caseAccepted:false,casePanelOpen:true,caseTab:'reply',messages:[],customerResponse:'',caseNotes:'',caseFields:{category:'',rootCause:'',gigId:'',trustSafetyReview:'',identityReview:''},loginConfirmed:false,accessMessageSent:false,hintsUsed:0,reviewedIds:[],actions:[],progress:{},workflowFeedback:'',casesCompleted:0,xp:0,readiness:0,streak:0,lastCompletedCaseIndex:null,shiftStartedAt:null,kbaReferencedAt:null,kbaReferenceCount:0};
const XP_LEVEL_TARGET=1000;
let metricAnimationTimer=null;
const app=document.getElementById('app');
const $=s=>document.querySelector(s);
const clone=v=>JSON.parse(JSON.stringify(v));
const currentCase=()=>CASE_LIBRARY[state.currentCaseIndex];
function resetCurrentCase(){profiles=clone(initialProfiles);Object.assign(state,{activeProfileId:null,query:'',startedAt:Date.now(),caseAccepted:false,casePanelOpen:true,caseTab:'reply',messages:[],customerResponse:'',caseNotes:'',caseFields:{category:'',rootCause:'',gigId:'',trustSafetyReview:'',identityReview:''},loginConfirmed:false,accessMessageSent:false,hintsUsed:0,reviewedIds:[],actions:[],progress:{},workflowFeedback:'',kbaReferencedAt:null,kbaReferenceCount:0});}
function resetShift(){state.currentCaseIndex=0;state.caseStatuses=CASE_LIBRARY.map((_,i)=>i===0?'available':'queued');state.casesCompleted=0;state.xp=0;state.readiness=0;state.streak=0;state.lastCompletedCaseIndex=null;state.shiftStartedAt=null;resetCurrentCase();}
function savePracticeHistory(){localStorage.setItem(PRACTICE_HISTORY_KEY,JSON.stringify(state.practiceHistory))}
function startFullShift(){state.practiceMode='shift';resetShift();state.shiftStartedAt=Date.now();go('dashboard')}
function startLibraryCase(index){state.practiceMode='library';state.currentCaseIndex=index;state.caseStatuses=CASE_LIBRARY.map((_,i)=>i===index?'available':'queued');state.lastCompletedCaseIndex=null;state.shiftStartedAt=Date.now();resetCurrentCase();go('dashboard')}
function template(id){return document.getElementById(id).content.cloneNode(true)}
function go(route,options={}){state.route=route;Object.assign(state,options);render();window.scrollTo({top:0,behavior:'smooth'})}
function bindRoutes(){document.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>go(b.dataset.route));}
function record(type,targetId=null){state.actions.push({type,targetId,time:Date.now()});}
function escapeHtml(value){const d=document.createElement('div');d.textContent=value;return d.innerHTML}
function formatPhone(phone){return phone==='5550101002'?'(555) 010-1002':phone}
function animateMetric(el){if(!el)return;el.classList.remove('metric-pop');void el.offsetWidth;el.classList.add('metric-pop');clearTimeout(metricAnimationTimer);metricAnimationTimer=setTimeout(()=>el.classList.remove('metric-pop'),650)}
function formatShiftTime(){if(!state.shiftStartedAt)return'Shift not started';const minutes=Math.max(0,Math.floor((Date.now()-state.shiftStartedAt)/60000));return`Shift ${String(minutes).padStart(2,'0')} min elapsed`}
function updateShiftTimer(){const timer=document.getElementById('shiftTimer');if(timer)timer.textContent=formatShiftTime()}
function updateHeader(){const readiness=document.getElementById('headerReadiness');const xp=document.getElementById('headerXp');const streak=document.getElementById('headerStreak');const previousXp=Number(xp?.dataset.value||0);const previousReadiness=Number(readiness?.dataset.value||0);const previousStreak=Number(streak?.dataset.value||0);if(readiness){readiness.textContent=`${state.readiness}%`;readiness.dataset.value=state.readiness}if(xp){xp.textContent=state.xp;xp.dataset.value=state.xp}if(streak){streak.textContent=state.streak;streak.dataset.value=state.streak}if(state.xp>previousXp)animateMetric(xp);if(state.readiness>previousReadiness)animateMetric(readiness);if(state.streak>previousStreak)animateMetric(streak);const progress=Math.min(100,(state.xp/XP_LEVEL_TARGET)*100);const readinessProgress=document.getElementById('headerReadinessProgress');if(readinessProgress)readinessProgress.style.width=`${state.readiness}%`;const progressText=document.getElementById('headerXpProgressText');if(progressText)progressText.textContent=`${state.xp.toLocaleString()} / ${XP_LEVEL_TARGET.toLocaleString()} XP to Skilled Specialist`;updateShiftTimer();document.getElementById('currentProfileNav').disabled=!state.activeProfileId;}
function render(){app.innerHTML='';if(state.route==='landing')renderLanding();if(state.route==='library')renderLibrary();if(state.route==='dashboard')renderDashboard();if(state.route==='search')renderSearch();if(state.route==='profile')renderProfile();if(state.route==='results')renderResults();if(state.route==='shiftComplete')renderShiftComplete();bindRoutes();updateHeader();bindGlobalControls();}
function openKnowledgeBase(){const kba=currentCase()?.kba;if(!kba?.url){alert('No Knowledge Base Article has been assigned to this case.');return}state.kbaReferencedAt=Date.now();state.kbaReferenceCount+=1;record('OPEN_KNOWLEDGE_BASE',kba.title);window.open(kba.url,'_blank','noopener,noreferrer');updateKbaReferenceStatus();}
function formatReferenceTime(timestamp){if(!timestamp)return 'Not yet opened';return new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit'}).format(new Date(timestamp));}
function updateKbaReferenceStatus(){const kba=currentCase()?.kba;const referenced=Boolean(state.kbaReferencedAt);document.querySelectorAll('[data-kba-reference-status]').forEach(el=>{el.classList.toggle('referenced',referenced);el.innerHTML=referenced?`<span class="kba-reference-icon">✓</span><span><strong>Knowledge Base Article referenced</strong><small>${escapeHtml(kba?.shortTitle||'Case article')} · Last opened: ${formatReferenceTime(state.kbaReferencedAt)}</small></span>`:`<span class="kba-reference-icon">○</span><span><strong>Knowledge Base Article not yet referenced</strong><small>${escapeHtml(kba?.shortTitle||'Open the article assigned to this case')}</small></span>`;});}
function updateKnowledgeLabels(){const kba=currentCase()?.kba;document.querySelectorAll('.kb-nav-title').forEach(el=>el.textContent=kba?.shortTitle||'Case article');document.querySelectorAll('.openKnowledgeFromNav').forEach(btn=>{btn.title=kba?`Open KBA: ${kba.title}`:'No KBA assigned';btn.setAttribute('aria-label',kba?`Open Knowledge Base Article: ${kba.title}`:'Knowledge Base Article')});}
function bindGlobalControls(){updateKnowledgeLabels();document.querySelector('.brand').onclick=()=>go('landing');document.getElementById('coachToggle').onclick=openCoach;document.querySelectorAll('#openCoachFromNav').forEach(b=>b.onclick=openCoach);document.querySelectorAll('.openKnowledgeFromNav').forEach(b=>b.onclick=openKnowledgeBase);document.querySelectorAll('#openCaseFromNav').forEach(b=>{b.onclick=()=>{state.casePanelOpen=true;render();}});}
function renderLanding(){app.append(template('landing-template'));$('#openLibraryBtn').onclick=()=>go('library');$('#startShiftBtn').onclick=startFullShift}
function renderLibrary(){
  app.append(template('library-template'));
  $('#libraryBackBtn').onclick=()=>go('landing');
  const categoryFilter=$('#libraryCategoryFilter');
  const difficultyFilter=$('#libraryDifficultyFilter');
  [...new Set(CASE_LIBRARY.map(c=>c.category))].forEach(value=>categoryFilter.add(new Option(value,value)));
  [...new Set(CASE_LIBRARY.map(c=>c.difficulty))].forEach(value=>difficultyFilter.add(new Option(value,value)));
  categoryFilter.value=state.libraryFilters.category;
  difficultyFilter.value=state.libraryFilters.difficulty;
  const updateFilters=()=>{state.libraryFilters={category:categoryFilter.value,difficulty:difficultyFilter.value};render()};
  categoryFilter.onchange=updateFilters;
  difficultyFilter.onchange=updateFilters;
  $('#libraryStartShiftBtn').onclick=startFullShift;
  const visible=CASE_LIBRARY.map((scenario,index)=>({scenario,index})).filter(({scenario})=>(state.libraryFilters.category==='all'||scenario.category===state.libraryFilters.category)&&(state.libraryFilters.difficulty==='all'||scenario.difficulty===state.libraryFilters.difficulty));
  $('#libraryResultCount').textContent=`${visible.length} scenario${visible.length===1?'':'s'}`;
  $('#libraryEmpty').hidden=visible.length!==0;
  $('#scenarioGrid').innerHTML=visible.map(({scenario,index})=>{
    const history=state.practiceHistory[scenario.id];
    const completed=Boolean(history?.completed);
    const description=scenario.opening.length>150?`${scenario.opening.slice(0,147)}…`:scenario.opening;
    return `<article class="scenario-card ${completed?'completed':''}">
      <div class="scenario-card-top"><span class="scenario-number">Scenario ${index+1}</span><span class="scenario-status ${completed?'complete':''}">${completed?'✓ Completed':'Not completed'}</span></div>
      <h2>${escapeHtml(scenario.title)}</h2>
      <p>${escapeHtml(description)}</p>
      <div class="scenario-tags"><span>${escapeHtml(scenario.category)}</span><span>${escapeHtml(scenario.difficulty)}</span><span>${escapeHtml(scenario.channel)}</span></div>
      <dl><div><dt>Estimated time</dt><dd>${scenario.detailedAdmin?'15–20 min':scenario.workflow?'10–15 min':'5–10 min'}</dd></div><div><dt>XP available</dt><dd>${scenario.xp} XP</dd></div></dl>
      ${completed?`<small class="scenario-last-run">Completed ${history.completions} time${history.completions===1?'':'s'} · Best: ${history.bestXp} XP</small>`:''}
      <button class="primary full" data-start-scenario="${index}">${completed?'Practice Again':'Start Scenario'}</button>
    </article>`;
  }).join('');
  document.querySelectorAll('[data-start-scenario]').forEach(button=>button.onclick=()=>startLibraryCase(Number(button.dataset.startScenario)));
}
function renderDashboard(){
  app.append(template('dashboard-template'));
  const c=currentCase();
  const libraryMode=state.practiceMode==='library';
  $('#dashboardModeLabel').textContent=libraryMode?'SELF-DIRECTED PRACTICE':'TRAINING SHIFT';
  $('#dashboardModePill').textContent=libraryMode?'Practice Mode':'Shift Mode';
  const libraryCompleted=CASE_LIBRARY.filter(item=>state.practiceHistory[item.id]?.completed).length;
  $('#dashboardCases').textContent=libraryMode?`${libraryCompleted} / ${CASE_LIBRARY.length}`:`${state.casesCompleted} / ${CASE_LIBRARY.length}`;$('#dashboardReadiness').textContent=`${state.readiness}%`;$('#dashboardStreak').textContent=state.streak;$('#dashboardXp').textContent=state.xp;
  const status=state.caseStatuses[state.currentCaseIndex];
  $('#activeContactEyebrow').textContent=status==='active'?(libraryMode?'PRACTICE SCENARIO · ACTIVE CONTACT':`CASE ${state.currentCaseIndex+1} OF ${CASE_LIBRARY.length} · ACTIVE CONTACT`):(libraryMode?'PRACTICE SCENARIO · AVAILABLE CONTACT':`CASE ${state.currentCaseIndex+1} OF ${CASE_LIBRARY.length} · AVAILABLE CONTACT`);
  $('#activeContactTitle').textContent=`${c.queueTitle} · ${c.title}`;$('#activeContactPreview').textContent=c.preview;$('#activeContactWait').textContent=status==='active'?'Contact accepted':c.wait;$('#activeContactPriority').textContent=c.priority;
  $('#activeContactCard').classList.toggle('is-active',status==='active');
  $('#acceptContactBtn').textContent=status==='active'?'Open Active Contact':'Accept Contact';
  $('#acceptContactBtn').onclick=()=>{state.caseAccepted=true;state.caseStatuses[state.currentCaseIndex]='active';state.startedAt=state.startedAt||Date.now();record('CONTACT_ACCEPTED',c.id);state.casePanelOpen=true;go(c.detailedAdmin?'search':'dashboard')};
  renderWorkflowWorkspace();
  if(libraryMode){$('.upcoming-card .section-title h2').textContent='Selected scenario';$('#queueSummary').textContent='Self-directed practice'}
  renderQueue();mountCasePanel();
}
function renderWorkflowWorkspace(){
  const host=$('#workflowWorkspace');const c=currentCase();const workflow=WORKFLOWS[c.workflow];
  if(!host||!workflow||!state.caseAccepted){if(host)host.hidden=true;return}
  host.hidden=false;
  const nextIndex=workflow.steps.findIndex(([key])=>!state.progress[key]);
  host.innerHTML=`<div class="workflow-heading"><div><p class="eyebrow">INVESTIGATION WORKSPACE</p><h2>${escapeHtml(workflow.recordTitle)}</h2></div><span>${workflow.steps.filter(([key])=>state.progress[key]).length} / ${workflow.steps.length} actions</span></div>
    <div class="workflow-facts">${workflow.recordFacts.map(f=>`<span>${escapeHtml(f)}</span>`).join('')}</div>
    <div class="workflow-actions">${workflow.steps.map(([key,label,help],index)=>`<button type="button" class="workflow-action ${state.progress[key]?'complete':index===nextIndex?'current':''}" data-workflow-action="${key}" ${index>nextIndex?'disabled':''}><span>${state.progress[key]?'✓':index===nextIndex?'→':'○'}</span><span><strong>${escapeHtml(label)}</strong><small>${escapeHtml(help)}</small></span></button>`).join('')}</div>
    <p class="workflow-feedback" id="workflowFeedback" ${state.workflowFeedback?'':'hidden'}>${escapeHtml(state.workflowFeedback)}</p>`;
  document.querySelectorAll('[data-workflow-action]').forEach(button=>button.onclick=()=>completeWorkflowAction(button.dataset.workflowAction));
}
function completeWorkflowAction(key){
  const c=currentCase();const workflow=WORKFLOWS[c.workflow];const stepIndex=workflow.steps.findIndex(([stepKey])=>stepKey===key);const nextIndex=workflow.steps.findIndex(([stepKey])=>!state.progress[stepKey]);
  if(stepIndex!==nextIndex){state.workflowFeedback='Complete the investigation in order so each decision is supported by the record.';renderWorkflowWorkspace();return}
  state.progress[key]=true;record('WORKFLOW_ACTION',key);
  const messages={lockReviewed:'The notes show an inactivity lock with no failed Consumer Report, research, discipline, or Washington restriction.',consumerClear:'Consumer Report is Passed. This profile may be unlocked.',locationVerified:'Preferred address is Atlanta, Georgia: General compliance region.',statusVerified:'Status confirmed: In Progress.',routeConfirmed:'Taylor confirms the corrected location is six miles away and can complete the delivery.',creditAdded:'$6 credit applied. Do not exceed the $8 cap.',privacyConfirmed:'Privacy check passed: no linked-account details were accessed or disclosed.',pushbackReceived:'Casey asks why the same card cannot be reused. Repeat the approved macro; do not disclose other accounts.'};
  state.workflowFeedback=messages[key]||`${workflow.steps[stepIndex][1]} completed.`;
  refreshCasePanelContent();renderWorkflowWorkspace();
}
function renderQueue(){
  const list=$('#assignedContactsList');
  if(state.practiceMode==='library'){
    const c=currentCase();const s=state.caseStatuses[state.currentCaseIndex];
    list.innerHTML=`<div class="contact-row ${s}"><span class="contact-dot"></span><div><strong class="contact-channel">${escapeHtml(c.queueTitle)}</strong><span class="contact-topic">${escapeHtml(c.title)}</span><small>${escapeHtml(c.channel)} · ${escapeHtml(c.customerType)} · ${escapeHtml(c.difficulty)}</small></div><span class="contact-status">${s==='active'?'Active':'Available'}</span></div>`;
    return;
  }
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
      ['Trust & Safety status',p.trustSafety],['Legal name',p.legalName],['Date of birth',p.birthDate],['Address',p.address],['Consumer report status',p.consumer],
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

  const renderComparison=()=>{
    document.querySelectorAll('.profile-nav button').forEach(b=>b.classList.remove('active'));
    $('#compareProfilesBtn').classList.add('active');
    const accounts=profiles.filter(x=>x.type==='Driver'&&x.phone===p.phone);
    $('#profileContent').innerHTML=`
      <section class="admin-card comparison-card">
        <div class="section-title"><div><h2>Compare related profiles</h2><small>Review the evidence before selecting a primary account.</small></div><span>${accounts.length} profiles</span></div>
        <div class="comparison-table-wrap"><table class="comparison-table"><thead><tr><th>Profile</th><th>T&S status</th><th>Legal name</th><th>Date of birth</th><th>Address</th><th>Consumer report</th><th>Completed Gigs</th><th>License</th><th>Created</th><th>Primary action</th></tr></thead><tbody>
        ${accounts.map(r=>`<tr><td><strong>${r.id}</strong><br><small>${escapeHtml(r.email)}</small></td><td>${escapeHtml(r.trustSafety)}</td><td>${escapeHtml(r.legalName)}</td><td>${escapeHtml(r.birthDate)}</td><td>${escapeHtml(r.address)}</td><td>${escapeHtml(r.consumer)}</td><td>${r.completedGigs}</td><td>${escapeHtml(r.license)}</td><td>${escapeHtml(r.created)}</td><td><button class="secondary compact-button" data-compare-primary="${r.id}" ${!state.progress.trustSafetyChecked||!state.progress.identityVerified?'disabled':''}>${r.primary?'Selected primary':'Select as primary'}</button></td></tr>`).join('')}
        </tbody></table></div>
        <div class="comparison-decisions">
          <section><h3>1. Trust & Safety check</h3><p>Confirm whether any related account has a permanent Trust & Safety deactivation.</p><div class="decision-actions"><button class="secondary" id="confirmTsClearBtn">No permanent deactivation</button><button class="secondary danger-outline" id="confirmTsPdBtn">Permanent deactivation found</button></div><span class="decision-status">${state.progress.trustSafetyChecked?'✓ Confirmed clear':'Not yet confirmed'}</span></section>
          <section><h3>2. Identity comparison</h3><p>Compare the legal name, date of birth, and address across all related profiles.</p><div class="decision-actions"><button class="secondary" id="identityMatchBtn" ${!state.progress.trustSafetyChecked?'disabled':''}>Identity details match</button><button class="secondary danger-outline" id="identityMismatchBtn" ${!state.progress.trustSafetyChecked?'disabled':''}>Details differ — possible fraud</button></div><span class="decision-status">${state.progress.identityVerified?'✓ Identity match confirmed':'Not yet confirmed'}</span></section>
          <section><h3>3. Primary-account decision</h3><p>Use the KBA hierarchy: completed consumer report, matching identity, completed Gigs, license on file, then newest account.</p><span class="decision-status">${state.progress.primary?'✓ Primary account selected':'Select the correct account in the table above.'}</span></section>
        </div>
      </section>`;
    $('#confirmTsClearBtn').onclick=()=>{state.progress.trustSafetyChecked=true;state.caseFields.trustSafetyReview='clear';record('TRUST_SAFETY_CLEAR');renderComparison();mountCasePanel()};
    $('#confirmTsPdBtn').onclick=()=>{alert('Stop the duplicate-profile workflow. Do not update account information. Refer the driver to the permanent-deactivation communication.');record('TRUST_SAFETY_PD_PATH')};
    $('#identityMatchBtn').onclick=()=>{state.progress.identityVerified=true;state.caseFields.identityReview='match';record('IDENTITY_MATCH_CONFIRMED');renderComparison();mountCasePanel()};
    $('#identityMismatchBtn').onclick=()=>{alert('Potential fraud identified. Add notes and transfer to Trust & Safety using the Fraud-Related macros.');record('IDENTITY_MISMATCH_PATH')};
    document.querySelectorAll('[data-compare-primary]').forEach(b=>b.onclick=()=>{const target=profiles.find(x=>x.id===b.dataset.comparePrimary);confirmAction('Select primary account',`Select ${target.id} as the primary account?`,()=>actionMarkPrimary(target))});
  };

  const renderDrivingInfo=()=>{
    document.querySelectorAll('.profile-nav button').forEach(b=>b.classList.remove('active'));
    $('#drivingInfoBtn').classList.add('active');
    const duplicate=p.id!=='TRN-ACC-001';
    $('#profileContent').innerHTML=`<section class="admin-card driving-info-card"><div class="section-title"><div><h2>Driving Info</h2><small>Edit Profile · Driving Info</small></div><span>${p.id}</span></div><div class="driving-info-content"><label>Driver's license information</label><div class="license-value">${escapeHtml(p.license)}</div>${duplicate?`<p>Duplicate accounts must remain locked. Remove the driver's license information from this duplicate profile.</p><button class="primary" id="removeLicenseBtn" ${p.license==='None'?'disabled':''}>${p.license==='None'?'License information removed':'Remove License Information'}</button>`:`<p class="privacy-note">This is the primary-account candidate. Do not remove its license information.</p>`}</div></section>`;
    const remove=$('#removeLicenseBtn');if(remove)remove.onclick=()=>confirmAction('Remove license information',`Remove the fictional license information from ${p.id}?`,()=>actionClear(p));
  };

  const kbaChecksComplete=Boolean(state.progress.reviewed&&state.progress.trustSafetyChecked&&state.progress.identityVerified);
  $('#markPrimaryBtn').disabled=p.primary||!kbaChecksComplete;
  $('#unlockBtn').disabled=p.status!=='Locked'||!p.primary||!kbaChecksComplete;
  $('#markPrimaryBtn').onclick=()=>confirmAction('Mark primary account',`Mark ${p.id} as the primary account?`,()=>actionMarkPrimary(p));
  $('#unlockBtn').onclick=()=>confirmAction('Unlock account',`Unlock ${p.id}?`,()=>actionUnlock(p));
  $('#addNoteBtn').onclick=()=>openNote(p);
  $('#profileOverviewBtn').onclick=renderOverview;
  $('#accountsBtn').onclick=renderAccounts;
  $('#relatedProfilesBtn').onclick=renderRelatedProfiles;
  $('#compareProfilesBtn').onclick=renderComparison;
  $('#drivingInfoBtn').onclick=renderDrivingInfo;
  renderOverview();
  mountCasePanel();
}
function detailRows(rows){return rows.map(([l,v])=>`<span>${l}</span><strong>${v}</strong>`).join('')}
function actionMarkPrimary(p){profiles.forEach(x=>x.primary=x.id===p.id);state.progress.primary=p.id==='TRN-ACC-001';record('MARK_PRIMARY',p.id);render()}
function actionUnlock(p){p.status='Active';state.progress.unlocked=p.id==='TRN-ACC-001';record('UNLOCK_ACCOUNT',p.id);render()}
function actionClear(p){p.license='None';record('REMOVE_LICENSE',p.id);const d=profiles.filter(x=>['TRN-ACC-002','TRN-ACC-003'].includes(x.id));state.progress.cleared=d.every(x=>x.license==='None');render()}
function normalizeNote(text){return text.toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9\s-]/g,' ').replace(/\s+/g,' ').trim()}
function validateProfileNote(profile,text){
  const n=normalizeNote(text);
  if(profile.id==='TRN-ACC-001'){
    const missing=[];
    if(!n.includes('primary account'))missing.push('identify this profile as the primary account');
    if(!n.includes('all duplicate accounts have been identified'))missing.push('state that all duplicate accounts were identified');
    if(!n.includes('will remain locked'))missing.push('state that the duplicate accounts will remain locked');
    if(!n.includes('trn-acc-002')||!n.includes('trn-acc-003'))missing.push('include both duplicate profile references');
    return{valid:missing.length===0,feedback:missing.length?`Review the KBA. Your note must ${missing.join(', ')}.`:''};
  }
  const missing=[];
  if(!n.includes('duplicate accounts will remain locked'))missing.push('state that duplicate accounts will remain locked');
  if(!n.includes('refer to the primary account'))missing.push('refer to the primary account');
  if(!n.includes('trn-acc-001'))missing.push('include the primary profile reference');
  return{valid:missing.length===0,feedback:missing.length?`Review the KBA. Your note must ${missing.join(', ')}.`:''};
}
function updateNoteProgress(){
  const primary=profiles.find(x=>x.id==='TRN-ACC-001');
  const primaryValid=primary.notes.some(n=>validateProfileNote(primary,n).valid);
  const duplicatesValid=profiles.filter(x=>['TRN-ACC-002','TRN-ACC-003'].includes(x.id)).every(x=>x.notes.some(n=>validateProfileNote(x,n).valid));
  state.progress.noted=primaryValid&&duplicatesValid;
}
function openNote(p){
  const d=$('#noteDialog');
  $('#noteProfileContext').textContent=`Profile: ${p.id}${p.primary?' · Primary account':' · Related account'}`;
  $('#noteText').value='';
  $('#noteText').placeholder='Enter the required note from the Knowledge Base Article (KBA).';
  $('#noteValidationFeedback').hidden=true;
  $('#noteValidationFeedback').textContent='';
  d.showModal();
  $('#openKbaFromNoteBtn').onclick=openKnowledgeBase;
  $('#saveNoteBtn').onclick=e=>{
    e.preventDefault();
    const text=$('#noteText').value.trim();
    if(!text){$('#noteValidationFeedback').hidden=false;$('#noteValidationFeedback').textContent='Enter the required note before saving.';return}
    const result=validateProfileNote(p,text);
    if(!result.valid){$('#noteValidationFeedback').hidden=false;$('#noteValidationFeedback').textContent=result.feedback;record('INVALID_PROFILE_NOTE',p.id);return}
    p.notes.push(text);record('ADD_PROFILE_NOTE',p.id);updateNoteProgress();d.close();render();
  };
}
function confirmAction(title,text,action){$('#confirmTitle').textContent=title;$('#confirmText').textContent=text;const d=$('#confirmDialog');d.showModal();$('#confirmActionBtn').onclick=e=>{e.preventDefault();d.close();action()}}
function mountCasePanel(){
  const host=$('#casePanelMount');
  if(!host)return;
  const c=currentCase();
  if(!state.caseAccepted||!state.casePanelOpen){
    host.innerHTML=`<div class="case-panel"><div class="case-panel-header"><div><p class="eyebrow">CASE ${state.currentCaseIndex+1} OF ${CASE_LIBRARY.length}</p><strong>${state.caseAccepted?c.reference:'No accepted contact'}</strong></div></div><div class="case-tab-pane"><p class="subtle">${state.caseAccepted?'Open Active Case from the Training navigation.':'Accept the available contact from the dashboard to begin.'}</p></div></div>`;
    return;
  }
  host.innerHTML='';
  host.append(template('case-panel-template'));
  $('#casePanel')?.classList.add('case-panel-enter');
  $('#casePositionLabel').textContent=`CASE ${state.currentCaseIndex+1} OF ${CASE_LIBRARY.length} · ACTIVE CASE`;
  $('#caseReference').textContent=c.reference;
  $('#caseAvatar').textContent=c.initials;
  $('#caseCustomerName').textContent=c.customer;
  $('#caseCustomerMeta').textContent=`${c.customerType} · ${c.channel}`;
  $('#caseAcceptedTime').textContent='Contact received · Begin your investigation';
  $('#caseMessageAuthor').textContent=c.customer;
  $('#caseOpeningMessage').textContent=c.opening;
  $('#caseContactLine').textContent=c.contactLine;
  $('#collapseCaseBtn').onclick=()=>{state.casePanelOpen=false;render()};
  renderCaseChecklist();
  updateKbaReferenceStatus();
  renderAllCaseTabs();
  document.querySelectorAll('[data-case-tab]').forEach(button=>{
    button.onclick=event=>{
      event.preventDefault();
      switchCaseTab(button.dataset.caseTab);
    };
  });
  switchCaseTab(state.caseTab||'reply');
}

function switchCaseTab(tabName){
  const panel=$('#casePanel');
  const previousScrollTop=panel?.scrollTop??0;
  state.caseTab=tabName;
  document.querySelectorAll('[data-case-tab]').forEach(button=>{
    const active=button.dataset.caseTab===tabName;
    button.classList.toggle('active',active);
    button.setAttribute('aria-selected',String(active));
    button.tabIndex=active?0:-1;
  });
  document.querySelectorAll('[data-case-pane]').forEach(pane=>{
    pane.hidden=pane.dataset.casePane!==tabName;
  });
  if(panel){
    requestAnimationFrame(()=>{
      panel.scrollTop=previousScrollTop;
    });
  }
}

function refreshCasePanelContent(){
  const panel=$('#casePanel');
  if(!panel)return;
  const scrollTop=panel.scrollTop;
  renderCaseChecklist();
  updateKbaReferenceStatus();
  renderAllCaseTabs();
  switchCaseTab(state.caseTab||'reply');
  panel.scrollTop=scrollTop;
}

function caseChecklistItems(){const c=currentCase();if(c.detailedAdmin)return[['found','Search for all user-related accounts'],['reviewed','Review every related profile'],['trustSafetyChecked','Confirm no permanent T&S deactivation'],['identityVerified','Verify identity details match'],['primary','Determine the primary account'],['unlocked','Unlock only the primary account'],['loginConfirmed','Confirm the driver can log in'],['cleared','Remove license information from duplicates'],['noted','Add the required notes to every profile'],['caseDetails','Save case details'],['caseNotes','Save case notes'],['responded','Send the customer response']];const workflow=WORKFLOWS[c.workflow];return[...(workflow?.steps.map(([key,label])=>[key,label])||[]),['caseDetails','Save case details'],['caseNotes','Save case notes'],['responded','Send the customer response']]}
function renderCaseChecklist(){
  const host=$('#caseChecklistItems');
  if(!host)return;
  const items=caseChecklistItems();
  const done=items.filter(([key])=>Boolean(state.progress[key])).length;
  const complete=done===items.length;
  $('#caseChecklistCount').textContent=`${done} / ${items.length} complete`;
  const nextIndex=items.findIndex(([key])=>!state.progress[key]);
  const directions={found:'Use Global Search with the customer phone number.',reviewed:'Open all three profiles from the search results.',trustSafetyChecked:'Open Compare Profiles and complete the Trust & Safety check.',identityVerified:'In Compare Profiles, compare the legal name, date of birth, and address.',primary:'Select the correct primary account from Compare Profiles.',unlocked:'Open the selected primary profile and choose Unlock Primary Account.',loginConfirmed:'Open Customer response and draft a message asking the driver to confirm login.',cleared:'Open each duplicate profile, select Driving Info, and remove the license information.',noted:'Open each profile and enter the required note from the assigned KBA.',caseDetails:'Open Case details and save the required fields.',caseNotes:'Open Case notes and save complete documentation.',responded:'Open Customer response and send your message.'};
  host.innerHTML=items.map(([key,label],index)=>`<div class="case-checklist-item ${state.progress[key]?'complete':index===nextIndex?'current':''}"><span aria-hidden="true">${state.progress[key]?'✓':index===nextIndex?'→':'○'}</span><span><strong>${label}</strong>${index===nextIndex&&!state.progress[key]?`<small>${directions[key]||''}</small>`:''}</span></div>`).join('');
  const notice=$('#caseReadyNotice');
  if(notice){
    notice.hidden=!complete;
    notice.innerHTML=complete?`<strong>Ready to submit</strong><span>All required work is complete. Review your case notes, then submit the case for coaching feedback.</span><button type="button" class="primary full" id="reviewSubmitBtn">Review and Submit Case</button>`:'';
    const button=$('#reviewSubmitBtn');
    if(button)button.onclick=()=>{switchCaseTab('notes');$('#closeCaseBtn')?.focus({preventScroll:true})};
  }
}

function renderAllCaseTabs(){
  const mount=$('#caseTabContent');
  if(!mount)return;
  mount.innerHTML=`<section class="case-tab-panel" data-case-pane="reply"></section><section class="case-tab-panel" data-case-pane="details" hidden></section><section class="case-tab-panel" data-case-pane="notes" hidden></section>`;
  renderReplyPane(mount.querySelector('[data-case-pane="reply"]'));
  renderDetailsPane(mount.querySelector('[data-case-pane="details"]'));
  renderNotesPane(mount.querySelector('[data-case-pane="notes"]'));
}

function renderReplyPane(mount){
  const c=currentCase();
  const sent=state.accessMessageSent&&state.customerResponse;
  const thread=`<div class="response-thread"><div class="thread-message customer"><strong>${escapeHtml(c.customer)}</strong><p>${escapeHtml(c.opening)}</p></div>${sent?`<div class="thread-message specialist"><strong>You</strong><p>${escapeHtml(state.customerResponse)}</p></div>`:''}${state.loginConfirmed?'<div class="thread-message customer"><strong>Avery Morgan</strong><p>I’m back in. Thank you!</p></div>':''}</div>`;
  const loginFlow=c.detailedAdmin&&state.progress.unlocked&&state.accessMessageSent&&!state.loginConfirmed?`<div class="login-confirmation-flow"><strong>Wait for customer confirmation</strong><p>Your response was sent. Remain connected until Avery confirms account access.</p><button class="primary full" id="simulateLoginReplyBtn">Receive Customer Reply</button></div>`:'';
  mount.innerHTML=`<div class="case-tab-pane"><p class="case-tab-instruction">${c.detailedAdmin?'Draft a message asking Avery to confirm whether they can log in. Save the draft, then send it when you are ready.':'Draft and send the customer response.'}</p>${thread}<textarea id="chatReply" rows="5" placeholder="${escapeHtml(c.replyPlaceholder)}" ${state.accessMessageSent?'disabled':''}>${escapeHtml(state.customerResponse)}</textarea><div class="response-save-status" id="responseSaveStatus">${state.accessMessageSent?'Response sent':state.customerResponse?'Draft saved':'Not yet saved'}</div><div class="case-actions split-actions"><button class="secondary" id="saveResponseBtn" ${state.accessMessageSent?'disabled':''}>Save Draft</button><button class="primary" id="sendAccessMessageBtn" ${state.accessMessageSent?'disabled':''}>Send Response</button></div>${loginFlow}</div>`;
  $('#saveResponseBtn').onclick=()=>{const text=$('#chatReply').value.trim();if(!text)return;state.customerResponse=text;record('SAVE_CUSTOMER_RESPONSE_DRAFT');refreshCasePanelContent()};
  $('#sendAccessMessageBtn').onclick=()=>{const text=$('#chatReply').value.trim();const validation=validateCustomerResponse(text,c);if(validation){alert(validation);return}state.customerResponse=text;state.messages=[{text}];state.accessMessageSent=true;state.progress.responded=true;record('CUSTOMER_RESPONSE_SENT');refreshCasePanelContent()};
  const receiveReply=$('#simulateLoginReplyBtn');
  if(receiveReply)receiveReply.onclick=()=>{state.loginConfirmed=true;state.progress.loginConfirmed=true;record('LOGIN_CONFIRMED_BY_CUSTOMER');refreshCasePanelContent()};
}
function validateCustomerResponse(text,c){if(text.length<40)return'Draft a complete response before sending.';const lower=text.toLowerCase();if(c.workflow==='locked'&&(!lower.includes('unlock')||!lower.includes('log')))return'Explain that the account was unlocked and ask the driver to confirm they can log in.';if(c.workflow==='consumer'&&(!lower.includes('progress')||(!lower.includes('checkr')&&!lower.includes('report'))))return'Use the approved In Progress explanation and tell the driver to watch for Consumer Report updates.';if(c.workflow==='address'&&(!lower.includes('proof')&&!lower.includes('pod')))return'Explain that the driver should complete the corrected-address delivery and send proof of delivery.';if(c.workflow==='bank'&&(!lower.includes('different')||(!lower.includes('bank')&&!lower.includes('debit'))))return'Tell the driver to add a different bank account or debit card without disclosing linked-account details.';return''}

function renderDetailsPane(mount){
  const c=currentCase();
  const duplicateChecks=c.detailedAdmin?`<label>Trust & Safety review</label><select id="trustSafetyReview"><option value="">Select result</option><option value="clear">No related account is permanently deactivated</option><option value="pd">A related account is permanently deactivated</option></select><label>Identity comparison</label><select id="identityReview"><option value="">Select result</option><option value="match">Identity details match across accounts</option><option value="mismatch">Identity details differ; potential fraud</option></select><p class="case-tab-instruction">Do not update account information if a permanent deactivation is present. If identity details differ, document potential fraud and transfer to Trust & Safety using the Fraud-Related macros.</p>`:'';
  const rootCauseOptions=(c.rootCauseOptions||[c.rootCause]).map(option=>`<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join('');
  mount.innerHTML=`<div class="case-tab-pane"><div class="field-grid"><div><label>Customer type</label><input value="${escapeHtml(c.customerType)}" disabled></div><div><label>Channel</label><input value="${escapeHtml(c.channel)}" disabled></div></div>${duplicateChecks}<label>Category</label><select id="caseCategory"><option value="">Select category</option><option>Account Management</option><option>Gig Support</option></select><label>Root cause</label><select id="caseRoot"><option value="">Select root cause</option>${rootCauseOptions}</select><p class="case-tab-instruction">Select the root cause that best matches the customer’s reason for contacting Roadie.</p><label>Gig ID</label><input id="caseGig" value="${escapeHtml(state.caseFields.gigId)}" placeholder="Not applicable"><div id="caseDetailsFeedback" class="case-details-feedback" hidden></div><button class="secondary full" id="saveCaseDetailsBtn">Save Case Details</button></div>`;
  $('#caseCategory').value=state.caseFields.category;
  $('#caseRoot').value=state.caseFields.rootCause;
  if(c.detailedAdmin){
    $('#trustSafetyReview').value=state.caseFields.trustSafetyReview||'';
    $('#identityReview').value=state.caseFields.identityReview||'';
    $('#trustSafetyReview').disabled=Boolean(state.progress.trustSafetyChecked);
    $('#identityReview').disabled=Boolean(state.progress.identityVerified);
  }
  $('#saveCaseDetailsBtn').onclick=()=>{
    state.caseFields={category:$('#caseCategory').value,rootCause:$('#caseRoot').value,gigId:$('#caseGig').value.trim(),trustSafetyReview:c.detailedAdmin?$('#trustSafetyReview').value:'',identityReview:c.detailedAdmin?$('#identityReview').value:''};
    if(c.detailedAdmin){state.progress.trustSafetyChecked=state.caseFields.trustSafetyReview==='clear';state.progress.identityVerified=state.caseFields.identityReview==='match'}
    const categoryCorrect=state.caseFields.category===c.category;
    const rootCauseCorrect=state.caseFields.rootCause===c.rootCause;
    const reviewsComplete=!c.detailedAdmin||(state.progress.trustSafetyChecked&&state.progress.identityVerified);
    const gigComplete=c.workflow!=='address'||state.caseFields.gigId==='TRN-GIG-204611';
    state.progress.caseDetails=categoryCorrect&&rootCauseCorrect&&reviewsComplete&&gigComplete;
    record('SAVE_CASE_DETAILS');
    if(state.progress.caseDetails){refreshCasePanelContent();return}
    const feedback=$('#caseDetailsFeedback');
    feedback.hidden=false;
    feedback.textContent=!categoryCorrect?'Select the category that best matches this contact.':!rootCauseCorrect?'Review the customer’s reason for contact and select the matching approved root cause.':!gigComplete?'Enter the assigned Gig ID: TRN-GIG-204611.':'Complete the Trust & Safety and identity review fields before saving.';
  };
}

function requiredProgressKeys(){return caseChecklistItems().map(([key])=>key)}
function renderNotesPane(mount){
  const c=currentCase();
  const required=requiredProgressKeys();
  const ready=required.every(k=>state.progress[k]);
  mount.innerHTML=`<div class="case-tab-pane"><textarea id="caseNotes" rows="5" placeholder="Document the interaction, investigation, identity and T&S checks, actions, login confirmation, and outcome...">${escapeHtml(state.caseNotes)}</textarea><button class="secondary full" id="saveCaseNotesBtn">Save Case Notes</button><button class="primary full" id="closeCaseBtn" style="margin-top:9px" ${ready?'':'disabled'}>Submit Case</button><p class="submit-helper">${ready?'All checklist items are complete. Submit the case to view coaching feedback.':'Complete all checklist items before submitting the case.'}</p></div>`;
  $('#saveCaseNotesBtn').onclick=()=>{state.caseNotes=$('#caseNotes').value.trim();const terms={locked:['inactivity','unlock','password'],consumer:['in progress','trust'],address:['6','pod','credit'],bank:['016','different']}[c.workflow]||[];state.progress.caseNotes=state.caseNotes.length>=50&&terms.every(term=>state.caseNotes.toLowerCase().includes(term));if(!state.progress.caseNotes){alert(terms.length?`Write complete notes and include the key case evidence: ${terms.join(', ')}.`:'Write complete case notes with the investigation, actions, and outcome.');return}record('SAVE_CASE_NOTES');refreshCasePanelContent()};
  $('#closeCaseBtn').onclick=closeCase;
}

function closeCase(){const c=currentCase();state.caseNotes=$('#caseNotes')?$('#caseNotes').value.trim():state.caseNotes;if(!c.workflow)state.progress.caseNotes=state.caseNotes.length>=30;const required=requiredProgressKeys();const complete=required.every(k=>state.progress[k]);if(!complete){alert('The case is not ready to submit. Complete the remaining checklist items before submitting.');return}state.caseStatuses[state.currentCaseIndex]='completed';state.lastCompletedCaseIndex=state.currentCaseIndex;state.casesCompleted+=1;state.xp+=c.xp;state.readiness=Math.min(100,state.readiness+c.readiness);state.streak+=1;if(state.practiceMode==='library'){const previous=state.practiceHistory[c.id]||{completions:0,bestXp:0};state.practiceHistory[c.id]={completed:true,completions:previous.completions+1,bestXp:Math.max(previous.bestXp,c.xp),lastCompletedAt:new Date().toISOString()};savePracticeHistory()}go('results')}
function scenarioCoaching(c){const copy={locked:'You verified Jordan’s identity, reviewed the inactivity lock and profile notes, confirmed a clear Consumer Report, unlocked the profile, reset the password, and confirmed successful login.',consumer:'You identified Morgan’s General compliance region and In Progress Consumer Report, used the approved explanation, and transferred the inquiry to Trust & Safety with the Consumer Reports reason.',address:'You confirmed an assigned, non-compliance business-sender Gig and the six-mile corrected route, requested and uploaded POD, manually marked delivery, and applied a $6 mileage credit.',bank:'You found the Payment Service Instant Payment Issue (016) note, protected linked-account privacy, used the Duplicate Bank Account macro, and repeated the approved direction after pushback.'};return copy[c.workflow]||'You completed the case-specific investigation, documentation, and customer communication requirements.'}
function nextCoachAction(){
  const c=currentCase();
  if(state.route==='landing')return{status:'Shift not started',action:'Select Begin Shift when you are ready to start the assigned contacts.'};
  if(!state.caseAccepted)return{status:'Contact available',action:"Accept the available contact from the dashboard and review the customer's opening message."};
  const labels={found:'Search Admin for every account related to the driver.',reviewed:'Open every related profile and compare the available records.',trustSafetyChecked:'In Case details, confirm that no related account was permanently deactivated by Trust & Safety.',identityVerified:'Compare the legal name, date of birth, and address across all accounts. If they differ, stop and transfer to Trust & Safety.',primary:'Use the KBA hierarchy to determine the primary account: completed consumer report, matching identity, completed Gigs, license on file, then newest account.',unlocked:'Unlock only the confirmed primary account.',loginConfirmed:'Stay in contact until the driver confirms successful login.',cleared:'Keep duplicates locked and remove license information from each duplicate profile.',noted:'Add the prescribed primary-account note and duplicate-account note to every affected profile.',caseDetails:'Save the correct category, root cause, T&S review, and identity comparison.',caseNotes:'Write complete case notes that capture the interaction, checks, actions, login confirmation, and outcome.',responded:'Save a clear customer response that explains the outcome and next step.'};
  const next=caseChecklistItems().find(([key])=>!state.progress[key]);
  if(next)return{status:`${caseChecklistItems().filter(([key])=>state.progress[key]).length} of ${caseChecklistItems().length} requirements complete`,action:labels[next[0]]||`Complete: ${next[1]}.`};
  return{status:'Ready to submit',action:'Review the customer response, case details, and notes. Then submit the case for coaching feedback.'};
}
function openCoach(){const d=$('#coachDialog');$('#coachCases').textContent=`${state.casesCompleted} / ${CASE_LIBRARY.length}`;$('#coachHints').textContent=state.hintsUsed;$('#coachStreak').textContent=state.streak;const guidance=nextCoachAction();$('#coachStatus').textContent=guidance.status;$('#coachNextAction').textContent=guidance.action;$('#hintText').hidden=true;d.showModal();$('#hintBtn').onclick=()=>{const guidanceNow=nextCoachAction();const c=currentCase();const baseHint=c.detailedAdmin?hints[Math.min(state.hintsUsed,hints.length-1)]:'Use the case checklist to complete the customer response, matching category, root cause, and full case notes.';state.hintsUsed+=1;$('#coachHints').textContent=state.hintsUsed;$('#hintText').hidden=false;$('#hintText').textContent=`${guidanceNow.action} ${baseHint}`;record('HINT_USED')};const kba=currentCase()?.kba;$('#kbaBtn').textContent=kba?`Open KBA: ${kba.shortTitle}`:'Open Knowledge Base Article';const kbNote=document.querySelector('.coach-kb-note');if(kbNote)kbNote.textContent=kba?`Opens “${kba.title}” in a new tab.`:'No article is assigned to this case.';$('#kbaBtn').onclick=openKnowledgeBase;$('#resetCaseBtn').onclick=()=>{d.close();resetCurrentCase();state.caseStatuses[state.currentCaseIndex]='available';go('dashboard')}}
function renderResults(){app.append(template('results-template'));const c=CASE_LIBRARY[state.lastCompletedCaseIndex??state.currentCaseIndex];const elapsed=Math.max(1,Math.round((Date.now()-state.startedAt)/60000));$('#resultTitle').textContent=c.resultTitle;$('#resultDescription').textContent=c.resultDescription;$('#resultOutcome').textContent='Resolved';$('#resultXp').textContent=`+${c.xp}`;$('#resultXp').classList.add('xp-reward');$('#resultReadiness').textContent=`+${c.readiness}%`;$('#resultTime').textContent=`${elapsed} min`;const wrongPrimary=state.actions.some(a=>a.type==='MARK_PRIMARY'&&a.targetId!=='TRN-ACC-001');const wrongUnlock=state.actions.some(a=>a.type==='UNLOCK_ACCOUNT'&&a.targetId!=='TRN-ACC-001');$('#processRating').textContent=wrongPrimary||wrongUnlock?'Recovered':'Strong';const referencedKba=state.actions.some(a=>a.type==='OPEN_KNOWLEDGE_BASE');const kbaCoaching=referencedKba?` You referenced the assigned Knowledge Base Article before completing the case${state.kbaReferenceCount>1?` (${state.kbaReferenceCount} opens)`:''}.`:' You completed the case without opening the assigned Knowledge Base Article. Use the current KBA whenever you need to verify a procedure or required language.';const detailedCopy=c.detailedAdmin?(wrongPrimary||wrongUnlock?'You ultimately resolved the case, but made an account change before confirming the correct primary profile. Compare consumer report status and account activity before taking action.':'You checked Trust & Safety status, verified matching identity details, applied the primary-account hierarchy, kept the duplicate accounts locked, removed their license information, used the required notes, and confirmed the driver could log in.'):scenarioCoaching(c);$('#coachingSummary').textContent=detailedCopy+kbaCoaching;const libraryMode=state.practiceMode==='library';$('#continueShiftBtn').textContent=libraryMode?'Return to Practice Library':state.casesCompleted===CASE_LIBRARY.length?'View Shift Summary':'Continue Shift';$('#continueShiftBtn').onclick=()=>libraryMode?go('library'):advanceShift();$('#repeatCaseBtn').onclick=()=>{const idx=state.lastCompletedCaseIndex;state.caseStatuses[idx]='available';state.currentCaseIndex=idx;state.casesCompleted=Math.max(0,state.casesCompleted-1);state.xp=Math.max(0,state.xp-c.xp);state.readiness=Math.max(0,state.readiness-c.readiness);state.streak=Math.max(0,state.streak-1);resetCurrentCase();go('dashboard')}}
function advanceShift(){if(state.practiceMode==='library'){go('library');return}if(state.casesCompleted===CASE_LIBRARY.length){go('shiftComplete');return}const next=state.caseStatuses.findIndex(s=>s==='queued');state.currentCaseIndex=next;state.caseStatuses[next]='available';resetCurrentCase();go('dashboard')}
function renderShiftComplete(){app.append(template('shift-complete-template'));$('#shiftCasesComplete').textContent=`${state.casesCompleted} / ${CASE_LIBRARY.length}`;$('#shiftXpTotal').textContent=state.xp;$('#shiftReadinessTotal').textContent=`${state.readiness}%`;$('#shiftStreakTotal').textContent=state.streak;$('#restartShiftBtn').onclick=startFullShift}
setInterval(updateShiftTimer,1000);
resetShift();state.route='landing';render();
