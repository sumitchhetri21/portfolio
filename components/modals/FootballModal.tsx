'use client';

import React from 'react';

interface FootballModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FootballModal({ isOpen, onClose }: FootballModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-lg flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="glass-shell rounded-3xl p-6 w-full max-w-md border border-white/20 shadow-2xl relative space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <i className="fa-solid fa-xmark text-base" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <i className="fa-regular fa-futbol text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Football Philosophy</h3>
            <p className="text-xs text-brand-neon font-mono">
              Box-to-Box Midfielder • Tactical Geek
            </p>
          </div>
        </div>
        <div className="glass-pill p-4 rounded-xl text-xs text-slate-200 space-y-2 border border-white/10">
          <p>
            <strong>Favorite Playstyle:</strong> High-press counter-attack with inverted wing-backs.
          </p>
          <p>
            <strong>Sunday League Kit:</strong> #8 Central Playmaker
          </p>
          <p>
            <strong>Quote:</strong> &quot;Football is simple, but the hardest thing is to play simple.&quot; — Johan Cruyff
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl explore-glow-btn text-white text-xs font-semibold hover:scale-[1.01] transition-transform"
        >
          Back to Portfolio
        </button>
      </div>
    </div>
  );
}
