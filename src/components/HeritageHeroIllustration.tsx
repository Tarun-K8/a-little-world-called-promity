import React from 'react';

export const HeritageHeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] md:h-[440px] overflow-hidden select-none pointer-events-none">
      {/* Twilight Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090b16] via-[#11162d] to-[#181d38]" />

      {/* Radiant Moon Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gold-200/10 blur-3xl pointer-events-none" />

      {/* Crescent Moon */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center justify-center animate-pulse-subtle">
        <svg width="84" height="84" viewBox="0 0 100 100" fill="none" className="drop-shadow-[0_0_25px_rgba(246,239,203,0.45)]">
          <circle cx="50" cy="50" r="36" fill="#FBF8EE" opacity="0.9" />
          <circle cx="62" cy="42" r="33" fill="#11162d" />
          {/* Subtle soft craters on the illuminated sliver */}
          <circle cx="36" cy="46" r="3" fill="#D5BE9B" opacity="0.4" />
          <circle cx="44" cy="62" r="4" fill="#D5BE9B" opacity="0.3" />
        </svg>
      </div>

      {/* Floating Constellation Stars */}
      <div className="absolute inset-0">
        {[
          { top: '15%', left: '18%', delay: '0s', size: 3 },
          { top: '22%', left: '26%', delay: '1.2s', size: 2 },
          { top: '18%', left: '78%', delay: '0.8s', size: 3 },
          { top: '30%', left: '84%', delay: '1.7s', size: 2.5 },
          { top: '28%', left: '12%', delay: '2.1s', size: 2 },
          { top: '10%', left: '62%', delay: '0.4s', size: 2.5 },
          { top: '35%', left: '40%', delay: '1.5s', size: 2 },
          { top: '25%', left: '60%', delay: '2.4s', size: 2 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold-100 star-twinkle drop-shadow-[0_0_4px_rgba(246,239,203,0.8)]"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              // @ts-expect-error CSS variable
              '--delay': star.delay,
              '--duration': '3.5s',
            }}
          />
        ))}
      </div>

      {/* Distant Ghat Mist / Mountain Ridge */}
      <div className="absolute bottom-16 inset-x-0 h-32 opacity-40 bg-gradient-to-t from-[#11152a] to-transparent pointer-events-none" />

      {/* Layer 1: Distant Temple & Chhatri Silhouettes */}
      <svg
        className="absolute bottom-6 w-full h-40 md:h-52 text-[#131934] opacity-70 preserve-3d"
        preserveAspectRatio="none"
        viewBox="0 0 1200 240"
        fill="currentColor"
      >
        {/* Distant Shikhara Left */}
        <path d="M 80 240 L 95 140 Q 110 80 120 70 Q 130 80 145 140 L 160 240 Z" />
        <path d="M 115 70 L 120 50 L 125 70 Z" />

        {/* Small Chhatri */}
        <path d="M 220 240 L 220 160 Q 240 140 260 160 L 260 240 Z" />
        <path d="M 215 160 Q 240 120 265 160 Z" />

        {/* Distant Stupa Silhouette Mid-Right */}
        <path d="M 680 240 L 680 170 Q 730 110 780 170 L 780 240 Z" />
        <path d="M 725 110 L 730 90 L 735 110 Z" />

        {/* Distant Shikhara Far Right */}
        <path d="M 1020 240 L 1040 130 Q 1060 70 1075 60 Q 1090 70 1110 130 L 1130 240 Z" />
      </svg>

      {/* Layer 2: Main Architectural Silhouettes (Temples, Kalashas, Fort Bastions, Riverfront Steps) */}
      <svg
        className="absolute bottom-0 w-full h-48 md:h-64 text-[#0d1021]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 280"
        fill="currentColor"
      >
        {/* Riverfront Steps on the Left (Varanasi Ghat aesthetic) */}
        <path d="M 0 280 L 0 220 L 70 220 L 70 235 L 140 235 L 140 250 L 220 250 L 220 280 Z" />

        {/* Grand Nagara Shikhara with Amalaka and Kalasha (Left-Center) */}
        <path d="M 240 280 L 260 170 C 275 110 295 65 315 45 C 335 65 355 110 370 170 L 390 280 Z" />
        {/* Amalaka disc & Kalasha finial */}
        <ellipse cx="315" cy="42" rx="14" ry="5" />
        <path d="M 312 37 L 315 20 L 318 37 Z" />
        {/* Urushringa mini-spires cascading down */}
        <path d="M 270 280 L 285 200 C 295 170 305 150 315 150 C 325 150 335 170 345 200 L 360 280 Z" opacity="0.6" fill="#141936" />

        {/* Elegant Pillared Mandapa Hall */}
        <rect x="385" y="190" width="110" height="90" />
        <path d="M 375 190 Q 440 160 505 190 Z" />
        <circle cx="440" cy="155" r="4" />

        {/* Fort Bastion & Rampart Wall (Middle) */}
        <path d="M 520 280 L 520 200 L 540 200 L 540 190 L 560 190 L 560 200 L 580 200 L 580 190 L 600 190 L 600 200 L 620 200 L 620 190 L 640 190 L 640 200 L 680 200 L 680 280 Z" />

        {/* Ornate Rajput/Mughal Jharokha Balcony on Bastion */}
        <path d="M 575 220 L 575 245 Q 600 255 625 245 L 625 220 Q 600 210 575 220 Z" fill="#D4AF37" opacity="0.4" />

        {/* Central Lotus Dome & Chhatri Pavilion */}
        <path d="M 720 280 L 730 200 L 820 200 L 830 280 Z" />
        <path d="M 720 200 Q 775 130 830 200 Z" />
        <path d="M 770 130 L 775 110 L 780 130 Z" />

        {/* Southern Dravidian Tiered Gopuram Silhouette (Right-Center) */}
        <polygon points="900,280 920,130 940,130 945,100 965,100 970,70 990,70 995,45 1015,45 1020,70 1040,70 1045,100 1065,100 1070,130 1090,130 1110,280" />
        {/* Gopuram barrel-vault shikhara & row of kalashas */}
        <path d="M 990 45 Q 1005 25 1020 45 Z" />
        <circle cx="997" cy="22" r="2.5" />
        <circle cx="1005" cy="20" r="3" />
        <circle cx="1013" cy="22" r="2.5" />

        {/* Ancient Ashokan Stupa Dome (Far Right) */}
        <path d="M 1160 280 L 1160 210 Q 1260 120 1360 210 L 1360 280 Z" />
        {/* Harmika & Chhatravali umbrellas */}
        <rect x="1250" y="125" width="20" height="10" />
        <line x1="1260" y1="125" x2="1260" y2="90" stroke="#0d1021" strokeWidth="4" />
        <ellipse cx="1260" cy="98" rx="14" ry="3" />
        <ellipse cx="1260" cy="91" rx="10" ry="2.5" />

        {/* Right Ghat Terraces */}
        <path d="M 1360 280 L 1360 240 L 1400 240 L 1400 260 L 1440 260 L 1440 280 Z" />
      </svg>

      {/* Gentle Water Ripple / Reflection Highlights */}
      <div className="absolute bottom-0 inset-x-0 h-7 bg-gradient-to-t from-[#080911] via-[#0d1021]/80 to-transparent flex items-center justify-center">
        <div className="w-48 h-[1px] bg-gold-400/25 blur-sm animate-pulse-subtle" />
      </div>
    </div>
  );
};
