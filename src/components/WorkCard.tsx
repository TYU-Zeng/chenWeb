import Link from 'next/link';
import Image from 'next/image';
import { Work } from '@/types';

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <Link href={`/works/${work.slug}`} className="group block">
      <div className="bg-foreground/10 rounded-lg p-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src={work.coverImage}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-light mb-2">{work.title}</h3>
              <p className="text-sm text-foreground/80">{work.category}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-light mb-1">{work.title}</h3>
          <p className="text-sm text-foreground/50">{work.category}</p>
        </div>
      </div>
    </Link>
  );
}

