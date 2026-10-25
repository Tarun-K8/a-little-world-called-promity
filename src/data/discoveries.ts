import { DiscoveryFact } from '../types';

export const DISCOVERIES_DATA: DiscoveryFact[] = [
  {
    id: 'disc-universities',
    category: 'Universities',
    title: 'The Great Monastic Universities (Mahaviharas)',
    period: '5th Century BCE – 12th Century CE',
    badge: 'Ancient Pedagogy',
    iconName: 'GraduationCap',
    keyFinding:
      'Ancient India established the world’s earliest residential university network, integrating philosophy, astronomy, metallurgy, grammar, and medicine.',
    detailedContext:
      'Long before European medieval universities like Bologna or Oxford emerged, institutions such as Takshashila (Gandhara), Nalanda (Magadha), Vikramashila (Bihar), and Vallabhi (Saurashtra) functioned as vibrant international centres. Students studied rigorous debate (Vada-vidya), Hetuvidya (logic), and Chikitsavidya (medicine). Foreign scholars like Xuanzang and Yijing spent years transcribing Sanskrit manuscripts to carry back along the Silk Road.',
    archaeologicalSignificance:
      'Excavations at Nalanda and Vikramashila revealed systematic acoustic lecture courtyards, subterranean water systems, individual monk quarters with study niches, and bronze casting foundries.'
  },
  {
    id: 'disc-vastu-mandala',
    category: 'Architecture',
    title: 'Vastu Purusha Mandala: The Geometry of Sacred Space',
    period: 'Gupta & Post-Gupta Classical Treatises',
    badge: 'Architectural Philosophy',
    iconName: 'Compass',
    keyFinding:
      'Indian temple architecture is grounded in mathematical grid geometry known as the Vastu Purusha Mandala, aligning physical stone with cosmological order.',
    detailedContext:
      'Treatises like the Manasara, Mayamata, and Brihat Samhita detail how temples represent the universe in miniature. The Garbhagriha (womb chamber) sits at the energetic centre (Brahmasthana), designed to be small, dark, and unadorned so attention focuses inward. Above it rises the Shikhara or Vimana, a vertical axis mundi symbolizing the ascent from material reality to transcendent consciousness.',
    archaeologicalSignificance:
      'Ground plans of temples from Deogarh (5th c.) to Khajuraho and Thanjavur confirm strict adherence to 64-square (Manduka) or 81-square (Paramasaayika) proportional grids.'
  },
  {
    id: 'disc-excavations',
    category: 'Excavations',
    title: 'Stratigraphy & Pottery Sequences in Indian Archaeology',
    period: '2500 BCE – 300 BCE',
    badge: 'Field Archaeology',
    iconName: 'Pickaxe',
    keyFinding:
      'Archaeologists reconstruct ancient Indian chronological horizons using pottery sequences—from Ochre Coloured Pottery (OCP) to Painted Grey Ware (PGW) and Northern Black Polished Ware (NBPW).',
    detailedContext:
      'The pioneer Mortimer Wheeler and later Indian archaeologists like B.B. Lal, S.R. Rao, and Amalananda Ghosh established rigorous stratigraphic methods across the subcontinent. Northern Black Polished Ware (NBPW), famed for its mirror-like metallic luster, served as the ceramic hallmark of the Second Urbanization of the Gangetic plain during the era of Mahajanapadas and the Mauryas.',
    archaeologicalSignificance:
      'Recent scientific dates from Rakhigarhi (Haryana), Sinauli (UP), and Keezhadi (Tamil Nadu) are refining our understanding of early urbanization, metallurgy, and pan-Indian cultural exchanges.'
  },
  {
    id: 'disc-epigraphy',
    category: 'Epigraphy & Manuscripts',
    title: 'The Decipherment of Brahmi & Palm-Leaf Preservation',
    period: '3rd Century BCE onwards',
    badge: 'Epigraphy & Scripts',
    iconName: 'Scroll',
    keyFinding:
      'James Prinsep’s decipherment of the Ashokan Brahmi script in 1837 unlocked over a millennium of forgotten historical edicts across the subcontinent.',
    detailedContext:
      'Brahmi is the ancestral mother script to nearly all modern South Asian writing systems (Devanagari, Bengali, Tamil, Telugu, etc.) as well as Tibetan and Southeast Asian scripts. Before the widespread use of paper, knowledge was preserved on Bhojapatra (Himalayan birch bark) and Tadapatra (processed palm leaves), inscribed using a sharp iron stylus and inked with lampblack mixed with natural oils.',
    archaeologicalSignificance:
      'Rock Edicts and Pillar Edicts of Ashoka, carved from Shahbazgarhi to Brahmagiri, delivered moral messages in local Prakrits, establishing the first epigraphic timeline of sovereign governance.'
  },
  {
    id: 'disc-trade-routes',
    category: 'Trade Routes',
    title: 'Uttarapath, Dakshinapath & Maritime Monsoon Highways',
    period: '6th Century BCE – 14th Century CE',
    badge: 'Ancient Trade',
    iconName: 'Ship',
    keyFinding:
      'Ancient India was crisscrossed by continental highways and maritime routes powered by the seasonal rhythm of the Indian Ocean monsoon winds.',
    detailedContext:
      'The Uttarapath (Northern Route) linked Bengal and Taxila all the way to Central Asia and the Silk Route, while the Dakshinapath branched south from Varanasi and Ujjain across the Deccan to coastal ports like Sopara, Muziris, and Arikamedu. Indian merchants navigated monsoon currents (Hippalus wind system) to export black pepper ("black gold"), muslins, iron, and semi-precious beads to Rome and Alexandria.',
    archaeologicalSignificance:
      'Excavations at Muziris (Pattanam in Kerala) and Arikamedu (Puducherry) uncovered Roman amphorae, terra sigillata pottery, gold coins of Augustus and Tiberius, and Roman intaglio gems.'
  },
  {
    id: 'disc-preservation',
    category: 'Heritage Preservation',
    title: 'Scientific Conservation & Archaeological Chemistry',
    period: 'Contemporary Heritage Science',
    badge: 'Conservation',
    iconName: 'ShieldCheck',
    keyFinding:
      'Preserving ancient sandstone, basalt, and delicate frescoes requires a sophisticated synthesis of materials science, climate monitoring, and non-destructive testing.',
    detailedContext:
      'The Archaeological Survey of India (ASI) Science Branch employs ultrasonic pulse velocity tests, photogrammetry, and specialized poultice treatments to draw out damaging soluble salts from heritage masonry. At Ajanta, biocide treatments, microclimate humidity loggers, and fiber-optic illumination ensure that organic tempera pigments remain protected from microbial decay and ultraviolet degradation.',
    archaeologicalSignificance:
      '3D LiDAR scanning and photogrammetric digital twins now allow monument conservationists to monitor structural displacement at millimeter precision without touching delicate surfaces.'
  }
];
