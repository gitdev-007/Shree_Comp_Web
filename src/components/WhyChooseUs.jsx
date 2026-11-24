import React from 'react';
import { 
  ShieldCheck, 
  Printer, 
  Truck, 
  Users, 
  Star 
} from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function WhyChooseUs() {
  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vistaprint Promise Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-[#002f6c] text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-[#002f6c]" />
            <span>The Vistaprint & Shree Promise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-950 font-display">
            We Stand by Everything We Print
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            If you are not 100% satisfied with your order, we will reprint it for free or refund your payment. No hassles.
          </p>
        </div>

        {/* 4 Pillars Strip (Classic Vistaprint Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 border-b border-slate-100 pb-12">
          
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-[#002f6c] flex items-center justify-center mb-1">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Absolutely Guaranteed</h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Every card, flyer, banner, and t-shirt comes with our 100% satisfaction commitment.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-[#002f6c] flex items-center justify-center mb-1">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Japanese Precision Presses</h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Printed on Konica Minolta AccurioPress for razor-sharp micro text and true-to-life CMYK colors.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-[#002f6c] flex items-center justify-center mb-1">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Fast & Free Delivery</h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Free standard doorstep delivery on all orders over ₹999, plus 24-hour express options.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-[#002f6c] flex items-center justify-center mb-1">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Local Workshop & IT Desk</h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Walk into our workshop for in-person proofing, laptop motherboard repair, and express toner refills.
            </p>
          </div>

        </div>

        {/* Customer Reviews Section */}
        <div className="bg-[#f8f9fa] rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-navy-950 font-display">
              Loved by 10,000+ Business Owners Across Maharashtra
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Read verified customer feedback on our print quality and technical service speed
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
