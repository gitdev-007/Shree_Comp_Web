export const CATEGORIES = [
  {
    id: 'business-cards',
    name: 'Business Cards',
    icon: 'CreditCard',
    description: 'Leave an unforgettable impression with premium finishes, textures and custom shapes.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'marketing',
    name: 'Marketing Materials',
    icon: 'Layers',
    description: 'Flyers, brochures, menus & presentation folders designed to grow your business.',
    badge: 'High Value',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'signs-banners',
    name: 'Signs & Banners',
    icon: 'Flag',
    description: 'Roll-up standees, waterproof vinyl flex, acrylic glow boards and exhibition displays.',
    badge: 'Fast Dispatch',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'promotional-gifts',
    name: 'Promotional Gifts & Merch',
    icon: 'Gift',
    description: 'Custom ceramic mugs, corporate polo tees, engraved metal pens & customized keychains.',
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'stickers-packaging',
    name: 'Stickers & Packaging',
    icon: 'Tag',
    description: 'Waterproof die-cut stickers, product labels, courier boxes & custom rubber stamps.',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'it-services',
    name: 'Computer & IT Services',
    icon: 'Monitor',
    description: 'Laptop/Desktop repair, printer cartridge refilling, Xerox, thesis binding & software setup.',
    badge: 'Local Special',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80'
  }
];

export const PRODUCTS = [
  {
    id: 'standard-card',
    name: 'Standard Business Cards',
    category: 'business-cards',
    tagline: 'The essential card for every networking opportunity',
    rating: 4.9,
    reviewsCount: 382,
    startingPrice: 199,
    startingQty: 100,
    turnaround: '24-48 Hours',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    isCustomizable: true,
    badges: ['Top Seller', 'Value Pack'],
    features: [
      'Heavy 350 GSM Art Card paper stock',
      'Matte or Glossy laminate finish',
      'Standard 89mm x 51mm dimensions',
      'Crisp high-definition offset printing'
    ],
    paperOptions: [
      { id: 'matte-350', name: 'Premium Matte (350 GSM)', priceAdd: 0 },
      { id: 'gloss-350', name: 'High Gloss (350 GSM)', priceAdd: 50 },
      { id: 'velvet-400', name: 'Velvet Soft-Touch (400 GSM)', priceAdd: 120 }
    ],
    cornerOptions: [
      { id: 'standard', name: 'Standard 90° Square Corners', priceAdd: 0 },
      { id: 'rounded', name: 'Modern Rounded Corners (6mm)', priceAdd: 80 }
    ],
    quantityTiers: [
      { qty: 100, price: 199, originalPrice: 299, popular: false },
      { qty: 250, price: 449, originalPrice: 650, popular: true },
      { qty: 500, price: 799, originalPrice: 1200, popular: false },
      { qty: 1000, price: 1399, originalPrice: 2200, popular: false }
    ]
  },
  {
    id: 'gold-foil-card',
    name: 'Metallic Gold Foil Visiting Cards',
    category: 'business-cards',
    tagline: 'Elevate your brand with shimmering raised foil accents',
    rating: 5.0,
    reviewsCount: 154,
    startingPrice: 499,
    startingQty: 100,
    turnaround: '2-3 Days',
    image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80',
    isCustomizable: true,
    badges: ['Luxury Finish', 'Editor Choice'],
    features: [
      '400 GSM Ultra-thick luxury card stock',
      'Genuine metallic Gold or Silver hot foil stamping',
      'Velvety soft-touch protective coating',
      'Resistant to smudges, water droplets & scuffs'
    ],
    paperOptions: [
      { id: 'velvet-gold', name: 'Velvet Touch with Gold Foil', priceAdd: 0 },
      { id: 'velvet-silver', name: 'Velvet Touch with Silver Foil', priceAdd: 0 },
      { id: 'rose-gold', name: 'Midnight Black with Rose Gold', priceAdd: 80 }
    ],
    cornerOptions: [
      { id: 'standard', name: 'Square Corners', priceAdd: 0 },
      { id: 'rounded', name: 'Rounded Corners', priceAdd: 80 }
    ],
    quantityTiers: [
      { qty: 100, price: 499, originalPrice: 799, popular: false },
      { qty: 250, price: 999, originalPrice: 1599, popular: true },
      { qty: 500, price: 1799, originalPrice: 2899, popular: false }
    ]
  },
  {
    id: 'nfc-smart-card',
    name: 'NFC Smart Digital Business Card',
    category: 'business-cards',
    tagline: 'Tap to instantly share phone, socials, website & payment UPI',
    rating: 4.8,
    reviewsCount: 96,
    startingPrice: 599,
    startingQty: 1,
    turnaround: 'Same Day Ready',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    isCustomizable: true,
    badges: ['High Tech', 'Eco-Friendly'],
    features: [
      'Waterproof durable matte PVC card with embedded NTAG216 chip',
      'No app required - works with all iPhone & Android smartphones',
      'Dynamic profile: Update your contact info anytime for free',
      'Includes high-resolution laser engraved QR backup'
    ],
    quantityTiers: [
      { qty: 1, price: 599, originalPrice: 999, popular: true },
      { qty: 3, price: 1499, originalPrice: 2499, popular: false },
      { qty: 5, price: 2199, originalPrice: 3999, popular: false }
    ]
  },
  {
    id: 'business-flyers',
    name: 'Marketing Flyers & Pamphlets',
    category: 'marketing',
    tagline: 'High impact promotional flyers for door-to-door & retail promotions',
    rating: 4.9,
    reviewsCount: 245,
    startingPrice: 399,
    startingQty: 250,
    turnaround: '24 Hours',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    isCustomizable: true,
    badges: ['Best Value', 'Fast Turnaround'],
    features: [
      '130 GSM Gloss / 170 GSM Premium Art Paper',
      'Available in A4, A5, and Newspaper Insert sizes',
      'Single or double-sided vibrant full-color printing',
      'Sharp text reproduction down to 6pt fonts'
    ],
    paperOptions: [
      { id: 'gloss-130', name: '130 GSM Gloss Paper (Budget friendly)', priceAdd: 0 },
      { id: 'art-170', name: '170 GSM Premium Art Paper', priceAdd: 150 },
      { id: 'matte-250', name: '250 GSM Heavy Cardstock', priceAdd: 300 }
    ],
    quantityTiers: [
      { qty: 250, price: 399, originalPrice: 599, popular: false },
      { qty: 500, price: 699, originalPrice: 999, popular: true },
      { qty: 1000, price: 1199, originalPrice: 1799, popular: false },
      { qty: 2500, price: 2499, originalPrice: 3899, popular: false }
    ]
  },
  {
    id: 'folded-brochure',
    name: 'Tri-Fold & Bi-Fold Company Brochures',
    category: 'marketing',
    tagline: 'Organize your product catalogue & services into an executive brochure',
    rating: 4.7,
    reviewsCount: 188,
    startingPrice: 799,
    startingQty: 100,
    turnaround: '2-3 Days',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    isCustomizable: true,
    badges: ['Corporate Essential'],
    features: [
      '220 GSM or 300 GSM Heavy Art Paper',
      'Precision machine scored and creased folds (Zero cracking)',
      'Gloss / Matte protective lamination available',
      'Standard A4 Tri-Fold (6 panels) or A4 Bi-fold (4 panels)'
    ],
    quantityTiers: [
      { qty: 100, price: 799, originalPrice: 1199, popular: false },
      { qty: 250, price: 1499, originalPrice: 2200, popular: true },
      { qty: 500, price: 2499, originalPrice: 3900, popular: false }
    ]
  },
  {
    id: 'rollup-standee',
    name: 'Retractable Roll-Up Standee',
    category: 'signs-banners',
    tagline: 'Portable exhibition banner stand ready in 30 seconds',
    rating: 5.0,
    reviewsCount: 310,
    startingPrice: 899,
    startingQty: 1,
    turnaround: 'Same Day Dispatch',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=800&q=80',
    isCustomizable: true,
    badges: ['Event Favorite', 'Ready to Deploy'],
    features: [
      'Heavy-duty anodized aluminum base with stabilizing twist-out feet',
      'High-grade Star Flex banner material (Tear & curl resistant)',
      'High resolution 1440 DPI Japanese inkjet print',
      'Includes complimentary padded nylon travel carry bag'
    ],
    sizes: [
      { id: '2x5', name: '2 ft x 5 ft (Compact)', priceAdd: 0 },
      { id: '2.5x6', name: '2.5 ft x 6 ft (Standard Popular)', priceAdd: 200 },
      { id: '3x6', name: '3 ft x 6 ft (Large Expo)', priceAdd: 400 }
    ],
    quantityTiers: [
      { qty: 1, price: 899, originalPrice: 1299, popular: true },
      { qty: 2, price: 1699, originalPrice: 2499, popular: false },
      { qty: 5, price: 3999, originalPrice: 5999, popular: false }
    ]
  },
  {
    id: 'outdoor-vinyl-banner',
    name: 'Weatherproof Outdoor Vinyl Banner',
    category: 'signs-banners',
    tagline: 'Heavy-duty waterproof flex banner with brass grommets',
    rating: 4.8,
    reviewsCount: 142,
    startingPrice: 349,
    startingQty: 1,
    turnaround: '24 Hours',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    isCustomizable: true,
    badges: ['Outdoor Grade', 'UV Resistant'],
    features: [
      'Heavy 380 GSM frontlit vinyl banner media',
      'UV-resistant solvent inks that do not fade in harsh sunlight',
      'Reinforced welded hems and rust-free brass eyelets every 2 feet',
      'Custom sizes available up to 10 feet wide seamlessly'
    ],
    quantityTiers: [
      { qty: 1, price: 349, originalPrice: 499, popular: true },
      { qty: 2, price: 649, originalPrice: 950, popular: false },
      { qty: 4, price: 1199, originalPrice: 1800, popular: false }
    ]
  },
  {
    id: 'custom-ceramic-mug',
    name: 'Personalized Ceramic Coffee Mug',
    category: 'promotional-gifts',
    tagline: 'Custom photo or logo printed mugs for gifts and corporate branding',
    rating: 4.9,
    reviewsCount: 412,
    startingPrice: 179,
    startingQty: 1,
    turnaround: 'Same Day',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isCustomizable: true,
    badges: ['Gifting Favorite', 'Dishwasher Safe'],
    features: [
      'Grade-A 330ml glazed white ceramic mug',
      'Sublimation thermal print with vivid photographic colors',
      '100% Microwave and dishwasher safe',
      'Individual protective white gift box included'
    ],
    variants: [
      { id: 'white', name: 'Classic White Ceramic', priceAdd: 0 },
      { id: 'magic', name: 'Magic Heat-Sensitive Mug (Reveals with hot drink)', priceAdd: 120 },
      { id: 'dual-tone', name: 'Dual-Tone Inside Color Mug', priceAdd: 50 }
    ],
    quantityTiers: [
      { qty: 1, price: 179, originalPrice: 299, popular: false },
      { qty: 5, price: 799, originalPrice: 1350, popular: true },
      { qty: 20, price: 2799, originalPrice: 4800, popular: false },
      { qty: 50, price: 5999, originalPrice: 11000, popular: false }
    ]
  },
  {
    id: 'corporate-polo-tshirt',
    name: 'Custom Embroidered / Printed Polo T-Shirt',
    category: 'promotional-gifts',
    tagline: 'Premium 240 GSM breathable cotton polo for corporate teams',
    rating: 4.8,
    reviewsCount: 194,
    startingPrice: 399,
    startingQty: 1,
    turnaround: '2-4 Days',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    isCustomizable: true,
    badges: ['Premium Fabric', 'Team Wear'],
    features: [
      '100% Combed ring-spun cotton (240 GSM bio-washed)',
      'Durable ribbed collar and cuffs with 2-button placket',
      'High-definition DTF (Direct to film) print or precision embroidery',
      'Available in XS, S, M, L, XL, XXL, 3XL'
    ],
    quantityTiers: [
      { qty: 1, price: 399, originalPrice: 650, popular: false },
      { qty: 5, price: 1799, originalPrice: 2800, popular: true },
      { qty: 25, price: 7999, originalPrice: 13500, popular: false }
    ]
  },
  {
    id: 'custom-stickers-roll',
    name: 'Die-Cut Waterproof Vinyl Stickers',
    category: 'stickers-packaging',
    tagline: 'Custom shapes and sizes for product branding and packaging',
    rating: 4.9,
    reviewsCount: 228,
    startingPrice: 249,
    startingQty: 50,
    turnaround: '24-48 Hours',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    isCustomizable: true,
    badges: ['Waterproof', 'Custom Die-Cut'],
    features: [
      'Thick waterproof vinyl with strong permanent adhesive',
      'Precision laser contour cutting to any shape',
      'Laminated for scratch resistance and UV protection',
      'Easy peel backing'
    ],
    quantityTiers: [
      { qty: 50, price: 249, originalPrice: 399, popular: false },
      { qty: 100, price: 399, originalPrice: 650, popular: true },
      { qty: 250, price: 799, originalPrice: 1350, popular: false },
      { qty: 500, price: 1399, originalPrice: 2400, popular: false }
    ]
  },
  {
    id: 'laptop-desktop-repair',
    name: 'Laptop & Desktop Repair Service',
    category: 'it-services',
    tagline: 'Expert chip-level hardware repair, screen replacement & speed upgrades',
    rating: 5.0,
    reviewsCount: 520,
    startingPrice: 299,
    startingQty: 1,
    turnaround: 'Same Day Diagnostic',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    isCustomizable: false,
    badges: ['Free Diagnostics', 'Certified Techs'],
    features: [
      'Free hardware diagnostic inspection and cost estimate',
      'SSD installation & RAM upgrades (10x faster boot times)',
      'Broken laptop screen, keyboard & hinge replacement',
      'Thermal paste renewal, fan servicing & overheating fix',
      '30-Day service warranty on all hardware repairs'
    ],
    quantityTiers: [
      { qty: 1, price: 299, originalPrice: 499, popular: true }
    ]
  },
  {
    id: 'printer-cartridge-refill',
    name: 'Laser Printer Toner Cartridge Refill',
    category: 'it-services',
    tagline: 'Express 15-minute refill with dark, crisp high-yield toner powder',
    rating: 4.9,
    reviewsCount: 380,
    startingPrice: 199,
    startingQty: 1,
    turnaround: '15 Minutes While You Wait',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80',
    isCustomizable: false,
    badges: ['15-Min Express', 'Save 80%'],
    features: [
      'Supported models: HP, Canon, Brother, Samsung, Ricoh & Pantum',
      'Includes complete cartridge chamber cleaning and wiper blade inspection',
      'High-yield premium micro-refined Japanese toner powder',
      'Free test print copy provided before delivery'
    ],
    quantityTiers: [
      { qty: 1, price: 199, originalPrice: 350, popular: true },
      { qty: 3, price: 549, originalPrice: 900, popular: false }
    ]
  },
  {
    id: 'thesis-book-binding',
    name: 'Project & Thesis Hardbound Book Binding',
    category: 'it-services',
    tagline: 'University compliant velvet & rexine hard binding with golden embossing',
    rating: 4.9,
    reviewsCount: 290,
    startingPrice: 249,
    startingQty: 1,
    turnaround: 'Same Day Delivery',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    isCustomizable: false,
    badges: ['University Standard', 'Golden Embossed'],
    features: [
      'Deep blue, black, maroon, and green rexine / velvet cover options',
      'Hot foil gold lettering on front cover and spine',
      'High-speed 100 GSM color and B/W digital printing inside',
      'Official CD/DVD burning and pocket sleeve attachment included'
    ],
    quantityTiers: [
      { qty: 1, price: 249, originalPrice: 350, popular: false },
      { qty: 3, price: 699, originalPrice: 950, popular: true }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: 'Dr. Rajesh Sharma',
    role: 'Managing Director, Apex Clinic',
    city: 'Local Client',
    comment: 'Ordered 500 gold foil visiting cards and prescription pads for our hospital. The print quality matches international standards! Delivered in just 2 days.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Pooja Verma',
    role: 'Founder, Spice Garden Bistro',
    city: 'Restaurant Owner',
    comment: 'Shree Computers designed our restaurant menu cards and custom roll-up standee. The colors are so vibrant and water-resistant. Best printing service in town!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Amit Patel',
    role: 'Tech Lead, Innovate Systems',
    city: 'Corporate Client',
    comment: 'We got our company laptop SSD upgrades and corporate ID cards done with Shree. Super prompt, professional, and saved us thousands compared to OEM charges.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
];

export const PROMO_CODES = {
  'SHREE10': { discount: 0.10, description: '10% OFF on all print orders' },
  'FIRSTPRINT': { discount: 0.15, description: '15% OFF for new customers' },
  'FESTIVE50': { discount: 50, fixed: true, description: 'Flat ₹50 OFF on orders above ₹499' }
};
