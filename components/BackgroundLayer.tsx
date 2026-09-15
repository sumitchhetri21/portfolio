'use client';

import React from 'react';
import { Theme } from '@/types/portfolio';

interface BackgroundLayerProps {
  theme: Theme;
}

export function BackgroundLayer({ theme }: BackgroundLayerProps) {
  const bgImage =
    theme === 'dark'
      ? 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=85'
      : 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 transform scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      {/* Deep atmospheric gradients and soft glowing orbs */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-900/40 to-indigo-950/70 dark:opacity-90 opacity-40 transition-opacity" />
      <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
