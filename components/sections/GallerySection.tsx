'use client';

import React from 'react';
import { GalleryItem } from '@/types/portfolio';

interface GallerySectionProps {
  isActive: boolean;
  onShowToast: (msg: string) => void;
}

const PHOTOS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Mountain Peak at Sunset',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'g-2',
    title: 'Night Match Lights',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'g-3',
    title: 'Coding late hours',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'g-4',
    title: 'Golden Hour Walk',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=600&q=80',
  },
];

export function GallerySection({ isActive, onShowToast }: GallerySectionProps) {
  return (
    <section
      className={`tab-view flex-1 overflow-y-auto py-4 px-2 md:px-6 space-y-6 ${
        isActive ? 'flex flex-col' : 'hidden'
      }`}
    >
      <div className="max-w-5xl mx-auto space-y-6 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-brand-neon font-signature text-3xl">Captured Moments</span>
            <h2 className="text-3xl font-extrabold text-white font-display">
              Travel &amp; Atmosphere
            </h2>
          </div>
          <span className="text-xs text-slate-300 font-mono">
            FujiFilm X-T4 • 35mm f/1.4
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onShowToast(photo.title)}
              className="rounded-2xl overflow-hidden h-48 border border-white/15 cursor-pointer group relative"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                <span className="text-[10px] text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
