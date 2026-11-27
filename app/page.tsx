import Link from "next/link";
import { EmptyState } from "@/components/empty-state";
import { PageSection } from "@/components/page-section";
import {
  TASK_STATUSES,
  TASK_STATUS_LABELS,
  type TaskStatus,
} from "@/lib/taskflow";

const taskStatusStyles: Record<TaskStatus, string> = {
  TODO: "bg-slate-100 text-slate-800",
  IN_PROGRESS: "bg-amber-100 text-amber-900",
  COMPLETED: "bg-emerald-100 text-emerald-900",
};

const plannedAreas = [
  {
    title: "Dashboard",
    description:
      "View project summaries, task totals, and progress at a glance.",
    href: "/dashboard",
  },
  {
    title: "Projects",
    description:
      "Create and organize team projects with clear ownership and membership.",
    href: "/projects",
  },
  {
    title: "Profile",
    description: "Manage your account information and personal preferences.",
    href: "/profile",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Team task management
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Organize projects, assign tasks, and track progress in one place.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          TaskFlow is being built for students and small teams who need a clear
          view of responsibilities, deadlines, and project status.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Open dashboard
          </Link>
          <Link
            href="/login"
            className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Sign in (planned)
          </Link>
        </div>
      </section>

      <PageSection
        title="Planned core areas"
        description="These routes provide the initial structure for Week 04 progress. Feature workflows will be connected as authentication, data storage, and project/task logic are implemented."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {plannedAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-xl border border-slate-200 p-5 transition-colors hover:border-indigo-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {area.description}
              </p>
            </Link>
          ))}
        </div>
      </PageSection>

      <PageSection
        title="Task status workflow"
        description="TaskFlow tracks work using the statuses defined in the project specification."
      >
        <ul className="grid gap-3 sm:grid-cols-3">
          {TASK_STATUSES.map((status) => (
            <li
              key={status}
              className={`rounded-xl px-4 py-3 text-sm font-medium ${taskStatusStyles[status]}`}
            >
              {TASK_STATUS_LABELS[status]}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <EmptyState
            title="No projects or tasks yet"
            message="Authentication, project creation, and task management are planned next. Use this workspace to continue implementing the assigned feature from the project board."
          />
        </div>
      </PageSection>
    </div>
  );
}
