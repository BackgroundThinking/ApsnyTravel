# ApsnyTravel Documentation Index

Welcome to the documentation hub for **ApsnyTravel**. This index serves as a map to navigate the project's operational, architectural, and technical documentation.

## 🚀 Getting Started

*   **[README.md](./README.md)**: The primary entry point. Contains the project overview, key features, tech stack, installation instructions, and deployment guide. **Start here.**
*   **[AGENT.md](./AGENT.md)**: Operational guide for AI agents and human collaboration. Defines roles, behaviors, and workflows. **Critical for AI agents.**

## 📂 Architectural Documentation

The `docs/` directory contains detailed reports on the system's architecture, state, and modernization plans.

*   **[Deep State Engineering Audit](./docs/deep_state_report.md)**: A comprehensive "X-Ray" of the application's runtime flow, data pipelines, booking safety mechanisms, and SEO limitations. It provides a detailed analysis of `App.tsx`, `lib/api.ts`, `lib/booking.ts`, and `lib/seo.ts`.
*   **[Architecture Overview](./docs/ARCHITECTURE.md)**: High-level overview of the stack, runtime, mock-first data layer, routing, and form validation logic. Includes ASCII data flow diagrams.
*   **[Architectural Defense & Scaling Report](./docs/ARCHITECTURAL_REPORT.md)**: A refreshed report summarizing the current snapshot, remaining risks (CSR-only SEO, hardcoded content), and suggested refactors (SSR/SSG migration).
*   **[Technical Modernization Report](./docs/TECHNICAL_MODERNIZATION_REPORT.md)**: An audit report highlighting current posture, open risks, and immediate next steps for modernization (metadata, externalizing strings, quality tooling).
*   **[Technical Audit (Current State)](./docs/audit-report.md)**: A confirmed architecture audit noting gaps in SEO/metadata and recommendations for the near term.

## 🗺️ Project Map

The project follows a flat structure (no `src/` directory).

*   **`components/`**: Reusable UI components.
*   **`lib/`**: Core logic, including API mocks (`api.ts`), booking validation (`booking.ts`), branding configuration (`branding.ts`), and SEO helpers (`seo.ts`).
*   **`pages/`**: Route-level components.
*   **`types.ts`**: Shared TypeScript definitions.
*   **`vercel.json`**: Vercel deployment configuration (SPA rewrites).

## 🤝 Contributing

*   **[CONTRIBUTING.md](./CONTRIBUTING.md)**: (If present) Guidelines for Git workflow, branching, and pull requests. *Note: If missing, follow standard GitHub Flow.*

---

*This index is maintained by @Jules. Last updated: February 2025.*
