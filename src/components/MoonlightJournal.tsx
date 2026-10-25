import React, { useState, useEffect } from 'react';
import {
  Moon,
  Sparkles,
  BookOpen,
  Edit2,
  Trash2,
  Check,
  ShieldCheck,
  RefreshCw,
  Sun,
  Feather,
  Flower2,
  Compass,
  Smile,
  Leaf
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { JournalEntry, MoodType } from '../types';
import {
  getJournalEntries,
  addJournalEntry,
  updateJournalEntry,
  deleteJournalEntry,
} from '../utils/storage';

const REMINDERS = [
  'You don\'t have to figure everything out today.',
  'Every new discovery begins with curiosity.',
  'There is always something new to learn, somewhere new to explore.',
  'May you find the clarity, courage and peace you\'re looking for.',
];

const MOODS: { type: MoodType; label: string; icon: React.ReactNode }[] = [
  { type: 'peaceful', label: 'Peaceful', icon: <Moon className="w-4 h-4 text-gold-300" /> },
  { type: 'curious', label: 'Curious', icon: <Compass className="w-4 h-4 text-dusty-light" /> },
  { type: 'reflective', label: 'Reflective', icon: <Feather className="w-4 h-4 text-sandstone-300" /> },
  { type: 'energized', label: 'Energized', icon: <Sun className="w-4 h-4 text-amber-300" /> },
  { type: 'grounded', label: 'Grounded', icon: <Leaf className="w-4 h-4 text-emerald-300" /> },
  { type: 'serene', label: 'Serene', icon: <Flower2 className="w-4 h-4 text-rose-300" /> },
];

export const MoonlightJournal: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [selectedMood, setSelectedMood] = useState<MoodType>('peaceful');
  const [feltGood, setFeltGood] = useState('');
  const [exploreTomorrow, setExploreTomorrow] = useState('');
  const [intention, setIntention] = useState('');
  const [reminderIndex, setReminderIndex] = useState(0);

  // Editing state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFeltGood, setEditFeltGood] = useState('');
  const [editExploreTomorrow, setEditExploreTomorrow] = useState('');
  const [editIntention, setEditIntention] = useState('');
  const [editMood, setEditMood] = useState<MoodType>('peaceful');

  useEffect(() => {
    setEntries(getJournalEntries());
  }, []);

  const handleNextReminder = () => {
    setReminderIndex((prev) => (prev + 1) % REMINDERS.length);
  };

  const handleSaveEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feltGood.trim() && !exploreTomorrow.trim() && !intention.trim()) return;

    const todayStr = new Date().toISOString().split('T')[0];

    const newEntry = addJournalEntry({
      date: todayStr,
      mood: selectedMood,
      feltGood: feltGood.trim(),
      exploreTomorrow: exploreTomorrow.trim(),
      intention: intention.trim(),
    });

    setEntries([newEntry, ...entries]);
    setFeltGood('');
    setExploreTomorrow('');
    setIntention('');

    // Gentle sparkle feedback
    try {
      confetti({
        particleCount: 30,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#F6EFCB', '#D4AF37', '#A3B0C4'],
        disableForReducedMotion: true
      });
    } catch {
      // ignore
    }
  };

  const handleStartEdit = (entry: JournalEntry) => {
    setEditingId(entry.id);
    setEditMood(entry.mood);
    setEditFeltGood(entry.feltGood);
    setEditExploreTomorrow(entry.exploreTomorrow);
    setEditIntention(entry.intention);
  };

  const handleSaveEdit = (entry: JournalEntry) => {
    const updated: JournalEntry = {
      ...entry,
      mood: editMood,
      feltGood: editFeltGood,
      exploreTomorrow: editExploreTomorrow,
      intention: editIntention,
    };
    const nextList = updateJournalEntry(updated);
    setEntries(nextList);
    setEditingId(null);
  };

  const handleDeleteEntry = (id: string) => {
    const nextList = deleteJournalEntry(id);
    setEntries(nextList);
  };

  return (
    <section id="moonlight-journal" className="py-20 relative bg-[#0b0e1e] overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gold-400/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-card border border-gold-400/20 text-xs text-gold-300 uppercase tracking-widest mb-3">
            <Moon className="w-3.5 h-3.5" />
            <span>Peaceful Reflection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-sandstone-50 tracking-tight mb-4">
            One Day at a Time
          </h2>
          <p className="font-accent text-lg sm:text-xl text-sandstone-300 italic font-light max-w-2xl mx-auto">
            A quiet moonlight journal for gentle intentions, pleasant moments, and things to explore with tomorrow’s sun.
          </p>
        </div>

        {/* Rotating Gentle Reminder Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative rounded-2xl bg-[#141935]/90 border border-gold-400/30 p-6 text-center ornate-border shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between text-xs text-gold-400/80 mb-2">
              <span className="font-serif uppercase tracking-widest text-[11px]">A Gentle Reminder</span>
              <button
                type="button"
                onClick={handleNextReminder}
                className="flex items-center gap-1 text-[11px] hover:text-gold-200 transition-colors"
                title="Next reminder"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Next</span>
              </button>
            </div>
            <p className="font-accent text-xl sm:text-2xl text-sandstone-100 italic font-light py-2">
              “{REMINDERS[reminderIndex]}”
            </p>
          </div>
        </div>

        {/* Journal Input & Entries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* New Entry Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#141935]/90 border border-gold-400/30 p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <h3 className="font-serif text-xl font-bold text-sandstone-100 mb-1 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-gold-400" />
              <span>Today’s Reflection</span>
            </h3>
            <p className="text-xs text-sandstone-400 mb-6">
              Take a quiet moment to record a thought or intention at your own pace.
            </p>

            <form onSubmit={handleSaveEntry} className="space-y-5">
              {/* Mood Check-In */}
              <div>
                <label className="block text-xs font-medium text-sandstone-300 uppercase tracking-wider mb-2">
                  How are you feeling right now?
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {MOODS.map((m) => {
                    const active = selectedMood === m.type;
                    return (
                      <button
                        key={m.type}
                        type="button"
                        onClick={() => setSelectedMood(m.type)}
                        className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-center ${
                          active
                            ? 'bg-gold-500/20 border-gold-400 text-gold-200 shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                            : 'bg-indigo-deep/60 border-gold-400/20 text-sandstone-400 hover:text-sandstone-200 hover:border-gold-400/40'
                        }`}
                      >
                        <div>{m.icon}</div>
                        <span className="text-[11px] font-medium tracking-tight">{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Prompt 1 */}
              <div>
                <label className="block text-xs font-serif font-semibold text-sandstone-200 mb-1.5">
                  What felt good today?
                </label>
                <textarea
                  rows={2}
                  value={feltGood}
                  onChange={(e) => setFeltGood(e.target.value)}
                  placeholder="A quiet moment, a warm cup of chai, discovering something new, or a breath of fresh air..."
                  className="w-full px-4 py-2.5 rounded-xl bg-indigo-deep/80 border border-gold-400/30 text-sandstone-100 placeholder-sandstone-500 text-xs sm:text-sm focus:outline-none focus:border-gold-300 shadow-inner"
                />
              </div>

              {/* Prompt 2 */}
              <div>
                <label className="block text-xs font-serif font-semibold text-sandstone-200 mb-1.5">
                  What would you like to explore tomorrow?
                </label>
                <textarea
                  rows={2}
                  value={exploreTomorrow}
                  onChange={(e) => setExploreTomorrow(e.target.value)}
                  placeholder="A historical site, a chapter of a book, a new idea, or simply quiet rest..."
                  className="w-full px-4 py-2.5 rounded-xl bg-indigo-deep/80 border border-gold-400/30 text-sandstone-100 placeholder-sandstone-500 text-xs sm:text-sm focus:outline-none focus:border-gold-300 shadow-inner"
                />
              </div>

              {/* Prompt 3: Intention */}
              <div>
                <label className="block text-xs font-serif font-semibold text-sandstone-200 mb-1.5">
                  A short personal intention for the day
                </label>
                <input
                  type="text"
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                  placeholder="e.g. To be patient with myself; to notice beauty in simple things."
                  className="w-full px-4 py-2.5 rounded-xl bg-indigo-deep/80 border border-gold-400/30 text-sandstone-100 placeholder-sandstone-500 text-xs sm:text-sm focus:outline-none focus:border-gold-300 shadow-inner"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-sandstone-400 italic">
                  Pressing save keeps this in your browser
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-indigo-deep font-semibold text-xs uppercase tracking-wider hover:from-gold-400 hover:to-gold-500 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>

          {/* Saved History Entries (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-indigo-card/60 border border-gold-400/20 text-xs">
              <span className="font-serif font-semibold text-sandstone-200">
                Journal History ({entries.length})
              </span>
              <span className="text-sandstone-400 text-[11px]">Grouped by date</span>
            </div>

            <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1">
              {entries.length === 0 ? (
                <div className="rounded-2xl bg-indigo-card/40 border border-gold-400/20 p-8 text-center">
                  <Moon className="w-8 h-8 text-gold-400/40 mx-auto mb-2" />
                  <p className="font-serif text-sm text-sandstone-200 mb-1">
                    No journal entries yet
                  </p>
                  <p className="text-xs text-sandstone-400">
                    Write your first quiet thought using the form on the left.
                  </p>
                </div>
              ) : (
                entries.map((entry) => {
                  const isEditing = editingId === entry.id;

                  return (
                    <div
                      key={entry.id}
                      className="p-5 rounded-2xl bg-[#141833] border border-gold-400/20 shadow-md space-y-3 relative group"
                    >
                      {/* Entry Header: Date & Mood */}
                      <div className="flex items-center justify-between border-b border-gold-400/15 pb-2">
                        <div>
                          <span className="font-serif text-xs font-bold text-gold-300 block">
                            {entry.formattedDate}
                          </span>
                          <span className="text-[10px] text-sandstone-400 uppercase tracking-widest capitalize">
                            Mood: {entry.mood}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleStartEdit(entry)}
                            title="Edit entry"
                            className="p-1 rounded-md text-sandstone-400 hover:text-gold-200"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteEntry(entry.id)}
                            title="Delete entry"
                            className="p-1 rounded-md text-sandstone-400 hover:text-red-300"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Content or Edit Form */}
                      {isEditing ? (
                        <div className="space-y-2.5 text-xs animate-fadeIn">
                          <div>
                            <span className="text-[10px] uppercase text-sandstone-400">Felt Good:</span>
                            <textarea
                              rows={2}
                              value={editFeltGood}
                              onChange={(e) => setEditFeltGood(e.target.value)}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-indigo-deep border border-gold-400/30 text-sandstone-100 text-xs"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase text-sandstone-400">Explore Tomorrow:</span>
                            <textarea
                              rows={2}
                              value={editExploreTomorrow}
                              onChange={(e) => setEditExploreTomorrow(e.target.value)}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-indigo-deep border border-gold-400/30 text-sandstone-100 text-xs"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase text-sandstone-400">Intention:</span>
                            <input
                              type="text"
                              value={editIntention}
                              onChange={(e) => setEditIntention(e.target.value)}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-indigo-deep border border-gold-400/30 text-sandstone-100 text-xs"
                            />
                          </div>
                          <div className="flex items-center justify-end gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => setEditingId(null)}
                              className="text-[11px] px-3 py-1 rounded-md text-sandstone-400"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSaveEdit(entry)}
                              className="text-[11px] px-3 py-1 rounded-md bg-gold-500 text-indigo-deep font-semibold"
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2.5 text-xs">
                          {entry.feltGood && (
                            <div>
                              <span className="text-[10px] font-serif uppercase tracking-wider text-gold-400/80 block">
                                What felt good:
                              </span>
                              <p className="text-sandstone-200 font-light leading-relaxed">
                                {entry.feltGood}
                              </p>
                            </div>
                          )}

                          {entry.exploreTomorrow && (
                            <div>
                              <span className="text-[10px] font-serif uppercase tracking-wider text-dusty-light block">
                                To explore tomorrow:
                              </span>
                              <p className="text-sandstone-200 font-light leading-relaxed">
                                {entry.exploreTomorrow}
                              </p>
                            </div>
                          )}

                          {entry.intention && (
                            <div className="pt-1 border-t border-gold-400/10">
                              <span className="text-[10px] font-serif uppercase tracking-wider text-sandstone-400 block">
                                Intention:
                              </span>
                              <p className="font-accent italic text-sandstone-100 text-xs sm:text-sm">
                                “{entry.intention}”
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Visible Privacy Assurance Note */}
        <div className="mt-12 max-w-2xl mx-auto rounded-xl bg-indigo-card/50 border border-gold-400/20 p-4 text-center flex items-center justify-center gap-3 text-xs text-sandstone-400">
          <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
          <span>
            <strong>Your privacy note:</strong> Entries are stored strictly within this browser’s local storage and are never uploaded, collected, or transmitted to any external server.
          </span>
        </div>
      </div>
    </section>
  );
};
