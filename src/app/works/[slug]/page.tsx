import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { works } from '@/data/works';
import type { Metadata } from 'next';

interface WorkPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return {
      title: 'Work Not Found',
    };
  }

  return {
    title: `${work.title} | Chen Photography`,
    description: work.description,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  const currentIndex = works.findIndex((w) => w.slug === slug);
  const previousWork = currentIndex > 0 ? works[currentIndex - 1] : null;
  const nextWork = currentIndex < works.length - 1 ? works[currentIndex + 1] : null;

  return (
    <div className="pt-40 bg-background text-foreground">
      {/* Hero Image */}
      <section className="relative h-screen">
        <Image
          src={work.coverImage}
          alt={work.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="container mx-auto">
            <p className="text-foreground/60 text-sm mb-2 tracking-wider uppercase">
              {work.category}
            </p>
            <h1 className="text-5xl md:text-7xl font-light mb-4">{work.title}</h1>
            <p className="text-xl text-foreground/80 font-light max-w-3xl">
              {work.description}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-12 pb-6 border-b border-foreground/10">
              <h2 className="text-3xl font-light">Story</h2>
              <p className="text-foreground/40">{work.date}</p>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="text-foreground/80 leading-relaxed space-y-6 font-light text-lg whitespace-pre-line bg-foreground/10 rounded-lg p-6">
                {work.story}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-foreground/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center">More Photos</h2>
          <div className="space-y-12">
            {work.images.map((image, index) => (
              <div key={index} className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={image}
                  alt={`${work.title} - ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              {previousWork && (
                <Link
                  href={`/works/${previousWork.slug}`}
                  className="group flex items-center space-x-4 hover:text-foreground/60 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-foreground/40 mb-1">Previous Work</p>
                    <p className="text-lg font-light">{previousWork.title}</p>
                  </div>
                </Link>
              )}
            </div>

            <Link
              href="/"
              className="px-6 py-3 border border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300 text-sm tracking-wider uppercase"
            >
              Back Home
            </Link>

            <div>
              {nextWork && (
                <Link
                  href={`/works/${nextWork.slug}`}
                  className="group flex items-center space-x-4 hover:text-foreground/60 transition-colors"
                >
                  <div className="text-right">
                    <p className="text-sm text-foreground/40 mb-1">Next Work</p>
                    <p className="text-lg font-light">{nextWork.title}</p>
                  </div>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

