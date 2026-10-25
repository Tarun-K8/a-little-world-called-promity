import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MapPin, Plus, Trash2, RotateCcw, Bookmark, ExternalLink, AlertTriangle, Eye, Compass, Heart, Check } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { DESTINATIONS_DATA } from '../data/destinations';
import { Destination, SavedPlace } from '../types';
import {
  getCustomPlaces,
  addCustomPlace,
  removeCustomPlace,
  resetAllSavedData,
} from '../utils/storage';

interface MyMapProps {
  savedIds: string[];
  onToggleSaved: (id: string) => void;
  onOpenDetails: (dest: Destination) => void;
  targetDestination?: Destination | null;
}

// Controller to smoothly pan/zoom to a targeted destination
const MapRecenter: React.FC<{ center: [number, number]; zoom?: number }> = ({ center, zoom = 6 }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, zoom, map]);
  return null;
};

// Create a custom SVG divIcon for featured heritage destinations
const createHeritagePin = (isSaved: boolean, isCustom: boolean = false) => {
  const bgColor = isCustom ? '#7C8BA1' : isSaved ? '#D4AF37' : '#C5A059';
  const strokeColor = '#111528';
  return L.divIcon({
    className: 'custom-heritage-pin',
    html: `
      <div style="position: relative; width: 32px; height: 32px; transform: translate(-50%, -50%); cursor: pointer;">
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
          <circle cx="16" cy="16" r="14" fill="${bgColor}" stroke="${strokeColor}" stroke-width="2"/>
          <path d="M16 6 L22 13 L10 13 Z" fill="${strokeColor}"/>
          <rect x="12" y="13" width="8" height="9" fill="${strokeColor}"/>
          <circle cx="16" cy="16" r="2.5" fill="${bgColor}"/>
        </svg>
        ${isSaved ? '<span style="position: absolute; top: -3px; right: -3px; width: 10px; height: 10px; background: #FFF2B2; border-radius: 50%; box-shadow: 0 0 6px #D4AF37;"></span>' : ''}
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
};

export const MyMap: React.FC<MyMapProps> = ({
  savedIds,
  onToggleSaved,
  onOpenDetails,
  targetDestination,
}) => {
  const [customPlaces, setCustomPlaces] = useState<SavedPlace[]>([]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([22.5, 82.0]);
  const [mapZoom, setMapZoom] = useState<number>(5);
  const [mapError, setMapError] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'saved' | 'custom'>('all');

  // Custom Place Form State
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formLat, setFormLat] = useState('20.0');
  const [formLng, setFormLng] = useState('78.0');
  const [formNote, setFormNote] = useState('');

  // Reset Confirmation Modal State
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  useEffect(() => {
    setCustomPlaces(getCustomPlaces());
  }, []);

  // Update map center if a destination is targeted externally
  useEffect(() => {
    if (targetDestination) {
      setMapCenter(targetDestination.coordinates);
      setMapZoom(7);
      const el = document.getElementById('my-map');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [targetDestination]);

  // Saved destinations list
  const savedDestinations = useMemo(() => {
    return DESTINATIONS_DATA.filter((dest) => savedIds.includes(dest.id));
  }, [savedIds]);

  const handleAddCustomPlace = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formLocation.trim()) return;

    const lat = parseFloat(formLat) || 20.0;
    const lng = parseFloat(formLng) || 78.0;

    const added = addCustomPlace({
      name: formName.trim(),
      location: formLocation.trim(),
      coordinates: [lat, lng],
      note: formNote.trim(),
    });

    setCustomPlaces([added, ...customPlaces]);
    setMapCenter([lat, lng]);
    setMapZoom(6);
    setIsAddFormOpen(false);
    setFormName('');
    setFormLocation('');
    setFormNote('');
  };

  const handleRemoveCustom = (id: string) => {
    const updated = removeCustomPlace(id);
    setCustomPlaces(updated);
  };

  const handleResetData = () => {
    resetAllSavedData();
    setCustomPlaces([]);
    setIsResetConfirmOpen(false);
    // Reload page to reset state safely
    window.location.reload();
  };

  // Popular archaeological & heritage presets for quick addition
  const HERITAGE_PRESETS = [
    { name: 'Ellora Caves', loc: 'Maharashtra', lat: 20.0268, lng: 75.1780 },
    { name: 'Brihadisvara Temple', loc: 'Thanjavur, Tamil Nadu', lat: 10.7828, lng: 79.1318 },
    { name: 'Sanchi Stupa', loc: 'Madhya Pradesh', lat: 23.4795, lng: 77.7397 },
    { name: 'Lothal Archaeological Site', loc: 'Gujarat', lat: 22.5222, lng: 72.2497 },
    { name: 'Rani ki Vav', loc: 'Patan, Gujarat', lat: 23.8589, lng: 72.1017 },
  ];

  return (
    <section id="my-map" className="py-20 relative bg-[#090b17] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gold-400/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-card border border-gold-400/20 text-xs text-gold-300 uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Interactive Sacred Geography</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-sandstone-50 tracking-tight mb-4">
            Places I'd Love to Explore
          </h2>
          <p className="font-accent text-lg sm:text-xl text-sandstone-300 italic font-light max-w-2xl mx-auto">
            An interactive celestial atlas of ancient sanctuaries, stupas, and heritage citadels across the subcontinent. Save favorites or add your own dream journeys.
          </p>
        </div>

        {/* Main Grid: Interactive Map + Wishlist Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Map Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Map Header Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-indigo-card/70 border border-gold-400/20 text-xs">
              <div className="flex items-center gap-2 text-sandstone-300">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                <span className="font-serif">Featured ({DESTINATIONS_DATA.length})</span>
                <span className="text-sandstone-500">•</span>
                <span className="w-2.5 h-2.5 rounded-full bg-dusty-blue" />
                <span className="font-serif">Custom ({customPlaces.length})</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddFormOpen(true)}
                  className="px-3 py-1.5 rounded-full bg-gold-500/20 hover:bg-gold-500/30 text-gold-200 border border-gold-400/40 font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Place</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsResetConfirmOpen(true)}
                  title="Reset saved data"
                  className="p-1.5 rounded-full bg-indigo-deep text-sandstone-400 hover:text-red-300 border border-gold-400/20 hover:border-red-400/40 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-2xl border border-gold-400/30 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] bg-indigo-night">
              {!mapError ? (
                <MapContainer
                  center={mapCenter}
                  zoom={mapZoom}
                  scrollWheelZoom={false}
                  className="w-full h-full"
                >
                  <MapRecenter center={mapCenter} zoom={mapZoom} />

                  {/* Free OpenStreetMap tiles */}
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {/* Standard Featured Destinations Markers */}
                  {DESTINATIONS_DATA.map((dest) => {
                    const isSaved = savedIds.includes(dest.id);
                    return (
                      <Marker
                        key={dest.id}
                        position={dest.coordinates}
                        icon={createHeritagePin(isSaved, false)}
                      >
                        <Popup>
                          <div className="text-sandstone-100 max-w-[240px]">
                            <div className="font-serif font-bold text-sm text-gold-200 mb-0.5">
                              {dest.name}
                            </div>
                            <div className="text-[11px] text-sandstone-300 mb-1 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-gold-400" />
                              <span>{dest.location}, {dest.state}</span>
                            </div>
                            <p className="text-[11px] text-sandstone-200 line-clamp-2 mb-2 italic font-light">
                              {dest.subtitle}
                            </p>
                            <div className="flex items-center justify-between pt-1 border-t border-gold-400/20 gap-2">
                              <button
                                type="button"
                                onClick={() => onOpenDetails(dest)}
                                className="text-[11px] text-gold-300 hover:text-gold-100 font-medium flex items-center gap-1"
                              >
                                <Eye className="w-3 h-3" />
                                <span>Details</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => onToggleSaved(dest.id)}
                                className={`text-[11px] px-2 py-0.5 rounded-full border ${
                                  isSaved
                                    ? 'bg-gold-500/20 border-gold-400/50 text-gold-200'
                                    : 'bg-indigo-muted border-gold-400/30 text-sandstone-300 hover:text-gold-200'
                                }`}
                              >
                                {isSaved ? 'Saved' : '+ Save'}
                              </button>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    );
                  })}

                  {/* Custom User-Added Places Markers */}
                  {customPlaces.map((custom) => {
                    if (!custom.coordinates) return null;
                    return (
                      <Marker
                        key={custom.id}
                        position={custom.coordinates}
                        icon={createHeritagePin(true, true)}
                      >
                        <Popup>
                          <div className="text-sandstone-100 max-w-[220px]">
                            <div className="font-serif font-bold text-sm text-sandstone-50 mb-0.5">
                              {custom.name}
                            </div>
                            <div className="text-[11px] text-sandstone-300 mb-1">
                              📍 {custom.location}
                            </div>
                            {custom.note && (
                              <p className="text-[11px] text-sandstone-200 italic mb-2">
                                “{custom.note}”
                              </p>
                            )}
                            <button
                              type="button"
                              onClick={() => handleRemoveCustom(custom.id)}
                              className="text-[10px] text-red-300 hover:text-red-200"
                            >
                              Remove Place
                            </button>
                          </div>
                        </Popup>
                      </Marker>
                    );
                  })}
                </MapContainer>
              ) : (
                /* Fallback if map tiles fail */
                <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <Compass className="w-12 h-12 text-gold-400/50 mb-3" />
                  <p className="font-serif text-sandstone-200 text-sm mb-2">
                    Map preview is running in offline/low-bandwidth mode
                  </p>
                  <p className="text-xs text-sandstone-400 max-w-sm">
                    All destination coordinates and your personal wishlist remain preserved below.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Wishlist & Saved Places List Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* Wishlist Header & Filter Tabs */}
            <div className="p-4 rounded-xl bg-indigo-card/70 border border-gold-400/20">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif text-base font-bold text-sandstone-100 flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-gold-400" />
                  <span>My Heritage Wishlist</span>
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/30">
                  {savedDestinations.length + customPlaces.length} Saved
                </span>
              </div>

              {/* Tabs */}
              <div className="flex gap-1.5 p-1 rounded-lg bg-indigo-deep text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`flex-1 py-1 rounded-md transition-colors ${
                    activeTab === 'all'
                      ? 'bg-gold-500/25 text-gold-200 font-medium'
                      : 'text-sandstone-400 hover:text-sandstone-200'
                  }`}
                >
                  All ({savedDestinations.length + customPlaces.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('saved')}
                  className={`flex-1 py-1 rounded-md transition-colors ${
                    activeTab === 'saved'
                      ? 'bg-gold-500/25 text-gold-200 font-medium'
                      : 'text-sandstone-400 hover:text-sandstone-200'
                  }`}
                >
                  Sanctuaries ({savedDestinations.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('custom')}
                  className={`flex-1 py-1 rounded-md transition-colors ${
                    activeTab === 'custom'
                      ? 'bg-gold-500/25 text-gold-200 font-medium'
                      : 'text-sandstone-400 hover:text-sandstone-200'
                  }`}
                >
                  Custom ({customPlaces.length})
                </button>
              </div>
            </div>

            {/* Saved Destinations List Container */}
            <div className="rounded-2xl bg-indigo-card/40 border border-gold-400/20 p-4 space-y-3 max-h-[460px] overflow-y-auto">
              {/* Empty State */}
              {savedDestinations.length === 0 && customPlaces.length === 0 && (
                <div className="text-center py-12 px-4">
                  <Bookmark className="w-10 h-10 text-gold-400/30 mx-auto mb-3" />
                  <h4 className="font-serif text-sm font-semibold text-sandstone-200 mb-1">
                    Your exploration wishlist is currently empty
                  </h4>
                  <p className="text-xs text-sandstone-400 mb-4 max-w-xs mx-auto">
                    Click the bookmark icon on any temple or archaeological site above, or add a custom dream place.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      onToggleSaved('kashi-vishwanath');
                      onToggleSaved('hampi');
                    }}
                    className="px-4 py-2 rounded-full bg-gold-500/20 text-gold-200 border border-gold-400/30 text-xs hover:bg-gold-500/30"
                  >
                    Add Sample Destinations (Kashi & Hampi)
                  </button>
                </div>
              )}

              {/* Render Saved Standard Destinations */}
              {(activeTab === 'all' || activeTab === 'saved') &&
                savedDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    className="p-3.5 rounded-xl bg-[#13172e] border border-gold-400/20 hover:border-gold-400/40 transition-all flex items-start justify-between gap-3 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-2 h-2 rounded-full bg-gold-400" />
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-sandstone-100 group-hover:text-gold-200">
                          {dest.name}
                        </h4>
                      </div>
                      <div className="text-[11px] text-sandstone-400 flex items-center gap-1 mb-1.5">
                        <MapPin className="w-3 h-3 text-gold-400" />
                        <span>{dest.location}, {dest.state}</span>
                      </div>
                      <p className="text-[11px] text-sandstone-300 line-clamp-1 italic font-light">
                        {dest.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setMapCenter(dest.coordinates);
                          setMapZoom(7);
                        }}
                        title="Fly to marker on map"
                        className="p-1.5 rounded-md bg-indigo-deep text-sandstone-300 hover:text-gold-200"
                      >
                        <Compass className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenDetails(dest)}
                        title="View details"
                        className="p-1.5 rounded-md bg-indigo-deep text-sandstone-300 hover:text-gold-200"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onToggleSaved(dest.id)}
                        title="Remove from wishlist"
                        className="p-1.5 rounded-md bg-indigo-deep text-sandstone-400 hover:text-red-300"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

              {/* Render Custom User Places */}
              {(activeTab === 'all' || activeTab === 'custom') &&
                customPlaces.map((custom) => (
                  <div
                    key={custom.id}
                    className="p-3.5 rounded-xl bg-[#161a33] border border-dusty-blue/30 hover:border-gold-400/30 transition-all flex items-start justify-between gap-3 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-2 h-2 rounded-full bg-dusty-blue" />
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-sandstone-100">
                          {custom.name}
                        </h4>
                        <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-indigo-deep text-dusty-light border border-dusty-blue/30">
                          Custom
                        </span>
                      </div>
                      <div className="text-[11px] text-sandstone-400 flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3 text-dusty-blue" />
                        <span>{custom.location}</span>
                      </div>
                      {custom.note && (
                        <p className="text-[11px] text-sandstone-300 italic">
                          “{custom.note}”
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {custom.coordinates && (
                        <button
                          type="button"
                          onClick={() => {
                            setMapCenter(custom.coordinates!);
                            setMapZoom(7);
                          }}
                          title="Fly to marker"
                          className="p-1.5 rounded-md bg-indigo-deep text-sandstone-300 hover:text-gold-200"
                        >
                          <Compass className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleRemoveCustom(custom.id)}
                        title="Remove custom place"
                        className="p-1.5 rounded-md bg-indigo-deep text-sandstone-400 hover:text-red-300"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Custom Place Modal */}
      {isAddFormOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsAddFormOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#131833] border border-gold-400/30 rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <h3 className="font-serif text-xl font-bold text-sandstone-100 mb-1 flex items-center gap-2">
              <Plus className="w-4 h-4 text-gold-400" />
              <span>Add a Dream Place</span>
            </h3>
            <p className="text-xs text-sandstone-400 mb-4">
              Add any Indian heritage site, sanctuary, or personal dream journey to your personal map.
            </p>

            {/* Quick Presets */}
            <div className="mb-4">
              <span className="text-[11px] uppercase tracking-wider text-sandstone-400 font-medium block mb-1.5">
                Quick Historical Presets:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {HERITAGE_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => {
                      setFormName(preset.name);
                      setFormLocation(preset.loc);
                      setFormLat(preset.lat.toString());
                      setFormLng(preset.lng.toString());
                    }}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-indigo-card border border-gold-400/25 text-sandstone-300 hover:text-gold-200 hover:border-gold-400/50"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleAddCustomPlace} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-sandstone-300 mb-1">
                  Place Name *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g., Ellora Kailasa Temple"
                  className="w-full px-3.5 py-2 rounded-lg bg-indigo-deep border border-gold-400/30 text-sandstone-100 text-xs focus:outline-none focus:border-gold-300"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-sandstone-300 mb-1">
                  Location (City / State) *
                </label>
                <input
                  type="text"
                  required
                  value={formLocation}
                  onChange={(e) => setFormLocation(e.target.value)}
                  placeholder="e.g., Aurangabad, Maharashtra"
                  className="w-full px-3.5 py-2 rounded-lg bg-indigo-deep border border-gold-400/30 text-sandstone-100 text-xs focus:outline-none focus:border-gold-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-sandstone-400 mb-1">
                    Latitude
                  </label>
                  <input
                    type="number"
                    step="0.0001"
                    value={formLat}
                    onChange={(e) => setFormLat(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-indigo-deep border border-gold-400/20 text-sandstone-200 text-xs focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-sandstone-400 mb-1">
                    Longitude
                  </label>
                  <input
                    type="number"
                    step="0.0001"
                    value={formLng}
                    onChange={(e) => setFormLng(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-indigo-deep border border-gold-400/20 text-sandstone-200 text-xs focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-sandstone-300 mb-1">
                  Optional Note or Reflection
                </label>
                <textarea
                  rows={2}
                  value={formNote}
                  onChange={(e) => setFormNote(e.target.value)}
                  placeholder="Why would you love to explore here?"
                  className="w-full px-3.5 py-2 rounded-lg bg-indigo-deep border border-gold-400/30 text-sandstone-100 text-xs focus:outline-none focus:border-gold-300"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddFormOpen(false)}
                  className="px-4 py-2 rounded-full text-xs text-sandstone-400 hover:text-sandstone-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-gold-500 text-indigo-deep font-semibold text-xs hover:bg-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  Save to Map
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reset Confirmation Dialog */}
      {isResetConfirmOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsResetConfirmOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#141833] border border-gold-400/30 rounded-2xl p-6 shadow-2xl text-center"
          >
            <AlertTriangle className="w-10 h-10 text-gold-400 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-sandstone-100 mb-2">
              Reset Saved Places?
            </h3>
            <p className="text-xs text-sandstone-300 mb-5 leading-relaxed">
              This will restore the map and journal to default settings and remove custom additions in this browser.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsResetConfirmOpen(false)}
                className="px-4 py-2 rounded-full border border-gold-400/30 text-xs text-sandstone-300 hover:text-sandstone-100"
              >
                Keep Places
              </button>
              <button
                type="button"
                onClick={handleResetData}
                className="px-4 py-2 rounded-full bg-red-600/80 hover:bg-red-500 text-white text-xs font-semibold"
              >
                Confirm Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
