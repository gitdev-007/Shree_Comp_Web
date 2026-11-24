import React from 'react';
import { VISTAPRINT_CIRCLE_CATEGORIES } from '../data/products';

export default function CategoryCircles({ onSelectDepartment }) {
  return (
    <section className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-navy-950 font-display">
            Explore by Category
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse our most popular custom printing, branded merchandise & IT solutions
          </p>
        </div>

        {/* Vistaprint Signature Circular Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
          {VISTAPRINT_CIRCLE_CATEGORIES.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectDepartment(item.id)}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              {/* Circle Thumbnail */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-[#002f6c] transition-all duration-300 shadow-sm group-hover:shadow-md bg-slate-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.badge && (
                  <span className="absolute top-1 left-1/2 -translate-x-1/2 bg-amber-400 text-[#002f6c] text-[8px] font-black px-1.5 py-0.2 rounded-full uppercase shadow">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Title & Price */}
              <h3 className="text-xs font-bold text-slate-900 mt-2.5 group-hover:text-[#002f6c] transition-colors line-clamp-1">
                {item.name}
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                {item.price}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
