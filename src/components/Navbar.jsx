import React, { useState } from 'react';
import { 
  Printer, 
  Search, 
  ShoppingCart, 
  Phone, 
  MapPin, 
  Upload, 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  HelpCircle,
  Laptop
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenUpload, 
  onOpenCustomizer, 
  selectedCategory, 
  onSelectCategory,
  onSelectProduct 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filtered search products
  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Utility Announcement Bar */}
      <div className="bg-navy-900 text-slate-100 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="bg-brand-600 text-white font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider animate-pulse">
              Special Offer
            </span>
            <span className="text-slate-300">
              Get <strong className="text-white">10% OFF</strong> on all Visiting Cards & Banners | Use Code: <span className="text-amber-300 font-mono font-bold tracking-wide">SHREE10</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>Helpline: +91 98220 12345</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="hidden md:flex items-center gap-1 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-accent-coral" />
              <span>Station Road, Near City Center</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="hidden md:flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Quality Guaranteed</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* Brand Logo (Vistaprint inspired) */}
          <div 
            onClick={() => { onSelectCategory('all'); }} 
            className="flex items-center gap-2.5 cursor-pointer select-none group flex-shrink-0"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 via-brand-700 to-navy-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <Printer className="w-6 h-6 text-brand-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-navy-950 font-display">
                  SHREE
                </span>
                <span className="text-xs font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-brand-100 text-brand-800">
                  PRINT
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide">
                Computers, Printers & Design Studio
              </p>
            </div>
          </div>

          {/* Search Bar with live autocomplete */}
          <div className="relative flex-1 max-w-2xl hidden md:block">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search visiting cards, banners, standees, mugs, laptop repair..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => setShowSearchResults(true)}
                className="w-full pl-11 pr-24 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all shadow-inner"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
              <button 
                onClick={() => setShowSearchResults(true)}
                className="absolute right-1.5 px-4 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-md transition-colors shadow-sm"
              >
                Search
              </button>
            </div>

            {/* Live Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50">
                <div className="p-2 text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 border-b border-slate-100">
                  Products & Services
                </div>
                {searchResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onSelectProduct(item);
                      setShowSearchResults(false);
                      setSearchQuery('');
                    }}
                    className="p-3 hover:bg-brand-50 flex items-center justify-between cursor-pointer border-b border-slate-100 last:border-0 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded" />
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800">{item.name}</h4>
                        <p className="text-xs text-slate-500">{item.tagline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400">from</span>
                      <p className="text-sm font-bold text-brand-700">₹{item.startingPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Design Studio Quick Button */}
            <button
              onClick={onOpenCustomizer}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold transition-all shadow-sm group"
            >
              <Sparkles className="w-4 h-4 text-amber-600 group-hover:rotate-12 transition-transform" />
              <span>Design Studio</span>
            </button>

            {/* Upload File CTA */}
            <button
              onClick={onOpenUpload}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors border border-slate-200"
            >
              <Upload className="w-4 h-4 text-slate-600" />
              <span>Upload Design</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="bg-amber-400 text-navy-950 font-bold text-xs px-2 py-0.5 rounded-full shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Input */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search cards, banners, mugs, repairs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Vistaprint-Style Mega Navigation Bar */}
      <nav className="border-t border-slate-200 bg-slate-50/80 backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold text-slate-700">
          <div className="flex items-center space-x-1 overflow-x-auto py-1">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3 py-2 rounded-md transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-brand-600 text-white font-bold'
                  : 'hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Categories
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-brand-600 text-white font-bold'
                    : 'hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.id === 'it-services' && <Laptop className="w-3.5 h-3.5 text-brand-500" />}
                <span>{cat.name}</span>
                {cat.badge && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold border border-amber-200">
                    {cat.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 pl-4 text-slate-500 text-xs">
            <span className="hover:text-brand-600 cursor-pointer" onClick={onOpenUpload}>Artwork Help</span>
            <span>•</span>
            <span className="hover:text-brand-600 cursor-pointer">Bulk Orders Quote</span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Categories
          </div>
          <button
            onClick={() => { onSelectCategory('all'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-semibold ${
              selectedCategory === 'all' ? 'bg-brand-600 text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            All Products & Services
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { onSelectCategory(cat.id); setMobileMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-semibold flex items-center justify-between ${
                selectedCategory === cat.id ? 'bg-brand-600 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{cat.name}</span>
              {cat.badge && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                  {cat.badge}
                </span>
              )}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => { onOpenCustomizer(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 font-semibold text-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              Launch Live Design Studio
            </button>
            <button
              onClick={() => { onOpenUpload(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-100 text-slate-800 font-semibold text-sm"
            >
              <Upload className="w-4 h-4 text-slate-600" />
              Upload Ready Artwork (PDF/CDR)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
