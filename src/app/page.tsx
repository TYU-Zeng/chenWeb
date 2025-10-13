'use client';

import Image from 'next/image';
import { works } from '@/data/works';
import Reveal from '@/components/Reveal';
import StoryContent from '@/components/StoryContent';
import IconButton from '@/components/IconButton';
import StreamingText from '@/components/StreamingText';
import WorkCard from '@/components/WorkCard';
import { motion, AnimatePresence } from 'framer-motion';
import CyberText from '@/components/CyberText';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const first = works[0];
  const [showBox, setShowBox] = useState(false);
  const [showText, setShowText] = useState(false);
  const [dimmed, setDimmed] = useState(false);
  const streamingText = `This is a beautiful moment captured in the early morning light.
                        The scene tells a story of tranquility and natural beauty.
                        Every element comes together in perfect harmony.
                        Lines unfold gently to guide the viewer through the story.
                        Each detail is revealed with intention and clarity.
                        Shadows and highlights dance across the composition.
                        Textures whisper quiet secrets of the environment.
                        Colors breathe and settle into a calm rhythm.
                        Time feels slower, and presence becomes effortless.
                        In this stillness, the narrative finds its voice.`;
  const lines = useMemo(() => streamingText.split('\n').filter(l => l.trim() !== ''), [streamingText]);
  const [visibleLines, setVisibleLines] = useState(0);
  const lineHeightPx = 28; // approximate line height in px
  const speedMs = 400; // keep in sync with StreamingText speed

  const handleActivate = () => {
    if (showBox || showText) return;
    setShowBox(true);
    setTimeout(() => setShowText(true), 420);
  };

  useEffect(() => {
    if (!showText) return;
    setVisibleLines(0);
    const id = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= lines.length) {
          clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, speedMs);
    return () => clearInterval(id);
  }, [showText, lines.length]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16 ">
        {/* Main Content */}
        <div>
          {/* Intro Section */}
          <section id="intro" className="h-screen flex items-center justify-center text-center">
            <div>
              <Reveal>
                <div className="mx-auto max-w-4xl text-center px-4">
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <CyberText text="I’m not hustling anymore, but I’m" className="text-4xl md:text-6xl" glow={dimmed} />
                    <span className="inline-flex items-center gap-2 md:gap-3 align-middle">
                      <CyberText text="still creating." className="text-4xl md:text-6xl" glow={dimmed} />
                      <span className={`${dimmed ? 'neon-glow-pink' : 'text-white/85'} text-sm md:text-base`}>by. ZheChen - s3872176</span>
                      <span
                        className={`relative inline-block w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2}`}
                        style={dimmed ? { border: '2px solid rgba(240,63,222,0.9)', boxShadow: '0 0 18px rgba(240,63,222,0.75), 0 0 42px rgba(240,63,222,0.45)' } : { border: '2px solid hsla(292, 100.00%, 84.70%, 0.90)' }}
                      >
                        <Image src="/assets/images/chen-1.jpg" alt="Chen avatar" fill className="object-cover" />
                      </span>
                    </span>
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={200}>
                <p className="mt-6 text-white/70 max-w-2xl mx-auto">
                  Light × Shadow, Cyber × Calm — a quiet neon that breathes.
                </p>
              </Reveal>
            </div>
          </section>

          {/* p1: Image and Story (reveals after scrolling past the intro) */}
          <section id="p1" className='mt-20 md:mt-28 relative'>
            {/* Dim overlay */}
            <AnimatePresence>
              {dimmed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none fixed inset-0 -z-10 bg-black"
                />
              )}
            </AnimatePresence>
            {/* Top row: pill button centered */}
            <div className="w-full flex items-center justify-center -mt-8 md:-mt-12 mb-16 md:mb-28 relative z-10">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setDimmed(v => !v)}
                aria-label="Toggle light"
                className="select-none"
              >
                <div
                  className={`glass-card neon-border rounded-full px-2 py-1 w-16 h-9 flex items-center ${dimmed ? 'neon-shadow-pink' : ''}`}
                  style={dimmed ? { borderColor: 'rgba(240, 63, 222, 0.75)', boxShadow: 'inset 0 0 0 1px rgba(240,63,222,0.7), 0 0 24px rgba(240, 63, 222, 0.55), 0 0 64px rgba(240, 63, 222, 0.35)' } : undefined}
                >
                    <motion.div
                    layout
                    className="w-full h-full relative"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <motion.div
                      layout
                      className="absolute top-1 left-1 w-7 h-7 rounded-full flex items-center justify-center"
                        animate={{ x: dimmed ? 28 : 0, backgroundColor: dimmed ? 'rgba(240,63,222,0.35)' : 'rgba(240,63,222,0.15)' }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        style={{ boxShadow: dimmed ? '0 0 12px rgba(240,63,222,0.9), 0 0 28px rgba(240,63,222,0.55)' : '0 0 8px rgba(0,0,0,0.25)' }}
                    >
                        <Image src="/assets/images/light_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="light" width={18} height={18} style={{ filter: dimmed ? 'brightness(0) saturate(100%) invert(78%) sepia(23%) saturate(7488%) hue-rotate(299deg) brightness(104%) contrast(101%) drop-shadow(0 0 8px rgba(240,63,222,0.9)) drop-shadow(0 0 16px rgba(240,63,222,0.55))' : 'none' }} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.button>
            </div>

            <div className="h-[80px] md:h-[80px] bg-transparent"></div>

            {/* Two-column: left image larger, right description */}
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-8 md:gap-10 items-start">
              {/* Left: image */}
              <div className="order-1 max-w-[1400px] mx-auto w-full relative z-10">
                <Reveal>
                  <div className="w-full flex items-center justify-center">
                    <div className={`relative rounded-3xl overflow-hidden neon-border ${dimmed ? 'neon-halo-strong' : 'halo-neutral'}`}>
                      <Image
                        src={first.coverImage}
                        alt={first.title}
                        width={1400}
                        height={1800}
                        priority
                        className={`w-auto max-w-full h-auto object-contain rounded-2xl ${dimmed ? '' : 'neon-image-soft'}`}
                      />
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right: description (appears on toggle) */}
              <div className={`order-2 max-w-1xl md:max-w-1xl w-full relative z-10 md:ml-2 lg:ml-4 xl:ml-6 justify-self-start ${dimmed ? 'neon-text-cyan-strong' : ''}`}
              >
                <AnimatePresence>
                  {dimmed && (
                    <motion.div
                      key="desc"
                      initial={{ x: 24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 24, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-0"
                    >
                      <div className="mb-3">
                        <CyberText text="Story" className="text-4xl" glow={dimmed} glowColor="pink" />
                      </div>
                      <div className="h-[10px] bg-transparent"></div>
                      <p className="leading-relaxed mb-4">{first.description}</p>
                      <p className="whitespace-pre-line">{first.story}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>

       
          

          {/* Spacer */}
          <div className="h-[160px] md:h-[240px] bg-transparent"></div>

          <section id="p1-icon1" className="mt-52 md:mt-80">
            {/* Button and Description Area */}
            <div className="mt-72 flex items-start gap-6">
              <Reveal delayMs={120}>
                <div onClick={handleActivate} className="cursor-pointer">
                  <IconButton iconSrc="/assets/images/icon1.png" alt="action" size={230} />
                </div>
              </Reveal>
              {showBox && (
                <div
                  className="w-full md:max-w-2xl min-h-[80px] p-6 md:p-8 rounded-lg space-y-8 glass-card neon-border m-4 md:m-8"
                  style={{ animation: 'fadeInBox 400ms ease-out forwards' }}
                >
                  <div className="h-[px] bg-transparent"></div>
                  <div
                    className="overflow-hidden transition-[max-height] ease-out"
                    style={{ maxHeight: `${visibleLines * lineHeightPx}px`, transitionDuration: `${speedMs}ms` }}
                  >
                    <StreamingText
                      text={streamingText}
                      isActive={showText}
                      speed={speedMs}
                    />
                  </div>
                  <style jsx>{`
                    @keyframes fadeInBox {
                      from { opacity: 0; transform: translateY(8px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                  `}</style>
                </div>
              )}
            </div>
          </section>


          {/* p2: More Content */}
          {/* Gallery Section */}
          <section id="gallery" className="mt-40 md:mt-56">
            <Reveal>
              <h2 className="text-center text-2xl md:text-3xl font-medium text-gradient-energy mb-10">Artworks</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map(w => (
                <Reveal key={w.id} delayMs={60}>
                  <div className="neon-glow-hover glass-card neon-border rounded-xl">
                    <WorkCard work={w} />
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Contact / Links */}
          <section id="contact" className="mt-40 md:mt-56 text-center">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-medium text-gradient-energy mb-6">Contact</h2>
            </Reveal>
            <Reveal delayMs={120}>
              <div className="flex items-center justify-center gap-8">
                <a href="mailto:chen@example.com" className="neon-border rounded-full px-5 py-2 text-white/80 hover:text-white neon-glow-hover">Email</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="neon-border rounded-full px-5 py-2 text-white/80 hover:text-white neon-glow-hover">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="neon-border rounded-full px-5 py-2 text-white/80 hover:text-white neon-glow-hover">Twitter</a>
              </div>
            </Reveal>
          </section>



        </div>
      </div>
    </div>
  );
}
