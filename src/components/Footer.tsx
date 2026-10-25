import React from 'react';
import { Moon, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gold-400/20 bg-[#070914] text-sandstone-300 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Moon Phase Progression Motif */}
        <div className="flex items-center justify-center gap-3 mb-6 opacity-70">
          <span className="w-2 h-2 rounded-full border border-gold-400/40" />
          <span className="w-2.5 h-2.5 rounded-full border border-gold-400/50" />
          <div className="w-6 h-6 rounded-full border border-gold-400 flex items-center justify-center bg-indigo-card/60">
            <Moon className="w-3.5 h-3.5 text-gold-300 transform -rotate-12" />
          </div>
          <span className="w-2.5 h-2.5 rounded-full border border-gold-400/50" />
          <span className="w-2 h-2 rounded-full border border-gold-400/40" />
        </div>

        {/* Brand & Main Footer Line */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-sandstone-100 tracking-wide mb-2">
          A Little World Called Promity
        </h3>
        <p className="font-accent text-base sm:text-lg text-gold-200/90 italic font-light mb-6">
          “A little world of history, wonder and possibilities.”
        </p>

        {/* Back to Top Link Button */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-card/60 border border-gold-400/30 text-xs text-sandstone-200 hover:text-gold-200 hover:border-gold-400/60 transition-all group"
          >
            <span>Return to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Copyright / Attribution */}
        <div className="text-[11px] text-sandstone-500 font-mono">
          Handcrafted with reverence for Ancient Indian History & Archaeology • Local Browser Storage • OpenStreetMap
        </div>
      </div>
    </footer>
  );
};
