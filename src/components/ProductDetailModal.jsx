import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Check, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ShoppingCart, 
  ChevronRight,
  Layers
} from 'lucide-react';

export default function ProductDetailModal({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCart, 
  onOpenCustomizer 
}) {
  if (!isOpen || !product) return null;

  const [selectedTier, setSelectedTier] = useState(
    product.quantityTiers ? product.quantityTiers[0] : null
  );
  const [selectedPaper, setSelectedPaper] = useState(
    product.paperOptions ? product.paperOptions[0] : null
  );

  const calculateCurrentPrice = () => {
    let base = selectedTier ? selectedTier.price : product.startingPrice;
    if (selectedPaper && selectedPaper.priceAdd) {
      base += selectedPaper.priceAdd;
    }
    return base;
  };

  const handleAdd = () => {
    onAddToCart({
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      quantity: selectedTier ? selectedTier.qty : product.startingQty,
      price: calculateCurrentPrice(),
      image: product.image,
      specs: {
        paper: selectedPaper ? selectedPaper.name : 'Standard Finish',
        turnaround: product.turnaround
      }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-brand-300 font-bold">
              {product.category.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Left Column: Image & Badges */}
          <div className="md:col-span-5 bg-slate-100 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 w-full border border-slate-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                {product.badges && product.badges.map((b, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-navy-900 text-white shadow"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 w-full space-y-2 text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 font-medium text-slate-800">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>Production Turnaround: <strong>{product.turnaround}</strong></span>
              </div>
              <div className="flex items-center gap-2 font-medium text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Quality Tested on Konica Minolta Presses</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Configuration */}
          <div className="md:col-span-7 p-6 space-y-5 overflow-y-auto">
            <div>
              {/* Rating */}
              <div className="flex items-center gap-1.5 text-xs text-amber-500 mb-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-800">{product.rating}</span>
                <span className="text-slate-400">({product.reviewsCount} verified customer reviews)</span>
              </div>

              <h2 className="text-2xl font-black text-navy-950 font-display">
                {product.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="space-y-1.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1">
                Product Specifications
              </span>
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Paper Selection (if available) */}
            {product.paperOptions && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Choose Material / Paper Finish
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.paperOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedPaper(opt)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                        selectedPaper && selectedPaper.id === opt.id
                          ? 'border-brand-600 bg-brand-50 text-brand-900 shadow-sm'
                          : 'border-slate-200 text-slate-700 bg-white'
                      }`}
                    >
                      <span>{opt.name}</span>
                      {opt.priceAdd > 0 && (
                        <span className="text-[10px] text-brand-700 font-bold">+₹{opt.priceAdd}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tiered Quantities Matrix */}
            {product.quantityTiers && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Select Pack Quantity
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {product.quantityTiers.map((tier) => (
                    <button
                      key={tier.qty}
                      onClick={() => setSelectedTier(tier)}
                      className={`relative p-2.5 rounded-xl border text-center transition-all ${
                        selectedTier && selectedTier.qty === tier.qty
                          ? 'border-brand-600 bg-brand-50 text-navy-950 shadow-sm'
                          : 'border-slate-200 text-slate-700 bg-white'
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-400 text-navy-950 text-[9px] font-black px-1.5 py-0.2 rounded-full shadow-sm">
                          POPULAR
                        </span>
                      )}
                      <div className="text-xs font-bold">{tier.qty} pcs</div>
                      <div className="text-xs text-brand-700 font-extrabold mt-0.5">₹{tier.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions Row */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400">Total Price</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-navy-950 font-display">
                    ₹{calculateCurrentPrice()}
                  </span>
                  <span className="text-[11px] text-emerald-600 font-bold">
                    (All taxes incl.)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {product.isCustomizable && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCustomizer();
                    }}
                    className="px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold text-xs flex items-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Live 2D Studio</span>
                  </button>
                )}

                <button
                  onClick={handleAdd}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-brand-500/25 active:scale-95"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
