import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Tag, 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Check 
} from 'lucide-react';
import { PROMO_CODES } from '../data/products';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onProceedToCheckout 
}) {
  if (!isOpen) return null;

  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');

  // Calculate pricing
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.cartQty || 1)), 0);
  
  // Calculate discount
  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.fixed) {
      discount = appliedPromo.discount;
    } else {
      discount = subtotal * appliedPromo.discount;
    }
  }

  // Free delivery threshold ₹999
  const freeShippingThreshold = 999;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const deliveryFee = isFreeShipping || subtotal === 0 ? 0 : 70;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const gstTax = Math.round((subtotal - discount) * 0.18);
  const finalTotal = Math.max(0, Math.round(subtotal - discount + deliveryFee + gstTax));

  const handleApplyPromo = () => {
    setPromoError('');
    const code = promoInput.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setAppliedPromo({ code, ...PROMO_CODES[code] });
      setPromoInput('');
    } else {
      setPromoError('Invalid coupon code. Try SHREE10 or FIRSTPRINT');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Cart Header */}
        <div className="p-4 sm:p-5 bg-navy-950 text-white flex items-center justify-between border-b border-navy-900">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-brand-400" />
            <h3 className="font-bold text-base font-display text-white">
              Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-slate-50 p-3 border-b border-slate-200 text-xs">
          <div className="flex items-center justify-between font-semibold mb-1">
            <span className="flex items-center gap-1.5 text-slate-700">
              <Truck className="w-4 h-4 text-brand-600" />
              {isFreeShipping ? (
                <span className="text-emerald-700 font-bold">You qualify for FREE Delivery!</span>
              ) : (
                <span>Add ₹{amountToFreeShipping} more for <strong>FREE Delivery</strong></span>
              )}
            </span>
            <span className="text-slate-500 font-bold">{Math.round(progressPercent)}%</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${isFreeShipping ? 'bg-emerald-500' : 'bg-brand-500'}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-800">Your cart is empty</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Customize your visiting cards or choose from our printing services to get started!
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs hover:bg-brand-700 shadow"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex gap-3 relative group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl border border-slate-100 flex-shrink-0"
                />

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-slate-400 hover:text-rose-500 transition-colors p-0.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Specs & Customization Details Badge */}
                  {item.specs && (
                    <div className="text-[10px] text-slate-500 bg-slate-50 p-1.5 rounded-lg border border-slate-100 space-y-0.5">
                      {item.specs.companyName && (
                        <div><strong className="text-slate-700">Company:</strong> {item.specs.companyName}</div>
                      )}
                      {item.specs.paper && (
                        <div><strong className="text-slate-700">Paper:</strong> {item.specs.paper}</div>
                      )}
                      {item.specs.file && (
                        <div className="text-emerald-700 font-medium truncate"><strong>File:</strong> {item.specs.file}</div>
                      )}
                    </div>
                  )}

                  {/* Price & Quantity Controls */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-extrabold text-navy-950">
                        ₹{item.price * (item.cartQty || 1)}
                      </span>
                      {item.quantity && (
                        <span className="text-[10px] text-slate-400">
                          ({item.quantity} pcs)
                        </span>
                      )}
                    </div>

                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                      <button
                        onClick={() => onUpdateQuantity(item.id, (item.cartQty || 1) - 1)}
                        className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold text-slate-800">
                        {item.cartQty || 1}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, (item.cartQty || 1) + 1)}
                        className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Promo Code & Order Summary (Sticky Bottom) */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
            
            {/* Promo Code Input */}
            <div className="relative">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. SHREE10)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs uppercase tracking-wider font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button
                  onClick={handleApplyPromo}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Apply
                </button>
              </div>

              {promoError && (
                <p className="text-[10px] text-rose-600 font-medium mt-1">{promoError}</p>
              )}

              {appliedPromo && (
                <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 p-2 rounded-xl mt-1.5">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Coupon <strong>{appliedPromo.code}</strong> applied!</span>
                  </div>
                  <button
                    onClick={() => setAppliedPromo(null)}
                    className="text-slate-400 hover:text-rose-500 text-[11px] font-bold"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-slate-600 pt-1 border-t border-slate-200">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">₹{subtotal}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Discount</span>
                  <span>-₹{Math.round(discount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className={deliveryFee === 0 ? 'text-emerald-700 font-bold' : 'font-semibold text-slate-900'}>
                  {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span>GST Tax (18% Input Credit)</span>
                <span className="font-semibold text-slate-900">₹{gstTax}</span>
              </div>

              <div className="flex justify-between text-sm font-black text-navy-950 pt-2 border-t border-slate-200">
                <span>Estimated Total</span>
                <span className="text-base text-brand-700 font-display">₹{finalTotal}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={() => {
                onProceedToCheckout({
                  subtotal,
                  discount,
                  deliveryFee,
                  gstTax,
                  finalTotal,
                  items: cartItems
                });
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Safe & Secure 256-bit Encrypted Checkout</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
