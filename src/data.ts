import { Property, Service, AreaExpertise, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Luxury Home Buying',
    description: 'Bespoke representation for acquiring Gurgaon’s most exclusive villas, super-penthouses, and custom builder floors under strict privacy.',
    features: ['Off-market listing match', 'Comprehensive market pricing analysis', 'Private property tours', 'Contract negotiation & legal checks'],
    iconName: 'Home'
  },
  {
    id: 'srv-2',
    title: 'Property Selling & Marketing',
    description: 'High-impact strategic marketing crafted specifically for ultra-luxury residential properties to reach elite global and domestic buyers.',
    features: ['Cinematic property productions', 'Targeted ultra-HNW advertising', 'Exclusive private previews', 'Seamless sales lifecycle management'],
    iconName: 'TrendingUp'
  },
  {
    id: 'srv-3',
    title: 'Real Estate Investment Advisory',
    description: 'Expert, data-driven counsel to identify high-yield opportunities, pre-launches, commercial expansions, and high-capital-appreciation assets.',
    features: ['ROI & Feasibility projections', 'Pre-launch developer screening', 'Capital restructuring consultations', 'Portfolio diversification plans'],
    iconName: 'Briefcase'
  },
  {
    id: 'srv-4',
    title: 'Rental & Leasing Solutions',
    description: 'Curated corporate leasing and short/long-term high-end residential leasing services for diplomats, executives, and luxury clients.',
    features: ['Corporate tenant matching', 'Sovereign contract terms vetting', 'Comprehensive move-in auditing', 'Hassle-free renewing agreements'],
    iconName: 'ShieldCheck'
  },
  {
    id: 'srv-5',
    title: 'Site Visits & Elite Consultation',
    description: 'Specially planned, structured property inspections and custom-crafted investment advisory meetings in private boardroom lounges.',
    features: ['Curated multi-property private transport', 'Comparative neighborhood reports', 'Direct architect/builder interactions', 'Post-purchase custom interior layout advisory'],
    iconName: 'Compass'
  }
];

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    name: 'The Crown Jewel Penthouse',
    location: 'Golf Course Road, Sector 54, Gurgaon',
    price: '₹22.5 Cr',
    beds: 5,
    baths: 6,
    area: '7,800 Sq.Ft.',
    type: 'Penthouse',
    description: 'An architectural marvel offering double-height soaring ceilings, an infinity-edge wellness pool, a private temperature-controlled elevator lounge, and unobstructed panoramic views of the Aravalli range and city skyline.',
    image: 'https://res.cloudinary.com/dr5obadvt/image/upload/v1780235352/pexels-photo-4174975_gbb9bu.jpg',
    status: 'Exclusive',
    tags: ['Private Pool', 'Double Height Ceilings', 'Off-Market', 'Chef Kitchen']
  },
  {
    id: 'prop-2',
    name: 'The Obsidian Signature Villa',
    location: 'DLF Phase 2, Gurgaon',
    price: '₹16.8 Cr',
    beds: 4,
    baths: 5,
    area: '6,200 Sq.Ft.',
    type: 'Villa',
    description: 'Completed in striking warm woods, polished basalt floors, and towering sheets of low-iron structural glass. Features a sun-drenched central atrium garden, soundproof custom home theater, and full automated home controls.',
    image: 'https://res.cloudinary.com/dr5obadvt/image/upload/v1780235411/pexels-photo-1498792_ufzpay.jpg',
    status: 'Signature Estate',
    tags: ['Automated Home', 'Sleek Atrium', 'Lush Gardens', 'Gurgaon Elite']
  },
  {
    id: 'prop-3',
    name: 'High-Rise Sky Mansion',
    location: 'Golf Course Extension Road, Sector 59, Gurgaon',
    price: '₹12.4 Cr',
    beds: 4,
    baths: 5,
    area: '5,400 Sq.Ft.',
    type: 'Apartment',
    description: 'A spectacular sky mansion featuring custom-designed Italian marble corridors, specialized integrated air disinfection systems, sweeping floor-to-ceiling glass screens, and access to an exclusive 5-star private residents club.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    status: 'New Launch',
    tags: ['Italian Marble', 'Residents Club', 'High Floor', 'Sky Lounge']
  },
  {
    id: 'prop-4',
    name: 'Bespoke Triplex Builder Floor',
    location: 'DLF Phase 1, Gurgaon',
    price: '₹9.75 Cr',
    beds: 4,
    baths: 4,
    area: '4,650 Sq.Ft.',
    type: 'Builder Floor',
    description: 'Unmatched private floor living with a dedicated stilt parking domain, autonomous private elevator access, structured wrap-around timber decks, soundproofing between living tiers, and a customized terrace cocktail bar.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    status: 'Private Treaty',
    tags: ['Private Elevator', 'Cocktail Terrace', 'Quiet Lane', 'Bespoke Woodwork']
  },
  {
    id: 'prop-5',
    name: 'The Emerald Horizon Estate',
    location: 'Sohna Road, Gurgaon',
    price: '₹14.2 Cr',
    beds: 6,
    baths: 7,
    area: '9,200 Sq.Ft.',
    type: 'Villa',
    description: 'Nestled within Gurgaon’s premier gated community, this expansive villa balances neoclassical symmetry with stunning modern comforts, including a glass pavilion lounge, massive dual master suites, and serene security fencing.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    status: 'Investment Gem',
    tags: ['Gated Sanctuary', 'Double Master', 'Glass Pavilion', 'Massive Estate']
  },
  {
    id: 'prop-6',
    name: 'Modernist Sanctuary Condo',
    location: 'South City 1, Sector 40, Gurgaon',
    price: '₹7.9 Cr',
    beds: 3,
    baths: 4,
    area: '3,800 Sq.Ft.',
    type: 'Apartment',
    description: 'An elegantly scaled light-flooded sanctuary. Meticulously updated with smart climate zones, fully equipped Gaggenau appliances, custom textured clay plaster walls, and a beautiful Japanese-inspired terrace balcony garden.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    status: 'New Launch',
    tags: ['Terrace Garden', 'Gaggenau App', 'Clay Plaster', 'Smart Climate']
  }
];

export const AREAS: AreaExpertise[] = [
  {
    id: 'area-1',
    name: 'Golf Course Road',
    tagline: 'The Pinnacle of Gurgaon Luxury',
    description: 'Often referred to as the Billionaire’s Row of India, Golf Course Road is home to DLF’s benchmark super-luxury residential towers. Offering unmatched physical infrastructure, premier lifestyle hubs, and direct rapid metro connectivity, it is the most premium address in the National Capital Region.',
    propertiesRange: '₹10 Cr – ₹60 Cr',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    keyHighlights: ['Super-Exclusive Clubs (The Camellias Club)', 'Top-tier 3-Layer Security Networks', 'Close proximity to Cyber City and Rapid Metro', 'Zero power-cut luxury zones']
  },
  {
    id: 'area-2',
    name: 'DLF Phase 1–5',
    tagline: 'Legacy Luxury and Peaceful Avenues',
    description: 'A timeless favorite among Gurgaon’s multi-generational high-society. Characterized by wide, leafy lanes, tranquil public parks, massive independent plots, custom bespoke builder floors, and excellent walkability to upscale markets like Horizon Center and Galleria.',
    propertiesRange: '₹6 Cr – ₹25 Cr',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    keyHighlights: ['Galleria & Horizon Center dining hubs', 'Low-rise private building configurations', 'Majestic tree lines & premium walking trails', 'Instant accesses to Faridabad Expressway']
  },
  {
    id: 'area-3',
    name: 'Sector 56–79',
    tagline: 'Modern Expansion and High Yields',
    description: 'The futuristic growth corridor of Gurgaon. Spanning Golf Course Extension, Southern Peripheral Road (SPR), and New Gurgaon, this belt features soaring high-end residences, premium high-rise layouts, and outstanding commercial connectivity to national highways.',
    propertiesRange: '₹3 Cr – ₹15 Cr',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    keyHighlights: ['Direct SPR and Dwarka Expressway access', 'Futuristic architectural layouts', 'High rental demand & corporate leases', 'Premium educational institutions nearby']
  },
  {
    id: 'area-4',
    name: 'South City & Central Gurgaon',
    tagline: 'Established Comfort and Connectivity',
    description: 'Prestigious, fully operational, and beautifully laid-out residential hubs like South City 1 & 2. Ideal for families looking for serene independent houses or upscale builder floors within minutes of signature entertainment hubs, malls, and super-specialty hospitals.',
    propertiesRange: '₹4.5 Cr – ₹14 Cr',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    keyHighlights: ['Established elite neighboring communities', 'Walking distance to signature hospitals', 'Exceptional connectivity to NH-48 Expressway', 'Quiet, fully secured private service lanes']
  },
  {
    id: 'area-5',
    name: 'Sohna Road Corridor',
    tagline: 'Spacious Estates and Scenic Backdrops',
    description: 'Perfectly suited for luxury seekers looking for expansive gated villas, integrated custom cityscapes, and a relaxing setting away from the commercial core while remaining perfectly connected via the elevated Sohna Highway expressway.',
    propertiesRange: '₹3.5 Cr – ₹18 Cr',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    keyHighlights: ['Stunning views of the Aravalli peaks', 'Large-scale gated community advantages', 'Elevated highway high-speed corridors', 'Ideal for sprawling independent luxury living']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikramjit Singh',
    role: 'Managing Director, Horizon VC',
    location: 'Gurgaon Golf Course Road',
    rating: 5,
    reviewText: 'Working with Akhilesh to procure our penthouse was an effortless, seamless luxury service. He obtained access to an unlisted property on Golf Course Road, handled the strict negotiation beautifully, and respected our absolute privacy throughout. A true gentleman.',
    propertyType: 'Super-Penthouse Client'
  },
  {
    id: 'test-2',
    name: 'Dr. Reena Thadani',
    role: 'Senior Consultant Cardiologist',
    location: 'DLF Phase 1',
    rating: 5,
    reviewText: 'After speaking to multiple standard agents whose priority was quick pushy closures, Akhilesh stood out immediately. His knowledge of builder floor structural specifications, zoning laws, and DLF titles was flawless. Truly the premium market authority.',
    propertyType: 'Bespoke Builder Floor Owner'
  },
  {
    id: 'test-3',
    name: 'Rajesh & Meera Singhal',
    role: 'NRI Tech Founders',
    location: 'San Francisco & DLF Phase 2',
    rating: 5,
    reviewText: 'As NRI investors, we needed extreme transparency and highly structured remote coordinates. Akhilesh did exhaustive virtual high-definition walkthroughs, detailed capital gain reports, and guided us into a magnificent investment property with high appreciation.',
    propertyType: 'Luxury Villa Investor'
  },
  {
    id: 'test-4',
    name: 'Amritpal Singh Ahluwalia',
    role: 'Senior Director, Global Automotives',
    location: 'Sector 65, Gurgaon',
    rating: 5,
    reviewText: 'Akhilesh represents the modern era of real estate advisories. He doesn’t "list" properties; he curates solutions based on micro-market analytics. His insights saved us Cr in our relocation. Absolute highest level of professional guidance.',
    propertyType: 'Corporate Relocation Client'
  }
];

// Seed initial inquiries in localStorage if not exist to demonstrate working dashboard and data capability
export const SEED_INQUIRIES = [
  {
    id: 'inq-seed-1',
    name: 'Sanjeev Khanna',
    phone: '+91 98110 54321',
    email: 'khanna.s@khannaindustries.com',
    budgetRange: '₹15 Cr - ₹25 Cr',
    propertyRequirement: 'Looking for a 4 BHK high-floor penthouse on Golf Course Road with 3 reserved parking spaces and DLF view.',
    isContacted: true,
    createdAt: new Date(Date.now() - 48 * 3600 * 1000).toISOString(),
    notes: 'Called. Desires unlisted properties; will arrange a private boardroom preview of The Crown Jewel Penthouse.'
  },
  {
    id: 'inq-seed-2',
    name: 'Meenakshi Iyer',
    phone: '+91 99580 87654',
    email: 'm.iyer@architecturalncr.in',
    budgetRange: '₹8 Cr - ₹12 Cr',
    propertyRequirement: 'Bespoke independent builder floor in DLF Phase 1 or 2, modern minimalist wood/basalt design preferred.',
    isContacted: false,
    createdAt: new Date(Date.now() - 6 * 3600 * 1000).toISOString(),
    notes: 'Prefers WhatsApp communications initially.'
  }
];
