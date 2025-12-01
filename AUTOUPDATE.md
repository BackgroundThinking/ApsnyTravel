# AUTOUPDATE Playbook for ApsnyTravel

This document is the **canonical playbook** for ongoing maintenance and **AI-assisted auto-update cycles** for the ApsnyTravel repository.

It defines how to keep the codebase healthy, the content fresh, and the documentation aligned with reality, while strictly respecting the project's proprietary nature and governance model.

## Quick Start

> **To start a maintenance cycle immediately:**
> Type **`/autoupdate`** to @Jules or any attached AI agent.

## 1. Purpose & Scope

**"Auto-Update"** in this context refers to a **semi-automated, human-supervised process** where AI agents (like @Jules) analyze the repo and propose updates to ensure:

1.  **Technical Health:** Dependencies, linting, tests, and build stability.
2.  **Content Relevance:** Tour details, pricing (simulated), and brand assets.
3.  **Doc Alignment:** Documentation accurately reflects the code and deployed environment.

**Audience:**

- **Human Maintainers:** To understand how to trigger and review maintenance cycles.
- **AI Agents:** To understand their specific duties, constraints, and safe operation limits during maintenance.

## 2. Stack & Sources of Truth

When in doubt, the **Code and Production Environment** are the final authorities. Documentation is secondary and must be updated to match them.

- **Canonical Codebase:** The file tree in this repository (no `src/` directory).
- **Domain Entities:** Defined in `GRAPH.md` and enforced by types in `types.ts`.
- **Brand Configuration:** `lib/branding.ts` is the single source of truth for contact info and brand identity.
- **Business Logic:** `lib/booking.ts` (validation) and `lib/api.ts` (data fetching).
- **Environment:**
  - `VITE_API_URL` (optional remote API).
  - `VITE_BOOKING_ENDPOINT` (required for production booking).

> **Rule:** If `AUTOUPDATE.md` conflicts with the actual code behavior, the code wins (and this doc should be fixed).

## 3. The Auto-Update Cycle

A maintenance cycle follows this repeatable loop:

**`Trigger → Recon → Plan → Apply → Validate → Report`**

**Standard Trigger:** The command **`/autoupdate`** issued by a human immediately initiates this cycle.

### 1. Recon (Analysis)

- **AI:** Scans `package.json`, checks `npm outdated` (if available) or analyzes dependency versions, reads `lib/branding.ts`, and reviews `docs/` for pending tasks.
- **Human:** Provides specific intent (e.g., "Run a monthly health check" or "Update tour prices").

### 2. Plan (Proposal)

- **AI:** Proposes a clear set of steps in a `markdown` list.
  - _Example:_ "1. Update `zod` to v3.22. 2. Fix lint errors in `App.tsx`. 3. Update `README.md` version."
- **Human:** Reviews and approves the plan.

### 3. Apply (Execution)

- **AI:** Generates specific file changes or diffs.
- **Human:** Applies the changes or runs the commands.

### 4. Validate (Verification)

- **AI:** Instructions for verification.
- **Human:** Runs `npm run lint`, `npm test`, `npm run build`, and manually checks the UI.

### 5. Report (Documentation)

- **AI:** Summarizes changes in a PR description or commit message.
- **Human:** Merges the PR to the main branch.

## 4. Roles & Responsibilities

| Role                   | Who              | Responsibilities                                                                                            |
| :--------------------- | :--------------- | :---------------------------------------------------------------------------------------------------------- |
| **Owner / Maintainer** | Egor / Alexander | **Decisions & Merging.** Triggers cycles, reviews proposals, runs local commands, and pushes to production. |
| **Primary Engineer**   | @Jules (AI)      | **Implementation & Docs.** detailed analysis, code generation, refactoring, and updating documentation.     |
| **Advisor**            | Other Agents     | **Ideation & Review.** High-level suggestions, copy drafting, and double-checking @Jules' work.             |

**Governance:**

- **AI Proposes.**
- **Humans Review, Decide, & Merge.**

## 5. Maintenance Task Library

### A. Technical Health (Monthly)

- **Dependency Audit:** Check for major updates to React, Vite, or Tailwind. _Note: Prioritize stability over newness._
- **Code Quality:** Run `npm run lint` and propose fixes for any warnings.
- **Test Coverage:** Ensure core logic in `lib/` has corresponding tests in `*.spec.ts`.

### B. Content & Brand (As Needed)

- **Brand Asset Audit:** specific check of `lib/branding.ts` against current business details.
- **Tour Data:** Update mock data in `constants.ts` if new tours are added.

### C. Booking & Safety (Pre-Season)

- **Validation Check:** Review Zod schemas in `lib/booking.ts` for loose constraints.
- **Endpoint Verify:** Confirm `VITE_BOOKING_ENDPOINT` handling in `lib/api.ts` is robust.

### D. Docs & Governance (Continuous)

- **Constellation Alignment:** Ensure `README.md`, `AGENT.md`, `INDEX.md`, and `GRAPH.md` are consistent.
- **Auto-Update:** Self-correction of this file (`AUTOUPDATE.md`) if processes change.

## 6. How AI Agents Operate During Maintenance

When performing maintenance, @Jules and other agents must:

1.  **Read First:** Always start by reading `AUTOUPDATE.md` and `package.json`.
2.  **Surgical Edits:** Prefer minimal changes. Do not rewrite `App.tsx` if only a typo needs fixing.
3.  **Trace Dependencies:** If modifying a type in `types.ts`, immediately grep for usage to prevent build breaks.
4.  **Preserve Comments:** Do not remove `TODO` or `FIXME` markers unless the task is actually completed.
5.  **Validation Instructions:** Always end a turn with: _"Please run `npm run lint && npm run build` to verify."_

## 7. Operational Checklists

### Checklist: Run One Maintenance Cycle

- [ ] **Goal Defined:** (e.g., "Update dependencies and fix linting").
- [ ] **Recon:** Agent has listed files to touch.
- [ ] **Backup:** Git branch created (e.g., `maintenance/dec-2023`).
- [ ] **Apply:** Changes applied to code.
- [ ] **Verify:** `npm run lint` passes.
- [ ] **Verify:** `npm run build` passes.
- [ ] **Verify:** `npm test` passes.
- [ ] **Docs:** `README.md` or `AUTOUPDATE.md` updated if process changed.
- [ ] **Merge:** PR reviewed and merged by human.

### Checklist: Updating the Doc Constellation

- [ ] **Graph:** Does the change affect the architecture? Update `GRAPH.md`.
- [ ] **Index:** Is there a new document? Update `INDEX.md`.
- [ ] **Agent:** Does it change AI behavior? Update `AGENT.md`.
- [ ] **Readme:** Is it a critical project fact? Update `README.md`.

## 8. Cross-References

- **`AGENT.md`**: Defines **who** the agents are and their behavioral "personality".
- **`CONTRIBUTING.md`**: Defines the **Git workflow** (PRs, branches) required to submit maintenance work.
- **`README.md`**: The technical overview and setup guide.
- **`GRAPH.md`**: The visual map of the system; consult this before structural refactoring.
