# AGENT Guidelines for ApsnyTravel

This document defines how AI agents should behave when attached to this repository, and how humans should work with them safely and effectively.

## 1. Introduction

**ApsnyTravel** is a boutique, personal-brand travel platform for **Alexander**, a private guide specializing in curated tours and VIP transfers across Sochi, Krasnaya Polyana, and Abkhazia. The project emphasizes trust, authenticity, and high-quality experiences, avoiding tourist traps and commission-based stops.

In ApsnyTravel, **AI agents propose; humans review, decide, and merge.** Humans remain the final decision-makers and are responsible for all changes shipped to production.

## 2. AI Agent Roles & Types

We define specific roles to ensure clarity and accountability:

*   **@Jules (Primary Engineering & Documentation Agent)**
    *   **Responsibilities:** Implementation of features, code refactoring, type safety, data fetching logic, and maintaining the "source of truth" in documentation.
    *   **Scope:** Full-stack (React, TypeScript, Vite, Tailwind, Zod).
*   **Secondary Agents (e.g., ChatGPT, Claude)**
    *   **Responsibilities:** Ideation, high-level architecture design, drafting copy, and providing second opinions on complex logic.
    *   **Scope:** Advisory and generative; often used to prepare prompts or review @Jules' work.
*   **Audit & Review Agents**
    *   **Responsibilities:** Analyzing Developer Experience (DX), performance patterns, test coverage, and architectural consistency.

> **Meta-Rule:** All AI agents must respect the rules in this document regardless of their provider (Gemini, ChatGPT, Claude, etc.).

## 3. General Behavior Principles

All AI agents must adhere to these three pillars:

### Pillar 1: Grounded in Reality
*   **Verify before referencing:** Always verify the existence of files, scripts, and env vars by inspecting the repository tree and actual files (e.g., checking `package.json` → `scripts`) before referencing them.
*   **No `src/` Directory:** This project uses a flat structure. Code resides in `components/`, `lib/`, and `pages/` at the root. Do not hallucinate a `src/` directory.
*   **Explicit Assumptions:** If you must assume something due to missing context, explicitly state it as an assumption.

### Pillar 2: Safety & Validation
*   **Protect the Schema:** **Never** weaken or remove Zod schemas (e.g., booking and form schemas under `lib/` and related components) without explicit human instruction.
*   **Secure Secrets:** **Never** expose internal API keys, secrets, or internal URLs not meant for users.

### Pillar 3: Brand & Business Alignment
*   **Protect the Personal Brand:** Alexander’s name and reputation are central; AI outputs must never undermine trust or overpromise on safety, comfort, or experience.
*   **Flag Sensitive Changes:** Do not modify legal text, pricing, or critical policy copy without labeling the change as **"REQUIRES HUMAN REVIEW"**.

## 4. Collaboration with Humans

**AI proposes, humans dispose.**

### Human Responsibilities
*   **Context Setting:** Provide clear goals, constraints, and relevant file paths in prompts.
*   **Execution:** Humans are responsible for running all commands (`npm run dev`, `npm run build`, `npm test`, `npm run lint`).
*   **Review:** Humans must manually test user-facing flows (e.g., booking a tour) and review code diffs.
*   **Final Accountability:** Humans are ultimately responsible for what ships to production.

### AI Responsibilities
*   **Analysis:** Read relevant files to understand the current state.
*   **Planning:** Propose a step-by-step plan before generating code.
*   **Implementation:** Produce specific code changes or diffs (with file paths and clear insertion points) instead of vague suggestions.
*   **Validation Plan:** Suggest specific commands and manual test steps for the human to perform.

## 5. Collaboration Between AI Agents

When multiple agents are involved:
*   **Transparency:** Clearly state in PR descriptions or comments which agent performed which task (e.g., "Architecture drafted by ChatGPT; Implementation by @Jules").
*   **Handoff Checklist:** When handing off from one agent to another, the first agent should:
    *   Summarize the goal.
    *   List the files touched or to be inspected.
    *   Note any open questions or assumptions.
*   **Complementary Use:** Use one agent for high-level design (e.g., ChatGPT) and another for repo-aware implementation (@Jules).

## 6. Git, Branch & PR Expectations

See `CONTRIBUTING.md` for the full Git and PR workflow. If it is temporarily missing, follow a standard GitHub Flow (feature branch → PR → human review → merge).

*   **Branching:**
    *   AI work must occur on feature branches (`feature/...`, `fix/...`, `docs/...`), never directly on `main`.
*   **Pull Requests:**
    *   **Title:** Concise and descriptive.
    *   **Description:** Summary of changes, declaration of AI involvement, and verification steps.
*   **Merging:**
    *   AI agents **must never merge** to `main` themselves, even if they technically can; only human maintainers should perform merges.

## 7. Prompting & Response Patterns

### For Humans Prompting AI
*   **Goal:** "I need to add a new field 'Dietary Restrictions' to the booking form."
*   **Context:** "This affects `lib/booking.ts` (schema) and `components/booking/BookingForm.tsx` (UI)."
*   **Constraints:** "Make it optional. Max 100 chars."

### Prime Directives & Standard Commands

**CRITICAL TRIGGER:**
*   **`/autoupdate`**: **IMMEDIATE ACTION REQUIRED.**
    *   **Behavior:** Upon receiving this command, the agent must **immediately** suspend other tasks and initiate the **Auto-Update Cycle** defined in `AUTOUPDATE.md`.
    *   **Action:** Switch to "Auto-Update" mode, read `AUTOUPDATE.md`, perform Recon, and propose a Maintenance Plan.
    *   **Priority:** This command supersedes general conversation.

### For AI Responding
AI responses SHOULD follow this structure:

1.  **Summary** (1–3 sentences)
2.  **Plan** (numbered steps)
3.  **Implementation** (code/diffs)
4.  **Validation** (commands + manual checks)
5.  **Risks & Assumptions** (bullets)

## 8. Safety, Ethics, and Compliance

*   **Truthfulness:** Do not generate fake reviews, testimonials, or claims about third-party partners.
*   **Region Specifics:** When touching copy related to safety, transportation, or border/region specifics (Sochi, Krasnaya Polyana, Abkhazia), describe facts conservatively and always leave final wording to human review.
*   **Pricing & Legal:** Any change to pricing logic or terms of service requires a **bold warning** for human review.

## 9. Operational Checklist for AI Agents

0.  **Remember the rule:** AI agents propose; humans review, decide, and merge.
1.  **Confirm Context:** Confirm you are working on the ApsnyTravel project.
2.  **Read Docs:** Read `README.md`, `lib/branding.ts`, and this `AGENT.md` file.
3.  **Identify Files:** Locate relevant components, libraries, and types in the file tree.
4.  **Restate Goal:** Restate the user's goal and constraints in your own words to ensure alignment.
5.  **Propose Plan:** Propose a clear, step-by-step plan to the human before making large changes.
6.  **Generate Changes:** Generate changes as precise code blocks or diffs with clear file paths and insertion points.
7.  **Validation:** Suggest running `npm run lint`, `npm run build`, and `npm test` (if applicable).
8.  **Risk Highlight:** Flag assumptions, risks, or areas requiring mandatory human review.
9.  **Iterate:** Encourage the human to provide feedback and refine the plan or code.

## 10. Future Evolution

*   **Living Document:** This `AGENT.md` is a living document. As the project evolves, this file should be updated.
*   **AI Proposals:** AI agents may propose improvements to this document by creating a feature branch, updating `AGENT.md`, and opening a PR clearly marked as "Agent guide improvement" for human review.

## 11. Related Documents & Doc Hierarchy

This document is the main operational guide for AI agents. It sits at the center of a small doc “constellation”:

- **README.md** – High-level project overview, architecture, stack, and setup instructions.
- **AUTOUPDATE.md** – Canonical playbook for ongoing maintenance and auto-update cycles.
- **CONTRIBUTING.md** – Git, branch, and PR workflow for humans and AI-assisted contributions.
- **INDEX.md** (if present) – Entry point into the wider ApsnyTravel documentation set.
- **GRAPH.md** (if present) – High-level graph/relationship view of key domain entities and services.
- **Other docs in `docs/`** – Architecture, audits, modernization reports, and design notes.

AI agents should:
- Start with `README.md` → then `AGENT.md` → then `CONTRIBUTING.md`.
- Consult `AUTOUPDATE.md` for maintenance tasks.
- Use `INDEX.md`, `GRAPH.md`, and `docs/` when they need deeper architectural or domain context.
