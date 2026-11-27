import type { Metadata } from "next";
import { EmptyState } from "@/components/empty-state";
import { PageSection } from "@/components/page-section";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "View TaskFlow project summaries and task progress.",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
          Dashboard
        </h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600">
          Project progress summaries will appear here once authentication and
          project/task data are connected.
        </p>
      </header>

      <PageSection
        title="Project overview"
        description="Planned: list projects available to the signed-in user with total, completed, and incomplete task counts."
      >
        <EmptyState
          title="No projects to summarize"
          message="When project and task workflows are implemented, this area will show progress for each project you can access."
        />
      </PageSection>

      <PageSection
        title="What comes next"
        description="This dashboard is prepared for P0 work from the project board."
      >
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Show projects available to the current user.</li>
          <li>Display task totals and completed vs. incomplete counts.</li>
          <li>
            Provide helpful empty states for users with no projects or tasks.
          </li>
          <li>Keep the layout responsive on mobile and desktop screens.</li>
        </ul>
      </PageSection>
    </div>
  );
}
