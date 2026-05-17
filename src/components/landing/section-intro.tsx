import { cn } from "@/lib/utils";

interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  titleId: string;
  description: string;
  descriptionId?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionIntro({
  eyebrow,
  title,
  titleId,
  description,
  descriptionId,
  className,
  titleClassName,
  descriptionClassName,
}: SectionIntroProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={cn(
          "mt-3 text-3xl font-semibold tracking-tight",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p
        id={descriptionId}
        className={cn(
          "mt-4 text-base leading-7 text-muted-foreground",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </div>
  );
}

export type { SectionIntroProps };
