const bots = {
  master: {
    name: 'MASTER',
    icon: '🧠',
    role: 'Office Manager',
    room: 'Admin & Command Center',
    description: 'Routes requests to the correct AI employees, consolidates outputs, and serves as the main coordinator of Sir John AI Office.',
    specialties: ['Task routing', 'Cross-team coordination', 'Priority management', 'Quality control'],
    actions: ['Assign a task', 'Summarize office progress', 'Review outputs', 'Open command center']
  },
  scribe: {
    name: 'SCRIBE',
    icon: '✉️',
    role: 'Communications Officer',
    room: 'Admin & Command Center',
    description: 'Drafts emails, letters, announcements, sponsorship requests, parent messages, and formal communications.',
    specialties: ['Emails', 'Letters', 'Messenger chats', 'Announcements'],
    actions: ['Draft an email', 'Write a letter', 'Prepare an announcement', 'Create a message']
  },
  chronos: {
    name: 'CHRONOS',
    icon: '⏰',
    role: 'Executive Secretary',
    room: 'Admin & Command Center',
    description: 'Tracks schedules, deadlines, daily briefings, and future reminders for academic, club, and personal commitments.',
    specialties: ['Scheduling', 'Briefings', 'Reminders', 'Deadlines'],
    actions: ['Plan my day', 'Generate briefing', 'Track deadlines', 'Schedule tasks']
  },
  edu: {
    name: 'EDU',
    icon: '📘',
    role: 'Academic Specialist',
    room: 'Faculty Hub',
    description: 'Creates lesson plans, learning objectives, seatwork, and class activities aligned to your subject needs.',
    specialties: ['Lesson plans', 'SMART objectives', 'Class activities', 'Differentiation'],
    actions: ['Build lesson plan', 'Make objectives', 'Plan activity', 'Prepare remediation']
  },
  assess: {
    name: 'ASSESS',
    icon: '📝',
    role: 'Assessment Specialist',
    room: 'Faculty Hub',
    description: 'Builds quizzes, unit tests, worksheets, rubrics, and answer keys for multiple grade levels.',
    specialties: ['Exams', 'Rubrics', 'Answer keys', 'Performance tasks'],
    actions: ['Create exam', 'Make worksheet', 'Write rubric', 'Generate answer key']
  },
  vision: {
    name: 'VISION',
    icon: '🎨',
    role: 'Creative Designer',
    room: 'Faculty Hub',
    description: 'Creates PowerPoint content, Canva prompts, posters, layouts, and visual teaching resources.',
    specialties: ['Slide decks', 'Canva prompts', 'Posters', 'Visual formatting'],
    actions: ['Build slide content', 'Create Canva prompt', 'Design poster copy', 'Enhance layout']
  },
  forge: {
    name: 'FORGE',
    icon: '🤖',
    role: 'Robotics Engineer',
    room: 'Robotics Lab',
    description: 'Handles Arduino, CyberPi, mBot, robotics tasks, calibration, troubleshooting, and code refinement.',
    specialties: ['Arduino', 'mBot/CyberPi', 'Debugging', 'Competition builds'],
    actions: ['Generate code', 'Fix robot issue', 'Design task', 'Explain wiring']
  },
  nexus: {
    name: 'NEXUS',
    icon: '📍',
    role: 'Events Coordinator',
    room: 'Events & Research Wing',
    description: 'Manages RoboCup, workshops, registrations, schedules, logistics, and event-related planning.',
    specialties: ['RoboCup', 'Registrations', 'Planning', 'Logistics'],
    actions: ['Plan event', 'Draft mechanics', 'Prepare checklist', 'Create invitation']
  },
  athena: {
    name: 'ATHENA',
    icon: '🎓',
    role: 'Research Specialist',
    room: 'Events & Research Wing',
    description: 'Supports doctoral work, proposals, frameworks, questionnaires, literature discussions, and academic integrity.',
    specialties: ['Research writing', 'Methodology', 'Frameworks', 'Academic review'],
    actions: ['Refine title', 'Draft framework', 'Review chapter', 'Improve questionnaire']
  },
  titan: {
    name: 'TITAN',
    icon: '🏆',
    role: 'Sports Coordinator',
    room: 'Sports Office',
    description: 'Handles sports programs, tournaments, training plans, parent notices, and athlete coordination.',
    specialties: ['Team communications', 'Training plans', 'Sports letters', 'Schedules'],
    actions: ['Plan training', 'Make invitation', 'Organize lineup', 'Draft team update']
  },
  ledger: {
    name: 'LEDGER',
    icon: '💰',
    role: 'Finance Officer',
    room: 'Records & Finance',
    description: 'Assists with budgets, cost estimates, payment tracking, loan comparisons, and expense planning.',
    specialties: ['Budgeting', 'Costing', 'Comparisons', 'Expense logs'],
    actions: ['Create budget', 'Compare costs', 'Estimate expenses', 'Track fees']
  }
};

const employeeCard = document.getElementById('employeeCard');
const activityLog = document.getElementById('activityLog');
const buttons = [...document.querySelectorAll('.bot')];

function renderEmployee(key) {
  const bot = bots[key];
  employeeCard.innerHTML = `
    <div class="hero">
      <div class="avatar">${bot.icon}</div>
      <div>
        <h3>${bot.name}</h3>
        <div class="role">${bot.role} • ${bot.room}</div>
      </div>
    </div>
    <p class="description">${bot.description}</p>
    <div class="detail-block">
      <h4>Specialties</h4>
      <div class="tag-list">${bot.specialties.map(item => `<span class="tag">${item}</span>`).join('')}</div>
    </div>
    <div class="detail-block">
      <h4>Available Actions</h4>
      <div class="action-grid">${bot.actions.map(item => `<button type="button" class="action-chip">${item}</button>`).join('')}</div>
    </div>
  `;
}

function addLog(message) {
  const item = document.createElement('li');
  const now = new Date();
  const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  item.innerHTML = `<time>${timestamp}</time>${message}`;
  activityLog.prepend(item);
  const entries = [...activityLog.querySelectorAll('li')];
  entries.slice(8).forEach(el => el.remove());
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    const key = btn.dataset.bot;
    renderEmployee(key);
    document.dispatchEvent(new CustomEvent("employeeSelected", {detail:key}));
    addLog(`<strong>${bots[key].name}</strong> selected. Profile opened for <em>${bots[key].role.toLowerCase()}</em> tasks.`);
  });
});

renderEmployee('master');
document.querySelector('[data-bot="master"]').classList.add('selected');
[
  'Office initialized. MASTER is waiting for instructions.',
  'CHRONOS can later be connected to daily briefings and reminders.',
  'FORGE profile is available for robotics lab tasks and competition support.',
  'Prototype loaded successfully. Click any employee to inspect details.'
].reverse().forEach(addLog);
