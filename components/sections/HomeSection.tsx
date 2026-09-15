'use client';

import React from 'react';
import { TabId } from '@/types/portfolio';
import { useTilt } from '@/hooks/useTilt';

interface HomeSectionProps {
  isActive: boolean;
  onNavigate: (tab: TabId) => void;
  onOpenVideoModal: () => void;
  onOpenFootballModal: () => void;
  onEditStickyNote: () => void;
  onTriggerEasterEgg: () => void;
  stickyNoteText: string;
}

export function HomeSection({
  isActive,
  onNavigate,
  onOpenVideoModal,
  onOpenFootballModal,
  onEditStickyNote,
  onTriggerEasterEgg,
  stickyNoteText,
}: HomeSectionProps) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useTilt();

  return (
    <section
      className={`tab-view flex-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 md:gap-12 relative overflow-y-auto lg:overflow-visible py-2 ${
        isActive ? 'flex' : 'hidden'
      }`}
    >
      {/* Left Column: Hero Content & Call to Actions */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10 pl-2 md:pl-4">
        {/* Handwritten JD Signature Accent */}
        <div className="relative w-fit">
          <span
            onClick={onTriggerEasterEgg}
            className="font-signature text-4xl sm:text-5xl md:text-6xl text-brand-neon tracking-wide drop-shadow-[0_0_12px_rgba(163,230,53,0.75)] inline-block transform -rotate-3 hover:scale-110 transition-transform cursor-pointer"
          >
            JD
          </span>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-neon to-transparent rounded-full -mt-2" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-lg font-display">
          Welcome to <br className="hidden sm:block" />
          my little corner <br className="hidden sm:block" />
          of the internet!
        </h1>

        {/* Subtitle Tags */}
        <div className="flex items-center gap-2 text-slate-200 text-sm sm:text-base font-semibold tracking-wide">
          <button
            onClick={() => onNavigate('about')}
            className="text-white hover:text-brand-neon transition-colors cursor-pointer"
          >
            Student
          </button>
          <span className="text-brand-neon text-xs">●</span>
          <button
            onClick={() => onNavigate('youtube')}
            className="text-white hover:text-brand-neon transition-colors cursor-pointer"
          >
            Creator
          </button>
          <span className="text-brand-neon text-xs">●</span>
          <button
            onClick={onOpenFootballModal}
            className="text-white hover:text-brand-neon transition-colors cursor-pointer"
          >
            Football Lover
          </button>
        </div>

        {/* Bio Paragraph */}
        <p className="text-slate-300/90 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
          I&apos;m just a guy with big dreams, a love for football, and a passion for creating. This is where I share my journey, ideas and work.
        </p>

        {/* CTA Buttons Row */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Glow Explore Pill Button */}
          <button
            onClick={() => onNavigate('projects')}
            className="explore-glow-btn px-7 py-3 rounded-full text-white font-medium text-sm flex items-center gap-3 group transition-all duration-300"
          >
            <span>Explore</span>
            <span className="w-5 h-5 rounded-full bg-brand-neon/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform text-brand-neon">
              <i className="fa-solid fa-arrow-right text-xs" />
            </span>
          </button>

          {/* Play Video Frosted Glass Button */}
          <button
            onClick={onOpenVideoModal}
            className="glass-pill px-6 py-3 rounded-full text-white font-medium text-sm flex items-center gap-3 hover:bg-white/15 transition-all duration-200 border border-white/20 shadow-md group"
          >
            <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-neon transition-all">
              <i className="fa-solid fa-play text-[10px] text-brand-neon ml-0.5" />
            </div>
            <span>Play Video</span>
          </button>
        </div>

        {/* Social Icons Row & Spotify Live Ticker */}
        <div className="pt-4 flex flex-wrap items-center gap-6 text-slate-300">
          <div className="flex items-center space-x-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              title="YouTube Channel"
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center hover:text-red-500 hover:scale-110 transition-all text-sm"
            >
              <i className="fa-brands fa-youtube" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center hover:text-pink-400 hover:scale-110 transition-all text-sm"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              title="X (Twitter)"
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center hover:text-white hover:scale-110 transition-all text-sm"
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="w-9 h-9 rounded-full glass-pill flex items-center justify-center hover:text-brand-neon hover:scale-110 transition-all text-sm"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>

          {/* Micro Spotify Pill Widget */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs border border-white/10 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <i className="fa-brands fa-spotify text-green-400 text-xs" />
            <span className="truncate max-w-[140px]">Tycho — A Walk</span>
          </div>
        </div>
      </div>

      {/* Right Column: Layered 3D Tilt Card with Sticky Note */}
      <div className="lg:col-span-5 flex justify-center items-center relative perspective-container py-6">
        {/* Ambient Glass Backplate Layer */}
        <div className="absolute -inset-2 md:-inset-4 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 transform rotate-2 pointer-events-none -z-10 shadow-2xl" />

        {/* Main Interactive Tilt Portrait Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="tilt-card relative w-[280px] sm:w-[320px] md:w-[350px] h-[390px] sm:h-[440px] md:h-[470px] rounded-2xl overflow-visible shadow-2xl border border-white/20 cursor-pointer group"
        >
          {/* Inner Image Container */}
          <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-inner bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85"
              alt="JD looking out over mountain sunset"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />

            {/* Frosted Bottom Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            {/* Quick badge inside the photo */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/40 backdrop-blur-md border border-white/20 text-white/90">
                <i className="fa-solid fa-location-dot text-brand-neon mr-1" /> Peak Viewpoint
              </span>
              <span className="text-[11px] text-white/70 font-mono">Dusk • 19:42</span>
            </div>
          </div>

          {/* The Sticky Note: Customizable with click-to-edit */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              onEditStickyNote();
            }}
            className="sticky-note absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-36 sm:w-44 p-3 sm:p-4 rounded-sm cursor-pointer z-30 group/note"
          >
            {/* Translucent tape at top center */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/50 backdrop-blur-sm border border-white/60 rotate-1 shadow-sm" />

            <p className="font-signature text-xl sm:text-2xl text-slate-800 leading-snug font-bold selection:bg-yellow-200">
              {stickyNoteText}
            </p>
            <div className="text-[10px] text-slate-600 font-sans mt-1 text-right italic group-hover/note:text-slate-900">
              ✎ click to edit
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
