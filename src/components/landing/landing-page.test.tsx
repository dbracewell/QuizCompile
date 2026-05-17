// @vitest-environment jsdom

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import { BookOpen, GraduationCap } from "lucide-react";

import { AudienceSection } from "@/components/landing/audience-section";
import { CallToActionSection } from "@/components/landing/call-to-action-section";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { HeroSection } from "@/components/landing/hero-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { TrustSection } from "@/components/landing/trust-section";
import { useLandingAuthState } from "@/components/landing/use-landing-auth-state";

vi.mock("@/components/landing/use-landing-auth-state", () => ({
  useLandingAuthState: vi.fn(),
}));

vi.mock("@/components/theme-toggle", () => ({
  ThemeToggle: () => <button type="button">Toggle theme</button>,
}));

vi.mock("@tanstack/react-router", () => ({
  Link: ({
    to,
    children,
    ...props
  }: {
    to: string;
    children: ReactNode;
  } & AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

const mockedUseLandingAuthState = vi.mocked(useLandingAuthState);

describe("landing page components", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    mockedUseLandingAuthState.mockReturnValue({ isAuthenticated: false });
  });

  it("renders feature, audience, and trust sections with their core content", () => {
    render(
      <main>
        <FeatureGrid
          id="features"
          eyebrow="Core capabilities"
          title="Built for the core work of a college course"
          description="Move across quizzes, writing, and coding in one place."
          features={[
            {
              title: "Quizzes",
              description: "Deliver focused checks for understanding.",
              icon: BookOpen,
            },
            {
              title: "Writing assignments",
              description: "Support written work in the same workflow.",
              icon: GraduationCap,
            },
          ]}
        />

        <AudienceSection
          id="audiences"
          eyebrow="Who it supports"
          title="One platform, shaped for both teaching and learning"
          description="Distinct benefits for instructors and students."
          audiences={[
            {
              label: "For professors",
              title: "Built for instructors",
              description: "Keep course work organized.",
              benefits: ["Faster setup", "Clearer visibility"],
              icon: GraduationCap,
            },
            {
              label: "For students",
              title: "Designed for students",
              description: "Reduce friction across assignments.",
              benefits: ["Clear expectations", "Consistent experience"],
              icon: BookOpen,
            },
          ]}
        />

        <TrustSection
          id="trust"
          eyebrow="Why QuizCompile"
          title="Built for modern classrooms"
          description="Clear workflows, thoughtful usability, and privacy-conscious handling."
          highlights={[
            "Professional classroom-ready experience.",
            "Accessibility-minded design.",
          ]}
          detailTitle="Designed for FERPA-conscious classroom use"
          detailBody="Built with secure workflows and careful handling of academic work in mind."
        />
      </main>,
    );

    expect(
      screen.getByRole("heading", {
        name: /built for the core work of a college course/i,
      }),
    ).toBeTruthy();
    expect(screen.getByRole("heading", { name: /quizzes/i })).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        name: /one platform, shaped for both teaching and learning/i,
      }),
    ).toBeTruthy();
    expect(screen.getByText("For professors")).toBeTruthy();
    expect(screen.getByText("For students")).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: /built for modern classrooms/i }),
    ).toBeTruthy();
    expect(
      screen.getByText(/designed for ferpa-conscious classroom use/i),
    ).toBeTruthy();
  });

  it("shows signed-out hero and navigation calls to action", () => {
    mockedUseLandingAuthState.mockReturnValue({ isAuthenticated: false });

    render(
      <>
        <LandingHeader />
        <HeroSection />
      </>,
    );

    const headerNav = screen.getByRole("navigation", { name: /primary/i });
    expect(
      within(headerNav).getByRole("link", { name: /get started/i }),
    ).toBeTruthy();
    expect(
      within(headerNav).getByRole("link", { name: /sign in/i }),
    ).toBeTruthy();
    expect(screen.getByRole("button", { name: /toggle theme/i })).toBeTruthy();

    const heroRegion = screen.getByRole("region", {
      name: /course work that keeps quizzes, writing, and coding in one place/i,
    });

    expect(
      within(heroRegion).getByRole("heading", {
        name: /course work that keeps quizzes, writing, and coding in one place/i,
      }),
    ).toBeTruthy();
    expect(
      within(heroRegion).getByRole("link", { name: /get started/i }),
    ).toBeTruthy();
    expect(
      within(heroRegion).getByRole("link", { name: /sign in/i }),
    ).toBeTruthy();
    expect(
      within(heroRegion).getByRole("link", { name: /learn more/i }),
    ).toBeTruthy();
    expect(
      within(heroRegion).queryByRole("link", { name: /explore features/i }),
    ).toBeNull();
  });

  it("shows signed-in hero and final CTA exploration actions without auth links", () => {
    mockedUseLandingAuthState.mockReturnValue({ isAuthenticated: true });

    render(
      <>
        <HeroSection />
        <CallToActionSection
          id="get-started"
          eyebrow="Ready to begin"
          title="Bring course work into one clear workflow"
          description="Help instructors manage assessments and students learn with less friction."
          supportingPoints={["Explore the platform.", "Review key benefits."]}
        />
      </>,
    );

    const heroRegion = screen.getByRole("region", {
      name: /course work that keeps quizzes, writing, and coding in one place/i,
    });
    const ctaRegion = screen.getByRole("region", {
      name: /bring course work into one clear workflow/i,
    });

    expect(
      within(heroRegion).getByRole("link", { name: /explore features/i }),
    ).toBeTruthy();
    expect(
      within(ctaRegion).getByRole("link", { name: /explore features/i }),
    ).toBeTruthy();
    expect(
      within(ctaRegion).getByRole("link", {
        name: /review audience benefits/i,
      }),
    ).toBeTruthy();
    expect(
      within(heroRegion).queryByRole("link", { name: /get started/i }),
    ).toBeNull();
    expect(
      within(ctaRegion).queryByRole("link", { name: /sign in/i }),
    ).toBeNull();
  });

  it("shows footer auth links only for signed-out visitors", () => {
    const { rerender } = render(<LandingFooter />);

    const footerNav = screen.getByRole("navigation", { name: /footer/i });
    expect(
      within(footerNav).getByRole("link", { name: /back to top/i }),
    ).toBeTruthy();
    expect(
      within(footerNav).getByRole("link", { name: /get started/i }),
    ).toBeTruthy();
    expect(
      within(footerNav).getByRole("link", { name: /sign in/i }),
    ).toBeTruthy();

    mockedUseLandingAuthState.mockReturnValue({ isAuthenticated: true });
    rerender(<LandingFooter />);

    const signedInFooterNav = screen.getByRole("navigation", {
      name: /footer/i,
    });
    expect(
      within(signedInFooterNav).queryByRole("link", { name: /get started/i }),
    ).toBeNull();
    expect(
      within(signedInFooterNav).queryByRole("link", { name: /sign in/i }),
    ).toBeNull();
  });
});
