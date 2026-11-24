import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Phone, 
  Upload, 
  ChevronDown, 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  Tag,
  User,
  Heart
} from 'lucide-react';
import { DEPARTMENTS, PRODUCTS } from '../data/products';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenUpload, 
  onOpenCustomizer, 
  selectedDepartment, 
  onSelectDepartment,
  onSelectProduct 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filtered search
  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      
      {/* 1. Vistaprint Top Promotional Strip */}
      <div className="bg-[#002f6c] text-white text-[11px] sm:text-xs py-1.5 px-4 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-[#002f6c] font-black px-1.5 py-0.2 rounded text-[10px] uppercase">
              NEW OFFER
            </span>
            <span>
              Get <strong>10% OFF</strong> on Visiting Cards & Banners | Code: <span className="text-amber-300 font-bold font-mono">SHREE10</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5 text-slate-200">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Customer Care: +91 98220 12345 (9:30 AM - 9:00 PM)</span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="hover:text-white cursor-pointer" onClick={onOpenUpload}>
              Upload Artwork
            </span>
            <span className="text-slate-400">|</span>
            <span className="hover:text-white cursor-pointer" onClick={() => onSelectDepartment('computer-services')}>
              Laptop & Printer Services
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Vistaprint Brand Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* Logo with authentic Vistaprint visual style */}
          <div 
            onClick={() => onSelectDepartment('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group flex-shrink-0"
          >
            {/* Vistaprint geometric square fold mark */}
            <div className="w-10 h-10 rounded-lg bg-[#002f6c] flex items-center justify-center text-white shadow-md relative overflow-hidden group-hover:bg-[#001f4d] transition-colors">
              <span className="font-display font-black text-xl tracking-tighter text-amber-400">S</span>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-[#0082c3] rotate-45 transform" />
            </div>
            
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black tracking-tight text-[#002f6c] font-display">
                  SHREE
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  PRINT
                </span>
              </div>
              <p className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                A Vistaprint Standard Store
              </p>
            </div>
          </div>

          {/* Central Search Bar */}
          <div className="relative flex-1 max-w-2xl hidden md:block">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search products: visiting cards, roll-up standees, custom mugs, laptop repair..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => setShowSearchResults(true)}
                className="w-full pl-11 pr-24 py-2.5 bg-slate-50 border border-slate-300 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#002f6c] focus:bg-white transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
              <button 
                onClick={() => setShowSearchResults(true)}
                className="absolute right-1.5 px-5 py-1.5 bg-[#002f6c] hover:bg-[#001f4d] text-white text-xs font-bold rounded-full transition-colors shadow-sm"
              >
                Search
              </button>
            </div>

            {/* Live Search Autocomplete */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-fadeIn">
                <div className="px-4 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border-b border-slate-100">
                  Search Results
                </div>
                {searchResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      onSelectProduct(item);
                      setShowSearchResults(false);
                      setSearchQuery('');
                    }}
                    className="p-3 px-4 hover:bg-slate-50 flex items-center justify-between cursor-pointer border-b border-slate-100 last:border-0 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-9 h-9 object-cover rounded-lg border border-slate-200" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                        <p className="text-[11px] text-slate-500">{item.tagline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400">from</span>
                      <p className="text-xs font-bold text-[#002f6c]">₹{item.startingPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Design Studio CTA */}
            <button
              onClick={onOpenCustomizer}
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold transition-all shadow-sm group"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 group-hover:rotate-12 transition-transform" />
              <span>Design Studio</span>
            </button>

            {/* Upload Design CTA */}
            <button
              onClick={onOpenUpload}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              <Upload className="w-3.5 h-3.5 text-slate-500" />
              <span>Upload Design</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#002f6c] hover:bg-[#001f4d] text-white font-bold text-xs transition-all shadow-md active:scale-95"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="bg-amber-400 text-[#002f6c] font-black text-[11px] px-2 py-0.2 rounded-full shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-black rounded-lg"
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
              placeholder="Search visiting cards, banners, mugs, repairs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#002f6c]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 3. Vistaprint Signature Mega Dropdown Navigation Bar */}
      <nav className="border-t border-slate-200 bg-white relative hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center space-x-1 py-1">
            
            {/* Deals Button */}
            <button
              onClick={() => onSelectDepartment('home')}
              className={`px-3 py-2 rounded-md transition-colors font-bold ${
                selectedDepartment === 'home'
                  ? 'text-[#002f6c] border-b-2 border-[#002f6c]'
                  : 'text-slate-700 hover:text-[#002f6c]'
              }`}
            >
              Home & Deals
            </button>

            {/* Department Mega Links with onMouseEnter Dropdowns */}
            {DEPARTMENTS.map((dept) => (
              <div 
                key={dept.id} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(dept.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => onSelectDepartment(dept.id)}
                  className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 ${
                    selectedDepartment === dept.id
                      ? 'text-[#002f6c] font-bold border-b-2 border-[#002f6c]'
                      : 'text-slate-700 hover:text-[#002f6c]'
                  }`}
                >
                  <span>{dept.name}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {/* Vistaprint Mega Dropdown Menu Panel */}
                {activeDropdown === dept.id && (
                  <div className="absolute left-0 top-full mt-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 z-50 animate-fadeIn">
                    <div className="pb-2 mb-2 border-b border-slate-100">
                      <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                        {dept.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-normal mt-0.5">
                        {dept.description}
                      </p>
                    </div>

                    <ul className="space-y-1">
                      {dept.subcategories.map((sub, i) => (
                        <li key={i}>
                          <button
                            onClick={() => {
                              onSelectDepartment(dept.id);
                              setActiveDropdown(null);
                            }}
                            className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:bg-slate-50 hover:text-[#002f6c] transition-colors flex items-center justify-between group"
                          >
                            <span>{sub}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#002f6c] transition-opacity" />
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => {
                          onSelectDepartment(dept.id);
                          setActiveDropdown(null);
                        }}
                        className="text-[11px] font-bold text-[#002f6c] hover:underline"
                      >
                        Explore All {dept.name} →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1 text-emerald-700 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Satisfaction Guarantee</span>
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Departments & Categories
          </div>
          <button
            onClick={() => { onSelectDepartment('home'); setMobileMenuOpen(false); }}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold ${
              selectedDepartment === 'home' ? 'bg-[#002f6c] text-white' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            Home & All Bestsellers
          </button>

          {DEPARTMENTS.map((dept) => (
            <button
              key={dept.id}
              onClick={() => { onSelectDepartment(dept.id); setMobileMenuOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between ${
                selectedDepartment === dept.id ? 'bg-[#002f6c] text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{dept.name}</span>
              <span className="text-[10px] text-slate-400">{dept.subcategories.length} items</span>
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => { onOpenCustomizer(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-50 text-amber-950 border border-amber-200 font-bold text-xs"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              Launch Live 2D Card Studio
            </button>
            <button
              onClick={() => { onOpenUpload(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs"
            >
              <Upload className="w-4 h-4 text-slate-600" />
              Upload Ready File (CDR/PDF/PSD)
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
