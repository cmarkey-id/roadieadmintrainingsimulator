const scenarios = [
  {
    id: 'duplicate',
    title: 'Resolve duplicate driver profiles',
    category: 'Driver account access',
    difficulty: '★☆☆',
    available: true,
    prompt: 'A driver is waiting in the incoming chat queue with an account access issue.',
    objective: 'Identify the correct primary account, restore access, remove license information from duplicate profiles, document the relationship and respond to the driver.',
    skills: ['Read an incoming chat for clues', 'Search by phone number', 'Compare related profiles', 'Interpret consumer report and account activity', 'Complete account actions', 'Write a clear case response'],
    steps: [
      { id: 'accepted', label: 'Accept the incoming chat' },
      { id: 'found', label: 'Locate all related profiles' },
      { id: 'reviewed', label: 'Review profile details' },
      { id: 'primary', label: 'Identify the primary account' },
      { id: 'unlocked', label: 'Unlock the primary account' },
      { id: 'cleared', label: 'Clear duplicate license information' },
      { id: 'noted', label: 'Document the relationship' },
      { id: 'responded', label: 'Respond to the driver' }
    ],
    hints: [
      'The driver included a phone number in the chat. Try searching it in Admin.',
      'Compare consumer report status, completed Gigs and recent activity across the profiles.',
      'TRN-ACC-001 has a completed consumer report and the strongest account history.',
      'Duplicate profiles should remain locked. Remove license information from each duplicate profile.',
      'Document the primary profile and duplicates, then return to the chat and explain the next step.'
    ]
  },
  { id: 'locked', title: 'Investigate a locked account', category: 'Account access', difficulty: '★☆☆', available: false, prompt: 'A driver cannot access their account after several failed sign-in attempts.' },
  { id: 'gig', title: 'Investigate a Gig status', category: 'Gig support', difficulty: '★★☆', available: false, prompt: 'A sender asks why a delivery appears complete but the recipient says it was not received.' },
  { id: 'consumer', title: 'Review a consumer report', category: 'Driver onboarding', difficulty: '★★★', available: false, prompt: 'A driver asks why they cannot receive offers yet.' }
];

const initialProfiles = [
  { id: 'TRN-ACC-001', type: 'Driver', name: 'Avery Morgan', email: 'avery.primary@example.test', phone: '5550101002', status: 'Locked', created: 'Apr 12, 2025', updated: 'Jul 20, 2026', consumer: 'Clear', license: 'TRAINING-LIC-001', primary: false, completedGigs: 18, lastGig: 'Jul 18, 2026', trustSafety: 'No permanent deactivation', notes: [] },
  { id: 'TRN-ACC-002', type: 'Driver', name: 'Avery Morgan', email: 'avery.duplicate@example.test', phone: '5550101002', status: 'Locked', created: 'Jul 18, 2026', updated: 'Jul 18, 2026', consumer: 'Not started', license: 'TRAINING-LIC-002', primary: false, completedGigs: 0, lastGig: 'None', trustSafety: 'No permanent deactivation', notes: [] },
  { id: 'TRN-ACC-003', type: 'Driver', name: 'Avery Morgan', email: 'avery.old@example.test', phone: '5550101002', status: 'Locked', created: 'Jun 19, 2024', updated: 'Jan 4, 2025', consumer: 'Pending', license: 'TRAINING-LIC-003', primary: false, completedGigs: 0, lastGig: 'None', trustSafety: 'No permanent deactivation', notes: [] },
  { id: 'TRN-PRO-1001', type: 'Sender', name: 'Northstar Gig Support', email: 'northstar@example.test', phone: '5550101100', status: 'Active', created: 'Jan 19, 2025', updated: 'Jul 19, 2026', consumer: 'N/A', license: 'N/A', primary: false, completedGigs: 'N/A', lastGig: 'N/A', trustSafety: 'N/A', notes: [] }
];

const gigs = [{ id: 'TRN-GIG-169385215', title: 'Return to Store', sender: 'Northstar Gig Support', state: 'Delivered', deadline: 'Jul 21, 2026 10:00 AM', offers: 4, event: 'Delivery Confirmed', support: 'TRN-SUP-1N139DFL' }];

let profiles = [];
let state = {
  route: 'landing',
  scenarioId: null,
  activeProfileId: null,
  query: '',
  startedAt: null,
  hintsUsed: 0,
  progress: {},
  reviewedIds: [],
  lastFeedback: '',
  messages: [],
  copiedPhone: false
};

const app = document.getElementById('app');
const $ = selector => document.querySelector(selector);
const clone = value => JSON.parse(JSON.stringify(value));

function resetData() {
  profiles = clone(initialProfiles);
  state.progress = {};
  state.reviewedIds = [];
  state.hintsUsed = 0;
  state.lastFeedback = '';
  state.messages = [];
  state.copiedPhone = false;
  state.startedAt = Date.now();
}

function currentScenario() { return scenarios.find(s => s.id === state.scenarioId); }
function template(id) { return document.getElementById(id).content.cloneNode(true); }
function go(route, options = {}) { state.route = route; Object.assign(state, options); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function bindRoutes() { document.querySelectorAll('[data-route]').forEach(button => button.addEventListener('click', () => go(button.dataset.route))); }
function openGuide() { $('#guideDialog').showModal(); }

function render() {
  app.innerHTML = '';
  if (state.route === 'landing') renderLanding();
  if (state.route === 'brief') renderBrief();
  if (state.route === 'queue') renderQueue();
  if (state.route === 'chat') renderChat();
  if (state.route === 'search') renderSearch();
  if (state.route === 'profile') renderProfile();
  if (state.route === 'results') renderResults();
  bindRoutes();
  document.querySelectorAll('#openGuideTab').forEach(button => button.onclick = openGuide);
}

function renderLanding() {
  app.append(template('landing-template'));
  const cards = $('#scenarioCards');
  scenarios.forEach(s => {
    const card = document.createElement('article');
    card.className = `scenario-card ${s.available ? 'available' : 'locked'}`;
    card.innerHTML = `<div class="card-meta"><span class="difficulty">${s.difficulty}</span><span class="status-tag ${s.available ? '' : 'soon'}">${s.available ? 'Available' : 'Coming soon'}</span></div><h3>${s.title}</h3><p>${s.prompt}</p><div class="scenario-estimate">Estimated time: 10–15 minutes</div><button class="${s.available ? 'primary' : 'secondary'}" ${s.available ? '' : 'disabled'}>${s.available ? 'Start scenario' : 'Not yet available'}</button>`;
    if (s.available) card.querySelector('button').onclick = () => { state.scenarioId = s.id; go('brief'); };
    cards.append(card);
  });
  $('#browseScenariosBtn').onclick = () => $('#scenarioLibrary').scrollIntoView({ behavior: 'smooth' });
}

function renderBrief() {
  const s = currentScenario() || scenarios[0];
  app.append(template('brief-template'));
  $('#briefDifficulty').textContent = `Difficulty ${s.difficulty}`;
  $('#briefCategory').textContent = s.category;
  $('#briefTitle').textContent = s.title;
  $('#briefPrompt').textContent = s.prompt;
  $('#briefObjective').textContent = s.objective;
  $('#briefSkills').innerHTML = s.skills.map(skill => `<li>${skill}</li>`).join('');
  $('#beginScenarioBtn').onclick = () => { resetData(); state.scenarioId = s.id; state.query = ''; go('queue'); };
}

function renderQueue() {
  app.append(template('queue-template'));
  $('#acceptChatBtn').onclick = () => { state.progress.accepted = true; go('chat'); };
}

function renderChat() {
  app.append(template('chat-template'));
  $('#sentMessages').innerHTML = state.messages.map(message => `<div class="message agent-message"><div class="message-meta"><strong>You</strong><span>${message.time}</span></div><p>${escapeHtml(message.text)}</p></div>`).join('');
  $('#copyPhoneBtn').onclick = async () => {
    state.copiedPhone = true;
    try { await navigator.clipboard.writeText('5550101002'); } catch (error) { /* clipboard may be unavailable from file:// */ }
    $('#copyPhoneBtn').textContent = 'Copied: 5550101002';
    setTimeout(() => { const button = $('#copyPhoneBtn'); if (button) button.textContent = '(555) 010-1002'; }, 1400);
  };
  $('#chatGuideBtn').onclick = openGuide;
  $('#sendReplyBtn').onclick = () => {
    const text = $('#chatReply').value.trim();
    if (!text) return;
    state.messages.push({ text, time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) });
    const hasResolution = /(account|profile|email|review|locked|unlock|access|team|next step|primary)/i.test(text);
    if (state.progress.unlocked && state.progress.cleared && state.progress.noted && hasResolution) {
      state.progress.responded = true;
      state.lastFeedback = 'You returned to the customer conversation and provided a clear response.';
    } else {
      state.lastFeedback = 'Reply sent in training. Finish the Admin actions and explain the account-access outcome before submitting.';
    }
    renderChat();
  };
  mountCoach('#chatCoachMount', true);
}

function filteredProfiles() {
  const q = state.query.trim().toLowerCase();
  return profiles.filter(p => !q || [p.id, p.type, p.name, p.email, p.phone, p.status].some(v => String(v).toLowerCase().includes(q)));
}
function filteredGigs() {
  const q = state.query.trim().toLowerCase();
  return gigs.filter(g => !q || Object.values(g).some(v => String(v).toLowerCase().includes(q)));
}

function renderSearch() {
  app.append(template('search-template'));
  const input = $('#searchInput');
  input.value = state.query;
  const doSearch = () => {
    state.query = input.value;
    if (state.query.replace(/\D/g, '').includes('5550101002')) state.progress.found = true;
    render();
  };
  $('#searchBtn').onclick = doSearch;
  input.addEventListener('keydown', event => { if (event.key === 'Enter') doSearch(); });
  const ps = filteredProfiles();
  const gs = filteredGigs();
  $('#profileCount').textContent = `${ps.length} result${ps.length === 1 ? '' : 's'}`;
  $('#gigCount').textContent = `${gs.length} result${gs.length === 1 ? '' : 's'}`;
  $('#profilesBody').innerHTML = ps.length ? ps.map(p => `<tr><td><a data-profile="${p.id}">${p.id}</a></td><td>${p.type}</td><td>${p.name}</td><td>${p.email}</td><td>${formatPhone(p.phone)}</td><td><span class="mini-pill ${p.status.toLowerCase()}">${p.status}</span></td><td>${p.completedGigs}</td><td>${p.consumer}</td></tr>`).join('') : '<tr><td colspan="8" class="empty-row">No fictional profiles found.</td></tr>';
  $('#gigsBody').innerHTML = gs.length ? gs.map(g => `<tr><td>${g.id}</td><td>${g.title}</td><td>${g.sender}</td><td>${g.state}</td><td>${g.deadline}</td><td>${g.offers}</td><td>${g.event}</td><td>${g.support}</td></tr>`).join('') : '<tr><td colspan="8" class="empty-row">No fictional Gigs found.</td></tr>';
  document.querySelectorAll('[data-profile]').forEach(link => link.onclick = () => {
    state.activeProfileId = link.dataset.profile;
    if (!state.reviewedIds.includes(link.dataset.profile)) state.reviewedIds.push(link.dataset.profile);
    if (state.reviewedIds.filter(id => id.startsWith('TRN-ACC')).length >= 2) state.progress.reviewed = true;
    go('profile');
  });
  mountCoach('#searchCoachMount', true);
}

function renderProfile() {
  const p = profiles.find(profile => profile.id === state.activeProfileId) || profiles[0];
  app.append(template('profile-template'));
  $('#profileStatusPill').textContent = p.status === 'Locked' ? '🔒 Locked' : `✓ ${p.status}`;
  $('#profileStatusPill').className = `pill ${p.status.toLowerCase()}`;
  $('#profileCreated').textContent = `Created ${p.created}`;
  $('#profileName').textContent = `${p.name} · ${p.id}`;
  $('#profileEmail').textContent = p.email;
  $('#profileDetails').innerHTML = detailRows([
    ['Account ID', p.id], ['Account status', p.status], ['Primary account', p.primary ? 'Yes' : 'No'],
    ['Trust & Safety status', p.trustSafety], ['Consumer report status', p.consumer], ['Completed Gigs', p.completedGigs],
    ['Most recent Gig', p.lastGig], ['License information', p.license], ['Phone number', formatPhone(p.phone)],
    ['Email', p.email], ['Created on', p.created], ['Updated on', p.updated]
  ]);
  $('#notesList').innerHTML = p.notes.length ? p.notes.map(note => `<li>${escapeHtml(note)}</li>`).join('') : '<li>No training notes added.</li>';
  $('#markPrimaryBtn').disabled = p.primary;
  $('#unlockBtn').disabled = p.status !== 'Locked';
  $('#clearLicenseBtn').disabled = p.license === 'None' || p.license === 'N/A';
  $('#markPrimaryBtn').onclick = () => confirmAction('Mark primary account', `Mark ${p.id} as the primary account?`, () => actionMarkPrimary(p));
  $('#unlockBtn').onclick = () => confirmAction('Unlock account', `Unlock ${p.id}? Duplicate profiles should remain locked.`, () => actionUnlock(p));
  $('#clearLicenseBtn').onclick = () => confirmAction('Clear license information', `Remove the fictional license information from ${p.id}?`, () => actionClear(p));
  $('#addNoteBtn').onclick = () => openNote(p);
  mountCoach('#coachMount');
}

function detailRows(rows) { return rows.map(([label, value]) => `<span>${label}</span><strong>${value}</strong>`).join(''); }
function formatPhone(phone) { return phone === '5550101002' ? '(555) 010-1002' : phone; }
function escapeHtml(value) { const div = document.createElement('div'); div.textContent = value; return div.innerHTML; }

function setFeedback(message, good = true) {
  state.lastFeedback = message;
  setTimeout(() => {
    const element = $('#coachFeedback');
    if (!element) return;
    element.hidden = false;
    element.textContent = message;
    element.className = `coach-feedback ${good ? 'good' : 'bad'}`;
  }, 0);
}

function confirmAction(title, text, action) {
  $('#confirmTitle').textContent = title;
  $('#confirmText').textContent = text;
  const dialog = $('#confirmDialog');
  dialog.showModal();
  $('#confirmActionBtn').onclick = event => { event.preventDefault(); dialog.close(); action(); };
}

function actionMarkPrimary(p) {
  if (p.id !== 'TRN-ACC-001') { setFeedback('Not quite. Compare the completed consumer report and account activity before selecting the primary profile.', false); return; }
  profiles.forEach(profile => profile.primary = profile.id === p.id);
  state.progress.primary = true;
  state.lastFeedback = 'Correct — this profile has the completed consumer report and established Gig history.';
  renderProfile();
}
function actionUnlock(p) {
  if (p.id !== 'TRN-ACC-001' || !state.progress.primary) { setFeedback('Verify and select the primary account before restoring access. Duplicate profiles should remain locked.', false); return; }
  p.status = 'Active';
  state.progress.unlocked = true;
  state.lastFeedback = 'Access restored on the verified primary account.';
  renderProfile();
}
function actionClear(p) {
  if (p.id === 'TRN-ACC-001') { setFeedback('License information should remain on the verified primary account.', false); return; }
  p.license = 'None';
  const duplicates = profiles.filter(profile => ['TRN-ACC-002', 'TRN-ACC-003'].includes(profile.id));
  state.progress.cleared = duplicates.every(profile => profile.license === 'None');
  state.lastFeedback = state.progress.cleared ? 'License information cleared from both duplicate profiles.' : 'License information cleared. Check the other duplicate profile too.';
  renderProfile();
}
function openNote(p) {
  const dialog = $('#noteDialog');
  $('#noteText').value = '';
  dialog.showModal();
  $('#saveNoteBtn').onclick = event => {
    event.preventDefault();
    const text = $('#noteText').value.trim();
    if (!text) return;
    p.notes.push(text);
    const primary = profiles.find(profile => profile.id === 'TRN-ACC-001');
    const duplicateNotes = profiles.filter(profile => ['TRN-ACC-002', 'TRN-ACC-003'].includes(profile.id)).every(profile => profile.notes.some(note => /duplicate/i.test(note) && /TRN-ACC-001|primary/i.test(note)));
    const primaryNote = primary.notes.some(note => /duplicate/i.test(note) && /(TRN-ACC-002|TRN-ACC-003)/i.test(note));
    state.progress.noted = duplicateNotes && primaryNote;
    state.lastFeedback = state.progress.noted ? 'The primary and duplicate profiles are clearly documented.' : 'Note saved. Add notes to the primary and both duplicate profiles, identifying the relationship.';
    dialog.close();
    renderProfile();
  };
}

function mountCoach(target, compact = false) {
  const s = currentScenario();
  if (!s) return;
  const host = $(target);
  host.innerHTML = '';
  host.append(template('coach-template'));
  $('#coachTitle').textContent = s.title;
  $('#coachPrompt').textContent = 'Incoming chat from Avery Morgan: account locked after trying another sign-up.';
  $('#coachObjective').textContent = s.objective;
  $('#progressList').innerHTML = s.steps.map(step => `<li class="${state.progress[step.id] ? 'done' : ''}"><span class="progress-dot">${state.progress[step.id] ? '✓' : '•'}</span><span>${step.label}</span></li>`).join('');
  $('#hintBtn').onclick = () => {
    const hint = s.hints[Math.min(state.hintsUsed, s.hints.length - 1)];
    state.hintsUsed += 1;
    $('#hintText').hidden = false;
    $('#hintText').textContent = hint;
  };
  $('#kbaBtn').onclick = openGuide;
  $('#resetScenarioBtn').onclick = () => { resetData(); state.query = ''; go('queue'); };
  const complete = s.steps.every(step => state.progress[step.id]);
  $('#submitScenarioBtn').disabled = !complete;
  $('#submitScenarioBtn').onclick = () => go('results');
  if (state.lastFeedback) setFeedback(state.lastFeedback, !/Not quite|Verify|should remain|Finish|Add notes/i.test(state.lastFeedback));
  if (compact) {
    const panel = host.querySelector('.scenario-panel');
    panel.classList.add('compact-coach');
    panel.querySelector('#coachPrompt').remove();
    panel.querySelector('#coachObjective').remove();
  }
}

function renderResults() {
  const s = currentScenario();
  app.append(template('results-template'));
  const elapsed = Math.max(1, Math.round((Date.now() - state.startedAt) / 60000));
  const score = Math.max(60, 100 - state.hintsUsed * 5);
  $('#resultsTitle').textContent = s.title;
  $('#resultsSummary').textContent = 'You completed the support workflow using fictional records and training-safe actions.';
  $('#resultScore').textContent = `${score}%`;
  $('#resultTime').textContent = `${elapsed} min`;
  $('#resultHints').textContent = state.hintsUsed;
  $('#positiveFeedback').innerHTML = ['Accepted and interpreted the incoming chat', 'Located and compared all related profiles', 'Selected the appropriate primary account', 'Kept duplicates locked and removed duplicate license information', 'Documented the relationship and returned to the customer'].map(item => `<li>✓ ${item}</li>`).join('');
  $('#improvementFeedback').textContent = 'The completed consumer report and established Gig history supported the primary-account decision. Keeping duplicate profiles locked, clearing their license information and documenting all related profiles reduced the risk of future access issues.';
  $('#practiceAgainBtn').onclick = () => { resetData(); go('brief'); };
}

document.querySelector('.brand').onclick = () => go('landing');
document.querySelectorAll('.main-nav [data-route]').forEach(button => button.onclick = () => go(button.dataset.route));
resetData();
render();
