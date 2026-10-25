import React, { useState, useMemo } from 'react';
import { Search, MapPin, Compass, Bookmark, BookmarkCheck, Sparkles, Filter, Info, Eye } from 'lucide-react';
import { Destination, HeritageCategory } from '../types';
import { DESTINATIONS_DATA } from '../data/destinations';
import { DestinationModal } from './DestinationModal';

interface HeritageExplorerProps {
  savedIds: string[];
  onToggleSaved: (id: string) => void;
  onLocateOnMap?: (dest: Destination) => void;
}

const CATEGORIES: HeritageCategory[] = [
  'All',
  'Temples',
  'Forts & Palaces',
  'Archaeological Sites',
  'Ancient Learning',
  'UNESCO World Heritage',
];

export const HeritageExplorer: React.FC<HeritageExplorerProps> = ({
  savedIds,
  onToggleSaved,
  onLocateOnMap,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<HeritageCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);

  // Filtered destinations
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS_DATA.filter((dest) => {
      // Category check
      const matchesCategory =
        selectedCategory === 'All' ||
        dest.category === selectedCategory ||
        dest.additionalCategories.includes(selectedCategory);

      // Search query check
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        dest.name.toLowerCase().includes(query) ||
        dest.location.toLowerCase().includes(query) ||
        dest.state.toLowerCase().includes(query) ||
        dest.architecturalStyle.toLowerCase().includes(query) ||
        dest.historicalBackground.toLowerCase().includes(query) ||
        dest.interestingFact.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="heritage-explorer" className="py-20 relative bg-[#0b0e1e]">
      {/* Background Soft Lighting Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-muted/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-card border border-gold-400/20 text-xs text-gold-300 uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Sacred Geography & History</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-sandstone-50 tracking-tight mb-4">
            The Heritage Explorer
          </h2>
          <p className="font-accent text-lg sm:text-xl text-sandstone-300 italic font-light max-w-2xl mx-auto">
            From the eternal ghats of Kashi to the musical pillars of Hampi and the rock-cut frescoes of Ajanta—explore eight ancient sanctuaries where stone remembers.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mb-10 space-y-5">
          {/* Search Input Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by temple, city, architectural style, or keyword..."
                className="w-full pl-11 pr-10 py-3 rounded-full bg-[#141935] border border-gold-400/30 text-sandstone-100 placeholder-sandstone-400 text-sm focus:outline-none focus:border-gold-300 focus:ring-2 focus:ring-gold-400/20 shadow-inner"
              />
              <Search className="w-4 h-4 text-gold-400 absolute left-4 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sandstone-400 hover:text-gold-200 text-xs px-2 py-0.5 rounded-full bg-indigo-deep/50"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all ${
                    active
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-indigo-deep font-semibold shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                      : 'bg-indigo-card/60 text-sandstone-300 hover:text-gold-200 hover:bg-indigo-card border border-gold-400/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Results Summary Counter */}
          <div className="text-center text-xs text-sandstone-400">
            Showing <span className="font-mono text-gold-300">{filteredDestinations.length}</span> of {DESTINATIONS_DATA.length} heritage destinations
            {searchQuery && <span> matching “{searchQuery}”</span>}
          </div>
        </div>

        {/* Empty State */}
        {filteredDestinations.length === 0 && (
          <div className="rounded-2xl bg-indigo-card/40 border border-gold-400/20 p-12 text-center max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-gold-400/50 mx-auto mb-4" />
            <h3 className="font-serif text-lg font-medium text-sandstone-100 mb-2">
              No matching destinations found
            </h3>
            <p className="text-xs sm:text-sm text-sandstone-400 mb-5">
              Try adjusting your search terms or selecting another category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-full bg-gold-500/20 text-gold-200 border border-gold-400/40 text-xs font-medium hover:bg-gold-500/30 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDestinations.map((dest) => {
            const isSaved = savedIds.includes(dest.id);
            return (
              <div
                key={dest.id}
                className="group rounded-2xl bg-[#141935]/90 border border-gold-400/25 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-gold-400/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container with Badges */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-indigo-deep">
                  <img
                    src={dest.image}
                    alt={dest.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141935] via-[#141935]/30 to-transparent" />

                  {/* Category & UNESCO Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-deep/85 backdrop-blur-md text-gold-300 border border-gold-400/40">
                      {dest.category}
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSaved(dest.id);
                    }}
                    title={isSaved ? 'Remove from My Map' : 'Add to My Map Wishlist'}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
                      isSaved
                        ? 'bg-gold-500 text-indigo-deep shadow-[0_0_12px_rgba(212,175,55,0.6)]'
                        : 'bg-indigo-deep/75 text-sandstone-300 hover:text-gold-200 border border-gold-400/30'
                    }`}
                  >
                    {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  </button>

                  {/* Location Pin & Era */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-sandstone-300">
                    <div className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      <span>{dest.location}, {dest.state}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Destination Title & Subtitle */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-sandstone-50 group-hover:text-gold-200 transition-colors mb-1">
                      {dest.name}
                    </h3>
                    <p className="font-accent text-xs sm:text-sm text-sandstone-300 italic mb-3">
                      {dest.subtitle}
                    </p>

                    {/* Architectural Style Tag */}
                    <div className="inline-block px-2.5 py-1 rounded-md bg-indigo-muted/50 border border-gold-400/15 text-[11px] text-sandstone-300 mb-3">
                      <span className="text-gold-300/80 font-medium">Style: </span>
                      {dest.architecturalStyle}
                    </div>

                    {/* Historical Background Short Excerpt */}
                    <p className="text-xs sm:text-sm text-sandstone-300 font-light leading-relaxed line-clamp-3 mb-4">
                      {dest.historicalBackground}
                    </p>

                    {/* Interesting Historical Fact Callout */}
                    <div className="rounded-xl bg-[#1b2144]/70 border border-gold-400/25 p-3.5 mb-4 text-xs">
                      <div className="flex items-center gap-1.5 text-gold-300 font-serif font-semibold text-[11px] uppercase tracking-wider mb-1">
                        <Sparkles className="w-3 h-3 text-gold-400" />
                        <span>Historical Insight</span>
                      </div>
                      <p className="font-accent italic text-sandstone-200 line-clamp-3">
                        “{dest.interestingFact}”
                      </p>
                    </div>

                    {/* Architectural Highlights List Excerpt */}
                    <div className="space-y-1 mb-5">
                      <span className="text-[11px] uppercase tracking-wider text-sandstone-400 font-medium block">
                        Architectural Highlights
                      </span>
                      {dest.architecturalHighlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-sandstone-300">
                          <span className="text-gold-400 leading-none">•</span>
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-4 border-t border-gold-400/20 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalDest(dest)}
                      className="px-4 py-2 rounded-full bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/40 text-gold-200 text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 group-hover:border-gold-300"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Discover More</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onToggleSaved(dest.id)}
                      className={`text-xs px-3 py-2 rounded-full font-medium transition-colors flex items-center gap-1.5 ${
                        isSaved
                          ? 'text-gold-300 bg-gold-500/20 border border-gold-400/30'
                          : 'text-sandstone-300 hover:text-gold-200 hover:bg-indigo-muted/40'
                      }`}
                    >
                      {isSaved ? 'In Wishlist' : '+ Wishlist'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Dialog */}
      <DestinationModal
        destination={activeModalDest}
        isOpen={activeModalDest !== null}
        onClose={() => setActiveModalDest(null)}
        isSaved={activeModalDest ? savedIds.includes(activeModalDest.id) : false}
        onToggleSaved={onToggleSaved}
        onLocateOnMap={onLocateOnMap}
      />
    </section>
  );
};
