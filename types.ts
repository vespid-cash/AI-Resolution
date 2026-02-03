
export enum ProjectStatus {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In Progress',
  COMPLETE = 'Complete',
  SKIPPED = 'Skipped'
}

export interface Scorecard {
  outcomeQuality: number; // 1-5
  timeSaved: number; // 1-5
  repeatability: boolean;
  useAgain: boolean;
}

export interface WeekendData {
  id: string;
  weekendNumber: number;
  projectName: string;
  subtitle: string;
  deliverable: string;
  doneWhen: string;
  coreWork: string[];
  advancedModifiers: string[];
}

export interface TrackerState {
  status: ProjectStatus;
  timeSpent: number;
  scorecard: Scorecard;
  toolsUsed: string[];
  bestPrompt: string;
  whatDidntWork: string;
  deliverableLink: string;
}

export type AllTrackerData = Record<string, TrackerState>;
