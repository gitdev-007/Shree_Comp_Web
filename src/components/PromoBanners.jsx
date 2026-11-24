import React from 'react';
import { ArrowRight, Sparkles, Wrench, ShieldCheck } from 'lucide-react';

export default function PromoBanners({ onSelectDepartment, onOpenCustomizer }) {
  return (
    <section className="py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vistaprint 3-Up Promotional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Banner 1: Metallic Foil Cards */}
          <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-slate-900 to-black text-white p-6 sm:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div className="space-y-2 relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded">
                Luxury Cardstocks
              </span>
              <h3 className="text-xl font-black font-display text-white">
                Raised Metallic Gold Foil Visiting Cards
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Shimmering gold and silver foil stamped on velvety soft-touch cardstock. Designed to command instant respect.
              </p>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300">from ₹499 / 100 cards</span>
              <button
                onClick={onOpenCustomizer}
                className="px-4 py-2 rounded-full bg-white text-navy-950 font-bold text-xs hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow"
              >
                <span>Customize</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Banner 2: Trade Show Standees */}
          <div className="rounded-3xl bg-gradient-to-br from-[#002f6c] to-[#001f4d] text-white p-6 sm:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div className="space-y-2 relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300 bg-cyan-400/20 px-2 py-0.5 rounded">
                Expos & Conferences
              </span>
              <h3 className="text-xl font-black font-display text-white">
                Retractable Roll-Up Standees & Banners
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Heavy-duty aluminum base, tear-resistant Star Flex banner with padded travel carry bag. Dispatched in 24 hours.
              </p>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-200">from ₹899 complete</span>
              <button
                onClick={() => onSelectDepartment('signs-banners')}
                className="px-4 py-2 rounded-full bg-white text-[#002f6c] font-bold text-xs hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow"
              >
                <span>Shop Signs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Banner 3: Shree Tech Division */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900 text-white p-6 sm:p-7 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div className="space-y-2 relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-400/20 px-2 py-0.5 rounded">
                Shree Tech Services
              </span>
              <h3 className="text-xl font-black font-display text-white">
                Laptop Motherboard Diagnostics & Toner Refills
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Free chip-level hardware inspection, 15-minute express laser printer cartridge refills, and hardbound thesis binding.
              </p>
            </div>

            <div className="pt-6 relative z-10 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-300">Diagnostics FREE</span>
              <button
                onClick={() => onSelectDepartment('computer-services')}
                className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold text-xs transition-colors flex items-center gap-1.5 shadow"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
