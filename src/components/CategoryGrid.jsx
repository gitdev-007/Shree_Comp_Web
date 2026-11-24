import React from 'react';
import { 
  CreditCard, 
  Layers, 
  Flag, 
  Gift, 
  Tag, 
  Monitor, 
  ArrowRight 
} from 'lucide-react';
import { CATEGORIES } from '../data/products';

const ICON_MAP = {
  CreditCard,
  Layers,
  Flag,
  Gift,
  Tag,
  Monitor
};

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Explore By Department
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-display">
              Popular Printing & Computer Categories
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 sm:mt-0">
            Professional printing, customized branding and IT solutions under one roof
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.icon] || CreditCard;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative rounded-2xl border border-slate-200 bg-white hover:border-brand-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Badge */}
                  {cat.badge && (
                    <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-navy-900 shadow-md backdrop-blur-sm">
                      {cat.badge}
                    </span>
                  )}

                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-navy-950 group-hover:text-brand-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-600 group-hover:text-brand-700">
                    <span>View All Products</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
