export type Priority = 'Low' | 'Medium' | 'High';

export interface TaskCard {
  id: string;
  title: string;
  description?: string;
  priority?: Priority;
}

export interface Column {
  id: string;
  title: string;
  color: string;
  tasks: TaskCard[];
}

export interface Board {
  columns: Column[];
}
