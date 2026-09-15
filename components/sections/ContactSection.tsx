'use client';

import React, { useState } from 'react';

interface ContactSectionProps {
  isActive: boolean;
  onSubmitSuccess: () => void;
}

export function ContactSection({ isActive, onSubmitSuccess }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitSuccess();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section
      className={`tab-view flex-1 overflow-y-auto py-4 px-2 md:px-6 space-y-6 ${
        isActive ? 'flex flex-col' : 'hidden'
      }`}
    >
      <div className="max-w-2xl mx-auto space-y-6 w-full">
        <div className="text-center border-b border-white/10 pb-4">
          <span className="text-brand-neon font-signature text-3xl">Say Hello</span>
          <h2 className="text-3xl font-extrabold text-white mt-1 font-display">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-xs text-slate-300 mt-2">
            Have a project, sponsorship inquiry, or just want to debate football tactics? Drop a line.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-pill p-6 rounded-2xl border border-white/15 space-y-4"
        >
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Turner"
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-brand-neon text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@example.com"
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-brand-neon text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hey JD, loved your latest video! I wanted to reach out regarding..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-brand-neon text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full explore-glow-btn py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2"
          >
            <span>Send Message</span>
            <i className="fa-solid fa-paper-plane text-xs text-brand-neon" />
          </button>
        </form>
      </div>
    </section>
  );
}
