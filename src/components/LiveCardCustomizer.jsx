import React, { useState } from 'react';
import { 
  X, 
  RotateCw, 
  Sparkles, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Briefcase, 
  Layers, 
  Scissors, 
  ShoppingCart,
  Printer,
  Palette,
  Eye
} from 'lucide-react';

const CARD_THEMES = [
  {
    id: 'navy-modern',
    name: 'Modern Tech (Navy & Cyan)',
    frontBg: 'bg-gradient-to-br from-navy-900 via-slate-900 to-brand-950 text-white',
    accentColor: 'text-cyan-400',
    accentBg: 'bg-cyan-500',
    borderColor: 'border-cyan-500/40',
    logoBg: 'bg-cyan-500/20 text-cyan-300'
  },
  {
    id: 'executive-gold',
    name: 'Executive Black & Gold',
    frontBg: 'bg-gradient-to-br from-neutral-950 via-zinc-900 to-black text-white',
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-400',
    borderColor: 'border-amber-400/40',
    logoBg: 'bg-amber-500/20 text-amber-300'
  },
  {
    id: 'pearl-minimal',
    name: 'Pearl White & Royal Blue',
    frontBg: 'bg-white text-slate-900 border border-slate-200',
    accentColor: 'text-brand-600',
    accentBg: 'bg-brand-600',
    borderColor: 'border-brand-600/30',
    logoBg: 'bg-brand-50 text-brand-700'
  },
  {
    id: 'emerald-corporate',
    name: 'Emerald Green & Slate',
    frontBg: 'bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white',
    accentColor: 'text-emerald-400',
    accentBg: 'bg-emerald-500',
    borderColor: 'border-emerald-500/40',
    logoBg: 'bg-emerald-500/20 text-emerald-300'
  },
  {
    id: 'crimson-bold',
    name: 'Crimson Velvet & Charcoal',
    frontBg: 'bg-gradient-to-br from-red-950 via-stone-900 to-zinc-950 text-white',
    accentColor: 'text-rose-400',
    accentBg: 'bg-rose-500',
    borderColor: 'border-rose-500/40',
    logoBg: 'bg-rose-500/20 text-rose-300'
  }
];

export default function LiveCardCustomizer({ isOpen, onClose, onAddToCart }) {
  if (!isOpen) return null;

  // Live Card State
  const [side, setSide] = useState('front'); // 'front' | 'back'
  const [selectedTheme, setSelectedTheme] = useState(CARD_THEMES[0]);
  
  // Custom text fields
  const [cardData, setCardData] = useState({
    companyName: 'Shree Tech Solutions',
    tagline: 'Precision Printing & IT Systems',
    fullName: 'Rajesh Sharma',
    designation: 'Managing Director',
    phone: '+91 98765 43210',
    email: 'info@shreetech.com',
    address: 'Shop 4, City Center, Station Rd',
    website: 'www.shreetech.com'
  });

  // Paper & Finish Options
  const [paperStock, setPaperStock] = useState('matte-350');
  const [cornerStyle, setCornerStyle] = useState('standard');
  const [quantity, setQuantity] = useState(250);

  // Price calculation
  const getBasePrice = () => {
    switch (quantity) {
      case 100: return 199;
      case 250: return 449;
      case 500: return 799;
      case 1000: return 1399;
      default: return 449;
    }
  };

  const getAddonPrice = () => {
    let addon = 0;
    if (paperStock === 'gloss-350') addon += 50;
    if (paperStock === 'velvet-400') addon += 120;
    if (cornerStyle === 'rounded') addon += 80;
    return addon;
  };

  const totalPrice = getBasePrice() + getAddonPrice();

  const handleInputChange = (field, value) => {
    setCardData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddCustomizedToCart = () => {
    const customizedItem = {
      id: `custom-card-${Date.now()}`,
      productId: 'standard-card',
      name: `Custom Business Cards (${selectedTheme.name})`,
      quantity: quantity,
      price: totalPrice,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80',
      specs: {
        theme: selectedTheme.name,
        companyName: cardData.companyName,
        cardholder: cardData.fullName,
        designation: cardData.designation,
        paper: paperStock === 'velvet-400' ? '400 GSM Velvet Soft-Touch' : paperStock === 'gloss-350' ? '350 GSM High Gloss' : '350 GSM Premium Matte',
        corners: cornerStyle === 'rounded' ? 'Rounded Corners (6mm)' : 'Standard 90° Corners',
        phone: cardData.phone,
        email: cardData.email
      }
    };

    onAddToCart(customizedItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-6xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-display text-white">
                Vistaprint 2D Studio — Live Card Customizer
              </h2>
              <p className="text-xs text-slate-300">
                Design in real-time. What you see is exactly what gets printed on our 2400 DPI presses.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two Columns (Preview Left, Customizer Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Left Column: Live 2D Card Preview Area */}
          <div className="lg:col-span-7 bg-slate-100 p-6 sm:p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200 relative">
            
            {/* View Mode Switcher */}
            <div className="flex items-center gap-2 mb-6 bg-white p-1 rounded-xl shadow-sm border border-slate-200">
              <button
                onClick={() => setSide('front')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  side === 'front'
                    ? 'bg-brand-600 text-white shadow'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Front View
              </button>
              <button
                onClick={() => setSide('back')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  side === 'back'
                    ? 'bg-brand-600 text-white shadow'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Back View
              </button>
              <button
                onClick={() => setSide(side === 'front' ? 'back' : 'front')}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                title="Flip Card"
              >
                <RotateCw className="w-4 h-4" />
              </button>
            </div>

            {/* Business Card Canvas (Standard 89mm x 51mm aspect ratio approx 1.75:1) */}
            <div className="w-full max-w-md perspective">
              <div 
                className={`relative w-full aspect-[1.75/1] shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden ${selectedTheme.frontBg} ${
                  cornerStyle === 'rounded' ? 'rounded-2xl' : 'rounded-sm'
                } border ${cornerStyle === 'rounded' ? 'border-transparent' : selectedTheme.borderColor}`}
                style={{
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.05)'
                }}
              >
                {/* Visual tactile sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

                {side === 'front' ? (
                  // Front Side Content
                  <>
                    {/* Top Row: Company Name & Logo */}
                    <div className="flex items-start justify-between relative z-10">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-black tracking-tight font-display drop-shadow-sm">
                          {cardData.companyName || 'COMPANY NAME'}
                        </h4>
                        <p className={`text-[11px] font-semibold tracking-wider uppercase mt-0.5 ${selectedTheme.accentColor}`}>
                          {cardData.tagline || 'BUSINESS TAGLINE'}
                        </p>
                      </div>

                      <div className={`w-10 h-10 rounded-lg ${selectedTheme.logoBg} flex items-center justify-center font-bold text-sm shadow-inner flex-shrink-0`}>
                        <Printer className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Middle Accent Bar */}
                    <div className={`h-1 w-16 rounded-full ${selectedTheme.accentBg} my-auto relative z-10`} />

                    {/* Bottom Row: Person & Contact Details */}
                    <div className="grid grid-cols-2 gap-3 pt-2 relative z-10">
                      <div>
                        <h5 className="text-sm font-bold tracking-tight">
                          {cardData.fullName || 'FULL NAME'}
                        </h5>
                        <p className={`text-[10px] font-medium ${selectedTheme.accentColor}`}>
                          {cardData.designation || 'DESIGNATION'}
                        </p>
                      </div>

                      <div className="space-y-1 text-[9px] sm:text-[10px] opacity-90 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <span>{cardData.phone || '+91 00000 00000'}</span>
                          <Phone className="w-2.5 h-2.5 opacity-70" />
                        </div>
                        <div className="flex items-center justify-end gap-1.5">
                          <span className="truncate max-w-[120px]">{cardData.email || 'name@domain.com'}</span>
                          <Mail className="w-2.5 h-2.5 opacity-70" />
                        </div>
                        <div className="flex items-center justify-end gap-1.5">
                          <span>{cardData.website || 'www.domain.com'}</span>
                          <Globe className="w-2.5 h-2.5 opacity-70" />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  // Back Side Content (Centered Branding & QR placeholder)
                  <div className="flex flex-col items-center justify-center h-full text-center relative z-10 space-y-3">
                    <div className={`w-14 h-14 rounded-2xl ${selectedTheme.logoBg} flex items-center justify-center shadow-md`}>
                      <Printer className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black tracking-tight font-display">
                        {cardData.companyName}
                      </h4>
                      <p className={`text-xs font-semibold ${selectedTheme.accentColor} mt-0.5`}>
                        {cardData.tagline}
                      </p>
                    </div>
                    <div className="text-[10px] opacity-75 max-w-xs">
                      {cardData.address}
                    </div>
                    <div className="text-[9px] font-mono tracking-widest uppercase opacity-60">
                      Premium 350 GSM High-Definition Print
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Preview Footer note */}
            <div className="mt-6 text-center text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Actual print size: 89 x 51 mm (Standard Visiting Card Dimension)</span>
            </div>

          </div>

          {/* Right Column: Interactive Customization Controls */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 overflow-y-auto">
            
            {/* Step 1: Select Visual Theme */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                1. Select Design Theme
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CARD_THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                      selectedTheme.id === theme.id
                        ? 'border-brand-600 bg-brand-50/70 text-brand-900 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <span>{theme.name}</span>
                    {selectedTheme.id === theme.id && (
                      <Check className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Edit Information Fields */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                2. Card Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600">Company Name</label>
                  <input
                    type="text"
                    value={cardData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-600">Tagline / Slogan</label>
                  <input
                    type="text"
                    value={cardData.tagline}
                    onChange={(e) => handleInputChange('tagline', e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-600">Full Name</label>
                  <input
                    type="text"
                    value={cardData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-600">Job Title</label>
                  <input
                    type="text"
                    value={cardData.designation}
                    onChange={(e) => handleInputChange('designation', e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-600">Phone Number</label>
                  <input
                    type="text"
                    value={cardData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-600">Email Address</label>
                  <input
                    type="email"
                    value={cardData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-[11px] font-semibold text-slate-600">Office Address</label>
                  <input
                    type="text"
                    value={cardData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Paper Stock & Corners */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                3. Paper Stock & Edge Finish
              </label>
              
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setPaperStock('matte-350')}
                  className={`p-2 rounded-xl border text-center text-xs font-semibold transition-all ${
                    paperStock === 'matte-350'
                      ? 'border-brand-600 bg-brand-50 text-brand-900'
                      : 'border-slate-200 text-slate-700 bg-white'
                  }`}
                >
                  <div className="font-bold">350 GSM</div>
                  <div className="text-[10px] text-slate-500">Matte Finish</div>
                </button>

                <button
                  onClick={() => setPaperStock('gloss-350')}
                  className={`p-2 rounded-xl border text-center text-xs font-semibold transition-all ${
                    paperStock === 'gloss-350'
                      ? 'border-brand-600 bg-brand-50 text-brand-900'
                      : 'border-slate-200 text-slate-700 bg-white'
                  }`}
                >
                  <div className="font-bold">350 GSM</div>
                  <div className="text-[10px] text-slate-500">Gloss (+₹50)</div>
                </button>

                <button
                  onClick={() => setPaperStock('velvet-400')}
                  className={`p-2 rounded-xl border text-center text-xs font-semibold transition-all ${
                    paperStock === 'velvet-400'
                      ? 'border-brand-600 bg-brand-50 text-brand-900'
                      : 'border-slate-200 text-slate-700 bg-white'
                  }`}
                >
                  <div className="font-bold">400 GSM</div>
                  <div className="text-[10px] text-slate-500">Velvet (+₹120)</div>
                </button>
              </div>

              {/* Corner Finish */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => setCornerStyle('standard')}
                  className={`p-2 rounded-xl border text-center text-xs font-semibold transition-all ${
                    cornerStyle === 'standard'
                      ? 'border-brand-600 bg-brand-50 text-brand-900'
                      : 'border-slate-200 text-slate-700 bg-white'
                  }`}
                >
                  <span>Standard 90° Square</span>
                </button>

                <button
                  onClick={() => setCornerStyle('rounded')}
                  className={`p-2 rounded-xl border text-center text-xs font-semibold transition-all ${
                    cornerStyle === 'rounded'
                      ? 'border-brand-600 bg-brand-50 text-brand-900'
                      : 'border-slate-200 text-slate-700 bg-white'
                  }`}
                >
                  <span>Rounded 6mm (+₹80)</span>
                </button>
              </div>
            </div>

            {/* Step 4: Quantity Tiers & Pricing */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                4. Select Quantity
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { qty: 100, price: 199, label: '100 pcs' },
                  { qty: 250, price: 449, label: '250 pcs', tag: 'Popular' },
                  { qty: 500, price: 799, label: '500 pcs' },
                  { qty: 1000, price: 1399, label: '1000 pcs', tag: 'Best Value' }
                ].map((tier) => (
                  <button
                    key={tier.qty}
                    onClick={() => setQuantity(tier.qty)}
                    className={`relative p-2.5 rounded-xl border text-center transition-all ${
                      quantity === tier.qty
                        ? 'border-brand-600 bg-brand-50 text-navy-950 shadow-sm'
                        : 'border-slate-200 text-slate-700 bg-white'
                    }`}
                  >
                    {tier.tag && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-400 text-navy-950 text-[9px] font-black px-1.5 py-0.2 rounded-full shadow-sm">
                        {tier.tag}
                      </span>
                    )}
                    <div className="text-xs font-bold mt-0.5">{tier.label}</div>
                    <div className="text-[11px] text-brand-700 font-extrabold mt-0.5">₹{tier.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Final Checkout Row */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500">Total Print Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-navy-950 font-display">
                    ₹{totalPrice}
                  </span>
                  <span className="text-xs text-emerald-600 font-bold">
                    (GST Included)
                  </span>
                </div>
              </div>

              <button
                onClick={handleAddCustomizedToCart}
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg hover:shadow-brand-500/30 flex items-center gap-2 active:scale-95 transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add Custom Design to Cart</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
