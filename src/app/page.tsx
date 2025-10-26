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
  
  // 获取基础路径
  const basePath = process.env.NODE_ENV === 'production' ? '/chenWeb' : '';
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

  // 根据 dimmed 状态切换背景图片
  useEffect(() => {
    const body = document.body;
    // 开灯和关灯都使用 bg.jpg
    body.style.background = `var(--background) url('${basePath}/assets/images/bg.jpg') center center / cover no-repeat fixed`;
    
    // 清理函数，组件卸载时恢复默认背景
    return () => {
      body.style.background = 'var(--background)';
    };
  }, [dimmed, basePath]);

  return (
    <div className="min-h-screen relative">
      {/* Floating background icons - hidden on mobile */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
        {/* Icon 1 - Random position */}
        <div className="absolute top-[15%] left-[8%] opacity-100">
          <Image 
            src={`${basePath}/assets/images/icon1.png`}
            alt="icon 1" 
            width={200} 
            height={200} 
            className="object-contain floating-icon-1" 
          />
        </div>
        
        {/* Icon 2 - Random position */}
        <div className="absolute top-[25%] right-[12%] opacity-100">
          <Image 
            src={`${basePath}/assets/images/icon2.png`}
            alt="icon 2" 
            width={180} 
            height={180} 
            className="object-contain floating-icon-2" 
          />
        </div>
        
        {/* Icon 3 - Random position */}
        <div className="absolute top-[60%] left-[5%] opacity-100">
          <Image 
            src={`${basePath}/assets/images/icon3.png`}
            alt="icon 3" 
            width={220} 
            height={220} 
            className="object-contain floating-icon-3" 
          />
        </div>
        
        {/* Icon 4 - Random position */}
        <div className="absolute top-[40%] right-[6%] opacity-100">
          <Image 
            src={`${basePath}/assets/images/icon4.png`}
            alt="icon 4" 
            width={190} 
            height={190} 
            className="object-contain floating-icon-4" 
          />
        </div>
        
        {/* Icon 5 - Random position */}
        <div className="absolute top-[75%] left-[15%] opacity-100">
          <Image 
            src={`${basePath}/assets/images/icon5.png`}
            alt="icon 5" 
            width={210} 
            height={210} 
            className="object-contain floating-icon-5" 
          />
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-4 relative z-10">
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
            <div className="w-full flex flex-col items-center justify-center mb-12 md:mb-20 lg:mb-24 relative z-10 mt-4 md:mt-8">
              
              <Reveal delayMs={300}>
                <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] mx-auto">
                  <Image
                    src={`${basePath}/assets/images/logo.png`}
                    alt="Logo"
                    width={1200}
                    height={1200}
                    priority
                    className="w-full h-auto object-contain opacity-60"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(255, 0, 150, 0.8)) drop-shadow(0 0 40px rgba(255, 0, 150, 0.6)) drop-shadow(0 0 60px rgba(255, 0, 150, 0.4))',
                      mixBlendMode: 'screen'
                    }}
                  />
                  
                  {/* Title Section - positioned over logo */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-4 pt-8 sm:pt-12 md:pt-16" style={{ transform: 'translateY(60px) sm:translateY(80px) md:translateY(120px)' }}>
                    <Reveal delayMs={500}>
                      <div className="flex flex-col items-center gap-1 md:gap-2 w-full">
                        <div style={{ fontFamily: 'CyberCrownFour, sans-serif' }} className="w-full flex justify-center">
                            <div className="text-center">
                              <CyberText 
                                text="Holo Shadow" 
                                className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl cyan-green-glow" 
                                glow={false} 
                                glowColor="cyan" 
                              />
                              
                            </div>
                        </div>

                        <span className="inline-flex items-center gap-1 sm:gap-2 md:gap-3 align-middle mt-2 md:mt-4">
                          <span className="text-blue-400 text-xs sm:text-sm md:text-base font-medium">By ZheChen - s3872176</span>
                          <span
                            className={`relative inline-block w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 rounded-full overflow-hidden border-2}`}
                            style={dimmed ? { border: '2px solid rgba(240,63,222,0.9)', boxShadow: '0 0 18px rgba(240,63,222,0.75), 0 0 42px rgba(240,63,222,0.45)' } : { border: '2px solid hsla(292, 100.00%, 84.70%, 0.90)' }}
                          >
                            <Image src={`${basePath}/assets/images/chen-1.jpg`} alt="Chen avatar" fill className="object-cover" />
                          </span>
                        </span>
                      </div>
                    </Reveal>       
                  </div>
                </div>
              </Reveal>
            </div>


            <div className="w-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold purple-pink-glow mt-4 md:mt-8 max-w-4xl" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                Rebirth of Light and Shadow: The Metaverse of Shadow Puppetry
              </h2>
              <Reveal delayMs={700}>
                <div className="mt-12 sm:mt-16 md:mt-24 mb-16 sm:mb-24 md:mb-32 max-w-2xl mx-auto text-justify px-4">
                  <div className="h-4 md:h-8"></div>
                  <p className="white-glow font-medium text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                    "Rebirth of Light and Shadow: The Metaverse of Shadow Puppetry" reimagines the ancient Chinese art of shadow puppetry through the lens of AI, digital memory, and metaverse technology.
                  </p>
                  <p className="white-glow font-medium text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                    In this world, traditional puppeteers are replaced by intelligent machines that inherit human craftsmanship, preserving cultural heritage within data and code.
                  </p>
                  <p className="white-glow font-medium text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                    The series explores the blurred boundaries between tradition and innovation, human and machine, control and autonomy.
                  </p>
                  <p className="white-glow font-medium text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                    It raises a question that defines our age:
                  </p>
                  <p className="white-glow font-bold text-base sm:text-lg md:text-xl leading-relaxed">
                    When AI learns our culture and emotions — does tradition die, or does it evolve into something immortal?
                  </p>
                  <div className="h-4 md:h-8"></div>
                </div>
              </Reveal>
            </div>

            <div className="h-30 bg-transparent"></div>


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
                        <Image src={`${basePath}/assets/images/light_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg`} alt="light" width={18} height={18} style={{ filter: dimmed ? 'brightness(0) saturate(100%) invert(78%) sepia(23%) saturate(7488%) hue-rotate(299deg) brightness(104%) contrast(101%) drop-shadow(0 0 8px rgba(240,63,222,0.9)) drop-shadow(0 0 16px rgba(240,63,222,0.55))' : 'none' }} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.button>
            </div>

            <div className="h-20 bg-transparent"></div>

            {/* Chen-1 Title */}
            <div className="w-full flex items-center justify-center mb-8 sm:mb-12 md:mb-16 px-4">
              <Reveal delayMs={300}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold white-cyan-blue-glow text-center" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                  Behind Shadow
                </h2>
              </Reveal>
            </div>

            <div className="h-[80px] md:h-[80px] bg-transparent"></div>

            {/* Conditional layout: centered image (lights on) or two-column (lights off) */}
            <AnimatePresence mode="wait">
              {!dimmed ? (
                <motion.div
                  key="centered"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex justify-center px-4 sm:px-6"
                >
                  <div className="max-w-[400px] sm:max-w-[450px] md:max-w-[500px] mx-auto w-full relative z-10">
                    <Reveal>
                      <div className="w-full flex items-center justify-center">
                        <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden neon-border ${dimmed ? 'neon-halo-cyan' : 'halo-neutral'}`}>
                          <Image
                            src={`${basePath}${first.coverImage}`}
                            alt={first.title}
                            width={400}
                            height={500}
                            priority
                            className={`w-full h-auto object-contain rounded-2xl ${dimmed ? 'neon-image-cyan' : 'neon-image-soft'}`}
                          />
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="two-column"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 md:gap-8 lg:gap-10 items-start relative px-4 sm:px-6"
                >
                  {/* Left: image */}
                  <div className="order-1 max-w-[400px] sm:max-w-[450px] md:max-w-[500px] mx-auto w-full relative z-10">
                    <Reveal>
                      <div className="w-full flex items-center justify-center">
                        <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden neon-border ${dimmed ? 'neon-halo-cyan' : 'halo-neutral'}`}>
                          <Image
                            src={`${basePath}${first.coverImage}`}
                            alt={first.title}
                            width={400}
                            height={500}
                            priority
                            className={`w-full h-auto object-contain rounded-2xl ${dimmed ? 'neon-image-cyan' : 'neon-image-soft'}`}
                          />
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* Right: description */}
                  <div className={`order-2 max-w-1xl lg:max-w-1xl w-full relative z-10 lg:-ml-12 justify-self-start overflow-visible ${dimmed ? 'neon-text-cyan-strong' : ''}`}>
                    <div className="p-4 sm:p-6 text-center">
                      <div className="h-[5px] sm:h-[10px] bg-transparent"></div>
                      <p className="leading-relaxed mb-3 sm:mb-4 text-white/70 text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                        In a distant digital future, the art of shadow puppetry is no longer guided by human hands but by an intelligent machine that carries the memories of ancient artisans. A figure with mechanical hands and luminous circuits manipulates a glowing frame where misty mountains and futuristic towers coexist, merging the past and the future into a single vision.
                      </p>
                      <p className="leading-relaxed mb-3 sm:mb-4 text-white/70 text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                        Beneath her, an open book unfolds like a holographic projector, releasing streams of light that bring forgotten stories to life — heroes, spirits, and dreams once told through fragile paper silhouettes now reborn as holographic beings. The red lanterns that once lit wooden stages have transformed into digital orbs, pulsing with data instead of flame.
                      </p>
                      <p className="leading-relaxed text-white/70 text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                        She is not merely a performer but a guardian — a keeper behind the shadows — ensuring that tradition endures in the circuitry of memory. The scene reveals a world where culture has transcended its material form, existing eternally in the harmony between code and soul.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

       
          

      
          <div className="h-[110px] bg-transparent"></div>


          <div className="h-[80px] md:h-[80px] bg-transparent"></div>

            {/* Part: Chen-2 + Story block */}
            <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-4 sm:mt-6 md:mt-8 mb-16 sm:mb-20 md:mb-24 relative px-4 sm:px-6">
              
              {/* Chen-2 Title */}
              <div className="w-full flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
                <Reveal delayMs={300}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold white-purple-glow text-center" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                    The Broken Strings
                  </h2>
                </Reveal>
              </div>
              
              {/* chen-2 image */}
              <Reveal>
                <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden max-w-[400px] sm:max-w-[450px] md:max-w-[500px] mx-auto ${dimmed ? 'neon-halo-strong' : 'halo-neutral'}`}>
                  <Image
                    src={`${basePath}/assets/images/chen-2.png`}
                    alt="Chen artwork 2"
                    width={400}
                    height={500}
                    priority
                    className={`w-full h-auto object-contain rounded-2xl ${dimmed ? 'neon-image-strong' : 'neon-image-soft'}`}
                  />
                </div>
              </Reveal>

              {/* story title + description - Only show when dimmed (lights off) */}
              <AnimatePresence>
                {dimmed && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className={`order-2 max-w-2xl w-full relative z-10 justify-self-start overflow-visible ${dimmed ? 'neon-text-pink-strong' : ''}`}
                  >
                    <div className="text-center px-4 sm:px-8 md:px-12 lg:px-20">
                      <div className="mx-auto max-w-[60ch] md:max-w-[68ch]">
                        <div className="h-[20px] sm:h-[30px] md:h-[40px] bg-transparent"></div>
                        <p className="leading-relaxed mb-3 sm:mb-4 white-purple-glow text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                          A colossal robotic hand hovers over a city of neon rivers and digital twilight, its glowing threads once controlling every move of the shadow dancers below. But as the puppets step into this future skyline, the strings begin to break — one by one.
                        </p>
                        <p className="leading-relaxed mb-3 sm:mb-4 white-purple-glow text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                          Freed from the grasp of their mechanical master, the shadow figures awaken, dancing freely along flowing data streams that wind between towering buildings. Their movements are no longer directed but born of memory, instinct, and the echoes of ancient rhythm.
                        </p>
                        <p className="leading-relaxed mb-3 sm:mb-4 white-purple-glow text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                          In the background, a melting clock and an autumn tree mark the passage of time — symbols of both decay and renewal. The moment the strings break, tradition finds a new pulse; what was once bound to human control becomes alive in its own right.
                        </p>
                        <p className="leading-relaxed white-purple-glow text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                          The image captures the paradox of progress — where preservation and transformation intertwine — and where culture, once made of leather and light, now lives within algorithms that remember how to dream.
                        </p>
                        <div className="h-[30px] sm:h-[45px] md:h-[60px] bg-transparent"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* New Section: Chen-3 Digital Art Layout */}
            <div className="h-[100px] sm:h-[150px] md:h-[220px] bg-transparent"></div>
            
            <section id="chen-3-section" className="mt-10 sm:mt-16 md:mt-20 lg:mt-28 relative px-4 sm:px-6">
              
              {/* Two-column: left digital art, right description */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-6 md:gap-8 lg:gap-10 items-start">
                {/* Left: Digital Art Piece */}
                <div className="order-1 max-w-[400px] sm:max-w-[450px] md:max-w-[500px] mx-auto w-full relative z-10">
                  <Reveal>
                    <div className="w-full flex items-center justify-center">
                      <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden neon-border ${dimmed ? 'neon-halo-pink' : 'halo-neutral'}`}>
                        <Image
                          src={`${basePath}/assets/images/chen-3.jpg`}
                          alt="Digital Art Piece"
                          width={400}
                          height={500}
                          priority
                          className={`w-full h-auto object-contain rounded-2xl ${dimmed ? 'neon-image-pink' : 'neon-image-soft'}`}
                        />
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Right: Title and Story */}
                <div className={`order-2 max-w-1xl lg:max-w-1xl w-full relative z-10 lg:-ml-12 justify-self-start overflow-visible ${dimmed ? 'neon-text-pink-strong' : ''}`}>
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
                        <div className="h-[100px] sm:h-[180px] md:h-[240px] lg:h-[280px] bg-transparent"></div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium purple-pink-glow mb-2" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                          The Curtain of the Future
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-white/70" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                          A digital narrative of heritage and technology
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="desc"
                        initial={{ x: 24, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 24, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-4 sm:p-6 text-center"
                      >
                        <div className="mb-2 sm:mb-3" style={{ fontFamily: 'CyberCrownFour, sans-serif' }}>
                          <CyberText text="The Curtain of the Future" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" glow={dimmed} glowColor={dimmed ? "pink" : "cyan"} />
                        </div>
                        <div className="h-[5px] sm:h-[10px] bg-transparent"></div>
                        <p className="leading-relaxed mb-3 sm:mb-4 text-white/90 text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                          The traditional stage curtain opens to unveil the prologue of a new kind of shadow play — one where heritage and technology converge beneath the same light. Around the frame, intricate patterns of clouds, flora, and shadow-puppet motifs intertwine with glowing circuits, merging the beauty of craftsmanship with the pulse of the digital age.
                        </p>
                        <p className="leading-relaxed mb-3 sm:mb-4 text-white/90 text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                          At the center, the shadow screen becomes more than a performance surface — it is also a mirror. On one side stands the memory of the past: delicate, handcrafted figures fading into light. On the other side, their reflections — futuristic robotic beings — gaze back, quietly taking their place.
                        </p>
                        <p className="leading-relaxed text-white/90 text-justify text-sm sm:text-base md:text-lg lg:text-xl">
                          The transformation is underway: the tangible world dissolves into pure code, and the silhouettes once carved in leather are reborn as streams of data.
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
