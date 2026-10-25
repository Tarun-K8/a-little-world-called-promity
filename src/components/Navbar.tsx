import React, { useState, useEffect } from 'react';
import { Moon, Menu, X, Volume2, VolumeX, Bookmark, Compass } from 'lucide-react';
import { ambientSound } from '../utils/audio';

interface NavbarProps {
  savedCount: number;
  onOpenSavedModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ savedCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [moonPhaseInfo, setMoonPhaseInfo] = useState({ name: 'Waxing Gibbous', illumination: '84%' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute a realistic moon phase description based on current date
  useEffect(() => {
    try {
      const date = new Date();
      // Simple lunar cycle algorithm
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const c = year / 100;
      const epact = (11 * (year % 19) + 4) % 30;
      const phaseNum = ((day + month + epact + c) % 30);
      
      let name = 'Waxing Gibbous';
      let illum = '84%';
      if (phaseNum < 2) { name = 'New Moon'; illum = '2%'; }
      else if (phaseNum < 7) { name = 'Waxing Crescent'; illum = '28%'; }
      else if (phaseNum < 9) { name = 'First Quarter'; illum = '50%'; }
      else if (phaseNum < 14) { name = 'Waxing Gibbous'; illum = '78%'; }
      else if (phaseNum < 17) { name = 'Full Moon'; illum = '100%'; }
      else if (phaseNum < 22) { name = 'Waning Gibbous'; illum = '74%'; }
      else if (phaseNum < 24) { name = 'Third Quarter'; illum = '50%'; }
      else { name = 'Waning Crescent'; illum = '22%'; }
      
      setMoonPhaseInfo({ name, illumination: illum });
    } catch {
      // fallback
    }
  }, []);

  const toggleSound = () => {
    const playing = ambientSound.toggle();
    setIsAudioPlaying(playing);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Explore', href: '#heritage-explorer' },
    { label: 'Discover', href: '#little-discoveries' },
    { label: 'My Map', href: '#my-map' },
    { label: 'Journal', href: '#moonlight-journal' },
    { label: 'About', href: '#next-chapter' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d1021]/90 backdrop-blur-md border-b border-gold-400/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-gradient-to-b from-[#090b16]/90 via-[#090b16]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Title */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="group flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-gold-400/40 rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-full border border-gold-400/40 flex items-center justify-center bg-indigo-muted/50 group-hover:border-gold-300 transition-colors">
            <Moon className="w-4 h-4 text-gold-300 transform -rotate-12 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide text-sandstone-100 group-hover:text-gold-200 transition-colors">
              Promity
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-serif text-sandstone-400 tracking-widest uppercase">
              • A Little World
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide text-sandstone-300 hover:text-gold-200 transition-colors rounded-full hover:bg-gold-500/10 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Moon Phase Indicator, Ambient Sound, Saved Badge, Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Moon Phase Widget */}
          <div
            title={`Tonight: ${moonPhaseInfo.name} (${moonPhaseInfo.illumination} illuminated)`}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-card/60 border border-gold-400/20 text-xs text-sandstone-300 select-none"
          >
            <span className="w-2 h-2 rounded-full bg-gold-300/80 animate-pulse" />
            <span className="font-serif">{moonPhaseInfo.name}</span>
          </div>

          {/* Ambient Sound Toggle */}
          <button
            onClick={toggleSound}
            type="button"
            title={isAudioPlaying ? 'Mute serene moonlight ambience' : 'Listen to soft peaceful drone & night breeze'}
            aria-label="Toggle ambient audio"
            className={`p-2 rounded-full border transition-all ${
              isAudioPlaying
                ? 'bg-gold-500/20 border-gold-400 text-gold-200 shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                : 'bg-indigo-card/50 border-gold-400/25 text-sandstone-300 hover:text-gold-300 hover:border-gold-400/50'
            }`}
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Saved Places Indicator */}
          <a
            href="#my-map"
            onClick={(e) => handleLinkClick(e, '#my-map')}
            title="Saved places on your map"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-indigo-card/60 border border-gold-400/30 text-xs text-gold-300 hover:bg-gold-500/15 transition-all"
          >
            <Bookmark className="w-3.5 h-3.5 fill-gold-400/20" />
            <span className="font-mono font-semibold text-xs">{savedCount}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Open mobile menu"
            className="md:hidden p-2 rounded-lg bg-indigo-card/60 border border-gold-400/30 text-sandstone-200 hover:text-gold-300 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gold-400/20 bg-[#0d1021]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide text-sandstone-200 hover:bg-gold-500/15 hover:text-gold-200 border border-transparent hover:border-gold-400/20 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <Compass className="w-4 h-4 text-gold-400/40" />
              </a>
            ))}
            <div className="pt-3 border-t border-gold-400/15 flex items-center justify-between px-3 text-xs text-sandstone-400">
              <span className="font-serif">Lunar Phase: {moonPhaseInfo.name}</span>
              <span className="text-gold-300/80">{moonPhaseInfo.illumination}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
