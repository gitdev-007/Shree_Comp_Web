import React, { useState } from 'react';
import { 
  Star, 
  Sparkles, 
  Eye, 
  ShoppingCart, 
  Check, 
  Clock, 
  ArrowLeft,
  Filter
} from 'lucide-react';
import { DEPARTMENTS, PRODUCTS } from '../data/products';

export default function CategoryPageView({ 
  departmentId, 
  onBackToHome, 
  onSelectProduct, 
  onOpenCustomizer,
  onAddToCart 
}) {
  const department = DEPARTMENTS.find(d => d.id === departmentId) || DEPARTMENTS[0];
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  // Filter products for this department
  const departmentProducts = PRODUCTS.filter(p => p.category === department.id);
  const filteredProducts = selectedSubcategory === 'all'
    ? departmentProducts
    : departmentProducts.filter(p => p.subcategory === selectedSubcategory);

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* 1. Department Hero Header */}
      <div className="bg-[#002f6c] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          <div className="space-y-3 max-w-xl text-center md:text-left">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-300">
              <button 
                onClick={onBackToHome}
                className="hover:text-white flex items-center gap-1 font-semibold"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
              <span>/</span>
              <span className="text-white font-bold">{department.name}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
              {department.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {department.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start">
              {department.id === 'visiting-cards' && (
                <button
                  onClick={onOpenCustomizer}
                  className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-[#002f6c] font-black text-xs shadow flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Launch 2D Live Studio</span>
                </button>
              )}
            </div>
          </div>

          {/* Department Graphic Card */}
          <div className="w-full md:w-80 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 flex-shrink-0">
            <img 
              src={department.heroImage} 
              alt={department.name}
              className="w-full h-full object-cover" 
            />
          </div>

        </div>
      </div>

      {/* 2. Sub-Category Filter Navigation Bar */}
      <div className="sticky top-[105px] z-30 bg-white border-b border-slate-200 shadow-sm py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mr-2 flex-shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>

          <button
            onClick={() => setSelectedSubcategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
              selectedSubcategory === 'all'
                ? 'bg-[#002f6c] text-white shadow'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            All Products ({departmentProducts.length})
          </button>

          {department.subcategories.map((sub, i) => (
            <button
              key={i}
              onClick={() => setSelectedSubcategory(sub)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                selectedSubcategory === sub
                  ? 'bg-[#002f6c] text-white shadow'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <h3 className="text-lg font-bold text-slate-800">
              Custom Order Inquiry for "{selectedSubcategory}"
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We produce custom configurations of this product daily in our workshop. Contact our design desk for instant quote and digital proofs.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setSelectedSubcategory('all')}
                className="px-5 py-2.5 rounded-full bg-[#002f6c] text-white font-bold text-xs"
              >
                View All {department.name}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const defaultTier = product.quantityTiers ? product.quantityTiers[0] : null;

              return (
                <div
                  key={product.id}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Image */}
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badges */}
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                      {product.badges && product.badges.map((b, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#002f6c] text-white shadow"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-300" />
                      <span>{product.turnaround}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {/* Rating */}
                      <div className="flex items-center gap-1.5 text-xs text-amber-500 mb-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-slate-800">{product.rating}</span>
                        <span className="text-slate-400">({product.reviewsCount})</span>
                      </div>

                      <h3 
                        onClick={() => onSelectProduct(product)}
                        className="font-bold text-slate-900 text-sm group-hover:text-[#002f6c] transition-colors cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                        {product.tagline}
                      </p>

                      <ul className="mt-3 space-y-1">
                        {product.features.slice(0, 2).map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & Actions */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <span className="text-[10px] text-slate-400">Starting from</span>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-lg font-black text-navy-950 font-display">
                              ₹{product.startingPrice}
                            </span>
                            {product.startingQty > 1 && (
                              <span className="text-[11px] text-slate-500">
                                / {product.startingQty} pcs
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

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
                            className="w-full flex items-center justify-center gap-1 py-2 px-2 rounded-full bg-[#002f6c] hover:bg-[#001f4d] text-white font-bold text-xs transition-colors shadow-sm"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                            <span>Personalize</span>
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
                                specs: { option: 'Standard' }
                              });
                            }}
                            className="w-full flex items-center justify-center gap-1 py-2 px-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>Book Now</span>
                          </button>
                        )}

                        <button
                          onClick={() => onSelectProduct(product)}
                          className="w-full flex items-center justify-center gap-1 py-2 px-2 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
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
        )}

      </div>
    </div>
  );
}
