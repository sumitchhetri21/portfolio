'use client';

import React from 'react';
import { TabId, Theme } from '@/types/portfolio';

interface HeaderProps {
  currentTab: TabId;
  onTabChange: (tab: TabId) => void;
  audioEnabled: boolean;
  onToggleAudio: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  onToggleMobileMenu: () => void;
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export function Header({
  currentTab,
  onTabChange,
  audioEnabled,
  onToggleAudio,
  theme,
  onToggleTheme,
  onToggleMobileMenu,
}: HeaderProps) {
  return (
    <header className="w-full flex items-center justify-between gap-4 z-20 pb-4">
      {/* Logo JD with signature flourish */}
      <div
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => onTabChange('home')}
      >
        <div className="relative">
          <span className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white drop-shadow-md group-hover:scale-105 transition-transform duration-200">
            JD
          </span>
          <span className="absolute -top-3 -right-2 text-brand-neon font-signature text-2xl rotate-12 drop-shadow-[0_0_8px_rgba(163,230,53,0.9)]">
            JD
          </span>
        </div>
      </div>

      {/* Navigation Capsule Bar */}
      <nav className="hidden lg:flex items-center px-4 py-2 glass-pill rounded-full border border-white/15 shadow-inner">
        <ul className="flex items-center space-x-1 md:space-x-3 text-sm font-medium">
          {TABS.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <li key={tab.id}>
                <button
                  onClick={() => onTabChange(tab.id)}
                  className={`nav-tab px-4 py-1.5 rounded-full transition-all relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="active-indicator absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-neon rounded-full" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Right Utility Actions: Sound Toggle & Dark/Light Switch */}
      <div className="flex items-center gap-3">
        {/* Audio chime feedback toggle */}
        <button
          onClick={onToggleAudio}
          title="Sound Effects (Tone.js)"
          className="w-10 h-10 rounded-full glass-pill flex items-center justify-center text-slate-300 hover:text-brand-neon transition-colors text-sm"
        >
          {audioEnabled ? (
            <i className="fa-solid fa-volume-high text-brand-neon" />
          ) : (
            <i className="fa-solid fa-volume-xmark text-slate-400" />
          )}
        </button>

        {/* Dark / Light Theme Toggle Pill */}
        <div
          onClick={onToggleTheme}
          className="cursor-pointer glass-pill px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20 hover:border-white/40 transition-all shadow-md group"
        >
          <span className="text-xs font-medium text-slate-300 group-hover:text-white">
            {theme === 'dark' ? 'Dark' : 'Light'}
          </span>
          <div className="w-6 h-6 rounded-full bg-slate-800/80 flex items-center justify-center text-xs text-amber-300 shadow">
            {theme === 'dark' ? (
              <i className="fa-solid fa-moon text-amber-300" />
            ) : (
              <i className="fa-solid fa-sun text-amber-500" />
            )}
          </div>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden w-10 h-10 rounded-full glass-pill flex items-center justify-center text-white"
        >
          <i className="fa-solid fa-bars-staggered text-sm" />
        </button>
      </div>
    </header>
  );
}
