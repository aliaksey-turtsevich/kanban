export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  status: string; // ID column wherere task is located
}

export interface Column {
  id: string;
  title: string;
}

export interface TaskCardProps {
  task: Task;
  onDelete?: (id: string) => void;
}
