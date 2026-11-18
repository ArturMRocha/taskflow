# TaskFlow

TaskFlow is a web-based project management application for students, study groups, small organizations and project teams. It brings projects, task assignments and progress tracking into one shared dashboard.

**Live site:** https://taskflow-wdd-430-14.vercel.app

## Team members

1. Franco Valentino Bruñini
2. Kara Lee Carver
3. Arthur de Menezes Rocha
4. Diego Ledesma

## Problem and solution

Small teams often coordinate responsibilities, deadlines and progress across separate tools. TaskFlow puts project and task organization in one place so teams can see what needs attention and who is responsible. Features are planned in the [project specification](https://github.com/repoProgD/taskflow/blob/main/docs/specification.md).

## Team deliverables

- [Team meeting summary](https://github.com/repoProgD/taskflow/blob/main/docs/team-meeting-summary.md)
- [Project specification](https://github.com/repoProgD/taskflow/blob/main/docs/specification.md)
- [Project board issue drafts](https://github.com/repoProgD/taskflow/blob/main/docs/project-board-issues.md)
- [Code review report and issue draft](https://github.com/repoProgD/taskflow/blob/main/docs/code-review-report.md)

The GitHub Project Board URL and the published code-review issue URL should be added to the relevant documents after those items are created on GitHub.

## Technology

- Next.js (App Router), React, TypeScript (strict)
- Tailwind CSS v4 with the Geist font
- PostgreSQL on Neon, accessed with Prisma 7.10.1
- Hosting: Vercel
- ESLint and Prettier (with `eslint-config-prettier`)
- Authentication: not yet chosen (Auth.js v5 or Clerk)
- Automated tests: not yet set up

## Local setup

1. Clone the repository and run `npm ci`. Do not run `npm install prisma` or `prisma@latest`: versions are pinned.
2. Copy `.env.example` to `.env` and fill in the database URLs (`DATABASE_URL` pooled, `DIRECT_URL` direct). Ask a teammate for the values. Never commit `.env`.
3. Run `npx prisma migrate status` to check the connection.
4. Run `npm run dev` and open http://localhost:3000.

Do not run `prisma migrate dev`, `migrate reset` or `db push` against a shared database. Schema changes go through a pull request.

## Data model

`User`, `Project`, `ProjectMember` (join table with role) and `Task`. Task status values: `TODO`, `IN_PROGRESS`, `COMPLETED`. The schema is in `prisma/schema.prisma`.

## Design (planned)

- Palette: indigo (primary), slate (neutrals), emerald and amber for task states
- Font: Geist
- Tokens will be defined in `globals.css` with Tailwind v4 `@theme`

## API (planned, not yet implemented)

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /api/auth/register | Register a user |
| GET, POST | /api/projects | List / create projects |
| GET, PATCH, DELETE | /api/projects/:projectId | Read / update / delete a project |
| GET, POST | /api/projects/:projectId/tasks | List / create tasks |
| PATCH, DELETE | /api/tasks/:taskId | Update / delete a task |
| GET, PATCH | /api/profile | Read / update profile |

## Workflow

Feature branches, pull requests into `main`, and at least one review before merging. Tasks are tracked on the GitHub Project Board: [add link].

## Known issues and next steps

- Authentication provider not yet chosen
- Automated tests not yet set up
- Migrations are applied to the Neon `dev` branch; the production (`main`) migration is pending