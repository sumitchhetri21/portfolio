'use client';

import React from 'react';

interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  const isVisible = Boolean(message);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-pill px-5 py-2.5 rounded-full border border-brand-neon/60 text-xs text-white shadow-xl transition-all duration-300 flex items-center gap-2 ${
        isVisible
          ? 'opacity-100 pointer-events-auto transform translate-y-0'
          : 'opacity-0 pointer-events-none transform translate-y-2'
      }`}
    >
      <i className="fa-solid fa-circle-check text-brand-neon" />
      <span>{message || ''}</span>
    </div>
  );
}
