'use client';

import Image from 'next/image';
import { works } from '@/data/works';
import Reveal from '@/components/Reveal';
import StoryContent from '@/components/StoryContent';
import IconButton from '@/components/IconButton';
import StreamingText from '@/components/StreamingText';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const first = works[0];
  const [showBox, setShowBox] = useState(false);
  const [showText, setShowText] = useState(false);
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
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Content */}
        <div>
          {/* p1: Image and Story */}
          <section id="p1" className='mt-40 md:mt-56'>
            <div className="grid md:grid-cols-[1fr_1fr] gap-20 items-center">
              {/* Left: Story */}
              <div className="order-2 md:order-1 space-y-6">
                <Reveal>
                  <StoryContent
                    title="Story"
                    description={first.description}
                    story={first.story}
                    className="bg-foreground/10 rounded-lg p-6 m-2 md:m-4"
                  />
                </Reveal>
              </div>
              
              {/* Right: Image */}
              <div className="order-1 md:order-2">
                <Reveal>
                  <div className="w-full h-[60vh] relative overflow-hidden">
                    <Image
                      src={first.coverImage}
                      alt={first.title}
                      fill
                      className="object-contain"
                      priority
                      sizes="50vw"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <div className="h-[80px] bg-transparent"></div>

          <section id="p1-icon1" className="mt-40 md:mt-60">
            {/* Button and Description Area */}
            <div className="mt-60 flex items-start gap-6">
              <Reveal delayMs={120}>
                <div onClick={handleActivate} className="cursor-pointer">
                  <IconButton iconSrc="/assets/images/icon1.png" alt="action" size={230} />
                </div>
              </Reveal>
              {showBox && (
                <div
                  className="w-full md:max-w-2xl min-h-[80px] p-4 rounded-lg space-y-8 bg-foreground/10 m-2 md:m-4"
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
          <section id="p2" className="mt-56 md:mt-72">
            <Reveal>
              <div className="text-center py-20">
                <h3 className="text-xl font-light text-white/70 mb-4">More Content</h3>
                <p className="text-white/60 font-light">
                  More works and content coming soon...
                </p>
              </div>
            </Reveal>
          </section>



        </div>
      </div>
    </div>
  );
}
