import type { Metadata } from "next";
import { EmptyState } from "@/components/empty-state";
import { PageSection } from "@/components/page-section";

export const metadata: Metadata = {
  title: "Projects",
  description: "Create and manage TaskFlow projects.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Projects
        </h1>
        <p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          This area will support creating, viewing, and organizing team
          projects.
        </p>
      </header>

      <PageSection
        title="Your projects"
        description="Planned: authorized users can create projects with a title and description, then view only the projects they own or belong to."
      >
        <EmptyState
          title="No projects yet"
          message="Project creation and listing require authentication and persistent storage. Add a new project here once those workflows are implemented."
        />
      </PageSection>

      <PageSection
        title="Planned capabilities"
        description="Based on the TaskFlow specification and project board."
      >
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          <li>Create projects with validated title and description fields.</li>
          <li>List projects available to the signed-in user.</li>
          <li>Edit or delete projects according to authorization rules.</li>
          <li>Add members so collaborators can work in shared projects.</li>
        </ul>
      </PageSection>
    </div>
  );
}
