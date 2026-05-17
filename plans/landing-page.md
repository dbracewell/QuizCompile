# Landing Page Plan

## Goal

Create a polished, accessible, SSR-friendly landing page for QuizCompile that clearly explains the product, builds trust with professors and students, and drives visitors toward sign in or account creation.

## Primary Outcomes

- Communicate what QuizCompile does in the first screenful.
- Showcase key product value for both professors and students.
- Provide clear calls to action for authentication and product exploration.
- Replace the current placeholder home route with a production-ready marketing page.
- Preserve accessibility, responsive design, and clean integration with the existing TanStack Start + Shadcn setup.

## Scope

- Route: `src/routes/index.tsx`
- New reusable marketing/landing components under `src/components/`
- Styling through existing Tailwind v4 and Shadcn patterns
- Light content and layout work only; no new backend features required unless needed for auth-aware CTA behavior

## Tasks / Features

### 1. Define landing page content and information architecture

- Write the core headline, subheadline, and supporting copy.
- Identify the main audience segments: professors and students.
- Decide the section order for the page.
- Define primary and secondary CTAs.
- Ensure all copy stays professional, engaging, and education-focused.

#### Task 1 output: approved draft content and structure

**Primary audience segments**

- **Professors / instructors:** need a reliable way to create quizzes and assignments, manage course work, and guide student progress.
- **Students:** need a clear, accessible, and consistent place to complete quizzes, writing assignments, and coding work.

**Messaging priorities**

1. Explain the product in one sentence.
2. Show that QuizCompile supports multiple assignment formats.
3. Make it clear the platform is built for higher education.
4. Reinforce trust through professionalism, accessibility, and privacy-conscious design.
5. Drive visitors toward sign in or getting started.

**Hero copy draft**

- **Headline:** Course work that keeps quizzes, writing, and coding in one place.
- **Subheadline:** QuizCompile helps colleges run engaging knowledge checks, writing assignments, and coding exercises with a workflow that stays clear for students and manageable for instructors.
- **Supporting copy:** Built for modern classrooms, QuizCompile brings assessment tools together in a professional, accessible experience designed for both teaching and learning.

**Primary CTAs**

- **Primary CTA:** Get started
- **Secondary CTA:** Sign in
- **Tertiary CTA / in-page navigation:** Explore features

**CTA behavior recommendation**

- For signed-out visitors:
  - Primary: `Get started`
  - Secondary: `Sign in`
- For signed-in visitors:
  - Primary: `Go to dashboard` or `Open app`
  - Secondary: `Explore features`

**Section order / information architecture**

1. **Top navigation**
   - QuizCompile wordmark / brand
   - Theme toggle if retained
   - Sign in CTA
2. **Hero section**
   - Headline
   - Subheadline
   - Primary and secondary CTAs
   - Short supporting proof points
3. **Feature highlights**
   - Quizzes and knowledge checks
   - Writing assignments
   - Coding assignments
   - Pair-programmed workflows
   - Course organization
4. **Audience-specific benefits**
   - For professors
   - For students
5. **Trust / why QuizCompile**
   - Accessibility-minded design
   - Professional classroom-ready experience
   - Privacy-conscious workflows
6. **Final CTA section**
   - Repeat value proposition
   - Encourage sign up / sign in / app entry
7. **Footer**
   - Product name
   - Short supporting line
   - Auth link(s)

**Feature card copy draft**

- **Quizzes and knowledge checks:** Deliver fast, focused checks for understanding throughout the course.
- **Writing assignments:** Give students structured writing work with a consistent submission experience.
- **Coding assignments:** Support technical coursework with coding-focused workflows.
- **Pair-programmed workflows:** Enable collaborative coding experiences for team-based learning.
- **Course organization:** Keep course activities in one place so students and instructors stay aligned.

**Audience section copy draft**

- **For professors title:** Built for instructors who need clarity and control
- **For professors body:** Create course activities, organize assignment types, and support student progress with a workflow that stays straightforward from setup to completion.
- **For students title:** Designed for students who need consistency and confidence
- **For students body:** Move from quizzes to writing and coding assignments in one accessible experience with clear expectations and less friction.

**Trust section copy draft**

- **Title:** Built for modern classrooms
- **Body:** QuizCompile is designed to feel clean, dependable, and accessible from day one. The platform emphasizes clear workflows, thoughtful usability, and privacy-conscious handling of academic work.

**Final CTA copy draft**

- **Title:** Bring course work into one clear workflow
- **Body:** Help instructors manage assessments and give students a more consistent way to learn, write, and code.
- **Buttons:** `Get started`, `Sign in`

**Tone guidelines**

- Professional, clear, and optimistic
- Higher-ed focused, not K–12 or consumer casual
- Avoid exaggerated marketing language
- Avoid unverified compliance claims; prefer “privacy-conscious” or “designed with accessibility in mind” unless legal/compliance text is approved

### 2. Replace the current placeholder home page

- Remove the current login-form-first placeholder layout from `src/routes/index.tsx`.
- Create a structured landing page route component.
- Keep the route simple and SSR-friendly.
- If needed, preserve auth awareness so signed-in users see an appropriate CTA.

#### Task 2 output: route shell implemented

- Replaced the placeholder home route with a structured landing page shell in `src/routes/index.tsx`.
- Added semantic sections for:
  - top navigation
  - hero
  - feature overview
  - audience-specific value
  - trust section
  - final CTA
  - footer
- Preserved auth-aware CTA behavior using root route context instead of fetching user data on the landing page.
- Kept the implementation in a single route file for now; reusable component extraction remains part of Task 8.
- Added route metadata for title and description.

### 3. Build a hero section

- Add a strong hero headline introducing QuizCompile.
- Add supporting text describing quizzes, writing assignments, and coding assignments.
- Add clear CTA buttons such as:
  - Get started
  - Sign in
  - Learn more
- Include visual hierarchy and responsive layout.
- Ensure keyboard and screen reader accessibility.

#### Task 3 output: hero section implemented

- Added a reusable `HeroSection` component at `src/components/landing/hero-section.tsx`.
- Included:
  - the approved headline and supporting copy
  - primary, secondary, and tertiary CTA behavior
  - responsive layout with stronger visual hierarchy
  - a workflow overview panel highlighting quizzes, writing, coding, and collaboration
  - accessible list-based proof points and labeled supporting content
- Updated `src/routes/index.tsx` to use the new hero component.

### 4. Add value proposition / feature highlights

- Create a section summarizing the core product capabilities.
- Include feature cards for items such as:
  - Quiz creation and knowledge checks
  - Writing assignments
  - Coding assignments
  - Pair-programmed workflows
  - Instructor-friendly course management
- Use reusable card or section components where appropriate.

#### Task 4 output: feature highlights implemented

- Added a reusable `FeatureGrid` component at `src/components/landing/feature-grid.tsx`.
- Updated the home route to render the feature highlight section through that component.
- Added icon-backed feature cards for:
  - quizzes and knowledge checks
  - writing assignments
  - coding assignments
  - pair-programmed workflows
  - course organization
- Strengthened the section copy to emphasize multi-format course work in one platform.

### 5. Add audience-specific sections

- Create a section for professors that explains benefits such as faster assessment workflows, course organization, and visibility into student progress.
- Create a section for students that explains benefits such as clear expectations, engaging assignments, and a consistent learning experience.
- Make the distinction obvious without relying on color alone.

#### Task 5 output: audience-specific section implemented

- Added a reusable `AudienceSection` component at `src/components/landing/audience-section.tsx`.
- Updated the home route to render audience-specific content for:
  - professors / instructors
  - students
- Strengthened the copy to highlight:
  - faster instructor workflows
  - course organization
  - visibility into student progress
  - clear expectations and consistency for students
- Made the distinction between audiences explicit through separate headings, labels, icons, and benefit lists rather than color alone.

### 6. Add trust and clarity sections

- Add a section that highlights professionalism, accessibility, and privacy-conscious design.
- Include concise messaging around FERPA-conscious handling and secure workflows without overstating compliance claims.
- Consider a simple “Why QuizCompile?” or “Built for modern classrooms” section.

#### Task 6 output: trust and clarity section implemented

- Added a reusable `TrustSection` component at `src/components/landing/trust-section.tsx`.
- Updated the home route to render a stronger “Why QuizCompile” / “Built for modern classrooms” section.
- Added structured trust messaging for:
  - professional classroom-ready workflows
  - accessibility-minded design
  - privacy-conscious handling of academic work
- Included concise copy about secure workflows and FERPA-conscious classroom use without making unverified compliance claims.

### 7. Add final CTA section

- Add a closing section that repeats the primary conversion goal.
- Provide clear actions for unauthenticated users.
- If auth state is available, optionally show a different CTA for signed-in users, such as going to their app area.

#### Task 7 output: final CTA section implemented

- Added a reusable `CallToActionSection` component at `src/components/landing/call-to-action-section.tsx`.
- Updated the home route to render the closing CTA through that component.
- Repeated the core value proposition with a stronger closing message focused on getting started.
- Added clear auth-aware actions:
  - signed out: `Get started` and `Sign in`
  - signed in: `Explore features` and `Review audience benefits`
- Added supporting expectation-setting points so the section feels informative rather than purely promotional.

### 8. Build reusable landing page components

- Create reusable components for sections like:
  - `HeroSection`
  - `FeatureGrid`
  - `AudienceSection`
  - `CallToActionSection`
- Keep props typed with TypeScript interfaces.
- Favor semantic HTML and reusable composition over one large route file.

#### Task 8 output: reusable landing page structure expanded

- Continued refactoring the landing page into reusable typed components.
- Added reusable layout components for the remaining shared structure:
  - `LandingHeader` at `src/components/landing/landing-header.tsx`
  - `LandingFooter` at `src/components/landing/landing-footer.tsx`
- Updated `src/routes/index.tsx` to compose the page from reusable landing components instead of inline header/footer markup.
- Kept props typed with TypeScript interfaces and preserved semantic navigation landmarks.
- Reduced the amount of route-specific markup so the home route now primarily assembles content and section data.

### 9. Ensure accessibility and responsive behavior

- Use semantic landmarks: `main`, `section`, `header`, `footer`, lists, and headings in correct order.
- Ensure all interactive elements are keyboard accessible.
- Verify visible focus states.
- Use sufficient color contrast.
- Add descriptive button/link labels.
- Confirm the layout works well on mobile, tablet, and desktop.

#### Task 9 output: accessibility and responsive improvements applied

- Improved section semantics across landing components with clearer `aria-labelledby` and `aria-describedby` relationships.
- Added better in-page navigation behavior with section anchor targets that include `scroll-mt-*` spacing.
- Marked decorative icons as `aria-hidden` where appropriate.
- Strengthened keyboard usability and visible focus treatment for footer navigation links.
- Improved responsive behavior in shared layout components so navigation wraps more cleanly on smaller screens.
- Kept headings, lists, buttons, links, and landmarks structured for screen reader and keyboard use.

### 10. Align visual design with the existing system

- Use existing Shadcn UI primitives and the project’s Tailwind setup.
- Reuse existing utility patterns such as `cn` where appropriate.
- Keep the design clean, professional, and lively without becoming cluttered.
- Make sure the theme toggle still fits naturally into the page layout if it remains on the route.

#### Task 10 output: visual design aligned more closely with the existing system

- Added a reusable `SectionIntro` component at `src/components/landing/section-intro.tsx`.
- Reused that component across multiple landing sections to keep eyebrow, heading, and description styling consistent.
- Used the project `cn` utility to support shared visual patterns without duplicating class logic.
- Preserved existing Shadcn button usage and the current Tailwind v4 styling approach.
- Kept the theme toggle in the reusable header so it continues to sit naturally within the page chrome.

### 11. Handle auth-related CTA behavior

- Decide how landing page CTAs behave for signed-in vs signed-out users.
- Confirm whether the existing `api.auth.getCurrentUser` query is needed on the landing page.
- If used, limit data fetching to only what is required.
- Avoid exposing unnecessary user data in the client.

#### Task 11 output: auth-aware CTA behavior centralized

- Added `useLandingAuthState` at `src/components/landing/use-landing-auth-state.ts`.
- Updated landing components to read only `isAuthenticated` from root route context instead of receiving auth props from the home route.
- Confirmed the landing page does **not** need `api.auth.getCurrentUser` and does not fetch user profile data.
- Kept CTA behavior explicit:
  - signed out: `Get started` and `Sign in`
  - signed in: in-page exploration actions such as `Explore features` and `Review audience benefits`
- Limited landing-page auth awareness to the minimum data needed for rendering decisions: a boolean authentication state.

### 12. Add tests for critical UI behavior

- Add or update component tests for the landing page.
- Verify major content sections render.
- Verify CTA buttons/links appear correctly.
- Verify auth-aware rendering if implemented.
- Prefer lightweight tests focused on critical user-visible behavior.

#### Task 12 output: landing page component tests added

- Added `src/components/landing/landing-page.test.tsx`.
- Covered major user-visible landing behavior, including:
  - feature, audience, and trust section rendering
  - signed-out hero and header CTA behavior
  - signed-in hero and final CTA behavior
  - footer auth-link behavior for signed-out vs signed-in visitors
- Used lightweight component tests with mocked landing auth state and mocked router links.
- Kept test assertions focused on visible content and auth-aware CTA rendering rather than implementation details.

### 13. Validate implementation quality

- Run formatting if needed.
- Run linting.
- Run TypeScript checks.
- Run tests.
- Perform a quick manual responsive and keyboard-accessibility check.

#### Task 13 output: validation completed

- Formatting:
  - `npx prettier --check src/routes/index.tsx src/components/landing/*.tsx plans/landing-page.md` ✅
- Linting:
  - `npm run lint -- src/routes/index.tsx src/components/landing/*.tsx` ✅
- TypeScript:
  - `npx tsc --noEmit` ✅
- Tests:
  - `npm test -- src/components/landing/landing-page.test.tsx` ✅
    - 4 tests passed
- Manual review by code inspection:
  - confirmed semantic landmarks (`header`, `main`, `section`, `footer`, `nav`)
  - confirmed keyboard-reachable interactive elements use links/buttons
  - confirmed visible focus treatment exists on key navigation elements
  - confirmed in-page anchor targets include scroll offset handling
  - confirmed responsive wrapping behavior in shared header/footer navigation
- Note:
  - Vitest still prints a non-failing runtime warning/noise during the targeted test run (`ReferenceError: module is not defined` from `react/index.js`) and a hanging-process message after completion, but the test command completes successfully and reports passing tests.

## Suggested Implementation Order

1. Define copy and section structure.
2. Replace `src/routes/index.tsx` with the new landing page shell.
3. Build the hero and feature sections.
4. Add audience-specific and trust sections.
5. Add the final CTA section.
6. Refactor repeated UI into reusable components.
7. Add tests.
8. Run lint, type checks, and tests.

## Deliverables

- Updated home route at `src/routes/index.tsx`
- New reusable landing page components in `src/components/`
- Tests covering key landing page behavior
- A responsive, accessible landing page ready for iteration

## Acceptance Criteria

- The home page is no longer a placeholder login screen.
- Visitors can understand QuizCompile’s purpose within a few seconds.
- The page includes clear CTAs for the intended audiences.
- The layout is accessible and responsive.
- The implementation uses the project’s existing React, TanStack Start, Tailwind v4, and Shadcn conventions.
- Linting, type checks, and tests pass after implementation.
