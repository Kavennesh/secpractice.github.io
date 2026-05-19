// ============================================================
// app.js — Shared logic and localStorage helpers
// CompTIA Security+ SY0-701 Study App
// ============================================================

const APP_KEY = 'sy0701_';

// ---- Storage helpers ----
const store = {
  get: (key) => {
    try { return JSON.parse(localStorage.getItem(APP_KEY + key)); }
    catch { return null; }
  },
  set: (key, val) => {
    try { localStorage.setItem(APP_KEY + key, JSON.stringify(val)); return true; }
    catch { return false; }
  },
  remove: (key) => localStorage.removeItem(APP_KEY + key)
};

// ---- Attempt recording ----
// Each attempt: { qid, correct: bool, domain, domainId, ts: epoch_ms }
function recordAttempt(qid, isCorrect, domain, domainId) {
  const attempts = store.get('attempts') || [];
  attempts.push({ qid, correct: isCorrect, domain, domainId, ts: Date.now() });
  store.set('attempts', attempts);
}

function getAllAttempts() {
  return store.get('attempts') || [];
}

// ---- Stats helpers ----
function getTodayAttempts() {
  const today = new Date(); today.setHours(0,0,0,0);
  return getAllAttempts().filter(a => a.ts >= today.getTime());
}

function getAttemptsByDomain() {
  const attempts = getAllAttempts();
  const byDomain = {};
  attempts.forEach(a => {
    if (!byDomain[a.domainId]) byDomain[a.domainId] = { domain: a.domain, domainId: a.domainId, total: 0, correct: 0 };
    byDomain[a.domainId].total++;
    if (a.correct) byDomain[a.domainId].correct++;
  });
  return byDomain;
}

function getWeakestDomains(n = 3) {
  const byDomain = getAttemptsByDomain();
  const domainList = Object.values(byDomain).filter(d => d.total >= 2);
  domainList.sort((a, b) => (a.correct/a.total) - (b.correct/b.total));
  return domainList.slice(0, n);
}

function getDailyStats(days = 14) {
  const attempts = getAllAttempts();
  const result = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(); d.setHours(0,0,0,0);
    d.setDate(d.getDate() - i);
    const nextD = new Date(d); nextD.setDate(nextD.getDate() + 1);
    const dayAttempts = attempts.filter(a => a.ts >= d.getTime() && a.ts < nextD.getTime());
    const correct = dayAttempts.filter(a => a.correct).length;
    result.push({
      date: d,
      label: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      total: dayAttempts.length,
      correct,
      pct: dayAttempts.length > 0 ? Math.round(correct / dayAttempts.length * 100) : null
    });
  }
  return result;
}

// ---- Wrong question IDs ----
function getWrongQuestionIds() {
  const attempts = getAllAttempts();
  const wrongSet = new Set();
  const correctSet = new Set();
  attempts.forEach(a => {
    if (a.correct) correctSet.add(a.qid);
    else wrongSet.add(a.qid);
  });
  // Return IDs that were EVER wrong and NEVER correct (still need work)
  // or simplify: IDs that were wrong at least once
  return [...wrongSet];
}

// ---- Custom questions (user-added) ----
function getCustomQuestions() {
  return store.get('custom_questions') || [];
}
function saveCustomQuestion(q) {
  const customs = getCustomQuestions();
  q.id = 'c' + Date.now();
  q.domainId = parseInt(q.domainId);
  customs.push(q);
  store.set('custom_questions', customs);
  return q;
}

// ---- Get all questions (built-in + custom) ----
function getAllQuestions() {
  if (typeof questions === 'undefined') return [];
  return [...questions, ...getCustomQuestions()];
}

// ---- Domain colors ----
const DOMAIN_COLORS = {
  1: { bg: '#7c3aed', light: '#ede9fe', text: '#7c3aed', name: 'General Security Concepts' },
  2: { bg: '#ea580c', light: '#ffedd5', text: '#ea580c', name: 'Threats, Vulnerabilities & Mitigations' },
  3: { bg: '#0891b2', light: '#cffafe', text: '#0891b2', name: 'Security Architecture' },
  4: { bg: '#d97706', light: '#fef3c7', text: '#d97706', name: 'Security Operations' },
  5: { bg: '#16a34a', light: '#dcfce7', text: '#16a34a', name: 'Security Program Mgmt & Oversight' },
};

function domainColor(domainId) {
  return DOMAIN_COLORS[domainId] || { bg: '#6b7280', light: '#f3f4f6', text: '#6b7280', name: 'Unknown' };
}

// ---- Exam countdown ----
function getCountdown() {
  const examDate = new Date('2026-06-14T09:00:00');
  const now = new Date();
  const diff = examDate - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, label: 'Exam day!' };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, minutes };
}

// ---- Reset all progress ----
function resetAllProgress() {
  store.remove('attempts');
  store.remove('custom_questions');
  store.remove('practice_session');
}

// ---- Active nav highlight ----
function highlightNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === page);
  });
}

document.addEventListener('DOMContentLoaded', highlightNav);
