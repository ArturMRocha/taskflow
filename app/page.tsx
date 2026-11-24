import Link from "next/link";
import { EmptyState } from "@/components/empty-state";
import { PageSection } from "@/components/page-section";
import { TASK_STATUS_LABELS } from "@/lib/taskflow";

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
      <section className="rounded-3xl border border-zinc-200 bg-white px-6 py-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Team task management
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          Organize projects, assign tasks, and track progress in one place.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          TaskFlow is being built for students and small teams who need a clear
          view of responsibilities, deadlines, and project status.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:ring-zinc-50"
          >
            Open dashboard
          </Link>
          <Link
            href="/login"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900 dark:focus-visible:ring-zinc-50"
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
              className="rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            >
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
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
          {Object.values(TASK_STATUS_LABELS).map((label) => (
            <li
              key={label}
              className="rounded-xl bg-zinc-100 px-4 py-3 text-sm font-medium text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
            >
              {label}
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
