import React from 'react';
import { Moon, Heart, Sparkles, Feather } from 'lucide-react';

export const PersonalTouches: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-[#0a0d1d]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Subtle illuminated note card */}
        <div className="rounded-2xl bg-[#141935]/80 border border-gold-400/25 p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] ornate-border">
          {/* Header icon */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Feather className="w-4 h-4 text-gold-300" />
            <span className="font-serif text-xs uppercase tracking-widest text-gold-300 font-semibold">
              A Little Note
            </span>
          </div>

          <p className="font-accent text-lg sm:text-xl text-sandstone-100 italic font-light leading-relaxed mb-6">
            “No matter where your curiosity takes you—through ancient chronicles, quiet temple courtyards, or chapters yet to be written—may you always travel with wonder, courage, and peace in your heart.”
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-sandstone-400">
            <Sparkles className="w-3 h-3 text-gold-400/60" />
            <span className="font-serif">Wishing you clear skies and peaceful discoveries</span>
            <Sparkles className="w-3 h-3 text-gold-400/60" />
          </div>
        </div>
      </div>
    </section>
  );
};
