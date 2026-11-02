import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  tone?: "dark" | "light";
  className?: string;
};

const SectionHeading = ({ eyebrow, title, intro, align = "left", as: Tag = "h2", tone = "dark", className }: SectionHeadingProps) => (
  <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
    {eyebrow && <p className={cn("eyebrow mb-4", tone === "light" && "text-sage-soft")}>{eyebrow}</p>}
    <Tag
      className={cn(
        "text-[2.35rem] leading-[1.08] md:text-5xl",
        tone === "light" && "text-warm",
      )}
    >
      {title}
    </Tag>
    {intro && (
      <div className={cn("mt-5 text-base leading-relaxed md:text-lg", tone === "light" ? "text-warm/80" : "text-muted-foreground")}>
        {intro}
      </div>
    )}
  </div>
);

export default SectionHeading;
