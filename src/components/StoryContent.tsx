import React from "react";

type StoryContentProps = {
  title?: string;
  description?: string;
  story: string;
  className?: string;
  dimmed?: boolean;
};

export default function StoryContent({
  title = "Story",
  description,
  story,
  className = "",
  dimmed = false,
}: StoryContentProps) {
  return (
    <section className={`space-y-0 ${className}`}>
      <div className={`px-6 py-6 md:px-8 md:py-8 text-center ${dimmed ? 'neon-glow-purple' : ''}`}>
        <h2 className="text-2xl md:text-3xl font-light tracking-wide" style={{ color: 'var(--foreground)' }}>{title}</h2>
        <div className="h-[30px] bg-transparent"></div>
        {description ? (
          <p className="leading-relaxed font-light" style={{ color: 'color-mix(in oklab, var(--foreground) 80%, transparent)'}}>
            {description}
          </p>
        ) : null}
        <div className="leading-relaxed font-light whitespace-pre-line" style={{ color: 'color-mix(in oklab, var(--foreground) 80%, transparent)'}}>
          {story}
        </div>
      </div>
    </section>
  );
}
