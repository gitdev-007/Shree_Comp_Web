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
import { CATEGORIES } from '../data/products';

export default function Footer({ onSelectCategory, onOpenCustomizer, onOpenUpload }) {
  return (
    <footer className="bg-navy-950 text-slate-300 text-xs border-t border-slate-800">
      
      {/* Newsletter & Discount Signup Bar */}
      <div className="border-b border-navy-800 bg-navy-900/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white font-display">
              Join the Shree VIP Printing Club
            </h4>
            <p className="text-slate-400 text-xs mt-1">
              Get secret festive discount coupons, free paper sample swatch kits, and corporate offers.
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
              className="flex-1 px-4 py-2.5 rounded-xl bg-navy-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Store Address Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold shadow-md">
                <Printer className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight font-display">
                  SHREE COMPUTERS & PRINTERS
                </span>
                <p className="text-[11px] text-brand-300 font-medium">
                  Premium Printing, Custom Merch & IT Solutions
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Your one-stop destination for high-definition business cards, vinyl banners, corporate promotional items, laptop hardware repairs, and laser cartridge refills.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-coral flex-shrink-0 mt-0.5" />
                <span>Shop 4 & 5, Shree Complex, Station Link Road, Near City Center, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>+91 98220 12345 / +91 98220 54321</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>support@shreecomputersprinters.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Mon – Sat: 9:30 AM – 9:00 PM | Sun: 10:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Printing Categories */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Print Products
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onSelectCategory('business-cards')} className="hover:text-white transition-colors">
                  Standard Business Cards
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('business-cards')} className="hover:text-white transition-colors">
                  Gold Foil Visiting Cards
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('marketing')} className="hover:text-white transition-colors">
                  Flyers & Pamphlets
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('signs-banners')} className="hover:text-white transition-colors">
                  Roll-Up Standees
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('signs-banners')} className="hover:text-white transition-colors">
                  Vinyl Flex Banners
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('stickers-packaging')} className="hover:text-white transition-colors">
                  Die-Cut Vinyl Stickers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: IT & Workshop Services */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              IT & Tech Services
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onSelectCategory('it-services')} className="hover:text-white transition-colors">
                  Laptop Motherboard Repair
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('it-services')} className="hover:text-white transition-colors">
                  Toner Cartridge Refilling (15m)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('it-services')} className="hover:text-white transition-colors">
                  SSD & RAM Speed Upgrades
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('it-services')} className="hover:text-white transition-colors">
                  Thesis Hardbound Binding
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('it-services')} className="hover:text-white transition-colors">
                  Bulk Xerox & Color Scanning
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Tools & Help */}
          <div>
            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Customer Studio
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenCustomizer} className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Live 2D Card Studio</span>
                  <span className="text-[9px] px-1 bg-amber-400/20 text-amber-300 rounded">NEW</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenUpload} className="hover:text-white transition-colors">
                  Upload Ready Artwork (CDR/PDF)
                </button>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Track Order Status</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Sample Swatch Kit</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">GST Tax Invoicing</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Payment Badges & Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Shree Computers & Printers. All Rights Reserved. Modeled after Vistaprint standards.
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            <span className="text-slate-500">Accepted Payments:</span>
            <span className="px-2 py-0.5 rounded bg-navy-900 border border-slate-700 text-white font-bold text-[10px]">UPI</span>
            <span className="px-2 py-0.5 rounded bg-navy-900 border border-slate-700 text-white font-bold text-[10px]">VISA</span>
            <span className="px-2 py-0.5 rounded bg-navy-900 border border-slate-700 text-white font-bold text-[10px]">MasterCard</span>
            <span className="px-2 py-0.5 rounded bg-navy-900 border border-slate-700 text-white font-bold text-[10px]">RuPay</span>
            <span className="px-2 py-0.5 rounded bg-navy-900 border border-slate-700 text-white font-bold text-[10px]">NetBanking</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
