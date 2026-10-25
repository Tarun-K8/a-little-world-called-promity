import React, { useState } from 'react';
import { Sparkles, GraduationCap, Compass, Pickaxe, Scroll, Ship, ShieldCheck, ChevronDown, ChevronUp, Shuffle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DISCOVERIES_DATA } from '../data/discoveries';
import { DiscoveryFact } from '../types';

export const HistoricalDiscoveries: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(DISCOVERIES_DATA[0].id);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-gold-300" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-gold-300" />;
      case 'Pickaxe':
        return <Pickaxe className="w-5 h-5 text-gold-300" />;
      case 'Scroll':
        return <Scroll className="w-5 h-5 text-gold-300" />;
      case 'Ship':
        return <Ship className="w-5 h-5 text-gold-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-gold-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-300" />;
    }
  };

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleSurpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * DISCOVERIES_DATA.length);
    const randomDiscovery = DISCOVERIES_DATA[randomIndex];
    setExpandedId(randomDiscovery.id);
    setHighlightedId(randomDiscovery.id);

    // Trigger subtle golden celebration confetti
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#F6EFCB', '#C7AD70', '#E5C378'],
        disableForReducedMotion: true
      });
    } catch {
      // ignore
    }

    // Scroll smoothly to the target card
    const cardEl = document.getElementById(`discovery-card-${randomDiscovery.id}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setTimeout(() => {
      setHighlightedId(null);
    }, 2500);
  };

  return (
    <section id="little-discoveries" className="py-20 relative bg-[#0d1022] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-card border border-gold-400/20 text-xs text-gold-300 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Archaeological & Historical Insights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-sandstone-50 tracking-tight mb-4">
            Little Discoveries
          </h2>
          <p className="font-accent text-lg sm:text-xl text-sandstone-300 italic font-light max-w-2xl mx-auto mb-6">
            Curated historical facts and archaeological milestones that illuminate ancient wisdom, architectural geometry, and scientific preservation.
          </p>

          {/* Surprise Me Button */}
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-indigo-card border border-gold-400/40 text-gold-200 hover:text-indigo-deep hover:bg-gold-400 transition-all text-xs font-semibold uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.2)] focus:outline-none"
          >
            <Shuffle className="w-4 h-4" />
            <span>Surprise Me</span>
          </button>
        </div>

        {/* Discovery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DISCOVERIES_DATA.map((item: DiscoveryFact) => {
            const isExpanded = expandedId === item.id;
            const isHighlighted = highlightedId === item.id;

            return (
              <div
                id={`discovery-card-${item.id}`}
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className={`cursor-pointer rounded-2xl transition-all duration-300 p-6 sm:p-7 border ${
                  isHighlighted
                    ? 'ring-2 ring-gold-400 bg-[#1e2548] border-gold-300 shadow-[0_0_30px_rgba(212,175,55,0.4)]'
                    : isExpanded
                    ? 'bg-[#161c38] border-gold-400/50 shadow-[0_12px_35px_rgba(0,0,0,0.6)]'
                    : 'bg-[#13172e]/80 border-gold-400/20 hover:border-gold-400/40 hover:bg-[#161c38]/70 shadow-[0_8px_25px_rgba(0,0,0,0.4)]'
                }`}
              >
                {/* Header: Icon, Badge, Period */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-deep/70 border border-gold-400/30 flex items-center justify-center">
                      {getIcon(item.iconName)}
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-gold-500/15 text-gold-300 border border-gold-400/30">
                        {item.badge}
                      </span>
                      <p className="text-[11px] text-sandstone-400 font-mono mt-0.5">
                        {item.period}
                      </p>
                    </div>
                  </div>

                  <div className="text-sandstone-400 p-1 rounded-full hover:text-gold-200">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-sandstone-100 mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Key Fact Summary */}
                <p className="text-xs sm:text-sm text-sandstone-200 font-light leading-relaxed mb-4">
                  {item.keyFinding}
                </p>

                {/* Expanded Context Drawer */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-gold-400/20 space-y-4 animate-fadeIn">
                    <div>
                      <h4 className="font-serif text-xs uppercase tracking-wider text-gold-300 font-semibold mb-1">
                        Historical Context & Sources
                      </h4>
                      <p className="text-xs sm:text-sm text-sandstone-300 font-light leading-relaxed">
                        {item.detailedContext}
                      </p>
                    </div>

                    <div className="rounded-xl bg-indigo-deep/60 border border-gold-400/20 p-3.5">
                      <h4 className="font-serif text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">
                        Archaeological Significance
                      </h4>
                      <p className="text-xs text-sandstone-200 italic font-accent">
                        {item.archaeologicalSignificance}
                      </p>
                    </div>
                  </div>
                )}

                {/* Card Click Prompt Hint */}
                <div className="mt-4 flex items-center justify-between text-[11px] text-sandstone-400">
                  <span className="italic font-accent">
                    {isExpanded ? 'Click to collapse context' : 'Click to reveal in-depth context'}
                  </span>
                  <span className="text-gold-400 font-serif font-bold">
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
