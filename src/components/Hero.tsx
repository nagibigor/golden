import React from 'react';
import { Sparkles, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/siteData';

interface HeroProps {
  phoneNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ phoneNumber }) => {
  const handleBookCleaning = () => {
    const msg = 'Hello Golden Touch! I would like to book a cleaning service. Could you please send me available dates and rates?';
    window.open(buildWhatsAppUrl(phoneNumber, msg), '_blank', 'noopener,noreferrer');
  };

  const handleRequestQuote = () => {
    const msg = 'Hello Golden Touch! I would like to request an instant quote for my property in Co. Kildare.';
    window.open(buildWhatsAppUrl(phoneNumber, msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#07080a] pt-8 pb-16">
      {/* Background Image with Dark Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Clean Home Interior"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform transition-transform duration-10000"
        />
        {/* Radial Gold Lighting Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/80 to-[#07080a]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#121417]/90 border border-[#d4af37]/40 px-4 py-1.5 rounded-full shadow-xl text-xs sm:text-sm text-[#e5c158]">
          <Sparkles className="w-4 h-4 text-[#d4af37] animate-pulse" />
          <span className="font-semibold tracking-wider uppercase">Gold Standard Sanitisation & Shine</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif-gold text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-amber-50 leading-tight drop-shadow-2xl">
          UNVEIL A NEW LEVEL OF <span className="gold-text">CLEAN</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-100 font-medium tracking-wide leading-relaxed">
          Experience The Golden Touch <span className="text-[#d4af37] mx-1 font-bold">|</span> Residential & Commercial Excellence <span className="text-[#d4af37] mx-1 font-bold">|</span> County Kildare
        </p>

        {/* Primary CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          
          {/* Main Book Button -> Auto Forward to WhatsApp */}
          <button
            onClick={handleBookCleaning}
            className="w-full sm:w-auto gold-bg gold-bg-hover text-slate-950 font-extrabold text-sm sm:text-base tracking-widest uppercase px-8 py-4 rounded-xl shadow-2xl gold-glow hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer group"
          >
            <span>BOOK YOUR CLEANING</span>
            <MessageSquare className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform fill-current" />
          </button>

          {/* Get a Quote Button */}
          <button
            onClick={handleRequestQuote}
            className="w-full sm:w-auto bg-[#14161a]/80 hover:bg-[#1e2127] text-amber-200 border border-[#d4af37]/50 font-bold text-sm sm:text-base tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:border-[#d4af37] cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-[#25D366] fill-current" />
            <span>GET INSTANT QUOTE</span>
          </button>
        </div>

        {/* Key Features Bar */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left border-t border-[#d4af37]/20">
          <div className="flex items-center space-x-3 bg-[#0d0e11]/90 border border-zinc-700/80 p-3.5 rounded-xl">
            <ShieldCheck className="w-6 h-6 text-[#d4af37] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-amber-100 uppercase tracking-wide">Garda Vetted & Insured</h4>
              <p className="text-xs text-slate-300">Background checked professionals</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#0d0e11]/90 border border-zinc-700/80 p-3.5 rounded-xl">
            <CheckCircle2 className="w-6 h-6 text-[#d4af37] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-amber-100 uppercase tracking-wide">Premium Products</h4>
              <p className="text-xs text-slate-300">Hypoallergenic & eco-friendly</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-[#0d0e11]/90 border border-zinc-700/80 p-3.5 rounded-xl">
            <MessageSquare className="w-6 h-6 text-[#25D366] shrink-0 fill-current" />
            <div>
              <h4 className="text-xs font-bold text-amber-100 uppercase tracking-wide">Instant WhatsApp</h4>
              <p className="text-xs text-slate-300">Direct booking with no hassle</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
