# Copilot Instructions — TaskFlow

## Project overview

TaskFlow is a web-based project and task management application for students and small teams. The current repository is an early Next.js App Router codebase; core product workflows are defined in [docs/specification.md](../docs/specification.md) and planned backlog items are drafted in [docs/project-board-issues.md](../docs/project-board-issues.md).

## Stack (current)

- **Framework:** Next.js 16 App Router (`app/` directory)
- **UI:** React 19
- **Language:** TypeScript (strict mode enabled in [tsconfig.json](../tsconfig.json)); avoid `any`
- **Styling:** Tailwind CSS v4 utilities; add custom CSS only when necessary
- **Linting/formatting:** ESLint ([eslint.config.mjs](../eslint.config.mjs)) and Prettier ([.prettierrc](../.prettierrc), [.prettierignore](../.prettierignore))
- **Not configured yet:** authentication provider, persistent database/storage, and automated test tooling. Do not assume these exist unless they are added to the codebase.

## Repository structure

- `app/` — App Router routes, layouts, pages, and route handlers
- `components/` — shared/reusable UI components
- `lib/` — domain types, constants, helpers, and future data/access logic
- `docs/` — project specification, issue drafts, meeting notes, and reports
- `public/` — static assets

## Conventions and guardrails

- Prefer **Server Components** by default. Add `"use client"` only when browser-side interactivity or client-only APIs are required.
- Use semantic HTML, accessible labels, keyboard-operable controls, and visible focus states.
- Validate all untrusted form/API input on the server. Never trust client-only validation.
- Enforce authorization on every project/task/profile operation on the server (when backend/auth are implemented).
- **Never store passwords as plaintext.** Use the chosen authentication provider's secure credential handling.
- Keep changes focused and aligned with the specification and assigned issue/acceptance criteria.
- Update or add documentation when behavior, decisions, or setup steps change.

## Domain model (from specification)

- **User:** name, email, secure password credential (handled by auth provider), profile information.
- **Project:** title, description, owner, members, optional due date.
- **Task:** title, description, status, assigned user, project reference.
- **Task statuses:** `todo` (To Do), `in_progress` (In Progress), `completed` (Completed).

## Planned product areas (P0/P1)

- Authentication (register, sign in/out), protected access
- Project create/list/read/update/delete and membership
- Task create/assign/edit/delete and status tracking
- Dashboard/progress summaries
- Profile management

See [docs/specification.md](../docs/specification.md) for user stories, acceptance criteria, and proposed API endpoints.

## Open decisions

- Authentication provider and session strategy
- Persistent database/storage and data access layer
- Project sharing/invitation flow details
- Automated test framework and CI/testing strategy
- Deployment/testing environments

Document and follow team decisions once made; do not silently introduce conflicting approaches.

## Development commands

- `npm install` — install dependencies
- `npm run dev` — start local dev server
- `npm run lint` — run ESLint
- `npm run format` — format with Prettier
- `npm run format:check` — verify formatting

## Workflow

- Use feature branches (e.g. `feature/<name>`); do not push directly to `main`.
- Open pull requests for review; include what the change does, known issues/incomplete work, and related issue numbers.
- Keep PRs meaningful and reviewable; leave feature PRs open when required for peer review.
- Update the project board/issues to reflect actual progress and blockers.

## Notes for AI assistance

- Treat this file as team guidance, but verify against the current code and docs before making changes.
- Prefer incremental, verifiable progress that matches acceptance criteria.
- If a requested change depends on an open decision (auth/db/tests), state the assumption and implement the smallest compatible foundation.
