# Contributing to ApsnyTravel

Thank you for your interest in contributing to ApsnyTravel. This document outlines the development workflow, coding standards, and guidelines for contributing to this project.

## Important Note

**This project is proprietary.** The code is private property of Alexander and ApsnyTravel. While we welcome bug reports and suggestions from the community, the primary contributors are the internal team and designated AI agents.

Public contributions (Pull Requests from external forks) are generally not accepted unless invited or previously discussed. Please open an issue to discuss any proposed changes before starting work.

## Getting Started

Please refer to the [README.md](./README.md) for instructions on how to set up the development environment, install dependencies, and run the application locally.

**Note:** This project uses a flat file structure. Core application code is located in `components/`, `lib/`, and `pages/` at the project root. There is no `src/` directory.

## Development Workflow

We follow a structured Git workflow to ensure stability and code quality.

### 1. Branching Strategy

- **`main`**: The production-ready branch. **Never commit directly to `main`.**
- **Feature Branches**: Create a new branch for every feature, bug fix, or documentation update.
  - **Format**: `type/short-description`
  - **Examples**:
    - `feature/add-booking-validation`
    - `fix/typo-in-tour-description`
    - `docs/update-agent-guidelines`
    - `refactor/simplify-api-mock`

### 2. Making Changes

1.  Make sure you are on the latest `main`:
    ```bash
    git checkout main
    git pull origin main
    ```
2.  Create your feature branch:
    ```bash
    git checkout -b feature/my-new-feature
    ```
3.  Implement your changes.
4.  Run validation scripts locally (see [Coding Standards](#coding-standards)).

### 3. Commit Messages

We encourage the use of [Conventional Commits](https://www.conventionalcommits.org/):

- `feat: ...` for new features
- `fix: ...` for bug fixes
- `docs: ...` for documentation
- `style: ...` for formatting changes
- `refactor: ...` for code refactoring
- `test: ...` for adding/modifying tests
- `chore: ...` for maintenance tasks

## Pull Request Process

All changes must be reviewed and merged via Pull Request (PR).

1.  **Push your branch** to the repository.
2.  **Open a Pull Request** targeting the `main` branch.
3.  **Title**: Use a clear, descriptive title (e.g., "feat: Add email validation to booking form").
4.  **Description**:
    - Summarize the changes.
    - Explain the "why" behind the change.
    - List any verification steps (how to test).
    - If you are an AI agent, declare your role (e.g., "Implementation by @Jules").
5.  **Review**:
    - **Human Review is Mandatory.** A human maintainer must review the code, test the functionality, and approve the PR.
    - AI agents **must not** merge PRs.

## Coding Standards

To maintain a high-quality codebase, please adhere to the following standards:

### Linting & Formatting

We use **ESLint** and **Prettier**.

- Check for linting errors:
  ```bash
  npm run lint
  ```
- Format code:
  ```bash
  npm run format
  ```

### Testing

We use **Vitest** for testing.

- Run all tests:
  ```bash
  npm test
  ```
- **Requirement**: New features should include unit tests where applicable. Bug fixes should include a regression test.
- **Location**: Colocate tests with the code they test (e.g., `lib/booking.ts` should have `lib/booking.spec.ts`).

### Type Safety

- Do not use `any`. Use specific types or interfaces defined in `types.ts` or local component types.
- Ensure **Zod** schemas in `lib/` match the TypeScript interfaces.

## AI-Assisted Contributions

This repository relies heavily on AI agents (like @Jules) for development.

- **Refer to [AGENTS.md](./AGENTS.md)** for specific rules governing AI behavior, roles, and safety protocols.
- **Refer to [AUTOUPDATE.md](./AUTOUPDATE.md)** for maintenance cycles and auto-update workflows.
- **Key Rule**: AI proposes; humans review, decide, and merge.

## Reporting Issues

If you find a bug or have a suggestion:

1.  Search existing issues to see if it has already been reported.
2.  Open a new issue with a clear title and description.
3.  Include steps to reproduce (for bugs) or a detailed use case (for suggestions).
