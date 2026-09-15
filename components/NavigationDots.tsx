'use client';

import React from 'react';
import { TabId } from '@/types/portfolio';

interface NavigationDotsProps {
  currentTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const DOTS: { id: TabId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export function NavigationDots({ currentTab, onTabChange }: NavigationDotsProps) {
  return (
    <aside className="hidden xl:flex flex-col items-center gap-3 absolute right-6 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
      {DOTS.map((dot) => {
        const isActive = currentTab === dot.id;
        return (
          <button
            key={dot.id}
            onClick={() => onTabChange(dot.id)}
            className={`transition-all hover:scale-125 rounded-full ${
              isActive
                ? 'w-2.5 h-2.5 bg-brand-neon shadow-[0_0_8px_rgba(163,230,53,0.8)]'
                : 'w-2 h-2 bg-white/40 hover:bg-white'
            }`}
            title={dot.label}
          />
        );
      })}
    </aside>
  );
}
