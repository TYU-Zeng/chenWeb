"use client";
import { motion, useReducedMotion } from "framer-motion";

interface CyberTextProps {
  text: string;
  className?: string;
  glow?: boolean;
  /** 相对位移，单位 em；默认 0.03em（很轻） */
  offsetEm?: number;
  /** 霓虹主色：cyan 或 pink */
  glowColor?: "cyan" | "pink";
}

export default function CyberText({
  text,
  className,
  glow = false,
  offsetEm = 0.03,
  glowColor = "cyan",
}: CyberTextProps) {
  const reduce = useReducedMotion();
  // 用 CSS 变量控制位移，随字号缩放；并用 clamp 防止过大
  const offset = `clamp(0.012em, ${offsetEm}em, 0.12em)`;
  const glowMain = glow
    ? glowColor === "pink"
      ? "0 0 10px rgba(240,63,222,0.85), 0 0 28px rgba(240,63,222,0.55)"
      : "0 0 10px rgba(40,217,239,0.85), 0 0 28px rgba(40,217,239,0.55)"
    : "0 2px 10px rgba(0,0,0,0.35)";

  return (
    <div
      className={`relative inline-block align-middle leading-tight ${className ?? ""}`}
      style={{
        // 提升可读性与抗锯齿
        textRendering: "geometricPrecision",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {/* 红色固定轻微偏移（不再大幅抖） */}
      <span
        aria-hidden
        className="absolute select-none pointer-events-none"
        style={{
          left: `calc(${offset})`,
          top: `calc(${offset})`,
          color: "#ff004c",
          textShadow: glow
            ? "0 0 8px rgba(255,0,76,0.6), 0 0 18px rgba(255,0,76,0.35)"
            : "none",
          opacity: 0.85,
          // 轻微闪烁而非位移动画（可读性更好）
          animation: reduce ? "none" : "flicker 2.4s infinite ease-in-out",
          willChange: "opacity",
          mixBlendMode: "screen",
        }}
      >
        {text}
      </span>

      {/* 蓝色固定轻微偏移（与红相反方向） */}
      <span
        aria-hidden
        className="absolute select-none pointer-events-none"
        style={{
          left: `calc(${offset} * -1)`,
          top: `calc(${offset} * -1)`,
          color: "#00f0ff",
          textShadow: glow
            ? "0 0 8px rgba(0,240,255,0.6), 0 0 18px rgba(0,240,255,0.35)"
            : "none",
          opacity: 0.85,
          animation: reduce ? "none" : "flicker 2.6s infinite ease-in-out",
          willChange: "opacity",
          mixBlendMode: "screen",
        }}
      >
        {text}
      </span>

      {/* 主文本：加强 jitter 幅度与速度 */}
      <motion.span
        className="relative text-white font-bold"
        animate={
          reduce
            ? {}
            : {
                x: ["0em", "0.02em", "-0.02em", "0em"],
                y: ["0em", "-0.012em", "0.012em", "0em"],
              }
        }
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ textShadow: glowMain, willChange: "transform" }}
      >
        {text}
      </motion.span>

      {/* 更明显的闪烁关键帧 */}
      <style jsx>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 60%, 62%, 100% { opacity: 0.95; }
          20%, 61% { opacity: 0.55; }
          24% { opacity: 0.78; }
        }
      `}</style>
    </div>
  );
}
