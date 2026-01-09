
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface VideoContent {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
  category: 'Historia' | 'Tecnología' | 'Estrategia';
}

export interface BlogPost {
  id: string;
  slug: string; // Used for SEO-friendly URLs
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}
