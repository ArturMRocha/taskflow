import type {
  Project as PrismaProject,
  Task as PrismaTask,
  TaskStatus as PrismaTaskStatus,
  User as PrismaUser,
} from "@/generated/prisma/client";

export const TASK_STATUSES = [
  "TODO",
  "IN_PROGRESS",
  "COMPLETED",
] as const satisfies readonly PrismaTaskStatus[];

export type TaskStatus = PrismaTaskStatus;

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
};

export type User = Pick<PrismaUser, "id" | "name" | "email" | "bio" | "image">;

export type Project = Pick<
  PrismaProject,
  "id" | "title" | "description" | "dueDate" | "ownerId"
>;

export type Task = Pick<
  PrismaTask,
  "id" | "projectId" | "title" | "description" | "status" | "assigneeId"
>;

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
  const completed = tasks.filter((task) => task.status === "COMPLETED").length;

  return {
    total,
    completed,
    incomplete: total - completed,
  };
}
