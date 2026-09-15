'use client';

import React from 'react';
import { ProjectItem } from '@/types/portfolio';

interface ProjectsSectionProps {
  isActive: boolean;
  onShowToast: (msg: string) => void;
  onOpenFootballModal: () => void;
  onOpenVideoModal: () => void;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'aether',
    title: 'Aether UI — Spatial Glass Framework',
    desc: 'Modern component system built on fluid glassmorphism, responsive tilt mechanics, and micro-haptics.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    tag: 'React + WebGL',
    actionText: 'Live Demo →',
    actionType: 'toast',
    toastMsg: 'Launching live project demo...',
    badge: '★ 1.2k stars',
  },
  {
    id: 'tactics',
    title: 'PitchTactics Pro',
    desc: 'Interactive tactical football simulation tool for grassroots coaches to sketch formations and pass lines in real time.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tag: 'TypeScript',
    actionText: 'Inspect Tactics →',
    actionType: 'football',
    badge: 'v2.4 Stable',
  },
  {
    id: 'vault',
    title: 'CreatorVault Hub',
    desc: 'Automated Notion & YouTube sync daemon to organize B-roll libraries, scripts, and video sponsor pipelines.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    tag: 'Open Source',
    actionText: 'GitHub Repository →',
    actionType: 'toast',
    toastMsg: 'Cloned to clipboard!',
    badge: 'MIT License',
  },
  {
    id: 'studyflow',
    title: 'StudyFlow Audio Companion',
    desc: 'Binaural lo-fi generator with ambient nature presets designed to induce deep flow state during long study marathons.',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80',
    tag: 'Electron',
    actionText: 'Watch Demo →',
    actionType: 'video',
    badge: 'Mac & Windows',
  },
];

export function ProjectsSection({
  isActive,
  onShowToast,
  onOpenFootballModal,
  onOpenVideoModal,
}: ProjectsSectionProps) {
  const handleAction = (project: ProjectItem) => {
    if (project.actionType === 'toast' && project.toastMsg) {
      onShowToast(project.toastMsg);
    } else if (project.actionType === 'football') {
      onOpenFootballModal();
    } else if (project.actionType === 'video') {
      onOpenVideoModal();
    }
  };

  return (
    <section
      className={`tab-view flex-1 overflow-y-auto py-4 px-2 md:px-6 space-y-6 ${
        isActive ? 'flex flex-col' : 'hidden'
      }`}
    >
      <div className="max-w-5xl mx-auto space-y-6 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-brand-neon font-signature text-3xl">Selected Works</span>
            <h2 className="text-3xl font-extrabold text-white font-display">
              Digital Creations &amp; Apps
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-300 glass-pill px-3 py-1.5 rounded-full">
            4 Featured Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="glass-pill rounded-2xl overflow-hidden border border-white/15 hover:border-brand-neon transition-all duration-300 group"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900/80 text-brand-neon border border-brand-neon/40">
                  {p.tag}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-brand-neon transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-300">{p.desc}</p>
                <div className="pt-2 flex items-center justify-between text-xs">
                  <button
                    onClick={() => handleAction(p)}
                    className="text-brand-neon font-medium hover:underline cursor-pointer"
                  >
                    {p.actionText}
                  </button>
                  <span className="text-slate-400">{p.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
