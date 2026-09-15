export type TabId = 'home' | 'about' | 'projects' | 'youtube' | 'gallery' | 'resume' | 'contact';

export type Theme = 'dark' | 'light';

export interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  tag: string;
  actionText: string;
  actionType: 'toast' | 'football' | 'video';
  toastMsg?: string;
  badge: string;
}

export interface VideoItem {
  id: string;
  title: string;
  views: string;
  timeAgo: string;
  duration: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

export interface ResumeItem {
  id: string;
  title: string;
  period: string;
  company: string;
  description: string;
}
