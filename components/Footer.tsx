'use client';

import React from 'react';

interface FooterProps {
  onCycleNextTab: () => void;
}

export function Footer({ onCycleNextTab }: FooterProps) {
  return (
    <footer className="w-full flex items-end justify-end pt-2 z-20 pointer-events-none">
      <div
        onClick={onCycleNextTab}
        className="pointer-events-auto cursor-pointer flex flex-col items-center text-slate-300 hover:text-white transition-colors group"
      >
        <span className="text-[11px] tracking-widest uppercase font-mono opacity-80 group-hover:opacity-100">
          Scroll
        </span>
        <i className="fa-solid fa-arrow-down-long text-xs mt-1 animate-bounce-slow text-brand-neon" />
      </div>
    </footer>
  );
}
