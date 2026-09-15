'use client';

import React from 'react';
import { VideoItem } from '@/types/portfolio';

interface YouTubeSectionProps {
  isActive: boolean;
  onOpenVideoModal: () => void;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'video-1',
    title: 'Day in the Life: Computer Science Student & Matchday',
    views: '42K views',
    timeAgo: '2 weeks ago',
    duration: '12:44',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'video-2',
    title: 'How I Built a Minimalist Glassmorphism Desk Setup',
    views: '98K views',
    timeAgo: '1 month ago',
    duration: '18:20',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'video-3',
    title: 'Why Football is the Ultimate Game of Chess',
    views: '27K views',
    timeAgo: '3 months ago',
    duration: '09:15',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80',
  },
];

export function YouTubeSection({ isActive, onOpenVideoModal }: YouTubeSectionProps) {
  return (
    <section
      className={`tab-view flex-1 overflow-y-auto py-4 px-2 md:px-6 space-y-6 ${
        isActive ? 'flex flex-col' : 'hidden'
      }`}
    >
      <div className="max-w-5xl mx-auto space-y-6 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-brand-neon font-signature text-3xl">Channel Showcase</span>
            <h2 className="text-3xl font-extrabold text-white font-display">
              Documenting the Journey
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenVideoModal}
              className="glass-pill px-4 py-2 rounded-full text-xs text-white border border-red-500/40 hover:bg-red-500/20 transition-all flex items-center gap-2"
            >
              <i className="fa-brands fa-youtube text-red-500" />
              <span>Play Featured Reel</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {VIDEOS.map((v) => (
            <div
              key={v.id}
              onClick={onOpenVideoModal}
              className="glass-pill rounded-2xl p-3 border border-white/10 hover:border-brand-neon transition-all cursor-pointer group"
            >
              <div className="rounded-xl overflow-hidden relative aspect-video">
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-play text-xs ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-white font-mono">
                  {v.duration}
                </span>
              </div>
              <h3 className="font-bold text-white text-sm mt-3 line-clamp-1 group-hover:text-brand-neon transition-colors">
                {v.title}
              </h3>
              <p className="text-[11px] text-slate-300 mt-1">
                {v.views} • {v.timeAgo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
