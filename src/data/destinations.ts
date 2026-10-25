import { Destination } from '../types';

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'kashi-vishwanath',
    name: 'Kashi Vishwanath Temple',
    subtitle: 'Eternal Sanctum of Light on the Sacred Ganga',
    location: 'Varanasi',
    state: 'Uttar Pradesh',
    coordinates: [25.3109, 83.0107],
    category: 'Temples',
    additionalCategories: ['Temples'],
    architecturalStyle: 'Nagara temple architecture with gilded Shikhara',
    historicalEra: 'Ancient; current sanctum rebuilt 1780 CE by Ahilyabai Holkar',
    historicalBackground:
      'Perched on the western bank of the holy Ganga in Varanasi (one of the oldest continuously inhabited cities in human history), the Kashi Vishwanath Temple enshrines one of the twelve sacred Jyotirlingas. For millennia, it has stood as the spiritual heartbeat of Kashi—a city associated with liberation, classical philosophy, and timeless devotion.',
    architecturalHighlights: [
      'Soaring golden shikhara and finial towering over the sanctum sanctorum',
      'Historic quadrangle courtyard surrounded by sculpted stone shrines and Shaivite pillars',
      'Sacred Gyan Vapi well precinct steeped in centuries of recorded Varanasi lore',
      'Seamless modern heritage corridor harmonizing riverfront ghat access with sanctum access'
    ],
    interestingFact:
      'In 1835, Maharaja Ranjit Singh of the Sikh Empire donated nearly one tonne of pure gold to plate the spires and dome of the temple, reflecting a timeless inter-regional reverence for Varanasi.',
    unescoStatus: 'Part of the historic sacred riverfront of Varanasi on UNESCO Tentative List',
    visitingEtiquette:
      'Traditional attire is appreciated. Leather goods and electronic devices are deposited in security lockers outside the inner sanctum.',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Ghats and temple spires of Varanasi overlooking the holy Ganga river at twilight',
    caption: 'Evening prayers on the Varanasi riverfront with temple silhouettes in the moonlight'
  },
  {
    id: 'ramnagar-fort',
    name: 'Ramnagar Fort',
    subtitle: 'Chunar Sandstone Citadel of the Kashi Naresh',
    location: 'Ramnagar, Varanasi',
    state: 'Uttar Pradesh',
    coordinates: [25.2676, 83.0270],
    category: 'Forts & Palaces',
    additionalCategories: ['Forts & Palaces'],
    architecturalStyle: 'Mughal-Rajput synthesis with carved jharokhas in creamy sandstone',
    historicalEra: '18th Century (Circa 1750 CE)',
    historicalBackground:
      'Commissioned in 1750 CE by Maharaja Balwant Singh on the eastern bank of the Ganga, Ramnagar Fort stands directly opposite the ancient ghats of Varanasi. Constructed of luminous Chunar sandstone, it has served for centuries as the ceremonial residence of the Kashi Naresh and is famed for hosting the world-famous month-long Ramnagar Ramlila.',
    architecturalHighlights: [
      'Carved balconies (jharokhas) and ornate sandstone pavilions gazing out across the Ganga',
      'Durbar Hall housing the Saraswati Bhawan Museum with royal palanquins and manuscripts',
      'Defensive ramparts engineered to withstand river currents and monsoon rises',
      'Ancient temple dedicated to sage Ved Vyasa overlooking the tranquil water'
    ],
    interestingFact:
      'The fort’s museum preserves an extraordinary 19th-century astronomical clock crafted by a royal court astronomer; it simultaneously tracks time, week, month, astronomical zodiac signs, and lunar phases.',
    unescoStatus: 'Historic Monument of regional and state architectural heritage',
    visitingEtiquette:
      'The museum wing is open to visitors throughout the day; photography is restricted inside the royal weaponry and manuscript galleries.',
    image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Luminous stone fort walls and bastions rising along the banks of the river at sunset',
    caption: 'Ramnagar Fort bastions glowing against the twilight waters of the Ganga'
  },
  {
    id: 'sarnath',
    name: 'Sarnath Archaeological Site',
    subtitle: 'The Deer Park Where the Wheel of Dhamma Was Set in Motion',
    location: 'Sarnath',
    state: 'Uttar Pradesh',
    coordinates: [25.3811, 83.0214],
    category: 'Archaeological Sites',
    additionalCategories: ['Archaeological Sites', 'Ancient Learning'],
    architecturalStyle: 'Mauryan and Gupta era monolithic pillars, stupas, and brick viharas',
    historicalEra: '6th Century BCE to 12th Century CE',
    historicalBackground:
      'Located just 10 kilometres northeast of Varanasi, the deer park at Isipatana (modern Sarnath) is where Gautama Buddha delivered his first discourse after enlightenment—the Dhammacakkappavattana Sutta. Over subsequent centuries, Mauryan, Shunga, Kushana, and Gupta dynasties embellished the site with monumental stupas and serene monasteries.',
    architecturalHighlights: [
      'The monumental Dhamek Stupa (43.6m tall) adorned with exquisite 5th-century Gupta floral motifs',
      'Foundation ruins of the Dharmarajika Stupa and ancient monastic cells (viharas)',
      'Ashoka Pillar site where the polished sandstone imperial edict was originally erected',
      'Sarnath Archaeological Museum preserving India’s finest Gupta-era sculpture collections'
    ],
    interestingFact:
      'The polished 3rd-century BCE Ashokan Lion Capital excavated here at Sarnath was chosen as the Official State Emblem of independent India, and its 24-spoked wheel (Ashoka Chakra) graces the national flag.',
    unescoStatus: 'On the UNESCO World Heritage Tentative List',
    visitingEtiquette:
      'Maintain quiet mindfulness near the Dhamek Stupa where pilgrims meditate. The archaeological park is expansive and pedestrian-friendly.',
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'The grand Dhamek Stupa rising serenely amid green archaeological lawns at Sarnath',
    caption: 'The ancient Dhamek Stupa at Sarnath, etched with Gupta-era stone friezes'
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho Group of Monuments',
    subtitle: 'The Pinnacle of Medieval Nagara Temple Art',
    location: 'Chhatarpur',
    state: 'Madhya Pradesh',
    coordinates: [24.8318, 79.9199],
    category: 'UNESCO World Heritage',
    additionalCategories: ['Temples', 'UNESCO World Heritage'],
    architecturalStyle: 'Nagara Panchayatana with stepped fractal shikharas (urushringas)',
    historicalEra: '950 CE – 1050 CE (Chandela Dynasty)',
    historicalBackground:
      'Constructed over a century of artistic brilliance by the rulers of the Chandela dynasty in the Vindhya hills, Khajuraho originally comprised 85 magnificent temples of which 25 survive today. The site seamlessly interweaves Hindu and Jain sacred spaces, celebrating spiritual ascent alongside everyday secular and aesthetic experiences.',
    architecturalHighlights: [
      'The soaring Kandariya Mahadeva Temple, boasting 84 mini-spires mimicking mountain ranges',
      'Lakshmana Temple preserving its complete Panchayatana platform with four subsidiary shrines',
      'Intricate sandstone joinery assembled without mortar using precision mortise-and-tenon joints',
      'The Jain temple cluster, including Parshvanatha Temple with masterfully sculpted celestial nymphs'
    ],
    interestingFact:
      'Far from solely depicting erotic themes (which account for less than ten percent of the exterior carvings), the sculptures comprehensively document 10th-century life: musicians, teachers, cosmetic rituals, scholars, warfare, and devotion.',
    unescoStatus: 'Inscribed as a UNESCO World Heritage Site in 1986',
    visitingEtiquette:
      'Early morning or late afternoon provides the best light to appreciate the stone masonry. Audio guides are available at the western group ticket counter.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f443b811?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'The dramatic sandstone shikharas of Kandariya Mahadeva Temple in Khajuraho',
    caption: 'Ornate towers of Khajuraho glowing in warm golden twilight sandstone'
  },
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    subtitle: 'The Grand Chariot of the Sun God on the Eastern Coast',
    location: 'Konark, Puri',
    state: 'Odisha',
    coordinates: [19.8876, 86.0945],
    category: 'UNESCO World Heritage',
    additionalCategories: ['Temples', 'UNESCO World Heritage'],
    architecturalStyle: 'Kalinga architecture (Jagamohana & Natamandira in Khondalite stone)',
    historicalEra: 'Circa 1250 CE (King Narasimhadeva I, Eastern Ganga Dynasty)',
    historicalBackground:
      'Rising on the shores of the Bay of Bengal, the Konark Sun Temple was designed as an enormous cosmic chariot for Surya, the Vedic Sun God. Conceived on an unprecedented architectural scale by King Narasimhadeva I, European mariners historically referred to its dark stone silhouette as the "Black Pagoda" as they navigated the Odisha coast.',
    architecturalHighlights: [
      'Twenty-four monumental stone wheels, each intricately sculpted with spokes and medallions',
      'Seven rearing horses sculpted along the northern and southern flanks representing the days of the week',
      'The Natamandira (Dance Hall) carved with hundreds of classical Odissi dance postures',
      'Deep green chlorite stone reliefs depicting Surya standing proudly upon his chariot'
    ],
    interestingFact:
      'The 24 wheels function as remarkably precise astronomical sundials. The shadow cast by the hub on the carved spokes allows time measurement down to within a few minutes.',
    unescoStatus: 'Inscribed as a UNESCO World Heritage Site in 1984',
    visitingEtiquette:
      'The main sanctuary hall (Jagamohana) was filled with sand in 1903 by British engineers to ensure structural stability; the exterior viewing walkways allow 360-degree admiration.',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Detailed stone wheel of the Konark Sun Temple with delicate astronomical spokes',
    caption: 'The masterfully carved sundial wheel of Konark, measuring time through celestial shadows'
  },
  {
    id: 'hampi',
    name: 'Hampi (Vijayanagara)',
    subtitle: 'Granite Monoliths & Whispering Pillars of an Empire',
    location: 'Vijayanagara',
    state: 'Karnataka',
    coordinates: [15.3350, 76.4600],
    category: 'Archaeological Sites',
    additionalCategories: ['Archaeological Sites', 'UNESCO World Heritage'],
    architecturalStyle: 'Vijayanagara Dravidian architecture amid natural granite boulderscapes',
    historicalEra: '1336 CE – 1565 CE',
    historicalBackground:
      'Spanning over 4,100 hectares along the banks of the Tungabhadra River, Hampi was the capital of the Vijayanagara Empire. Described by Portuguese and Persian visitors like Domingo Paes and Abdur Razzak as comparable to Rome in splendor, Hampi remains an extraordinary open-air museum of palaces, water pavilions, bazaars, and shrines.',
    architecturalHighlights: [
      'The functioning Virupaksha Temple with its 50-metre high tiered eastern gopuram',
      'Vittala Temple complex featuring the celebrated monolithic Stone Chariot (Garuda shrine)',
      'The musical Ranga Mandapa with 56 resonant stone pillars carved from single granite blocks',
      'The Royal Enclosure featuring the geometric Stepped Tank (Pushkarani) and Lotus Mahal'
    ],
    interestingFact:
      'When lightly struck, the 56 slender granite pillars of the Vittala Temple produce tonal musical vibrations spanning different Indian swaras and percussion instruments, a feat of acoustic stone craftsmanship.',
    unescoStatus: 'Inscribed as a UNESCO World Heritage Site in 1986',
    visitingEtiquette:
      'Given Hampi’s vast landscape, exploring by bicycle or electric buggy is recommended. Sun protection and comfortable walking footwear are essential.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'The iconic stone chariot of Vittala Temple against boulder-strewn hills in Hampi',
    caption: 'The legendary stone chariot of Vittala Temple framed by Hampi’s timeless granite hills'
  },
  {
    id: 'ajanta-caves',
    name: 'Ajanta Caves',
    subtitle: 'Rock-Cut Masterpieces of Buddhist Art & Frescoes',
    location: 'Chhatrapati Sambhaji Nagar',
    state: 'Maharashtra',
    coordinates: [20.5519, 75.7033],
    category: 'UNESCO World Heritage',
    additionalCategories: ['Archaeological Sites', 'Ancient Learning', 'UNESCO World Heritage'],
    architecturalStyle: 'Rock-cut Chaityagrihas (prayer halls) and Viharas (monasteries)',
    historicalEra: '2nd Century BCE – 5th/6th Century CE',
    historicalBackground:
      'Excavated into the horseshoe-shaped volcanic basalt cliff of the Waghur River gorge, the 30 caves of Ajanta constitute one of the greatest achievements in ancient Asian rock-cut architecture. Commissioned during the Satavahana and Vakataka dynasties, Ajanta was a sanctuary for Buddhist monks, painters, sculptors, and traveling pilgrims.',
    architecturalHighlights: [
      'Cave 1 housing the iconic fresco of Bodhisattva Padmapani holding a blue lotus blossom',
      'Cave 26 containing the monumental 7-metre long reclining Buddha depicting Mahaparinirvana',
      'Stunning Chaitya arch façades admitting natural illumination into deep rock prayer halls',
      'Tempera mural techniques rendered on mud, cow-dung, and lime-plaster surfaces'
    ],
    interestingFact:
      'The vivid ultramarine blues gracing the robes of royalty and celestial beings were derived from genuine lapis lazuli imported across transcontinental trade routes from Badakhshan (modern Afghanistan).',
    unescoStatus: 'Inscribed as a UNESCO World Heritage Site in 1983',
    visitingEtiquette:
      'To protect the delicate ancient wall frescoes, flash photography is strictly prohibited inside the cave sanctuaries.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'The dramatic horseshoe cliff-face with carved entrances to the Ajanta Caves',
    caption: 'Basalt cliff sanctuary of Ajanta where ancient muralists brought stone to life'
  },
  {
    id: 'nalanda-mahavihara',
    name: 'Nalanda Mahavihara',
    subtitle: 'The Intellectual Lighthouse of the Ancient World',
    location: 'Nalanda, Rajgir',
    state: 'Bihar',
    coordinates: [25.1357, 85.4450],
    category: 'Ancient Learning',
    additionalCategories: ['Ancient Learning', 'Archaeological Sites', 'UNESCO World Heritage'],
    architecturalStyle: 'Classical Gupta & Pala brick monastic layouts with stupas and lecture courtyards',
    historicalEra: '5th Century CE – 12th Century CE (Gupta to Pala Dynasties)',
    historicalBackground:
      'Established in the 5th century CE under Kumaragupta I of the Gupta Empire, Nalanda flourished for over 700 years as the ancient world’s premier residential university. Welcoming scholars from China, Korea, Japan, Tibet, Mongolia, and Southeast Asia, it housed up to 10,000 students and 2,000 teachers in deep pursuit of philosophy, logic, medicine, astronomy, and grammar.',
    architecturalHighlights: [
      'Stupa Site 3 (Sariputta Stupa) with multiple architectural layers and sculpted Gupta niches',
      'Symmetrically aligned red-brick monasteries (Viharas) with central podiums and drainage channels',
      'Student residential cells equipped with stone study beds, lamp alcoves, and private meditation corners',
      'Remains of the legendary Dharma Gunj library complex (Ratnasagara, Ratnodadhi, Ratnaranjaka)'
    ],
    interestingFact:
      'When the 7th-century Chinese pilgrim Xuanzang (Hiuen Tsang) arrived at Nalanda, he noted that the entrance examination conducted by the gatekeeper scholar (Dwarapandita) was so challenging that only two or three out of ten applicants gained admission.',
    unescoStatus: 'Inscribed as a UNESCO World Heritage Site in 2016',
    visitingEtiquette:
      'The excavated site spans a wide promenade; visiting the neighboring Nalanda Archaeological Museum and Xuanzang Memorial Hall enriches the historical journey.',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Monumental brick stupa and monastery ruins of Nalanda under an expansive sky',
    caption: 'Ancient brick monasteries and the iconic Sariputta Stupa at Nalanda Mahavihara'
  }
];
