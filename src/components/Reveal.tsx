"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  /** 延迟（毫秒） */
  delayMs?: number;
  /** 上下位移的起始距离（px） */
  offsetY?: number;
  className?: string;
}

export default function Reveal({
  children,
  as: Tag = "div",
  delayMs = 0,
  offsetY = 24,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as any}
      style={{
        transition: "opacity 700ms ease, transform 700ms ease",
        transitionDelay: `${delayMs}ms`,
        transform: visible ? "translateY(0px)" : `translateY(${offsetY}px)`,
        opacity: visible ? 1 : 0,
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
