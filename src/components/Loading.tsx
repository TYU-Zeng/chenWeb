'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface LoadingProps {
  isLoading: boolean;
  onComplete: () => void;
}

export default function Loading({ isLoading, onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    // 模拟加载进度
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0d13]"
        >
          {/* Background with subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d13] via-[#0f1419] to-[#0b0d13]" />
          
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            <Image
              src="/assets/images/logo.png"
              alt="Holo Shadow Logo"
              width={200}
              height={200}
              className="object-contain"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(40, 217, 239, 0.8)) drop-shadow(0 0 40px rgba(40, 217, 239, 0.6))',
                mixBlendMode: 'screen'
              }}
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl font-bold mb-4"
            style={{ 
              fontFamily: 'CyberCrownFour, sans-serif',
              background: 'linear-gradient(135deg, #00FFFF, #00BFFF, #00FF80, #00FF00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 15px rgba(0, 255, 255, 0.9), 0 0 25px rgba(0, 191, 255, 0.8)'
            }}
          >
            Holo Shadow
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-[#e5f6ff] mb-8 text-center max-w-md"
          >
            Rebirth of Light and Shadow
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-80 h-2 bg-gray-700 rounded-full overflow-hidden mb-4"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#28D9EF] to-[#00FFFF] rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(40, 217, 239, 0.8), 0 0 20px rgba(40, 217, 239, 0.6)'
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-[#28D9EF] text-lg"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading...
            </motion.span>
          </motion.div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#28D9EF] rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
