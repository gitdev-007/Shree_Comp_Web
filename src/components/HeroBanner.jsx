import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Award, 
  ArrowRight,
  Laptop
} from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    tag: 'BESTSELLER COLLECTION',
    title: 'Custom Business Cards that Command Respect',
    subtitle: 'From ultra-thick 400 GSM cardstock to shimmering raised gold foil & NFC smart cards. Make every networking greeting unforgettable.',
    ctaText: 'Customize Your Card',
    secondaryCta: 'Explore Card Styles',
    categoryTarget: 'business-cards',
    priceText: 'Starting at just ₹199 for 100 cards',
    badge: 'Same-Day Dispatch Available',
    gradient: 'from-navy-950 via-slate-900 to-brand-950',
    accentColor: 'text-amber-400',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    tag: 'EVENT & TRADE SHOW ESSENTIALS',
    title: 'Catch Every Eye with HD Standees & Banners',
    subtitle: 'Vibrant outdoor vinyl banners, retractable roll-up standees & acrylic signage. Weatherproof Japanese ink with razor-sharp 1440 DPI reproduction.',
    ctaText: 'Shop Signs & Banners',
    secondaryCta: 'View Standee Sizes',
    categoryTarget: 'signs-banners',
    priceText: 'Roll-up Standees from ₹899 with carry bag',
    badge: '1440 DPI Japanese Print',
    gradient: 'from-blue-950 via-brand-950 to-slate-900',
    accentColor: 'text-brand-300',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    tag: 'SHREE COMPUTERS & IT HUB',
    title: 'Laptop Repairs, Toner Refill & Fast Document Binding',
    subtitle: 'Same-day chip-level laptop diagnostics, 15-minute express printer cartridge refills, high-speed color Xerox and university hardbound thesis binding.',
    ctaText: 'Explore Computer Services',
    secondaryCta: 'Book Free Diagnostic',
    categoryTarget: 'it-services',
    priceText: 'Toner refills from ₹199 | Repair diagnostic FREE',
    badge: '30-Day Service Warranty',
    gradient: 'from-slate-950 via-navy-900 to-indigo-950',
    accentColor: 'text-cyan-400',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    tag: 'CUSTOM MERCHANDISE & BRANDING',
    title: 'Put Your Brand on Everything They Love',
    subtitle: 'Premium cotton polo shirts, custom ceramic mugs, satin employee lanyards & engraved executive metal pens for corporate gifting.',
    ctaText: 'Design Promotional Gifts',
    secondaryCta: 'View Corporate Packages',
    categoryTarget: 'promotional-gifts',
    priceText: 'Custom photo mugs from ₹179',
    badge: 'No Minimum Quantity Required',
    gradient: 'from-navy-900 via-purple-950 to-slate-950',
    accentColor: 'text-pink-400',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80'
  }
];

export default function HeroBanner({ onSelectCategory, onOpenCustomizer }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative overflow-hidden bg-navy-950 text-white">
      {/* Background slide */}
      <div className={`relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center bg-gradient-to-r ${slide.gradient} transition-all duration-700 ease-in-out`}>
        
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-white/10 backdrop-blur-sm border border-white/15 text-slate-200">
                  {slide.tag}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {slide.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display leading-[1.15]">
                {slide.title}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm inline-block">
                <span className={`text-sm sm:text-base font-bold ${slide.accentColor}`}>
                  ★ {slide.priceText}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    if (slide.categoryTarget === 'business-cards') {
                      onOpenCustomizer();
                    } else {
                      onSelectCategory(slide.categoryTarget);
                    }
                  }}
                  className="px-6 py-3.5 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-brand-500/25 flex items-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  onClick={() => onSelectCategory(slide.categoryTarget)}
                  className="px-5 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all duration-200 backdrop-blur-sm"
                >
                  {slide.secondaryCta}
                </button>
              </div>
            </div>

            {/* Right Image Showcase Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none group">
                {/* Glow backdrop */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 to-amber-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-4/3 sm:aspect-16/10">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating guarantee badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-navy-950/85 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                        ✓
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Shree Quality Stamp</div>
                        <div className="text-[11px] text-slate-300">Free reprint if not 100% satisfied</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-300">Vistaprint Standard</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors border border-white/10 z-20"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors border border-white/10 z-20"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-brand-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Trust & Guarantee Strip (Signature Vistaprint Feature) */}
      <div className="bg-slate-900 border-t border-slate-800 py-3.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-300">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Truck className="w-5 h-5 text-brand-400 flex-shrink-0" />
            <div>
              <p className="font-bold text-white text-xs">Free Delivery</p>
              <p className="text-[11px] text-slate-400">On all prepaid orders over ₹999</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <p className="font-bold text-white text-xs">24-Hour Dispatch</p>
              <p className="text-[11px] text-slate-400">Express printing on select cards & banners</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="font-bold text-white text-xs">100% Quality Guaranteed</p>
              <p className="text-[11px] text-slate-400">Love your design or we reprint it free</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Award className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <p className="font-bold text-white text-xs">Local Store Support</p>
              <p className="text-[11px] text-slate-400">Instant pick-up & in-person design help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
