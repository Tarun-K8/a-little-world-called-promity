import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HerStory } from './components/HerStory';
import { HeritageExplorer } from './components/HeritageExplorer';
import { HistoricalDiscoveries } from './components/HistoricalDiscoveries';
import { MyMap } from './components/MyMap';
import { MoonlightJournal } from './components/MoonlightJournal';
import { HerNextChapter } from './components/HerNextChapter';
import { PersonalTouches } from './components/PersonalTouches';
import { Footer } from './components/Footer';
import { Destination } from './types';
import { DESTINATIONS_DATA } from './data/destinations';
import { getSavedDestinationIds, toggleSavedDestinationId } from './utils/storage';

export const App: React.FC = () => {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [targetDestination, setTargetDestination] = useState<Destination | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setSavedIds(getSavedDestinationIds());
  }, []);

  const handleToggleSaved = (id: string) => {
    const { saved, ids } = toggleSavedDestinationId(id);
    setSavedIds(ids);

    const dest = DESTINATIONS_DATA.find((d) => d.id === id);
    const destName = dest ? dest.name : 'Destination';

    setToastMessage(
      saved ? `Added ${destName} to your map wishlist` : `Removed ${destName} from your wishlist`
    );

    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleLocateOnMap = (dest: Destination) => {
    setTargetDestination(dest);
    const el = document.getElementById('my-map');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090b17] text-sandstone-100 flex flex-col selection:bg-gold-500/30 selection:text-gold-200">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161b35] border border-gold-400/40 text-sandstone-100 text-xs px-4 py-2.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-2 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar savedCount={savedIds.length} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <HerStory />
        <HeritageExplorer
          savedIds={savedIds}
          onToggleSaved={handleToggleSaved}
          onLocateOnMap={handleLocateOnMap}
        />
        <HistoricalDiscoveries />
        <MyMap
          savedIds={savedIds}
          onToggleSaved={handleToggleSaved}
          onOpenDetails={(dest) => {
            // Can open modal by scrolling or setting target
            const el = document.getElementById('heritage-explorer');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          targetDestination={targetDestination}
        />
        <MoonlightJournal />
        <HerNextChapter />
        <PersonalTouches />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
