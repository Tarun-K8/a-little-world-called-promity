# A Little World Called Promity

> *“For someone with her own stories, dreams, questions and places yet to discover.”*  
> *Made with thoughtfulness, not expectations.*

**A Little World Called Promity** is an interactive Indian heritage explorer blended with a peaceful moonlight journal. It is a thoughtful digital experience inspired by Ancient Indian History with Archaeology (AIHC), sacred temple architecture, epigraphy, cosmic geometries, and unhurried future horizons.

---

## 🏛️ Visual Identity & Design Direction

- **Heritage Palette**: Warm ivory (`#FDFBF7`), parchment (`#F9F5EC`), sandstone (`#E7D8C0`, `#A48253`), deep midnight indigo (`#090B17`, `#111528`), dusty blue (`#7C8BA1`), and antique gold accents (`#D4AF37`, `#F6EFCB`).
- **Editorial Typography**: Classical serif headings (*Cinzel* & *Cormorant Garamond*) paired with clean sans-serif typography (*Plus Jakarta Sans*).
- **Architectural Ornamentation**: Bespoke SVG temple silhouettes, Nagara shikharas, Dravidian gopurams, Ashokan stupas, jharokha balconies, and moonlight halos.
- **Privacy First**: Zero tracking, zero telemetry, no paid API keys. All bookmarks, custom destinations, and journal entries are preserved strictly in the user's browser `localStorage`.
- **Peaceful Ambience**: Includes a built-in Web Audio ambient synthesizer that produces a warm, meditative Indian tanpura drone (108 Hz) and soft evening breeze without loading external audio files.

---

## ✨ Features & Architecture

### 1. Homepage & Twilight Landscape
- Cinematic dusk landscape featuring temple silhouettes, riverfront ghat steps, glowing crescent moon, and twinkling stars.
- Live lunar phase calculator indicating tonight's moon name and illumination.
- Ambient sound toggle and wishlist counter.
- Smooth navigation with mobile-friendly drawer menu.

### 2. A Story Still Unfolding
- An illuminated editorial manuscript card honoring the meaning she personally shared: *proved truth*.
- Dignified, respectful, and free of invented etymologies.

### 3. The Heritage Explorer
Interactive cards showcasing eight historically verified Indian heritage destinations:
1. **Kashi Vishwanath Temple, Varanasi** *(Nagara architecture, golden shikhara, Ganga riverfront)*
2. **Ramnagar Fort, Varanasi** *(Chunar sandstone, astronomical clock, 18th-century citadel)*
3. **Sarnath Archaeological Site, UP** *(Dhamek Stupa, Ashokan Lion Capital, First Sermon)*
4. **Khajuraho Group of Monuments, MP** *(Chandela dynasty, Nagara Panchayatana, Kandariya Mahadeva)*
5. **Konark Sun Temple, Odisha** *(13th-century chariot of Surya, astronomical sundial wheels)*
6. **Hampi (Vijayanagara), Karnataka** *(Stone chariot, Virupaksha, acoustic musical pillars)*
7. **Ajanta Caves, Maharashtra** *(Horseshoe basalt gorge, Bodhisattva Padmapani, lapis lazuli murals)*
8. **Nalanda Mahavihara, Bihar** *(Ancient residential university, Sariputta Stupa, Dharma Gunj library)*

- **Category Filters**: *All*, *Temples*, *Forts & Palaces*, *Archaeological Sites*, *Ancient Learning*, *UNESCO World Heritage*.
- **Real-Time Search**: Search by name, city, state, or architectural style.
- **Detail Modal**: In-depth history, architectural highlights, verified facts, and visitor etiquette.
- **Add to Wishlist**: Synchronized with the interactive map.

### 4. Little Discoveries
Interactive cards with verifiable insights spanning:
- **Ancient Universities**: Nalanda, Takshashila, Vikramashila, Vallabhi.
- **Temple Architecture & Symbolism**: Vastu Purusha Mandala, Garbhagriha geometry, Shikhara axis.
- **Archaeological Excavations**: Stratigraphy, NBPW pottery sequences, Rakhigarhi & Keezhadi.
- **Epigraphy & Manuscripts**: James Prinsep's Brahmi decipherment, palm-leaf & birch-bark conservation.
- **Trade Routes**: Uttarapath, Dakshinapath, and the Indian Ocean monsoon trade.
- **Heritage Preservation**: Modern materials science, photogrammetry, and salt extraction.
- **“Surprise Me” Button**: Selects and highlights a random discovery with golden celebration stardust.

### 5. My Map — Places I'd Love to Explore
- Free, interactive map powered by Leaflet & OpenStreetMap.
- Custom antique gold pins for featured sites and slate pins for user-added places.
- Interactive popups with instant preview and wishlist actions.
- **Add Custom Places**: Input custom heritage locations, coordinates, or pick from popular historical presets (*Ellora Caves, Thanjavur Brihadisvara, Sanchi, Lothal, Rani ki Vav*).
- **Reset Option**: Safely resets storage with confirmation dialog.
- **Offline / Fallback Resilience**: If map tiles cannot load, displays a structured fallback list.

### 6. One Day at a Time — A Gentle Journal
- Peaceful daily reflection tool with expressive mood icons (*Peaceful, Curious, Reflective, Energized, Grounded, Serene*).
- Prompts:
  - *“What felt good today?”*
  - *“What would you like to explore tomorrow?”*
  - *“A short personal intention for the day”*
- Rotating gentle reminders (e.g. *“You don't have to figure everything out today”*).
- Complete edit and delete capabilities for saved entries.
- Explicit privacy notice confirming zero server upload.

### 7. Her Next Chapter
Curated pathways celebrating curiosity and self-directed exploration:
- **Archaeology & Ancient History**
- **Heritage & Cultural Preservation**
- **New Paths & Possibilities**
Includes curated reading recommendations (Upinder Singh, A.L. Basham, William Dalrymple, etc.) and links to official archives (ASI, INTACH, National Museum, Sahapedia).

### 8. Personal Touches & Footer
- Subtle, respectful closing note wishing clear skies and peaceful discoveries.
- Moon phase progression footer motif and smooth back-to-top control.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation
```bash
# 1. Clone or navigate into the repository
cd a-little-world-called-promity

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production
```bash
npm run build
```
The optimized production bundle is generated in the `dist/` directory.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. (No environment variables required!)

### Deploy to Replit
1. Create a new Repl and choose **Import from GitHub**.
2. Select your repository.
3. In the shell, run:
   ```bash
   npm install
   npm run dev
   ```
4. Set the webview port to `3000`.

### Deploy to GitHub Pages
1. In `vite.config.ts`, add the repository name base path if deploying under a subpath:
   ```ts
   export default defineConfig({
     base: '/a-little-world-called-promity/',
     plugins: [react()],
   });
   ```
2. Build and publish the `dist/` folder via GitHub Actions or the `gh-pages` package.

---

## 📜 License
Created with thoughtful care and respect. Free to explore, fork, and learn from.
