import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  QrCode, 
  Building2, 
  Banknote, 
  ArrowRight, 
  Printer, 
  Truck,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, cartDetails, onOrderSuccess }) {
  if (!isOpen || !cartDetails) return null;

  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [orderNumber, setOrderNumber] = useState('');

  // Form State
  const [shippingData, setShippingData] = useState({
    fullName: 'Ramesh Kulkarni',
    phone: '+91 98220 54321',
    email: 'ramesh.k@example.com',
    address: 'Flat 302, Royal Residency, Station Link Road',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411001',
    deliveryType: 'standard'
  });

  const handleNextToPayment = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePlaceOrder = () => {
    // Generate Order ID
    const generatedOrderNum = `SHREE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedOrderNum);
    setStep(3);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }

    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-300 flex items-center justify-center font-bold text-xs">
              {step === 3 ? '✓' : step}
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white">
                {step === 1 && 'Delivery & Contact Details'}
                {step === 2 && 'Choose Payment Method'}
                {step === 3 && 'Order Confirmed Successfully!'}
              </h3>
              <p className="text-[11px] text-slate-300">
                {step === 1 && 'Where should we deliver your printed goods?'}
                {step === 2 && 'Instant UPI QR, Debit/Credit Card, or Store Pickup'}
                {step === 3 && `Order ID: ${orderNumber}`}
              </p>
            </div>
          </div>

          {step !== 3 && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Step 1: Shipping Address Form */}
        {step === 1 && (
          <form onSubmit={handleNextToPayment} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={shippingData.fullName}
                  onChange={(e) => setShippingData({ ...shippingData, fullName: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Mobile Number (For Courier Updates)</label>
                <input
                  type="tel"
                  required
                  value={shippingData.phone}
                  onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">Email Address (For Tax Invoice)</label>
                <input
                  type="email"
                  required
                  value={shippingData.email}
                  onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">Street Address / Landmark</label>
                <input
                  type="text"
                  required
                  value={shippingData.address}
                  onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">City</label>
                <input
                  type="text"
                  required
                  value={shippingData.city}
                  onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Pincode</label>
                <input
                  type="text"
                  required
                  value={shippingData.pincode}
                  onChange={(e) => setShippingData({ ...shippingData, pincode: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                />
              </div>
            </div>

            {/* Delivery Speed Options */}
            <div className="pt-2">
              <label className="block font-bold text-slate-700 mb-2 uppercase tracking-wider text-[11px]">
                Select Delivery Speed
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => setShippingData({ ...shippingData, deliveryType: 'standard' })}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    shippingData.deliveryType === 'standard'
                      ? 'border-brand-600 bg-brand-50 text-navy-950'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  <div className="font-bold flex items-center justify-between">
                    <span>Standard Courier</span>
                    <span className="text-emerald-700">FREE</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Delivered in 2-3 Business Days</p>
                </div>

                <div
                  onClick={() => setShippingData({ ...shippingData, deliveryType: 'express' })}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    shippingData.deliveryType === 'express'
                      ? 'border-brand-600 bg-brand-50 text-navy-950'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  <div className="font-bold flex items-center justify-between">
                    <span>24-Hour Express Dispatch</span>
                    <span className="text-brand-700">+₹99</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Priority printing queue</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs">
                <span className="text-slate-500">Total payable: </span>
                <strong className="text-sm font-bold text-navy-950">
                  ₹{cartDetails.finalTotal + (shippingData.deliveryType === 'express' ? 99 : 0)}
                </strong>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg"
              >
                <span>Continue to Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Payment Options */}
        {step === 2 && (
          <div className="p-6 space-y-5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              {[
                { id: 'upi', name: 'Instant UPI / QR', icon: QrCode },
                { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
                { id: 'netbanking', name: 'Net Banking', icon: Building2 },
                { id: 'cod', name: 'Store Pickup / COD', icon: Banknote }
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <button
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === m.id
                        ? 'border-brand-600 bg-brand-50 text-brand-900 shadow-sm font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-brand-600" />
                    <span>{m.name}</span>
                  </button>
                );
              })}
            </div>

            {/* UPI QR Simulation Box */}
            {paymentMethod === 'upi' && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                <p className="font-bold text-slate-800 text-xs">
                  Scan QR with any UPI App (Google Pay, PhonePe, Paytm, CRED)
                </p>
                <div className="w-40 h-40 bg-white p-3 rounded-xl border border-slate-300 mx-auto shadow-sm flex items-center justify-center">
                  {/* Clean SVG QR Code Mock */}
                  <svg className="w-full h-full text-navy-950" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z M70,0 h30 v30 h-30 z M80,10 h10 v10 h-10 z M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z M40,10 h10 v10 h-10 z M60,10 h10 v10 h-10 z M40,30 h20 v10 h-20 z M40,50 h10 v20 h-10 z M60,50 h10 v10 h-10 z M50,80 h20 v20 h-20 z M80,60 h10 v10 h-10 z M80,80 h20 v20 h-20 z" />
                  </svg>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  UPI ID: <span className="font-bold text-slate-800">shreecomputers@upi</span>
                </div>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    placeholder="4532 •••• •••• 8921"
                    className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">CVV</label>
                    <input
                      type="password"
                      placeholder="•••"
                      maxLength={3}
                      className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1">
                <strong>Pay at Store Counter / Cash on Delivery</strong>
                <p className="text-[11px] text-amber-800">
                  You can pay in cash or via UPI at our workshop counter when collecting your printed products, or upon delivery.
                </p>
              </div>
            )}

            {/* Final Place Order Button */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                ← Back to Address
              </button>

              <button
                onClick={handlePlaceOrder}
                className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg hover:shadow-emerald-600/30 active:scale-95 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm & Place Print Order (₹{cartDetails.finalTotal})</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success Confirmation Screen */}
        {step === 3 && (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Payment & Order Confirmed
              </span>
              <h3 className="text-2xl font-black text-navy-950 font-display pt-2">
                Thank You for Your Order!
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Your order <strong className="text-navy-950">{orderNumber}</strong> has been routed to our prepress printing department.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left text-xs max-w-md mx-auto space-y-2">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Customer Name:</span>
                <span className="font-bold text-slate-800">{shippingData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Contact Phone:</span>
                <span className="font-bold text-slate-800">{shippingData.phone}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Delivery Address:</span>
                <span className="font-bold text-slate-800 text-right truncate max-w-[200px]">{shippingData.address}</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-slate-900">
                <span>Amount Paid:</span>
                <span className="text-brand-700">₹{cartDetails.finalTotal}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Tax Invoice</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
