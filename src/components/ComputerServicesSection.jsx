import React, { useState } from 'react';
import { 
  Laptop, 
  Wrench, 
  Cpu, 
  HardDrive, 
  Printer, 
  BookOpen, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Send,
  PhoneCall
} from 'lucide-react';

const IT_SERVICES = [
  {
    id: 'laptop-service',
    title: 'Chip-Level Laptop & Desktop Repair',
    icon: Laptop,
    badge: 'Same-Day Diagnostics',
    price: 'Diagnostic FREE • Repair from ₹299',
    desc: 'Expert motherboard servicing, screen replacement, hinge repair, overheating fan servicing & liquid damage recovery.',
    highlights: ['30-Day Service Warranty', 'Original OEM Parts', 'No Fix, No Fee Policy']
  },
  {
    id: 'cartridge-refill',
    title: 'Laser Toner Cartridge Express Refill',
    icon: Printer,
    badge: '15-Minute Express',
    price: 'Refill from ₹199 (Save 80%)',
    desc: 'Micro-refined Japanese toner powder for dark, crisp black text without smudging. Chamber cleaning & drum inspection included.',
    highlights: ['Supported: HP, Canon, Brother, Samsung', 'Free Test Print', 'High Yield Capacity']
  },
  {
    id: 'ssd-upgrade',
    title: 'Super-Fast SSD & RAM Speed Upgrades',
    icon: HardDrive,
    badge: '10x Faster Speeds',
    price: 'From ₹1,199 (Includes OS Cloning)',
    desc: 'Transform slow boot times into 8-second instant boot. Complete zero-data-loss clone of your Windows, files, and applications.',
    highlights: ['Crucial, Kingston & WD SSDs', 'Free Data Migration', '3-5 Years Warranty']
  },
  {
    id: 'thesis-binding',
    title: 'Thesis, Project & Hardbound Book Binding',
    icon: BookOpen,
    badge: 'University Compliant',
    price: 'From ₹249 per book',
    desc: 'Official velvet and rexine hard cover binding with hot foil golden embossing on cover and spine. High-speed 100 GSM digital print.',
    highlights: ['Golden Embossed Lettering', 'Color/BW Xerox Options', 'CD Burning & Sleeves']
  }
];

export default function ComputerServicesSection({ onAddToCart }) {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState(IT_SERVICES[0]);
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deviceModel: '',
    issueDescription: '',
    preferredTime: 'Morning (10 AM - 1 PM)'
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookedSuccess(true);
    setTimeout(() => {
      setBookedSuccess(false);
      setShowBookingModal(false);
    }, 2500);
  };

  return (
    <section className="py-14 bg-gradient-to-b from-slate-900 to-navy-950 text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Shree Computers Technical Division
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
              Computer Repairs, Cartridge Refills & Document Binding
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Your trusted local IT tech hub. From chip-level motherboard diagnostics to 15-minute express laser printer cartridge refilling.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedService(IT_SERVICES[0]);
              setShowBookingModal(true);
            }}
            className="flex-shrink-0 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book Repair / Service Pickup</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IT_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:bg-white/10 group"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>

                  <div className="text-xs font-semibold text-amber-400 mt-1">
                    {srv.price}
                  </div>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {srv.desc}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
                    {srv.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedService(srv);
                      setShowBookingModal(true);
                    }}
                    className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-cyan-500 hover:text-navy-950 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Local Store Information Strip */}
        <div className="mt-10 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <span className="font-bold text-white">Workshop & Store Hours: </span>
              <span>Monday to Saturday: 9:30 AM – 9:00 PM | Sunday: 10:00 AM – 2:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-cyan-300">
            <span>Direct Technician Desk:</span>
            <span className="font-bold text-white">+91 98220 12345</span>
          </div>
        </div>

      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl text-slate-800 shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden">
            
            <div className="px-6 py-4 bg-navy-950 text-white flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold font-display text-white">
                  Schedule Service / Diagnostics
                </h3>
                <p className="text-xs text-slate-300">
                  {selectedService.title}
                </p>
              </div>
              <button
                onClick={() => setShowBookingModal(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {bookedSuccess ? (
              <div className="p-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Service Request Confirmed!</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Our chief service engineer has received your request. We will call you within 15 minutes to confirm device drop-off or pickup.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="p-6 space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kulkarni"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Contact Number (WhatsApp)</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Device Make & Model / Cartridge Number</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dell Inspiron 15 / HP 12A Cartridge"
                    value={formData.deviceModel}
                    onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Describe the Issue or Requirements</label>
                  <textarea
                    rows="2"
                    placeholder="e.g. Laptop not powering on / toner printing faint lines / need 3 hardbound copies of thesis..."
                    value={formData.issueDescription}
                    onChange={(e) => setFormData({ ...formData, issueDescription: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold shadow-md flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm Booking</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
