
import { WeekendData } from './types';

export const TOOLS_LIST = [
  'Claude', 'ChatGPT', 'Gemini', 'Perplexity', 'NotebookLM', 'Gamma', 
  'Google AI Studio', 'Replit', 'Lovable', 'Cursor', 'Bolt', 'Lindy', 
  'n8n', 'Make', 'Zapier', 'Canva', 'Other'
];

export const WEEKENDS_DATA: WeekendData[] = [
  {
    id: 'w1',
    weekendNumber: 1,
    projectName: 'The Vibe Code Kickoff',
    subtitle: 'Build Your Resolution Tracker',
    deliverable: 'A working web app that tracks your progress through these 10 weekends',
    doneWhen: 'Your tracker is live on the internet, you\'ve logged Weekend 1, and you trust you\'ll actually use it',
    coreWork: [
      'Build with a vibe coding tool',
      'Include list of weekends, checkboxes, notes, and progress bar',
      'Deploy live',
      'Log Weekend 1 as complete'
    ],
    advancedModifiers: [
      'User auth',
      'PWA support',
      'Suggest-next-weekend logic',
      'Granular time tracking'
    ]
  },
  {
    id: 'w2',
    weekendNumber: 2,
    projectName: 'The Model Mapping Project',
    subtitle: 'Build Your Personal AI Topography',
    deliverable: 'Model Topography Sheet + "AI Rules of Thumb" document',
    doneWhen: 'You can answer "which tool do I use for what?" in 30 seconds without hesitation',
    coreWork: [
      'Pick 2-3 models',
      'Run same tasks through each (research, writing, strategy, data, visual)',
      'Compare results',
      'Create one-page Rules of Thumb'
    ],
    advancedModifiers: [
      'Test specialized tools',
      'Build matrix with cost & context window',
      'Test consistency',
      'Track editing time per model'
    ]
  },
  {
    id: 'w3',
    weekendNumber: 3,
    projectName: 'The Deep Research Sprint',
    subtitle: 'Let AI Do a Week\'s Research in an Afternoon',
    deliverable: 'A 2-page research brief with a clear recommendation on a real decision',
    doneWhen: 'Your brief leads to a recommendation you\'d actually follow, with known uncertainties',
    coreWork: [
      'Pick a real decision',
      'Use deep research modes',
      'Iterate and push back',
      'Structure as Problem/Findings/Options/Recommendation/Risks'
    ],
    advancedModifiers: [
      'Run same question through all 3 major tools',
      'Meta-analysis of accuracy',
      'Build a fact-check list'
    ]
  },
  {
    id: 'w4',
    weekendNumber: 4,
    projectName: 'The Analysis Project',
    subtitle: 'Turn Messy Data Into Actual Decisions',
    deliverable: 'A cleaned dataset + a one-page Insights Memo with specific actions',
    doneWhen: 'You can name the top 3 drivers of whatever you analyzed and what you\'re going to do about them',
    coreWork: [
      'Gather real data',
      'Use AI to propose cleaning steps/metrics/hypotheses',
      'Produce cleaned data + summary + 3 insights + 3 actions',
      'Write one-page memo'
    ],
    advancedModifiers: [
      'Reusable prompt template',
      'Live data source connection',
      'Compare Claude vs ChatGPT insights'
    ]
  },
  {
    id: 'w5',
    weekendNumber: 5,
    projectName: 'The Visual Reasoning Project',
    subtitle: 'Make AI See and Think',
    deliverable: 'One infographic, diagram, or visual explainer you\'d actually use',
    doneWhen: 'You can explain the idea faster with the visual than with words',
    coreWork: [
      'Pick a concept',
      'Have AI reason about visualization approach',
      'Generate 2 alternate designs',
      'Build it',
      'Visual QA (readable in 5s, one clear takeaway)'
    ],
    advancedModifiers: [
      'Reusable visual system/template',
      'Complex data visualization',
      'Visual pattern library'
    ]
  },
  {
    id: 'w6',
    weekendNumber: 6,
    projectName: 'The Information Pipeline',
    subtitle: 'Build Your NotebookLM + Gamma Stack',
    deliverable: 'A reusable workflow producing Summary + FAQ + Presentation Deck from one input source',
    doneWhen: 'You can brief someone on the material in under 7 minutes using your deck',
    coreWork: [
      'Take a corpus of info',
      'Use NotebookLM for summary/glossary/FAQ/audio',
      'Use Gamma for 8-12 slide deck',
      'Document the workflow'
    ],
    advancedModifiers: [
      'Full repurposing pipeline (audio/deck/one-pager/tweets)',
      'Time comparison to manual',
      'Reusable checklist'
    ]
  },
  {
    id: 'w7',
    weekendNumber: 7,
    projectName: 'The First Automation',
    subtitle: 'Build Your Content Distribution Machine',
    deliverable: 'One working automation handling content production or distribution + a "How It Works" doc',
    doneWhen: 'You\'ve run it twice successfully, it saved you time, and you can explain it',
    coreWork: [
      'Build with Trigger/Transform/Route/Approval/Logging components',
      'Use automation platform',
      'Default project is weekly reading digest'
    ],
    advancedModifiers: [
      'Chain multiple automations',
      'Conditional logic',
      'Error handling',
      'Detailed analytics'
    ]
  },
  {
    id: 'w8',
    weekendNumber: 8,
    projectName: 'The Second Automation',
    subtitle: 'Build Your Productivity Workflow',
    deliverable: 'One working productivity automation + a follow-up dashboard or tracker',
    doneWhen: 'The system creates follow-ups automatically, you trust it, and you have a tracker of open items',
    coreWork: [
      'Same component structure',
      'Pick from inbox follow-up / lead response / meeting prep bot'
    ],
    advancedModifiers: [
      'Feedback loop for output quality',
      'Conversational interface',
      'CRM/tracker dashboard'
    ]
  },
  {
    id: 'w9',
    weekendNumber: 9,
    projectName: 'The Context Engineering Project',
    subtitle: 'Build Your Personal AI Operating System',
    deliverable: 'A structured personal context system + a Professional Context Document for pasting',
    doneWhen: 'You have one place to store/reuse outputs, a Context Doc that improves chats, and a habit to maintain it',
    coreWork: [
      'Create AI OS structure in Notion/Obsidian',
      'Set up capture habit with weekly review',
      'Write Context Doc (role, projects, style, what to avoid)',
      'Deploy for easy copy-paste'
    ],
    advancedModifiers: [
      'Multiple context profiles (work vs personal)',
      'Include writing examples',
      'Quarterly refresh schedule'
    ]
  },
  {
    id: 'w10',
    weekendNumber: 10,
    projectName: 'The AI-Powered Build',
    subtitle: 'Build Something With AI Inside It',
    deliverable: 'A working application that uses AI as a core feature — a chatbot, voice agent, or tool',
    doneWhen: 'You\'ve built and deployed something with AI at its center that you or someone else can actually use',
    coreWork: [
      'Use Google AI Studio or similar',
      'Choose from knowledge chatbot / voice agent / mini-agent',
      'Deploy it'
    ],
    advancedModifiers: [
      'Build for others not just yourself',
      'Train on company knowledge base',
      'Get real feedback',
      'Move from side project to prototype'
    ]
  },
  {
    id: 'bonus',
    weekendNumber: 11,
    projectName: 'The Agent Exploration',
    subtitle: 'Run the Agent Evaluation Gauntlet',
    deliverable: 'Agent Scorecard + Use Cases',
    doneWhen: 'Scorecard completed and best use cases identified',
    coreWork: [
      'Test agents on research+synthesis, operations, and production tasks',
      'Score on accuracy, instruction following, output usefulness, repeatability',
      'Determine safe delegation vs human-in-the-loop'
    ],
    advancedModifiers: [
      'Build your own simple agent using CrewAI or AutoGen'
    ]
  }
];
