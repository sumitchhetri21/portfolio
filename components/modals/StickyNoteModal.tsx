'use client';

import React, { useState, useEffect } from 'react';

interface StickyNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentText: string;
  onSave: (newText: string) => void;
}

export function StickyNoteModal({
  isOpen,
  onClose,
  currentText,
  onSave,
}: StickyNoteModalProps) {
  const [text, setText] = useState(currentText);

  useEffect(() => {
    if (isOpen) {
      setText(currentText);
    }
  }, [isOpen, currentText]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (text.trim() !== '') {
      onSave(text.trim());
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="sticky-note p-6 rounded-md w-full max-w-sm shadow-2xl relative rotate-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-slate-700 hover:text-black transition-colors"
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <h4 className="font-signature text-2xl text-slate-900 font-bold mb-2">
          Leave your sticky note:
        </h4>
        <textarea
          rows={3}
          maxLength={60}
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
          className="w-full p-2 bg-yellow-100/60 border border-amber-300 rounded font-signature text-2xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none selection:bg-yellow-200"
        />
        <div className="flex justify-end gap-2 mt-3">
          <button
            onClick={handleSave}
            className="px-4 py-1.5 bg-slate-900 text-yellow-100 rounded text-xs font-bold hover:bg-black transition-colors"
          >
            Pin to Desk
          </button>
        </div>
      </div>
    </div>
  );
}
