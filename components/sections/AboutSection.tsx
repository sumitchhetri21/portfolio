'use client';

import React from 'react';

interface AboutSectionProps {
  isActive: boolean;
  onOpenFootballModal: () => void;
}

export function AboutSection({ isActive, onOpenFootballModal }: AboutSectionProps) {
  return (
    <section
      className={`tab-view flex-1 overflow-y-auto py-4 px-2 md:px-6 space-y-6 ${
        isActive ? 'flex flex-col' : 'hidden'
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-6 w-full">
        <div className="border-b border-white/10 pb-4">
          <span className="text-brand-neon font-signature text-3xl">Get to know me</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-display">
            Student, Creator &amp; Football Enthusiast
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Student */}
          <div className="glass-pill p-6 rounded-2xl border border-white/10 hover:border-brand-neon/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-brand-neon/20 flex items-center justify-center text-brand-neon text-xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-graduation-cap" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Computer Science Student</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Junior undergraduate diving into human-computer interaction, distributed systems, and cutting-edge web graphics.
            </p>
          </div>

          {/* Card 2: Creator */}
          <div className="glass-pill p-6 rounded-2xl border border-white/10 hover:border-brand-neon/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-video" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Visual Storyteller</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Producing cinematic mini-documentaries, tech reviews, and study logs exploring modern creative lifestyle.
            </p>
          </div>

          {/* Card 3: Football Lover */}
          <div className="glass-pill p-6 rounded-2xl border border-white/10 hover:border-brand-neon/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-regular fa-futbol" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Football Enthusiast</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Weekend midfielder, Premier League fanatic, and advocate for tactical match breakdowns and team dynamics.
            </p>
          </div>
        </div>

        {/* Interactive Quote & Philosophy Banner */}
        <div className="glass-shell rounded-2xl p-6 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-slate-200 font-medium italic text-base sm:text-lg">
              &quot;Create before you consume. The best view comes after the hardest climb.&quot;
            </p>
            <span className="text-xs text-brand-neon font-mono mt-1 block">
              — JD&apos;s Studio Mantra
            </span>
          </div>
          <button
            onClick={onOpenFootballModal}
            className="glass-pill px-5 py-2.5 rounded-full text-xs font-semibold text-white border border-brand-neon/50 hover:bg-brand-neon/20 transition-colors whitespace-nowrap"
          >
            ⚽ View Football Club Card
          </button>
        </div>
      </div>
    </section>
  );
}
