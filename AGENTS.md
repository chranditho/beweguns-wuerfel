# Repository Guidelines

## Project Structure & Module Organization
- `src/routes`: SvelteKit route pages and endpoints. Route folders map to URL paths (e.g., `src/routes/kontakt/+page.svelte` → `/kontakt`).
- `src/lib/components`: Reusable UI components (`Nav.svelte`, `TeamMember.svelte`, `FotoCard.svelte`).
- `src/lib/assets`: Local assets used by components (team images live under `src/lib/assets/team-images`).
- `static`: Public assets served as-is (e.g., `static/favicon.jpg`).
- `src/routes/api`: Server endpoints (contact form at `src/routes/api/contact/+server.ts`).

## Build, Test, and Development Commands
- `npm run dev`: Start the Vite dev server.
- `npm run dev -- --open`: Start dev server and open a browser tab.
- `npm run build`: Build the production bundle.
- `npm run preview`: Preview the production build locally.
- `npm run check`: Run `svelte-check` with the project `tsconfig`.
- `npm run lint`: Run Prettier checks and ESLint.
- `npm run format`: Format all files with Prettier.
- `npm run test`: Run Vitest in CI mode (`--run`).
- `npm run test:unit`: Run Vitest in watch mode.

## Coding Style & Naming Conventions
- Indentation: tabs; max line length 100; single quotes.
- Svelte + Tailwind are used; styles live in `src/app.css` and component `<style>` blocks.
- Component names use PascalCase (`TeamMember.svelte`), routes use SvelteKit conventions (`+page.svelte`, `+server.ts`) and kebab-case folders.
- Prettier and ESLint are the source of truth; run `npm run format` before commits.

## Testing Guidelines
- Framework: Vitest + Testing Library (`vitest-setup-client.ts` provides DOM mocks).
- Test files should use `*.test.ts` or `*.test.svelte` naming and live near the feature being tested.
- Run `npm run test` for CI-style runs; use `npm run test:unit` locally for watch mode.

## Commit & Pull Request Guidelines
- Recent commits favor short, lowercase summaries (e.g., “update dependencies”); keep messages concise and action-focused.
- PRs should include: a brief description, linked issue (if any), and screenshots for UI changes.
- Note any config changes (env vars, API keys, Vercel settings) in the PR description.

## Security & Configuration Tips
- Contact form uses Resend; set `RESEND_API_KEY` in `.env.local` and Vercel settings.
- Update sender/recipient values in `src/routes/api/contact/+server.ts` when changing domains or recipients.
- Never commit API keys or secrets.
