export interface Work {
  id: string;
  title: string;
  slug: string;
  category: string;
  coverImage: string;
  images: string[];
  description: string;
  story: string;
  date: string;
  featured?: boolean;
}

export interface Author {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  social: {
    email?: string;
    instagram?: string;
    twitter?: string;
    github?: string;
  };
}

