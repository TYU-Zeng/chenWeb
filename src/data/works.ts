import { Work } from '@/types';

// 临时使用占位图片，请替换为您自己的图片
// 将图片放到 public/assets/images/ 文件夹中
export const works: Work[] = [
  {
    id: '1',
    title: 'Mountain Sunrise',
    slug: 'mountain-sunrise',
    category: 'Landscape',
    coverImage: '/assets/images/chen-1.jpg',
    images: [
      '/assets/images/chen-1.jpg',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&h=1080&fit=crop',
    ],
    description: 'The first light of dawn brushes the snowy peaks as a sea of clouds rolls below—like stepping into a dream.',
    story: `Shot in the autumn of 2024. I climbed alone to a 4,000m viewpoint, leaving at 3 a.m., feeling my way through the dark just to catch that fleeting perfect light.

As the sun slowly rose, golden rays lit the ridgelines. In that moment every trace of fatigue turned into awe. Nature’s craftsmanship humbles and inspires me.

This shoot reminded me that the most beautiful views often require the hardest steps. Behind every frame lies countless rounds of waiting and persistence.`,
    date: '2024-09-15',
    featured: true,
  },
  {
    id: '2',
    title: 'City Nights',
    slug: 'city-nights',
    category: 'Cityscape',
    coverImage: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1600&h=1200&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&h=1080&fit=crop',
    ],
    description: 'Neon flickers, traffic flows—framing both the glitter and solitude of the city.',
    story: `Nights in the city are full of stories. I love moving between high-rises, catching outlines carved by light.

This series was made on different corners: every crisscross of light and shadow reveals the city’s character—from crowded shopping streets to quiet alleys, from dazzling skylines to a lone streetlamp. The night has a thousand faces.

Through the lens I seek more than the surface—there’s warmth and emotion beneath the concrete and steel.`,
    date: '2024-08-20',
    featured: true,
  },
  {
    id: '3',
    title: 'Coastline',
    slug: 'coastline',
    category: 'Landscape',
    coverImage: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&h=1200&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1920&h=1080&fit=crop',
    ],
    description: 'Waves crash against rocks while sunset colors wash the sea—time slows here.',
    story: `The ocean is one of my favorite subjects—vast, unpredictable, powerful yet gentle.

This set was shot in a small fishing village on the east coast, where I stayed for a week. Each day I waited for different light, studied the tides, and felt the force of the wind.

I used slow shutter to trace the waves, telephoto to compress distant sails, and wide-angle to show the stance of the reefs. Every click is a salute to the sea.`,
    date: '2024-07-10',
  },
  {
    id: '4',
    title: 'Deep Forest',
    slug: 'deep-forest',
    category: 'Landscape',
    coverImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=1200&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&h=1080&fit=crop',
    ],
    description: 'Sunlight filters through the leaves, casting mottled shadows across the forest floor.',
    story: `Stepping into the forest feels like entering another world. The city noise fades—only birdsong and wind remain.

These were taken in early autumn. Morning mist still lingered while beams of light poured through the canopy. The calm, almost sacred air made me slow my steps and breathe softer.

In the forest time seems to pause. I learned to wait, to observe, and to speak with nature.`,
    date: '2024-06-05',
  },
];

