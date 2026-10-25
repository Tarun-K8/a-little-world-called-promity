import React from 'react';
import { Compass, Sparkles, ChevronDown } from 'lucide-react';
import { HeritageHeroIllustration } from './HeritageHeroIllustration';

export const Hero: React.FC = () => {
  const scrollToExplore = () => {
    const el = document.querySelector('#heritage-explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Soft Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gold-400/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-indigo-muted/20 blur-[90px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle Decorative Star Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-card/60 border border-gold-400/25 mb-6 text-xs text-gold-300/90 tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-gold-300" />
          <span>Heritage • Solitude • Curiosity</span>
          <Sparkles className="w-3.5 h-3.5 text-gold-300" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-sandstone-50 leading-[1.15] mb-6 drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]">
          A Little World Called <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-sandstone-200">Promity</span>
        </h1>

        {/* Subtitle */}
        <p className="font-accent text-lg sm:text-2xl md:text-2xl text-sandstone-200 max-w-2xl mx-auto italic font-normal leading-relaxed mb-4">
          “For someone with her own stories, dreams, questions and places yet to discover.”
        </p>

        {/* Small Supporting Line */}
        <p className="text-xs sm:text-sm text-sandstone-400 tracking-wider mb-8 uppercase font-medium">
          Made with thoughtfulness, not expectations.
        </p>

        {/* Primary Call to Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={scrollToExplore}
            type="button"
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500/90 to-gold-600/90 text-indigo-deep font-medium text-sm tracking-wide shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-300"
          >
            <Compass className="w-4 h-4 text-indigo-deep group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-semibold tracking-wider uppercase text-xs">Begin Exploring</span>
          </button>

          <a
            href="#story-unfolding"
            className="text-xs text-sandstone-300 hover:text-gold-200 transition-colors py-2 px-4 rounded-full border border-gold-400/20 hover:border-gold-400/40"
          >
            A Story Still Unfolding →
          </a>
        </div>
      </div>

      {/* Illustrated Heritage Landscape (Temple Silhouettes, Moon, Stars) */}
      <div className="relative max-w-6xl mx-auto px-4 mt-2">
        <div className="rounded-2xl border border-gold-400/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden bg-[#0d1021]">
          <HeritageHeroIllustration />
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={scrollToExplore}
          type="button"
          aria-label="Scroll to exploration section"
          className="p-2 rounded-full text-sandstone-400 hover:text-gold-300 transition-colors animate-bounce"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
