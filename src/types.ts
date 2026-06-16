import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string; // lucide class string identifier or we will pass components at render time
  details: string[];
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: 'trading' | 'materials' | 'scrap' | 'logistics';
  title: string;
  description: string;
  image: string;
}

export interface Stats {
  experience: number;
  projects: number;
  clients: number;
  deliveries: number;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  badge: string;
  badgeColor: string;
  iconName: string;
  paragraphs: string[];
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}


