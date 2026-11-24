import React, { useState } from 'react';
import { 
  Star, 
  Sparkles, 
  Eye, 
  ShoppingCart, 
  Clock, 
  Check, 
  Filter,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function FeaturedProducts({ 
  selectedCategory, 
  onSelectCategory, 
  onSelectProduct, 
  onOpenCustomizer,
  onAddToCart 
}) {
  const [activeFilter, setActiveFilter] = useState(selectedCategory || 'all');

  // Filter products
  const displayProducts = activeFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-amber"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Top Rated Printing Solutions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-display">
              Featured Products & Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              High definition print technology, premium cardstocks, and same-day express turnaround
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-navy-950 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-navy-950 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product) => {
            const defaultTier = product.quantityTiers ? product.quantityTiers[0] : null;

            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Image Box */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 items-start">
                    {product.badges && product.badges.map((b, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm backdrop-blur-sm ${
                          i === 0
                            ? 'bg-navy-900 text-white'
                            : 'bg-amber-400 text-navy-950'
                        }`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Turnaround Badge */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-300" />
                    <span>{product.turnaround}</span>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {/* Rating & Review */}
                    <div className="flex items-center gap-1.5 text-xs mb-1">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold ml-1 text-slate-800">{product.rating}</span>
                      </div>
                      <span className="text-slate-400">({product.reviewsCount} reviews)</span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="font-bold text-slate-900 text-base group-hover:text-brand-600 transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {product.tagline}
                    </p>

                    {/* Features Snippet */}
                    <ul className="mt-3 space-y-1">
                      {product.features.slice(0, 2).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[11px] text-slate-400">Starting from</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-lg font-extrabold text-navy-950 font-display">
                            ₹{product.startingPrice}
                          </span>
                          {product.startingQty > 1 && (
                            <span className="text-[11px] text-slate-500 font-medium">
                              / {product.startingQty} pcs
                            </span>
                          )}
                        </div>
                      </div>
                      {defaultTier && defaultTier.originalPrice && (
                        <span className="text-xs line-through text-slate-400">
                          ₹{defaultTier.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      {product.isCustomizable ? (
                        <button
                          onClick={() => {
                            if (product.id.includes('card')) {
                              onOpenCustomizer();
                            } else {
                              onSelectProduct(product);
                            }
                          }}
                          className="w-full flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition-colors shadow-sm"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                          <span>Customize</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            onAddToCart({
                              id: `${product.id}-${Date.now()}`,
                              productId: product.id,
                              name: product.name,
                              quantity: product.startingQty,
                              price: product.startingPrice,
                              image: product.image,
                              specs: { option: 'Standard Service' }
                            });
                          }}
                          className="w-full flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Book Now</span>
                        </button>
                      )}

                      <button
                        onClick={() => onSelectProduct(product)}
                        className="w-full flex items-center justify-center gap-1 py-2 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors border border-slate-200"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-500" />
                        <span>Details</span>
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-brand-700 via-brand-800 to-navy-950 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/20 px-2.5 py-1 rounded">
              High Volume / Corporate Orders
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Need Bulk Quantities for Corporate Offices, Events or Schools?
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm max-w-xl">
              Get customized quotation, dedicated design support, free sample kits, and GST tax invoice with instant dispatch.
            </p>
          </div>
          <button 
            onClick={() => onSelectCategory('it-services')}
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg flex items-center gap-2"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
