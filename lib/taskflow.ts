export const TASK_STATUSES = ["todo", "in_progress", "completed"] as const;

export type TaskStatus = (typeof TASK_STATUSES)[number];

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  todo: "To Do",
  in_progress: "In Progress",
  completed: "Completed",
};

export interface User {
  id: string;
  name: string;
  email: string;
  profileInfo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  ownerId: string;
  memberIds: string[];
  dueDate?: string;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  assignedUserId?: string;
}

export interface ProjectSummary {
  project: Project;
  totalTasks: number;
  completedTasks: number;
  incompleteTasks: number;
}

export function isTaskStatus(value: string): value is TaskStatus {
  return (TASK_STATUSES as readonly string[]).includes(value);
}

export function getTaskProgress(tasks: Pick<Task, "status">[]): {
  total: number;
  completed: number;
  incomplete: number;
} {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.status === "completed").length;

  return {
    total,
    completed,
    incomplete: total - completed,
  };
}
