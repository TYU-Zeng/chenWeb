'use client';

import { useMemo } from 'react';

type StreamingTextProps = {
  text: string;
  isActive: boolean;
  speed?: number; // ms per line (stagger delay)
  className?: string;
  dimmed?: boolean;
};

export default function StreamingText({
  text,
  isActive,
  speed = 500,
  className = '',
  dimmed = false,
}: StreamingTextProps) {
  const lines = useMemo(() => {
    return text.split('\n').filter(line => line.trim() !== '');
  }, [text]);

  if (!isActive) return null;

  return (
    <div className={`space-y-2 text-center py-[80px] ${className}`}>
      {lines.map((line, index) => (
        <div
          key={index}
          className={`leading-relaxed font-light opacity-0 ${dimmed ? 'neon-glow-purple' : 'text-white/90'}`}
          style={{
            animation: `staggerLineIn 600ms ease-out forwards`,
            animationDelay: `${index * speed}ms`,
          }}
        >
          {line}
        </div>
      ))}
      <style jsx>{`
        @keyframes staggerLineIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

