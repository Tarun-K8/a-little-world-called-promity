import React from 'react';
import { Feather, Sparkles } from 'lucide-react';

export const HerStory: React.FC = () => {
  return (
    <section id="story-unfolding" className="py-14 sm:py-20 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[300px] bg-gold-400/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial Manuscript Card */}
        <div className="relative rounded-2xl bg-[#141935]/80 backdrop-blur-md p-8 sm:p-12 border border-gold-400/30 shadow-[0_15px_40px_rgba(0,0,0,0.5)] ornate-border text-center">
          {/* Top Delicate Ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold-400/50" />
            <div className="w-7 h-7 rounded-full border border-gold-400/40 flex items-center justify-center bg-indigo-deep/50 text-gold-300">
              <Feather className="w-3.5 h-3.5" />
            </div>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>

          {/* Section Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-sandstone-100 mb-6">
            A Story Still Unfolding
          </h2>

          {/* Editorial Card Quote */}
          <div className="relative max-w-xl mx-auto py-2">
            <p className="font-accent text-xl sm:text-2xl md:text-3xl text-sandstone-100 leading-relaxed italic font-light">
              “Some names stay with you because they are uncommon. Yours has a meaning you shared with me: <span className="text-gold-200 font-normal underline decoration-gold-400/40 underline-offset-8">proved truth</span>.”
            </p>
          </div>

          {/* Ornamental Divider with subtle star */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-gold-400/15">
            <Sparkles className="w-3 h-3 text-gold-300/60" />
            <span className="font-serif text-xs uppercase tracking-widest text-sandstone-400">
              A quiet reflection
            </span>
            <Sparkles className="w-3 h-3 text-gold-300/60" />
          </div>
        </div>
      </div>
    </section>
  );
};
