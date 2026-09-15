'use client';

import React from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayReelAudio: () => void;
}

export function VideoModal({ isOpen, onClose, onPlayReelAudio }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="glass-shell rounded-3xl p-4 md:p-6 w-full max-w-3xl border border-white/25 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-900 border border-white/30 text-white hover:text-brand-neon flex items-center justify-center shadow-lg transition-colors z-10"
        >
          <i className="fa-solid fa-xmark text-sm" />
        </button>

        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <h3 className="text-sm font-semibold text-white">JD&apos;s 2026 Creative Showreel</h3>
          </div>
          <span className="text-xs font-mono text-slate-400">4K 60FPS • Dolby Atmos</span>
        </div>

        {/* Video Player Frame Simulation */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 flex items-center justify-center group">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
            alt="Reel preview"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-6">
            <div className="flex justify-end">
              <span className="px-3 py-1 rounded-full bg-brand-neon/20 border border-brand-neon text-brand-neon text-xs font-mono">
                LIVE PREVIEW
              </span>
            </div>
            <div className="text-center space-y-2">
              <button
                onClick={onPlayReelAudio}
                className="w-16 h-16 rounded-full bg-brand-neon text-slate-950 flex items-center justify-center mx-auto hover:scale-110 shadow-[0_0_25px_rgba(163,230,53,0.9)] transition-all"
              >
                <i className="fa-solid fa-play text-xl ml-1" />
              </button>
              <p className="text-white font-medium text-sm">&quot;The Art of Motion & Code&quot;</p>
            </div>
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-brand-neon h-full w-2/5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
