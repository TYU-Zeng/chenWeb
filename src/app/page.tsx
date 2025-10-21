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
      <div className="container mx-auto px-6 py-4">
        {/* Main Content */}
        <div>
          {/* p1: Image and Story (reveals after scrolling past the intro) */}
          <section id="p1" className='relative'>
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
            
            {/* Logo Section with Title Overlay */}
            <div className="w-full flex flex-col items-center justify-center mb-20 md:mb-24 relative z-10 mt-8">
              <Reveal delayMs={300}>
                <div className="relative">
                  <Image
                    src="/assets/images/logo.png"
                    alt="Logo"
                    width={1200}
                    height={1200}
                    priority
                    className="w-auto max-w-full h-auto object-contain opacity-60"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(255, 0, 150, 0.8)) drop-shadow(0 0 40px rgba(255, 0, 150, 0.6)) drop-shadow(0 0 60px rgba(255, 0, 150, 0.4))',
                      mixBlendMode: 'screen'
                    }}
                  />
                  
                  {/* Title Section - positioned over logo */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16" style={{ transform: 'translateY(120px)' }}>
                    <Reveal delayMs={500}>
                      <div className="flex flex-col items-center gap-1 md:gap-2 w-full">
                        <div style={{ fontFamily: 'CyberCrownFour, sans-serif' }} className="w-full flex justify-center">
                            <div className="text-center">
                              <CyberText 
                                text="Holo Shadow" 
                                className="text-8xl custom-blue-glow" 
                                glow={false} 
                                glowColor="cyan" 
                              />
                            </div>
                        </div>

                        <span className="inline-flex items-center gap-2 md:gap-3 align-middle mt-4">
                          <span className="text-blue-400 text-sm md:text-base font-medium">By ZheChen - s3872176</span>
                          <span
                            className={`relative inline-block w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2}`}
                            style={dimmed ? { border: '2px solid rgba(240,63,222,0.9)', boxShadow: '0 0 18px rgba(240,63,222,0.75), 0 0 42px rgba(240,63,222,0.45)' } : { border: '2px solid hsla(292, 100.00%, 84.70%, 0.90)' }}
                          >
                            <Image src="/assets/images/chen-1.jpg" alt="Chen avatar" fill className="object-cover" />
                          </span>
                        </span>
                      </div>
                    </Reveal>
                    <Reveal delayMs={700}>
                      <p className="mt-6 max-w-xl mx-auto text-blue-300 font-medium">
                        Light × Shadow, Cyber × Calm — a quiet neon that breathes.
                      </p>
                    </Reveal>
                  </div>
                </div>
              </Reveal>
            </div>
            
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
                    <div className={`relative rounded-3xl overflow-hidden neon-border ${dimmed ? 'neon-halo-cyan' : 'halo-neutral'}`}>
                    <Image
                      src={first.coverImage}
                      alt={first.title}
                        width={1400}
                        height={1800}
                      priority
                        className={`w-auto max-w-full h-auto object-contain rounded-2xl ${dimmed ? 'neon-image-cyan' : 'neon-image-soft'}`}
                    />
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right: title (lights on) or description (lights off) */}
              <div className={`order-2 max-w-1xl md:max-w-1xl w-full relative z-10 -ml-12 justify-self-start overflow-visible ${dimmed ? 'neon-text-cyan-strong' : ''}`}
              >
                <AnimatePresence mode="wait">
                  {!dimmed ? (
                    <motion.div
                      key="title"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="text-center"
                    >
                      <div className="h-[280px] bg-transparent"></div>
                      <h3 className="text-6xl font-medium text-white/90 mb-2" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                        Digital Dreams
                      </h3>
                      <p className="text-base md:text-lg text-white/70" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                        A journey through cyber aesthetics
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="desc"
                      initial={{ x: 24, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 24, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-6 text-center"
                    >
                      <div className="mb-3" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                        <CyberText text="Story" className="text-6xl" glow={dimmed} glowColor={dimmed ? "pink" : "cyan"} />
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

       
          

      
          <div className="h-[110px] bg-transparent"></div>

          <section id="p1-icon1" className="mt-52 md:mt-80">
            {/* Button and Description Area */}
            <div className="mt-72 flex flex-col items-center gap-8">
              <Reveal delayMs={120}>
                <div className="flex items-center justify-center gap-10">
                  <div onClick={handleActivate} className="cursor-pointer">
                    <IconButton iconSrc="/assets/images/icon1.png" alt="action" size={230} />
                  </div>
                  {/* Static icons (icon2 & icon3) - not buttons */}
                  <Image src="/assets/images/icon2.png" alt="icon 2" width={220} height={220} className="object-contain" />
                  <Image src="/assets/images/icon3.png" alt="icon 3" width={220} height={220} className="object-contain" />
                </div>
              </Reveal>
              {showBox && (
                <div
                  className="w-full md:max-w-2xl min-h-[80px] p-6 md:p-8 rounded-lg space-y-8 glass-card neon-border"
                  style={{ animation: 'fadeInBox 400ms ease-out forwards' }}
                >
                  <div className="h-[px] bg-transparent"></div>
                  <div
                    className="overflow-hidden transition-[max-height] ease-out"
                    style={{ maxHeight: `${visibleLines * lineHeightPx + 160}px`, transitionDuration: `${speedMs}ms` }}
                  >
                    <StreamingText
                      text={streamingText}
                      isActive={showText}
                      speed={speedMs}
                      dimmed={dimmed}
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

          <div className="h-[80px] md:h-[80px] bg-transparent"></div>

            {/* Part: Chen-2 + Story block */}
            <div className="w-full flex flex-col items-center justify-center gap-10 mt-8 mb-24">
              {/* chen-2 image */}
              <Reveal>
                <div className={`relative rounded-3xl overflow-hidden ${dimmed ? 'neon-halo-strong' : 'halo-neutral'}`}>
                  <Image
                    src="/assets/images/chen-2.png"
                    alt="Chen artwork 2"
                    width={500}
                    height={500}
                    priority
                    className={`w-auto max-w-full h-auto object-contain rounded-2xl ${dimmed ? 'neon-image-strong' : 'neon-image-soft'}`}
                  />
                </div>
              </Reveal>

              {/* story title + description */}
              <div className={`order-2 max-w-2xl  w-full relative z-10 justify-self-start overflow-visible ${dimmed ? 'neon-text-pink-strong' : ''}`}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key="desc"
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 24, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-center glass-card neon-border rounded-2xl px-10 md:px-20 ${dimmed ? 'neon-halo-strong' : ''}`}
                  >
                    <div className="mx-auto max-w-[60ch] md:max-w-[68ch]">
                      <div className="h-[40px] bg-transparent"></div>
                      <div className="mb-3" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                        <CyberText text="Story" className="text-6xl" glow={dimmed} glowColor={dimmed ? 'yellow' : 'cyan'} />
                      </div>
                      <div className="h-[10px] bg-transparent"></div>
                      <p className="leading-relaxed mb-4">{first.description}</p>
                      <p className="whitespace-pre-line">{first.story}</p>
                      <div className="h-[60px] bg-transparent"></div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* New Section: Chen-3 Digital Art Layout */}
            <div className="h-[220px] bg-transparent"></div>
            
            <section id="chen-3-section" className="mt-20 md:mt-28 relative">
              {/* Two-column: left digital art, right description */}
              <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-8 md:gap-10 items-start">
                {/* Left: Digital Art Piece */}
                <div className="order-1 max-w-[1400px] mx-auto w-full relative z-10">
                  <Reveal>
                    <div className="w-full flex items-center justify-center">
                      <div className={`relative rounded-3xl overflow-hidden neon-border ${dimmed ? 'neon-halo-cyan' : 'halo-neutral'}`}>
                        <Image
                          src="/assets/images/chen-3.jpg"
                          alt="Digital Art Piece"
                          width={1400}
                          height={1800}
                          priority
                          className={`w-auto max-w-full h-auto object-contain rounded-2xl ${dimmed ? 'neon-image-cyan' : 'neon-image-soft'}`}
                        />
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Right: Title and Story */}
                <div className={`order-2 max-w-1xl md:max-w-1xl w-full relative z-10 -ml-12 justify-self-start overflow-visible ${dimmed ? 'neon-text-cyan-strong' : ''}`}>
                  <AnimatePresence mode="wait">
                    {!dimmed ? (
                      <motion.div
                        key="title"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-center"
                      >
                        <div className="h-[280px] bg-transparent"></div>
                        <h3 className="text-6xl font-medium text-white/90 mb-2" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                          Stary
                        </h3>
                        <p className="text-base md:text-lg text-white/70" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                          A cyberpunk digital narrative
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="desc"
                        initial={{ x: 24, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 24, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-6 text-center"
                      >
                        <div className="mb-3" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                          <CyberText text="Stary" className="text-6xl" glow={dimmed} glowColor={dimmed ? "pink" : "cyan"} />
                        </div>
                        <div className="h-[10px] bg-transparent"></div>
                        <p className="leading-relaxed mb-4 text-white/90">
                          The first light of dawn brushes the snowy peaks as a sea of clouds rolls below—like stepping into a dream.
                        </p>
                        <p className="leading-relaxed mb-4 text-white/90">
                          Shot in the autumn of 2024. I climbed alone to a 4,000m viewpoint, leaving at 3 a.m., feeling my way through the dark just to catch that fleeting perfect light. As the sun slowly rose, golden rays lit the ridgelines. In that moment every trace of fatigue turned into awe. Nature's craftsmanship humbles and inspires me.
                        </p>
                        <p className="leading-relaxed text-white/90">
                          This shoot reminded me that the most beautiful views often require the hardest steps. Behind every frame lies countless rounds of waiting and persistence.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </section>
        </div>
        <div className="h-[160px] md:h-[240px] bg-transparent"></div>
      </div>
    </div>
  );
}
