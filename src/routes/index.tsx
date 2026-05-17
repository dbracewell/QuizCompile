import type { AudienceCard } from "@/components/landing/audience-section";
import { AudienceSection } from "@/components/landing/audience-section";
import { CallToActionSection } from "@/components/landing/call-to-action-section";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { HeroSection } from "@/components/landing/hero-section";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { TrustSection } from "@/components/landing/trust-section";
import { createFileRoute } from "@tanstack/react-router";
import {
  Code2,
  FileText,
  FolderOpen,
  GraduationCap,
  ListChecks,
  NotebookPen,
  UsersRound,
} from "lucide-react";

const featureSummaries = [
  {
    title: "Quizzes and knowledge checks",
    description:
      "Deliver fast, focused checks for understanding throughout the course.",
    icon: ListChecks,
  },
  {
    title: "Writing assignments",
    description:
      "Give students structured writing work with a consistent submission experience.",
    icon: FileText,
  },
  {
    title: "Coding assignments",
    description:
      "Support technical coursework with coding-focused workflows and clear expectations.",
    icon: Code2,
  },
  {
    title: "Pair-programmed workflows",
    description:
      "Enable collaborative coding experiences for team-based learning.",
    icon: UsersRound,
  },
  {
    title: "Course organization",
    description:
      "Keep course activities in one place so students and instructors stay aligned.",
    icon: FolderOpen,
  },
];

const audienceSummaries: AudienceCard[] = [
  {
    label: "For professors",
    title: "Built for instructors who need clarity and control",
    description:
      "Keep course work organized across quizzes, writing assignments, and coding exercises without asking students to learn a different workflow for each activity.",
    benefits: [
      "Move faster from setup to assessment with one consistent workflow.",
      "Keep course organization clear across multiple assignment formats.",
      "Get better visibility into student progress through a shared course experience.",
    ],
    icon: GraduationCap,
  },
  {
    label: "For students",
    title: "Designed for students who need consistency and confidence",
    description:
      "Give students a clear, accessible place to move from knowledge checks to writing and coding work with fewer surprises and less friction.",
    benefits: [
      "See clearer expectations across quizzes, writing, and coding assignments.",
      "Stay engaged with course work in one predictable learning environment.",
      "Spend less time navigating tools and more time focusing on the assignment itself.",
    ],
    icon: NotebookPen,
  },
];

const trustPoints = [
  "Professional classroom-ready experience for instructors and students.",
  "Accessibility-minded design that supports clearer day-to-day use.",
  "Privacy-conscious workflows for handling academic work more carefully.",
];

const trustDetail = {
  title: "Designed for FERPA-conscious classroom use",
  body: "QuizCompile is built with secure workflows, clear access patterns, and privacy-conscious handling of academic work in mind. The product is intended to support FERPA-conscious classroom practices without making unverified compliance claims on the landing page.",
};

const finalCtaPoints = [
  "Get started quickly with a clear path into the platform.",
  "Return to sign in if you already have an account.",
  "Review key platform benefits before taking the next step.",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "QuizCompile | Quizzes, writing, and coding in one place",
      },
      {
        name: "description",
        content:
          "QuizCompile helps colleges run quizzes, writing assignments, and coding exercises in one clear, accessible workflow for instructors and students.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow-lg"
      >
        Skip to main content
      </a>

      <LandingHeader />

      <main id="main-content">
        <HeroSection />

        <FeatureGrid
          id="features"
          eyebrow="Core capabilities"
          title="Built for the core work of a college course"
          description="QuizCompile helps instructors and students move across quizzes, writing, coding, and collaboration workflows without switching mental models or tools."
          features={featureSummaries}
        />

        <AudienceSection
          id="audiences"
          eyebrow="Who it supports"
          title="One platform, shaped for both teaching and learning"
          description="QuizCompile gives instructors and students distinct benefits without splitting the experience into separate tools. Each audience gets a clearer path through the work that matters to them."
          audiences={audienceSummaries}
        />

        <TrustSection
          id="trust"
          eyebrow="Why QuizCompile"
          title="Built for modern classrooms"
          description="QuizCompile is designed to feel clean, dependable, and accessible from day one. The platform emphasizes thoughtful usability, professional presentation, and privacy-conscious handling of academic work without adding unnecessary complexity."
          highlights={trustPoints}
          detailTitle={trustDetail.title}
          detailBody={trustDetail.body}
        />

        <CallToActionSection
          id="get-started"
          eyebrow="Ready to begin"
          title="Bring course work into one clear workflow"
          description="Help instructors manage assessments and give students a more consistent way to learn, write, and code. QuizCompile keeps the next step obvious whether you are new to the platform or returning to it."
          supportingPoints={finalCtaPoints}
        />
      </main>

      <LandingFooter />
    </div>
  );
}
