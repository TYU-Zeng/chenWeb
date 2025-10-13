import Image from 'next/image';
import { author } from '@/data/author';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About | Chen Photography',
  description: author.bio,
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 border-b border-foreground/10">
        <div className="container mx-auto px-6">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">About</h1>
          </Reveal>
        </div>
      </section>

      {/* Main Content: Avatar left, Text right */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-[320px_minmax(0,1fr)] gap-12 items-start">
            {/* Left: Avatar */}
            <Reveal>
              <div className="flex md:block justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-foreground/10">
                  <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                </div>
              </div>
            </Reveal>

            {/* Right: Text */}
            <div>
              <Reveal>
                <h2 className="text-2xl font-light mb-6">{author.name} — {author.title}</h2>
              </Reveal>
              <Reveal delayMs={80}>
                <div className="space-y-6 text-foreground/75 leading-relaxed font-light whitespace-pre-line">
                  {author.bio}
                </div>
              </Reveal>

              {/* Quote */}
              <Reveal delayMs={120}>
                <blockquote className="mt-10 border-l-2 border-foreground/20 pl-6 text-foreground/70 italic font-light">
                  "Life is like an adventure, as long as I am still alive, I will continue to take pictures everyday of my life."
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="py-20 bg-foreground/5">
        <div className="container mx-auto px-6">
          <Reveal>
            <h3 className="text-2xl font-light mb-8">Selected Publications</h3>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="text-foreground/50 font-light">Awards, publications, and brand collaborations can be listed here.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

