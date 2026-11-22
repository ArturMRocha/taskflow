import type { Metadata } from "next";
import { PageSection } from "@/components/page-section";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to access your TaskFlow projects.",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Sign in
        </h1>
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Authentication is not configured yet. This page reserves the entry
          point for the TaskFlow sign-in flow.
        </p>
      </header>

      <PageSection
        title="Planned authentication flow"
        description="The team still needs to choose the authentication provider and session strategy before implementing secure sign-in."
      >
        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          <li>Collect credentials through an accessible sign-in form.</li>
          <li>
            Start a session for valid credentials and route to the dashboard.
          </li>
          <li>
            Show useful errors for invalid credentials without exposing
            sensitive details.
          </li>
          <li>
            Protect private pages and provide sign-out that ends the session.
          </li>
        </ul>
        <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
          Reminder: passwords must never be stored as plaintext. Use the
          selected authentication provider&apos;s secure credential handling.
        </p>
      </PageSection>
    </div>
  );
}
