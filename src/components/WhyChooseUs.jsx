import React from 'react';
import { 
  Printer, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  RotateCcw, 
  MapPin, 
  Star 
} from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function WhyChooseUs() {
  return (
    <section className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            The Shree Guarantee
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-display mt-2">
            Why Over 10,000+ Businesses Trust Shree Computers & Printers
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Combining world-class Japanese printing presses with trusted local IT service expertise.
          </p>
        </div>

        {/* 4 Feature Pillars (Vistaprint Standard) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3 hover:border-brand-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mx-auto shadow-sm">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-navy-950">Japanese 2400 DPI Presses</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with industrial Konica Minolta AccurioPress and Japanese offset presses for color accuracy and velvety smooth gradients.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3 hover:border-brand-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-navy-950">100% Satisfaction Guarantee</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If your print does not meet your expectations, we will either reprint your entire batch free of cost or refund your money immediately.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3 hover:border-brand-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-navy-950">24-Hour Express Dispatch</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tight deadlines? Our express printing queue processes visiting cards, banners, and standees with same-day local collection options.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3 hover:border-brand-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto shadow-sm">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-navy-950">Complete IT & Printing Hub</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              One place for all corporate needs: From business cards to laptop chip-level repair, toner cartridge refilling, and thesis book binding.
            </p>
          </div>
        </div>

        {/* Customer Testimonials Carousel/Grid */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-navy-950 font-display">
              Real Stories from Local Business Leaders
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Read how Shree Computers & Printers helps brands look extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                    <p className="text-[11px] text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
