'use client';

import React from 'react';
import { ResumeItem } from '@/types/portfolio';

interface ResumeSectionProps {
  isActive: boolean;
  onDownloadResume: () => void;
}

const RESUME_ITEMS: ResumeItem[] = [
  {
    id: 'res-1',
    title: 'Frontend Architecture Intern',
    period: '2025 — Present',
    company: 'TechVentures Lab • Remote',
    description:
      'Crafting responsive, zero-latency dashboard interfaces using Next.js, WebGL shaders, and accessibility standards.',
  },
  {
    id: 'res-2',
    title: 'YouTube Content Creator & Lead Editor',
    period: '2023 — Present',
    company: 'Independent Studio • 100K+ Community',
    description:
      'Directed over 80+ videos on student productivity, programming tutorials, and sports analysis.',
  },
  {
    id: 'res-3',
    title: 'B.S. in Computer Science',
    period: '2023 — 2027',
    company: "State University • Dean's List Honor",
    description:
      'Coursework: Algorithms & Data Structures, Linear Algebra, Interactive Computer Graphics.',
  },
];

export function ResumeSection({ isActive, onDownloadResume }: ResumeSectionProps) {
  return (
    <section
      className={`tab-view flex-1 overflow-y-auto py-4 px-2 md:px-6 space-y-6 ${
        isActive ? 'flex flex-col' : 'hidden'
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-6 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-brand-neon font-signature text-3xl">Curriculum Vitae</span>
            <h2 className="text-3xl font-extrabold text-white font-display">
              Experience &amp; Background
            </h2>
          </div>
          <button
            onClick={onDownloadResume}
            className="explore-glow-btn px-4 py-2 rounded-full text-xs font-semibold text-white flex items-center gap-2"
          >
            <i className="fa-solid fa-file-arrow-down text-brand-neon" />
            <span>Download PDF</span>
          </button>
        </div>

        <div className="space-y-4">
          {RESUME_ITEMS.map((item) => (
            <div
              key={item.id}
              className="glass-pill p-5 rounded-2xl border border-white/10 relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <span className="text-xs font-mono text-brand-neon">{item.period}</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{item.company}</p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
