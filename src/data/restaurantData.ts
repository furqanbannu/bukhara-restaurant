export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: 'traditional' | 'bbq' | 'karahi' | 'rice' | 'dessert' | 'beverage';
  categoryLabel: string;
  description: string;
  price: string;
  ingredients: string[];
  spiceLevel: 'Mild' | 'Medium' | 'Rich & Spicy' | 'None';
  cookingMethod: string;
  isSignature?: boolean;
  isBuffetHighlight?: boolean;
  image: string;
  fallbackGradient: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: string;
  text: string;
  highlight?: string;
  visitType: string;
}

export const RESTAURANT_INFO = {
  name: "Bukhara",
  brand: "BUKHARA",
  subheadline: "A timeless expression of Pakistan's rich culinary heritage.",
  description: "Experience authentic Pakistani cuisine, live BBQ and traditional flavours in an atmosphere designed for unforgettable evenings.",
  location: "PC Bhurban, Hotel Road, Bhurban, Pakistan",
  fullAddress: "PC Bhurban Toll Tax, Hotel Road, Bhurban, 46000, Pakistan",
  phone: "+92 51 111 505 505",
  directBookingPhone: "+92 51 335 5500",
  whatsapp: "+923001115505",
  email: "bukhara.bhurban@pchotels.com",
  category: "Pakistani Fine Dining & Live BBQ",
  priceRange: "Rs 4,000–5,000 per person",
  dinnerBuffetPrice: "Rs 4,850 + tax",
  rating: "3.8",
  reviewCount: 596,
  elevation: "2,084 m (6,837 ft)",
  timings: {
    dinner: "7:00 PM – 11:30 PM daily",
    liveBBQ: "7:30 PM – 11:00 PM (Outdoor Terrace)",
    kahwaLounge: "6:00 PM – 12:00 AM midnight"
  },
  dressCode: "Smart Casual / Traditional Elegance",
  coordinates: {
    lat: 33.9556,
    lng: 73.4528
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'mutton-paya',
    name: 'Mutton Paya',
    urduName: 'مٹن پائے',
    category: 'traditional',
    categoryLabel: 'Traditional Heritage',
    description: 'Slow-simmered overnight over gentle embers with caramelized marrow bone broth, fragrant cardamom, clove, and fresh ginger julienne.',
    price: 'Rs 2,850',
    ingredients: ['Tender Goat Trotters', 'Bone Marrow Broth', 'Desi Ghee', 'Saffron', 'Fresh Ginger', 'Garam Masala'],
    spiceLevel: 'Rich & Spicy',
    cookingMethod: 'Slow 12-hour simmer in sealed clay handi',
    isSignature: true,
    isBuffetHighlight: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-amber-950 to-stone-900'
  },
  {
    id: 'malai-boti',
    name: 'Malai Boti',
    urduName: 'ملائی بوٹی',
    category: 'bbq',
    categoryLabel: 'Live BBQ Sigri',
    description: 'Tender chicken supremes steeped in clotted cream, white cumin, crushed green chilies, and royal white pepper, charred over fragrant deodar charcoal.',
    price: 'Rs 1,950',
    ingredients: ['Boneless Chicken Breast', 'Fresh Clotted Malai', 'Melted Butter', 'White Cumin', 'Green Cardamom', 'Lemon Juice'],
    spiceLevel: 'Mild',
    cookingMethod: 'Skewered and grilled over live mountain charcoal',
    isSignature: true,
    isBuffetHighlight: true,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-orange-950 to-stone-900'
  },
  {
    id: 'chicken-white-karahi',
    name: 'Chicken White Karahi',
    urduName: 'چکن وائٹ کڑاہی',
    category: 'karahi',
    categoryLabel: 'Karahi & Handi',
    description: 'Fresh chicken seared in a cast iron wok with creamy thickened curd, freshly crushed Tellicherry black pepper, ginger batons, and raw green chilies.',
    price: 'Rs 2,450',
    ingredients: ['Country Chicken', 'Hung Yogurt', 'Desi Butter', 'Cracked Black Pepper', 'Ginger Slivers', 'Green Chilies'],
    spiceLevel: 'Medium',
    cookingMethod: 'High-heat wok reduction without tomatoes',
    isSignature: true,
    isBuffetHighlight: true,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-amber-900 to-stone-900'
  },
  {
    id: 'beef-pulao',
    name: 'Bannu Beef Yakhni Pulao',
    urduName: 'بنوں بیف پلاؤ',
    category: 'rice',
    categoryLabel: 'Royal Rice & Biryani',
    description: 'Long-grain aged basmati rice infused with golden bone marrow stock, whole coriander seeds, tender fall-apart beef shanks, and fried golden shallots.',
    price: 'Rs 2,350',
    ingredients: ['Prime Beef Shank', 'Aged Basmati Rice', 'Yakhni Broth', 'Whole Spices', 'Fried Onions', 'Cumin'],
    spiceLevel: 'Medium',
    cookingMethod: 'Sealed dum steam with heavy dough rim',
    isSignature: true,
    isBuffetHighlight: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-yellow-950 to-stone-900'
  },
  {
    id: 'chicken-jalfrezi',
    name: 'Chicken Jalfrezi',
    urduName: 'چکن جلفریزی',
    category: 'traditional',
    categoryLabel: 'Traditional Heritage',
    description: 'Tender pulled chicken braised in a velvety roasted tomato-onion gravy, tossed with crisp bell peppers, sweet shallots, and fragrant whole cumin.',
    price: 'Rs 2,150',
    ingredients: ['Boneless Chicken', 'Bell Peppers', 'Vine Tomatoes', 'Caramelized Onions', 'Kasuri Methi', 'Desi Ghee'],
    spiceLevel: 'Medium',
    cookingMethod: 'Wok sautéed with crisp vegetables',
    isSignature: false,
    isBuffetHighlight: true,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-red-950 to-stone-900'
  },
  {
    id: 'palak-gosht',
    name: 'Palak Gosht',
    urduName: 'پالک گوشت',
    category: 'traditional',
    categoryLabel: 'Traditional Heritage',
    description: 'Farm-picked spinach leaves hand-pounded and slowly simmered with succulent baby mutton, finished with roasted garlic, fenugreek, and brown butter.',
    price: 'Rs 2,750',
    ingredients: ['Baby Goat Mutton', 'Fresh Highland Spinach', 'Browned Garlic', 'Fenugreek Leaves', 'Desi Ghee', 'Dry Red Chilies'],
    spiceLevel: 'Medium',
    cookingMethod: 'Slow pan braise until oil separates naturally',
    isSignature: true,
    isBuffetHighlight: true,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-emerald-950 to-stone-900'
  },
  {
    id: 'mutton-seekh-kebab',
    name: 'Royal Mutton Seekh Kebab',
    urduName: 'مٹن سیخ کباب',
    category: 'bbq',
    categoryLabel: 'Live BBQ Sigri',
    description: 'Finely minced hill-country lamb blended with crushed coriander seeds, pomegranate arils, mint leaves, and roasted cumin, grilled on wide iron skewers.',
    price: 'Rs 2,250',
    ingredients: ['Double Minced Mutton', 'Fat Lardo', 'Anardana', 'Green Coriander', 'Mint', 'Kebab Spices'],
    spiceLevel: 'Rich & Spicy',
    cookingMethod: 'Live open charcoal embers on outdoor Sigri',
    isSignature: true,
    isBuffetHighlight: true,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-stone-900 to-amber-950'
  },
  {
    id: 'live-jalebi',
    name: 'Crisp Live Desi Ghee Jalebi',
    urduName: 'تازہ گرم جلیبی',
    category: 'dessert',
    categoryLabel: 'Royal Desserts',
    description: 'Hand-piped live into simmering pure butterfat desi ghee right before your eyes, steeped in warm saffron and cardamom-scented crystalline syrup.',
    price: 'Rs 850',
    ingredients: ['Fermented Wheat Flour', 'Pure Desi Ghee', 'Kashmir Saffron', 'Green Cardamom', 'Pistachio Crumbs'],
    spiceLevel: 'None',
    cookingMethod: 'Fried live in shallow brass kadai on the terrace',
    isSignature: true,
    isBuffetHighlight: true,
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14d48?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-amber-800 to-yellow-950'
  },
  {
    id: 'shahi-gulab-jamun',
    name: 'Warm Shahi Gulab Jamun',
    urduName: 'شاہی گلاب جامن',
    category: 'dessert',
    categoryLabel: 'Royal Desserts',
    description: 'Silken dumplings of reduced mountain milk mawa, gently fried to deep bronze and soaked in warm kewra and rose water syrup with edible silver vark.',
    price: 'Rs 950',
    ingredients: ['Fresh Khoya Mawa', 'Green Cardamom', 'Kewra Water', 'Rose Petals', 'Silver Vark', 'Pistachios'],
    spiceLevel: 'None',
    cookingMethod: 'Slow deep soak at 65°C',
    isSignature: true,
    isBuffetHighlight: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-amber-950 to-orange-950'
  },
  {
    id: 'kashmiri-kahwa',
    name: 'Kashmiri Pink Tea & Kahwa',
    urduName: 'کشمیری گلابی چائے اور قہوہ',
    category: 'beverage',
    categoryLabel: 'Tea & Kahwa',
    description: 'Authentic noon chai whisked to royal blush pink with crushed green cardamoms, cinnamon bark, sea salt, clotted cream, and crushed almonds.',
    price: 'Rs 650',
    ingredients: ['Special Kashmiri Green Leaves', 'Fresh Milk & Malai', 'Crushed Pistachios', 'Toasted Almonds', 'Green Cardamom'],
    spiceLevel: 'None',
    cookingMethod: 'Aetated bronze samovar decoction',
    isSignature: true,
    isBuffetHighlight: true,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    fallbackGradient: 'from-rose-950 to-stone-900'
  }
];

export const SIGNATURE_EXPERIENCES = [
  {
    id: 'live-bbq',
    title: 'Live Sigri BBQ',
    tagline: 'Smoky mountain charcoal mastery',
    description: 'Watch traditional skewers of Malai Boti, Lamb Chops, and Seekh Kebabs sizzle over fragrant deodar embers on our open-air terrace overlooking the pine valley.',
    features: ['Deodar mountain wood charcoal', 'Secret 24-hour marinade blends', 'Open flame live cooking station', 'Freshly tossed mint raita & pickled onions'],
    badge: 'Terrace Exclusive'
  },
  {
    id: 'traditional-desserts',
    title: 'Live Jalebi & Gulab Jamun',
    tagline: 'Sweet traditions spun before your eyes',
    description: 'Nothing compares to fresh jalebi swirled live into bubbling pure desi ghee on the crisp Bhurban evening, paired with melt-in-the-mouth warm cardamom gulab jamun.',
    features: ['100% pure desi ghee preparation', 'Cardamom & saffron infused syrup', 'Handcrafted khoya mawa dumplings', 'Warm seasonal accompaniments'],
    badge: 'Guest Favorite'
  },
  {
    id: 'authentic-cuisine',
    title: 'Authentic Heritage Cuisine',
    tagline: 'Time-honoured recipes of Punjab & Frontier',
    description: 'From 12-hour slow simmered Mutton Paya and fragrant Bannu Beef Pulao to cast-iron Chicken White Karahi, each preparation honors centuries of culinary prestige.',
    features: ['Slow clay-pot handi dum cooking', 'Uncompromised premium halal meats', 'Stone-ground whole spice blends', 'Artisanal tandoor breads & sheermal'],
    badge: 'Master Chef Selection'
  },
  {
    id: 'mountain-ambience',
    title: 'Bhurban Mountain Ambiance',
    tagline: '2,000 meters above the ordinary',
    description: 'Perched in the tranquil hills of Pearl Continental Bhurban, surrounded by towering pine trees, cool mist, soft instrumental classical sitar, and brass lantern glow.',
    features: ['Panoramic Murree hills mountain views', 'Outdoor heated terrace with fire pits', 'Intimate indoor heritage salon', 'Unmatched five-star hospitality'],
    badge: 'PC Bhurban Setting'
  }
];

export const ARCHITECTURE_ELEMENTS = [
  {
    title: 'Mughal & Gandhara Arches',
    description: 'Graceful cusped arches frame panoramic views of the whispering pine valleys, echoing centuries of royal architectural restraint.',
    detail: 'Carved with geometric precision and framed with subtle indirect warm illumination.'
  },
  {
    title: 'Handcrafted Deodar Wood',
    description: 'Solid indigenous cedar and walnut timbers carved by northern craftsmen bring natural warmth and organic texture to every dining alcove.',
    detail: 'Matte beeswax finish with traditional relief rosettes.'
  },
  {
    title: 'Murree Sandstone & River Rock',
    description: 'Locally quarried highland stone anchors the hearth and exterior BBQ pavilions, establishing a raw mountain character.',
    detail: 'Hand-chiseled masonry retaining evening hearth heat.'
  },
  {
    title: 'Hand-Beaten Brass & Copper',
    description: 'Lamps, samovars, handis, and serving vessels beaten by traditional metal artisans reflect soft golden candlelight across every table.',
    detail: 'Authentic Patiala and Peshawar artisan metalwork.'
  },
  {
    title: 'Loom-Woven Jali Geometry',
    description: 'Subtle geometric screens filter the evening sunset, casting intricate shadow play without interrupting mountain vistas.',
    detail: 'Traditional wooden mashrabiya panels for private family dining.'
  },
  {
    title: 'Outdoor Heated Terraces',
    description: 'Perched on the cliff edge with brass brazier fire pits, wool pashmina wraps, and heated pergolas for starlit mountain dining.',
    detail: 'Comfortable year-round dining at 2,000m altitude.'
  }
];

export const GALLERY_IMAGES = [
  {
    id: 'gal-1',
    title: 'Luxury Architectural Dining Hall',
    category: 'Architecture',
    caption: 'Cusped Mughal arches, carved deodar ceiling beams, and intimate candlelight.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-2',
    title: 'Live Sigri BBQ Station at Dusk',
    category: 'BBQ',
    caption: 'Master grill chefs preparing skewered kebabs over glowing deodar mountain charcoal.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'gal-3',
    title: 'Cast-Iron White Karahi & Naan',
    category: 'Food',
    caption: 'Simmering wok tossed chicken in thick mountain cream, green chilies, and fresh ginger julienne.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-4',
    title: 'Royal Table Setting & Brassware',
    category: 'Interior',
    caption: 'Elegantly appointed dining tables set with hand-beaten brassware, fine linen, and beeswax candles.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'gal-5',
    title: 'Heated Cliffside Terrace at Twilight',
    category: 'Outdoor Atmosphere',
    caption: 'Starlit dining with brass fire braziers and crisp Himalayan mountain breeze.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'gal-6',
    title: 'Live Desi Ghee Jalebi Station',
    category: 'Food',
    caption: 'Crisp coils of jalebi swirling in golden desi ghee at the outdoor live sweet station.',
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14d48?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-7',
    title: 'Hand-Carved Timber Jali Screens',
    category: 'Architecture',
    caption: 'Traditional pierced wooden mashrabiya lattice work filtering the evening mountain light.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[1/1]'
  },
  {
    id: 'gal-8',
    title: 'Pine Forest Valley Panorama',
    category: 'Outdoor Atmosphere',
    caption: 'Misty evening descending across the ancient deodar cedar valleys of Pearl Continental Bhurban.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    aspect: 'aspect-[16/9]'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'NASTY FRXQ',
    rating: 5,
    date: 'Verified Google Review',
    source: 'Google Maps Review',
    text: 'Excellent. Desi food top notch. Good selection of items in the dinner buffet. Taste is great. Expensive but worthy.',
    highlight: 'Desi food top notch · Expensive but worthy',
    visitType: 'Dinner Buffet'
  },
  {
    id: 'rev-2',
    author: 'Mohsin Ali Syed',
    rating: 5,
    date: 'Verified Google Review',
    source: 'Google Maps Review',
    text: 'The food was absolutely delicious. What really stood out were the live BBQ station outdoor with live jalebi and gulab jamun.',
    highlight: 'Live BBQ station outdoor with live jalebi and gulab jamun',
    visitType: 'Family Gathering'
  },
  {
    id: 'rev-3',
    author: 'Dr. Tariq Mehmood',
    rating: 5,
    date: 'Recent Guest Review',
    source: 'PC Bhurban Resident',
    text: 'Bukhara is the crown jewel of dining at PC Bhurban. The Mutton Paya and White Karahi remind you of ancient Lahore and Peshawar royalty. Sitting on the terrace with warm kahwa is unforgettable.',
    highlight: 'Crown jewel of dining at PC Bhurban',
    visitType: 'Fine Dining'
  },
  {
    id: 'rev-4',
    author: 'Zainab & Hammad Farooqi',
    rating: 5,
    date: 'Anniversary Dinner',
    source: 'Verified Diner',
    text: 'We reserved an outdoor table with the fire pit. The staff treated us like royalty. Tender malai boti melting in your mouth while looking out over the misty Bhurban valley lights.',
    highlight: 'Tender malai boti · Misty valley lights',
    visitType: 'Couples Dinner'
  }
];

export interface SeasonalSpecial {
  id: string;
  name: string;
  urduName: string;
  seasonLabel: string;
  chefNote: string;
  description: string;
  price: string;
  preparationTime: string;
  availability: string;
  image: string;
  pairing: string;
  highlights: string[];
}

export const SEASONAL_SPECIALS: SeasonalSpecial[] = [
  {
    id: 'balochi-sajji',
    name: 'Whole Hill-Lamb Balochi Sajji',
    urduName: 'بلوچی سجی و پتھر کی روٹی',
    seasonLabel: 'Autumn / Winter Fire Pit Special',
    chefNote: "Slow-roasted vertically around a ring of mountain wood coals for four hours to achieve crystalline skin and succulent, melt-in-the-mouth tenderness.",
    description: 'Whole milk-fed hill lamb rubbed with Himalayan pink salt, crushed wild pomegranate, and ajwain, cooked live beside the terrace fire pits. Served with traditional hearth-baked Kaak bread and fresh mint chutney.',
    price: 'Rs 5,450',
    preparationTime: '4 Hours Slow Roast',
    availability: 'Limited to 8 portions nightly · Advance Reservation Advised',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    pairing: 'Peshawari Green Kahwa with Cardamom',
    highlights: ['Whole milk-fed mountain lamb', 'Deodar fire pit roasting', 'Traditional stone Kaak bread', 'Wild pomegranate reduction']
  },
  {
    id: 'kashmiri-harissa',
    name: 'Royal Kashmiri Mutton Harissa',
    urduName: 'شاہی کشمیری ہریسہ',
    seasonLabel: 'Mountain Hearth Winter Selection',
    chefNote: "An ancient dawn recipe of the Kashmir valley, continuously pounded with wooden ladles until meat, grain, and spiced butter become one silken emulsion.",
    description: 'Baby goat mutton slow-cooked for 14 hours with mountain grain, saffron stamens, cinnamon bark, and pure desi ghee. Finished tableside with crackling brown butter and miniature hand-rolled kababs.',
    price: 'Rs 3,250',
    preparationTime: '14-Hour Overnight Emulsion',
    availability: 'Dinner Service Exclusive · Prepared Fresh Daily',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=1200&q=80',
    pairing: 'Freshly Baked Tandoori Sheermal',
    highlights: ['14-hour hand-pounded baby mutton', 'Kashmir saffron infusion', 'Tableside sizzling ghee pour', 'Crisp shallot crumble']
  },
  {
    id: 'shinwari-chops',
    name: 'Shinwari Charcoal Lamb Ribs',
    urduName: 'شنواری کوئلہ چانپ',
    seasonLabel: 'Frontier Ember Special',
    chefNote: "No heavy masalas—only the natural sweetness of premium mountain lamb, coarse rock salt, and rendering animal fat over white-hot embers.",
    description: 'Prime cut lamb chops from the high pastures, simply seasoned with salt and animal fat, seared directly on glowing charcoal iron grates. Served with char-blistered mountain garlic heads and vine tomatoes.',
    price: 'Rs 3,850',
    preparationTime: 'High-Heat Live Charcoal Sear',
    availability: 'Available Daily at Live BBQ Station',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    pairing: 'Roghani Sesame Naan & Mint Raita',
    highlights: ['Pasture-raised hill lamb chops', 'Rock salt & fat glaze only', 'Charred whole mountain garlic', 'Smoky frontier charcoal aroma']
  },
  {
    id: 'chilgoza-halwa',
    name: 'Wild Murree Chilgoza & Saffron Halwa',
    urduName: 'چلغوزہ زعفرانی حلوہ',
    seasonLabel: 'Highland Confectionery Special',
    chefNote: "Bhurban pine forests are home to rare Chilgoza (pine nuts). We hand-grind them into rich paste, roasted slowly in mountain churned butter.",
    description: 'Locally foraged Murree pine nuts (Chilgoza) and coarse semolina simmered in pure butterfat desi ghee, whole green cardamom, and Kashmir saffron milk, garnished with edible silver vark and whole toasted nuts.',
    price: 'Rs 1,650',
    preparationTime: 'Slow Brass Pan Roast',
    availability: 'Seasonal Winter Batch · Served Warm',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    pairing: 'Noon Chai (Pink Kashmiri Salt Tea)',
    highlights: ['Wild-foraged Murree pine nuts', 'Pure clarified desi ghee', 'Kewra & silver vark finish', 'Cardamom infused warmth']
  }
];

export const FAQS = [
  {
    question: "What are the dinner buffet timings and price?",
    answer: "Dinner service commences at 7:00 PM and runs until 11:30 PM daily. The grand dinner buffet is priced between Rs 4,000–5,000 per person (Rs 4,850 + applicable taxes), covering all live BBQ stations, traditional curries, paya, pulao, fresh salads, and live hot desserts."
  },
  {
    question: "Is outdoor terrace seating available throughout the year?",
    answer: "Yes. Our outdoor pine terrace features custom radiant gas warmers, traditional brass coal braziers, and warm wool shawls so you can comfortably savor live BBQ even during chilly mountain evenings."
  },
  {
    question: "Do you offer private dining for families or business groups?",
    answer: "Yes, we feature secluded traditional jali-screened alcoves for families and private gatherings of up to 24 guests. We recommend reserving at least 24 hours in advance."
  },
  {
    question: "Is advance reservation required?",
    answer: "While walk-ins are welcomed subject to hotel occupancy, reservations are strongly recommended for weekend dinners and outdoor terrace tables. You can reserve online or call +92 51 111 505 505."
  }
];
