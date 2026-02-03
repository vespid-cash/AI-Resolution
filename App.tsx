
import React, { useState, useEffect, useMemo } from 'react';
import { WEEKENDS_DATA } from './constants';
import { AllTrackerData, TrackerState, ProjectStatus } from './types';
import { Card } from './components/Card';

const STORAGE_KEY = 'ai_resolution_tracker_data';

const DEFAULT_STATE: TrackerState = {
  status: ProjectStatus.NOT_STARTED,
  timeSpent: 0,
  scorecard: {
    outcomeQuality: 0,
    timeSaved: 0,
    repeatability: false,
    useAgain: false,
  },
  toolsUsed: [],
  bestPrompt: '',
  whatDidntWork: '',
  deliverableLink: '',
};

const App: React.FC = () => {
  const [data, setData] = useState<AllTrackerData>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse storage data', e);
      }
    }
    return {};
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Auto-expand logic on initial load
  useEffect(() => {
    const firstIncomplete = WEEKENDS_DATA.find(w => {
      const state = data[w.id] || DEFAULT_STATE;
      return state.status !== ProjectStatus.COMPLETE;
    });
    if (firstIncomplete) {
      setExpandedId(firstIncomplete.id);
    } else {
      setExpandedId(WEEKENDS_DATA[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateWeekend = (id: string, updates: Partial<TrackerState>) => {
    setData(prev => ({
      ...prev,
      [id]: {
        ...(prev[id] || DEFAULT_STATE),
        ...updates
      }
    }));
  };

  const stats = useMemo(() => {
    const weekendCount = WEEKENDS_DATA.length - 1; // 10 weekends + 1 bonus
    const items = WEEKENDS_DATA.map(w => data[w.id] || DEFAULT_STATE);
    const completed = items.filter(i => i.status === ProjectStatus.COMPLETE).length;
    const progress = Math.round((completed / 10) * 100);
    const totalTime = items.reduce((acc, curr) => acc + curr.timeSpent, 0);
    const completeItems = items.filter(i => i.status === ProjectStatus.COMPLETE);
    const avgQuality = completeItems.length > 0 
      ? (completeItems.reduce((acc, curr) => acc + curr.scorecard.outcomeQuality, 0) / completeItems.length).toFixed(1)
      : '0.0';
    const avgTimeSaved = completeItems.length > 0 
      ? (completeItems.reduce((acc, curr) => acc + curr.scorecard.timeSaved, 0) / completeItems.length).toFixed(1)
      : '0.0';

    return { progress, totalTime, completed, avgQuality, avgTimeSaved };
  }, [data]);

  const exportData = () => {
    const blob = new Blob([JSON.stringify({ data, stats, exportedAt: new Date().toISOString() }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-resolution-tracker-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <header className="mb-16 space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
              The AI Resolution <span className="text-accent underline decoration-accent/20 underline-offset-8">Tracker</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase text-xs">
              10 Weekends of Pure Acceleration
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={exportData}
              className="p-3 bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 rounded-2xl hover:bg-gray-50 transition-colors shadow-sm text-gray-600 dark:text-gray-400"
              title="Export JSON"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-3 bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-800 rounded-2xl hover:bg-gray-50 transition-colors shadow-sm"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white dark:bg-dark-card rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-accent/5 border border-gray-100 dark:border-gray-800 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-5xl md:text-6xl font-serif font-bold text-accent">{stats.progress}%</span>
              <p className="text-gray-500 font-medium">Overall Progress</p>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">{stats.totalTime}h</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Hours</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">{stats.completed}/10</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Weekends</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-accent">★ {stats.avgQuality}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Avg Quality</span>
              </div>
            </div>
          </div>
          <div className="relative h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-accent transition-all duration-1000 ease-out rounded-full shadow-lg shadow-accent/20"
              style={{ width: `${stats.progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="space-y-6">
        {WEEKENDS_DATA.map((weekend) => (
          <Card
            key={weekend.id}
            data={weekend}
            state={data[weekend.id] || DEFAULT_STATE}
            isOpen={expandedId === weekend.id}
            onToggle={() => setExpandedId(expandedId === weekend.id ? null : weekend.id)}
            onUpdate={(updates) => updateWeekend(weekend.id, updates)}
          />
        ))}
      </main>

      <footer className="mt-20 py-10 border-t border-gray-100 dark:border-gray-800 text-center space-y-4">
        <p className="text-gray-400 text-sm font-medium italic">
          "The best way to predict the future is to prompt it."
        </p>
        <div className="flex justify-center gap-2">
           <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
           <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
           <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
        </div>
      </footer>
    </div>
  );
};

export default App;
