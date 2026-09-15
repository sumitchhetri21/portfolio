'use client';

import React from 'react';
import { TabId } from '@/types/portfolio';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: TabId) => void;
  currentTab: TabId;
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

export function MobileMenu({
  isOpen,
  onClose,
  onSelectTab,
  currentTab,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-20 left-6 right-6 z-50 glass-shell rounded-2xl p-6 flex flex-col gap-3 shadow-2xl border border-white/20">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            onSelectTab(tab.id);
            onClose();
          }}
          className={`text-left py-2 px-4 rounded-xl transition-colors font-medium ${
            currentTab === tab.id
              ? 'bg-white/15 text-white font-semibold'
              : 'hover:bg-white/10 text-slate-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
