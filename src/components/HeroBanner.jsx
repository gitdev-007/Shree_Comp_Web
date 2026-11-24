import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Truck,
  Clock,
  Award
} from 'lucide-react';

const VISTAPRINT_HERO_SLIDES = [
  {
    id: 1,
    tagline: 'PREMIUM VISITING CARDS',
    headline: 'Visiting Cards That Get You Noticed.',
    description: 'Starting at ₹199 for 100 cards. Choose from standard 350 GSM matte, velvet soft-touch, or shimmering raised metallic gold foil.',
    primaryCta: 'Shop Visiting Cards',
    secondaryCta: 'Live 2D Customizer',
    department: 'visiting-cards',
    priceBadge: '100 starting at ₹199',
    badge: 'Same-Day Dispatch Ready',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
    bgColor: 'bg-[#f8f9fa]'
  },
  {
    id: 2,
    tagline: 'TRADE SHOWS & EVENTS',
    headline: 'Stand Out with Roll-Up Standees & Banners.',
    description: 'High-definition 1440 DPI Japanese inkjet print on tear-proof Star Flex. Complete with heavy-duty anodized aluminum stand and carry bag.',
    primaryCta: 'Shop Signs & Banners',
    secondaryCta: 'Explore Standee Sizes',
    department: 'signs-banners',
    priceBadge: 'Standees from ₹899',
    badge: '1440 DPI Japanese Print',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=900&q=80',
    bgColor: 'bg-[#f0f4f8]'
  },
  {
    id: 3,
    tagline: 'SHREE TECHNICAL WORKSHOP',
    headline: 'Expert Laptop Repairs & 15-Min Toner Refill.',
    description: 'Comprehensive IT solutions for businesses: Free chip-level diagnostics, express toner cartridge refilling, and hardbound thesis book binding.',
    primaryCta: 'Book Free Diagnostic',
    secondaryCta: 'View IT Services',
    department: 'computer-services',
    priceBadge: 'Toner Refill from ₹199',
    badge: '30-Day Service Warranty',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80',
    bgColor: 'bg-[#fbf7f4]'
  }
];

export default function HeroBanner({ onSelectDepartment, onOpenCustomizer }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % VISTAPRINT_HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = VISTAPRINT_HERO_SLIDES[currentSlide];

  return (
    <div className="relative border-b border-slate-200">
      
      {/* Hero Canvas */}
      <div className={`${slide.bgColor} transition-colors duration-700 py-10 sm:py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black tracking-widest text-[#002f6c] uppercase">
                  {slide.tagline}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {slide.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 font-display tracking-tight leading-[1.12]">
                {slide.headline}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                {slide.description}
              </p>

              <div className="inline-block px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm text-xs font-bold text-[#002f6c]">
                ★ {slide.priceBadge}
              </div>

              {/* Vistaprint Classic Pill Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    if (slide.department === 'visiting-cards') {
                      onOpenCustomizer();
                    } else {
                      onSelectDepartment(slide.department);
                    }
                  }}
                  className="px-7 py-3 rounded-full bg-[#002f6c] hover:bg-[#001f4d] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{slide.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    if (slide.secondaryCta.includes('Customizer')) {
                      onOpenCustomizer();
                    } else {
                      onSelectDepartment(slide.department);
                    }
                  }}
                  className="px-6 py-3 rounded-full border-2 border-[#002f6c] hover:bg-white text-[#002f6c] font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm"
                >
                  {slide.secondaryCta}
                </button>
              </div>
            </div>

            {/* Right Image Showcase Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 sm:aspect-16/11 bg-white border border-slate-200 group">
                <img
                  src={slide.image}
                  alt={slide.headline}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Vistaprint Quality Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#002f6c] text-white flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy-950">Vistaprint Standard</div>
                      <div className="text-[10px] text-slate-500">100% Satisfaction or Free Reprint</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700">Verified Press</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + VISTAPRINT_HERO_SLIDES.length) % VISTAPRINT_HERO_SLIDES.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-md transition-colors border border-slate-200 z-20"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % VISTAPRINT_HERO_SLIDES.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-md transition-colors border border-slate-200 z-20"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Vistaprint 4-Point Guarantee Strip */}
      <div className="bg-white border-t border-slate-200 py-3 px-4 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-600">
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <Truck className="w-4 h-4 text-[#002f6c] flex-shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs">Free Standard Delivery</p>
              <p className="text-[11px] text-slate-500">On all orders above ₹999</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs">24-Hour Dispatch</p>
              <p className="text-[11px] text-slate-500">Express printing on select cards</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs">Absolutely Guaranteed</p>
              <p className="text-[11px] text-slate-500">Love your print or we'll reprint it</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <Award className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <div>
              <p className="font-bold text-slate-900 text-xs">Local Tech & IT Desk</p>
              <p className="text-[11px] text-slate-500">Laptop repairs & toner refills</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
