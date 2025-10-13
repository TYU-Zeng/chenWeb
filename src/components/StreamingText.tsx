'use client';

import { useMemo } from 'react';

type StreamingTextProps = {
  text: string;
  isActive: boolean;
  speed?: number; // ms per line (stagger delay)
  className?: string;
};

export default function StreamingText({
  text,
  isActive,
  speed = 500,
  className = '',
}: StreamingTextProps) {
  const lines = useMemo(() => {
    return text.split('\n').filter(line => line.trim() !== '');
  }, [text]);

  if (!isActive) return null;

  return (
    <div className={`space-y-2 ${className}`}>
      {lines.map((line, index) => (
        <div
          key={index}
          className="text-white/90 leading-relaxed font-light opacity-0"
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

