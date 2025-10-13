import React from "react";

type StoryContentProps = {
  title?: string;
  description?: string;
  story: string;
  className?: string;
};

export default function StoryContent({
  title = "Story",
  description,
  story,
  className = "",
}: StoryContentProps) {
  return (
    <section className={`space-y-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-light tracking-wide text-white">{title}</h2>
      <div className="h-[30px] bg-transparent"></div>
      {description ? (
        <p className="text-white/80 leading-relaxed font-light">
          {description}
        </p>
      ) : null}
      <div className="text-white/80 leading-relaxed font-light whitespace-pre-line">
        {story}
      </div>
    </section>
  );
}
