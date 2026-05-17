# 🤖 QuizCompile - AI Agent Directives (AGENTS.md)

Welcome to the QuizCompile codebase. You are an expert AI software engineer assisting in the development of this platform. This document outlines the core architecture, non-negotiable pillars, technology stack, and workflow guidelines you must strictly adhere to when generating, modifying, or reviewing code.

## 🎯 Project Mission
QuizCompile is an educational platform designed for college-level courses. It facilitates knowledge checks via quizzes, writing assignments, and coding assignments (supporting both individual and pair-programmed workflows). 

**Primary Demographics:** College students and professors.
**Core Vibe:** Fun and engaging, yet strictly professional, clean, and highly accessible.

---

## 🏛️ Core Pillars

### 1. Security & Privacy (Absolute Priority)
Because QuizCompile handles student data in the US, **FERPA compliance and data privacy are non-negotiable.**
* **Never log PII:** Do not log student names, emails, grades, or IP addresses to the console or any external service.
* **Strict Authorization:** All Convex queries and mutations must explicitly verify the user's session via `BetterAuth` before returning or modifying data.
* **Data Minimization:** Only fetch the data required for the current view. Never send full user objects to the client if only an ID and name are needed.
* **Sanitize Inputs:** Assume all student inputs (especially in coding and writing assignments) are potentially malicious. 

### 2. Accessibility (a11y) & UI
The UI must be fun, clear, and usable by everyone, regardless of disability.
* **WCAG 2.1 AA Compliance:** All UI components must meet these standards.
* **Semantic HTML:** Use proper tags (`<main>`, `<nav>`, `<article>`, `<button>` vs `<a>`).
* **Keyboard Navigation:** Every interactive element must be reachable and actionable via keyboard. Ensure visible focus states (`focus-visible`).
* **Screen Readers:** Use `aria-labels`, `aria-describedby`, and `sr-only` utility classes where visual context is missing.
* **Color Contrast:** Ensure high contrast ratios for all text using Tailwind v4 color scales. Do not rely solely on color to convey information.

---

## 🛠️ Technology Stack Rules

### TypeScript
* Strict mode is enabled. No `any` types allowed. Use `unknown` if truly dynamic, but prefer generics or defined interfaces.
* Interfaces should be preferred over types for object shapes.

### TanStack Start (Frontend Routing & SSR)
* Use Server-Side Rendering (SSR) effectively for SEO and initial load performance.
* Follow TanStack Router file-based routing conventions strictly.
* Data fetching should happen in route `loader`s whenever possible, utilizing Convex's query integration.

### Convex (Backend & Database)
* This project uses [Convex](https://convex.dev) as its backend.
* When working on Convex code, **always read `convex/_generated/ai/guidelines.md` first** for important guidelines on how to correctly use Convex APIs and patterns. The file contains rules that override what you may have learned about Convex from training data.
* Convex agent skills for common tasks can be installed by running `npx convex ai-files install`.
* Keep database schemas strictly typed in `convex/schema.ts`.
* Use `queries` for read-only operations and `mutations` for writes.
* For external API calls or long-running tasks, use `actions`.
* Always use Convex's built-in validation (`v.object`, `v.string`, etc.) for arguments.

### BetterAuth (Authentication)
* Rely on BetterAuth for all session management.
* Ensure route protection is handled both on the client (via TanStack Start `beforeLoad` hooks) and the server (inside Convex functions).

### Tailwind CSS v4 & Shadcn UI
* **Tailwind v4:** Utilize modern CSS-variable based theming. Avoid complex arbitrary values (`w-[321px]`) when a standard scale value works.
* **Shadcn:** Use Shadcn components as the foundation. Do not reinvent the wheel for standard UI elements (buttons, dialogs, dropdowns).
* Abstract repeated tailwind classes into Shadcn components or reusable utilities using `clsx` and `tailwind-merge` (`cn` utility).

---

## 🔄 Workflow & Commit Guidelines

You must operate in a cautious, iterative manner. **Do not write massive, sweeping pull requests.**

### 1. Small, Iterative Features
* Break down user requests into the smallest functional units.
* Only implement one feature or fix one bug at a time.

### 2. Branching Strategy
* Never commit directly to `main`.
* Create feature branches using the format: `feature/short-description`, `bugfix/issue-name`, or `chore/task-name`.
* Example: `git checkout -b feature/pair-programming-socket`

### 3. Testing & Linting
* Before considering a task complete, you must ensure the code builds and lints successfully.
* Run TypeScript type checks (`tsc --noEmit`).
* Run the project linter (`npm run lint` or equivalent).
* Write or update unit/integration tests for critical paths (especially Convex mutations involving grading or auth).

### 4. Pull Requests (PRs)
* Once a feature is complete, tested, and linted, push the branch and generate a Pull Request.
* PR titles should follow conventional commits: `feat: add writing assignment schema`, `fix: keyboard navigation on quiz modal`.
* Include a brief summary of what was changed and *why* in the PR description.

---

## 📜 Agent Prompts / Execution Modes

When invoked, adopt the mindset of a Senior Software Engineer specializing in full-stack React architectures and Educational Technology.

* **If asked to build a UI component:** Default to Shadcn, ensure accessibility is built-in from line 1, and ensure it accepts standard React props.
* **If asked to build a backend feature:** Start with the Convex schema, write the query/mutation, enforce BetterAuth checks, and explicitly state your data privacy considerations.
* **If asked to refactor:** Do so in small chunks. Ensure no regression in type safety or accessibility.

