# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Onboard is a marketing/landing page for an employee onboarding SaaS product. It is a single-page Next.js 15 app (App Router) with no backend, no API routes, and no database — purely a static frontend.

## Commands

- `npm run dev` — start dev server (binds to 127.0.0.1)
- `npm run build` — production build
- `npm run lint` — ESLint via next lint

## Architecture

Single-page app with one route (`app/page.tsx`), rendered as a client component. The page composes nine section components in order:

`Navbar → Hero → LogoStrip → HowItWorks → AISection → Features → Testimonials → Pricing → Footer`

All section components live in `components/` and are self-contained — each defines its own data (cards, steps, plans, testimonials) as module-level constants and renders them inline. There is no shared state, no context providers, and no data fetching.

## Styling

- Tailwind CSS 3 with inline utility classes (no component library)
- Custom design tokens in `tailwind.config.ts`: accent colors (`accent: #4F6EF7`, `accent-green: #22C55E`), font families (`Inter` for body, `Instrument Serif` for display/italic headings), and float/fade-up animations
- Global styles in `app/globals.css`: base background `#f0efed`, custom `.badge`, `.card-fan`, and `.no-scrollbar` utilities
- Some components inject `<style>` tags for scoped keyframe animations (Hero bubbles, LogoStrip scroll)
- Framer Motion and Lucide React are installed but not currently used in any component

## Conventions

- Components use `"use client"` when they need hooks (Navbar, Hero, AISection, Pricing); the rest are server-compatible but rendered under a client page
- Anchor navigation via `id` attributes: `#how`, `#ai`, `#pricing`
- Path alias `@/*` maps to project root (configured in `tsconfig.json`)

## Development Rules

- Write a one line explaination whenever you add a function.

### Understand before changing
- Read the surrounding code, tests, and recent commits before editing. Match existing patterns unless they are demonstrably wrong.
- Reproduce a bug locally before attempting a fix. No speculative patches.
- When requirements are ambiguous, ask one focused question or state the assumption you are proceeding with.

### Design and code quality
- Optimize for readability and the next engineer, not cleverness. Names should reveal intent.
- Keep functions small and single-purpose. Separate pure logic from I/O, business rules from frameworks.
- Apply DRY only after the third repetition; premature abstraction is worse than duplication.
- Favor YAGNI: build for the requirement in front of you, not an imagined one.
- Use the type system to make invalid states unrepresentable. Push validation to module boundaries; trust internal calls.
- Prefer composition over inheritance, immutability over mutation, and explicit over implicit.
- Comments explain *why* and trade-offs, never *what*. The code shows the *what*.

### Error handling and resilience
- Fail fast on programmer errors; recover gracefully on operational errors.
- Never swallow exceptions. Log with enough context (inputs, ids, correlation) to debug from logs alone.
- At every external boundary (network, disk, subprocess) assume failure: timeouts, retries with backoff, idempotency.
- Validate and sanitize all untrusted input. Use parameterized queries; never string-concat SQL.

### Testing
- Test observable behavior, not implementation details. Refactors should not break tests.
- Follow the test pyramid: many fast unit tests, fewer integration tests, a thin layer of E2E.
- Cover the unhappy path: empty inputs, boundaries, timeouts, partial failures, concurrency.
- A bug fix starts with a failing test that reproduces it.
- Tests must be deterministic. No `sleep`-based timing, no shared mutable fixtures, no order dependence.

### Security
- Never commit secrets. Use `.env` (gitignored), `direnv`, or a secret manager. Rotate anything that leaks.
- Apply least privilege to credentials, service accounts, and file permissions.
- Keep dependencies current; review and pin lockfiles. Audit CVEs before upgrading major versions.
- Treat all user input, env vars, and third-party data as hostile until validated.

### Performance
- Measure before optimizing. Profile, don't guess.
- Choose the right algorithm and data structure first; micro-optimizations second.
- Know the size of your data and the cost of your hot paths (Big-O, allocations, network round-trips, N+1 queries).

### Version control and commits
- Commit small, atomic, logically coherent changes. One concern per commit.
- Write commit messages with an imperative subject (≤72 chars) and a body explaining *why* and noting trade-offs.
- Keep `main` deployable. Develop on feature branches; rebase to a clean history before merging.
- Never force-push shared branches. Never rewrite history that others have pulled.

### Code review
- Self-review the diff before requesting review. Read it as if you wrote none of it.
- Review for: correctness, design, security, readability, tests, observability — in that order.
- Be specific and kind. Distinguish blocking issues from suggestions and nits.

### Dependencies and tooling
- Prefer the standard library and boring, proven tools. New dependencies require a justification.
- Pin versions; commit lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `requirements.txt`, etc.).
- Reproducible environments: virtualenvs for Python, nvm for Node, Docker where setup is non-trivial.
- Automate repeatable work: scripts, Makefiles, CI. If a step is run twice, script it.

### Pragmatism
- Working software beats perfect software. Ship the smallest useful slice, then iterate.
- Tech debt is taken on deliberately, tracked, and paid down on a schedule. Accidental debt is a process failure.
- Time-box exploration. If stuck for more than ~30 minutes, change approach or ask.
- Know when to delete code. Less code is the highest-leverage refactor.
