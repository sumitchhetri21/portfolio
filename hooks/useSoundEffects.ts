'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

type PolySynthType = any;
type ToneType = typeof import('tone');

export function useSoundEffects() {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const synthRef = useRef<PolySynthType | null>(null);
  const toneRef = useRef<ToneType | null>(null);

  const initTone = useCallback(async () => {
    if (typeof window === 'undefined') return null;
    try {
      if (!toneRef.current) {
        const Tone = await import('tone');
        toneRef.current = Tone;
      }
      const Tone = toneRef.current;
      if (!synthRef.current && Tone) {
        const synth = new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: 'sine' },
          envelope: { attack: 0.005, decay: 0.1, sustain: 0, release: 0.1 },
        }).toDestination();
        synth.volume.value = -12;
        synthRef.current = synth;
      }
      return toneRef.current;
    } catch (err) {
      console.warn('Audio Context setup deferred until user gesture', err);
      return null;
    }
  }, []);

  const playChime = useCallback(
    async (note = 'C5') => {
      if (!audioEnabled || typeof window === 'undefined') return;
      try {
        const Tone = await initTone();
        if (!Tone) return;

        if (Tone.context.state !== 'running') {
          await Tone.start();
        }

        if (synthRef.current) {
          synthRef.current.triggerAttackRelease(note, '16n');
        }
      } catch (err) {
        // Fallback silently if audio context is blocked
      }
    },
    [audioEnabled, initTone]
  );

  const playShowreelSequence = useCallback(() => {
    playChime('C5');
    setTimeout(() => playChime('E5'), 150);
    setTimeout(() => playChime('G5'), 300);
    setTimeout(() => playChime('C6'), 450);
  }, [playChime]);

  const toggleAudio = useCallback(() => {
    setAudioEnabled((prev) => {
      const next = !prev;
      if (next) {
        // Audio enabled
        setTimeout(() => playChime('E5'), 50);
      }
      return next;
    });
  }, [playChime]);

  // Setup click listener once to allow audio context start
  useEffect(() => {
    const handleFirstInteraction = () => {
      initTone();
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, [initTone]);

  return {
    audioEnabled,
    playChime,
    playShowreelSequence,
    toggleAudio,
  };
}
