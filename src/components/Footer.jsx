import React from 'react';
import { 
  Printer, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Truck, 
  ArrowRight,
  Laptop
} from 'lucide-react';
import { DEPARTMENTS } from '../data/products';

export default function Footer({ onSelectCategory, onOpenCustomizer, onOpenUpload }) {
  return (
    <footer className="bg-[#0b1727] text-slate-300 text-xs border-t border-slate-800">
      
      {/* 1. Newsletter & Promo Signup Strip */}
      <div className="border-b border-slate-800 bg-[#0d1f35] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white font-display">
              Join the Shree VIP Club & Save 10% Today
            </h4>
            <p className="text-slate-400 text-xs mt-1">
              Receive special deals, free design templates, and corporate discount updates.
            </p>
          </div>

          <form 
            onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully! Use coupon SHREE10 for 10% off.'); }} 
            className="flex w-full md:w-auto max-w-md gap-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-2.5 rounded-full bg-[#0b1727] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0082c3] text-xs"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#002f6c] hover:bg-[#001f4d] border border-blue-400 text-white font-bold text-xs transition-colors flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* 2. 5-Column Vistaprint Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Store & Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#002f6c] flex items-center justify-center text-white font-bold shadow-md">
                <Printer className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight font-display">
                  SHREE COMPUTERS & PRINTERS
                </span>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  Vistaprint Quality Certified
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Delivering high-definition visiting cards, marketing collateral, trade show standees, and turnkey IT repair services directly to your doorstep.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Shop 4 & 5, Shree Commercial Complex, Station Link Road, Near City Center, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Customer Care: +91 98220 12345 / +91 98220 54321</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>support@shreecomputersprinters.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Workshop Hours: Mon – Sat: 9:30 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Print Products */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Print Products
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onSelectCategory('visiting-cards')} className="hover:text-white transition-colors">
                  Standard Visiting Cards
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('visiting-cards')} className="hover:text-white transition-colors">
                  Raised Gold Foil Cards
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('marketing-materials')} className="hover:text-white transition-colors">
                  Flyers & Leaflets
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('signs-banners')} className="hover:text-white transition-colors">
                  Roll-Up Standees
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('signs-banners')} className="hover:text-white transition-colors">
                  Outdoor Vinyl Flex
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('clothing-bags')} className="hover:text-white transition-colors">
                  Embroidered Polo Tees
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech & IT Services */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Tech & IT Solutions
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onSelectCategory('computer-services')} className="hover:text-white transition-colors">
                  Free Laptop Diagnostic
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('computer-services')} className="hover:text-white transition-colors">
                  15-Min Laser Toner Refill
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('computer-services')} className="hover:text-white transition-colors">
                  SSD & RAM Upgrades
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('computer-services')} className="hover:text-white transition-colors">
                  Thesis Hardbound Binding
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('computer-services')} className="hover:text-white transition-colors">
                  Color Xerox & Scanning
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Design & Tools */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Design & Support
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenCustomizer} className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Live 2D Card Studio</span>
                  <span className="text-[9px] px-1 bg-amber-400 text-[#002f6c] font-black rounded">LIVE</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenUpload} className="hover:text-white transition-colors">
                  Upload Ready File (CDR/PDF)
                </button>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Sample Paper Swatch Kit</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Track Order Status</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">GST Invoice Help</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. Bottom Legal & Payment Icons */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Shree Computers & Printers. All Rights Reserved. Built with Vistaprint Design System.
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-500">Secure Payments:</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-white font-bold text-[10px]">UPI</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-white font-bold text-[10px]">VISA</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-white font-bold text-[10px]">MasterCard</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-white font-bold text-[10px]">RuPay</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-white font-bold text-[10px]">COD</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
