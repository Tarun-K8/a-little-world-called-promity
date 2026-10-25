import React, { useState } from 'react';
import { Compass, BookOpen, ExternalLink, Lightbulb, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { NEXT_CHAPTER_CARDS } from '../data/nextChapter';
import { InterestCard } from '../types';

export const HerNextChapter: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<string>(NEXT_CHAPTER_CARDS[0].id);
  const [activeTab, setActiveTab] = useState<'topics' | 'reading' | 'resources'>('topics');

  const currentCard =
    NEXT_CHAPTER_CARDS.find((c) => c.id === selectedCardId) || NEXT_CHAPTER_CARDS[0];

  return (
    <section id="next-chapter" className="py-20 relative bg-[#090b17] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gold-400/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-card border border-gold-400/20 text-xs text-gold-300 uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Horizons & Curiosity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-sandstone-50 tracking-tight mb-4">
            Her Next Chapter
          </h2>
          <p className="font-accent text-xl sm:text-2xl text-sandstone-100 italic font-light max-w-2xl mx-auto mb-3">
            “You don't need to know every turn in the road to keep moving towards the life you want.”
          </p>
          <p className="text-xs sm:text-sm text-sandstone-400 max-w-xl mx-auto font-light">
            A quiet space celebrating learning, interdisciplinary exploration, and the quiet joy of finding your own pace.
          </p>
        </div>

        {/* 3 Interest Card Selection Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {NEXT_CHAPTER_CARDS.map((card) => {
            const isSelected = card.id === selectedCardId;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => setSelectedCardId(card.id)}
                className={`text-left p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#181f3d] border-gold-400 shadow-[0_10px_30px_rgba(212,175,55,0.25)] ring-1 ring-gold-400/50'
                    : 'bg-indigo-card/60 border-gold-400/20 hover:border-gold-400/40 hover:bg-indigo-card/90'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-indigo-deep text-gold-300 border border-gold-400/20">
                    Pathway
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'rotate-90 text-gold-300' : 'text-sandstone-400'
                    }`}
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-sandstone-100 mb-1">
                  {card.title}
                </h3>
                <p className="font-accent text-xs text-sandstone-300 italic line-clamp-1">
                  {card.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Card Deep Dive Interactive Display */}
        <div className="rounded-2xl bg-[#141833]/90 border border-gold-400/30 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Header of Active Card */}
          <div className="border-b border-gold-400/20 pb-6 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sandstone-50">
                {currentCard.title}
              </h3>
              <span className="font-accent italic text-gold-300 text-sm sm:text-base">
                {currentCard.tagline}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-sandstone-200 font-light leading-relaxed max-w-3xl">
              {currentCard.overview}
            </p>
          </div>

          {/* Sub-Tabs: Topics, Reading Suggestions, Credible Resources */}
          <div className="flex items-center gap-2 mb-6 border-b border-gold-400/15 pb-3 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('topics')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'topics'
                  ? 'bg-gold-500/20 text-gold-200 border border-gold-400/50'
                  : 'text-sandstone-400 hover:text-sandstone-200'
              }`}
            >
              Topics to Explore
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('reading')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'reading'
                  ? 'bg-gold-500/20 text-gold-200 border border-gold-400/50'
                  : 'text-sandstone-400 hover:text-sandstone-200'
              }`}
            >
              Curated Reading
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'resources'
                  ? 'bg-gold-500/20 text-gold-200 border border-gold-400/50'
                  : 'text-sandstone-400 hover:text-sandstone-200'
              }`}
            >
              Credible Archives & Links
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[220px]">
            {activeTab === 'topics' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 animate-fadeIn">
                {currentCard.topicsToExplore.map((topic, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-indigo-deep/60 border border-gold-400/15 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-sandstone-200 font-light">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reading' && (
              <div className="space-y-3.5 animate-fadeIn">
                {currentCard.readingSuggestions.map((book, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-xl bg-indigo-deep/60 border border-gold-400/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="font-serif font-bold text-sm sm:text-base text-gold-200">
                        {book.title}
                      </div>
                      <div className="text-xs text-sandstone-400 font-medium mb-1">
                        By {book.authorOrOrg}
                      </div>
                      <p className="text-xs text-sandstone-300 font-light">
                        {book.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-3.5 animate-fadeIn">
                {currentCard.credibleResources.map((res, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-xl bg-indigo-deep/60 border border-gold-400/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="font-serif font-bold text-sm sm:text-base text-sandstone-100 flex items-center gap-1.5">
                        <span>{res.name}</span>
                      </div>
                      <p className="text-xs text-sandstone-300 font-light mt-0.5">
                        {res.note}
                      </p>
                    </div>

                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/40 text-gold-200 text-xs font-semibold transition-colors self-start sm:self-auto shrink-0"
                    >
                      <span>Visit Archive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Thought Prompt at bottom of card */}
          <div className="mt-8 pt-6 border-t border-gold-400/20 flex items-center gap-3 text-xs text-sandstone-300 bg-indigo-deep/40 p-4 rounded-xl">
            <Lightbulb className="w-4 h-4 text-gold-300 shrink-0" />
            <span className="font-accent italic text-sandstone-200 text-sm">
              “{currentCard.thoughtPrompt}”
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
