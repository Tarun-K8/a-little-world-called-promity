import React, { useEffect } from 'react';
import { X, MapPin, Landmark, Award, Compass, Bookmark, BookmarkCheck, CheckCircle2 } from 'lucide-react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSaved: (id: string) => void;
  onLocateOnMap?: (dest: Destination) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  isOpen,
  onClose,
  isSaved,
  onToggleSaved,
  onLocateOnMap,
}) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !destination) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#12162d] border border-gold-400/30 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden max-h-[92vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-indigo-deep/80 text-sandstone-300 hover:text-gold-200 hover:bg-indigo-deep border border-gold-400/30 transition-all focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image & Gradient Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0 bg-indigo-card">
          <img
            src={destination.image}
            alt={destination.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            onError={(e) => {
              // Graceful fallback to dark atmospheric gradient if offline
              (e.currentTarget as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12162d] via-[#12162d]/40 to-transparent" />

          {/* Badges on Image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-deep/80 backdrop-blur-md text-gold-300 border border-gold-400/40">
              {destination.category}
            </span>
            {destination.unescoStatus && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gold-500/20 backdrop-blur-md text-gold-200 border border-gold-400/40 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>UNESCO</span>
              </span>
            )}
          </div>

          {/* Title and Subtitle at bottom of image */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-1.5 text-xs text-sandstone-300 mb-1">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>{destination.location}, {destination.state}</span>
              <span className="mx-1.5">•</span>
              <span className="text-gold-300/80 font-mono text-[11px]">{destination.historicalEra}</span>
            </div>
            <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-sandstone-50 drop-shadow-md">
              {destination.name}
            </h3>
            <p className="font-accent text-sm sm:text-base text-sandstone-300 italic">
              {destination.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sandstone-200 text-sm sm:text-base leading-relaxed">
          {/* Historical Background */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-gold-300 mb-2 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-gold-400" />
              <span>Historical Background</span>
            </h4>
            <p className="text-sandstone-200 font-light leading-relaxed">
              {destination.historicalBackground}
            </p>
          </div>

          {/* Interesting Historical Fact */}
          <div className="rounded-xl bg-[#1b2144]/80 border border-gold-400/30 p-5 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gold-400/5 rounded-full pointer-events-none" />
            <h4 className="font-serif text-xs uppercase tracking-widest text-gold-300 font-semibold mb-2 flex items-center gap-1.5">
              <span>✦ Verifiable Historical Insight</span>
            </h4>
            <p className="font-accent text-base sm:text-lg italic text-sandstone-100">
              “{destination.interestingFact}”
            </p>
          </div>

          {/* Architectural Highlights */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-gold-300 mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-gold-400" />
              <span>Architectural Style & Highlights</span>
            </h4>
            <p className="text-xs sm:text-sm text-sandstone-300 mb-3">
              <strong className="text-sandstone-100">Style:</strong> {destination.architecturalStyle}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.architecturalHighlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-indigo-muted/30 border border-gold-400/15 text-xs sm:text-sm text-sandstone-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visiting Etiquette */}
          {destination.visitingEtiquette && (
            <div className="pt-2 border-t border-gold-400/15 text-xs text-sandstone-400">
              <strong className="text-sandstone-300 font-serif">Visitor Heritage Note: </strong>
              {destination.visitingEtiquette}
            </div>
          )}
        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 sm:p-5 bg-[#0e1224] border-t border-gold-400/20 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-sandstone-400 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-gold-400/70" />
            <span className="font-mono text-[11px]">
              {destination.coordinates[0].toFixed(4)}° N, {destination.coordinates[1].toFixed(4)}° E
            </span>
          </div>

          <div className="flex items-center gap-3">
            {onLocateOnMap && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onLocateOnMap(destination);
                }}
                className="px-4 py-2 rounded-full border border-gold-400/30 text-xs text-sandstone-200 hover:text-gold-200 hover:border-gold-400/60 transition-colors flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5 text-gold-300" />
                <span>Locate on Map</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => onToggleSaved(destination.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 ${
                isSaved
                  ? 'bg-gold-500/20 text-gold-200 border border-gold-400/50 hover:bg-gold-500/30'
                  : 'bg-gold-500 text-indigo-deep hover:bg-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
              }`}
            >
              {isSaved ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-gold-300" />
                  <span>In Wishlist</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Add to My Map</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
