import type { Metadata } from "next";
import { EmptyState } from "@/components/empty-state";
import { PageSection } from "@/components/page-section";

export const metadata: Metadata = {
  title: "Profile",
  description: "View and update your TaskFlow profile.",
};

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
          Profile
        </h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600">
          Profile management will let signed-in users view and update their
          account information.
        </p>
      </header>

      <PageSection
        title="Account information"
        description="Planned: show editable profile fields for the current user only, with server-side validation."
      >
        <EmptyState
          title="Profile unavailable"
          message="Sign-in and profile data are not connected yet. Once authentication is implemented, this page will display and update your profile."
        />
      </PageSection>

      <PageSection title="Privacy and access">
        <p className="text-sm leading-6 text-slate-700">
          Users must only be able to view and modify their own profile. Invalid
          updates should be rejected without losing existing information.
        </p>
      </PageSection>
    </div>
  );
}
