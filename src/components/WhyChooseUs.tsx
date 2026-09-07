import React from 'react';
import { CheckCircle2, Award, MessageSquare } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS, buildWhatsAppUrl } from '../data/siteData';

interface WhyChooseUsProps {
  phoneNumber: string;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ phoneNumber }) => {
  const handleWhatsAppContact = () => {
    const msg = 'Hello! I would like to learn more about Golden Touch Cleaning services and schedule an appointment.';
    window.open(buildWhatsAppUrl(phoneNumber, msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="py-20 bg-[#0c0d0f] border-t border-[#1f1e18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Team Photo Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden gold-card p-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Golden Touch Professional Cleaning Team"
                className="w-full h-[450px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl" />
              
              {/* Badge on Photo */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0c0d0f]/95 border border-[#d4af37]/60 p-4 rounded-xl backdrop-blur-md shadow-2xl">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-[#d4af37] shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-amber-100 tracking-wide">Garda Vetted Specialists</h4>
                    <p className="text-xs text-slate-300">Trained to luxury 5-star hotel standards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#d4af37]/40 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#d4af37]/40 pointer-events-none" />
          </div>

          {/* Right Column: Content & Points */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#e5c158] uppercase">
                Excellence Without Compromise
              </span>
              <h2 className="font-serif-gold text-3xl sm:text-4xl font-extrabold text-amber-50 leading-tight">
                WHY CHOOSE <span className="gold-text">THE GOLDEN TOUCH?</span>
              </h2>
              <div className="w-20 h-0.5 gold-bg rounded-full mt-2" />
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              Golden Touch Cleaning is County Kildare’s premier choice for luxury residential and corporate hygiene. We cater to homeowners and business executives who demand punctuality, fine aesthetic care, and flawless cleanliness.
            </p>

            {/* Bullet List */}
            <div className="space-y-4 pt-2">
              {WHY_CHOOSE_US_POINTS.map((point, index) => (
                <div key={index} className="flex items-start space-x-3.5 bg-[#121418] border border-zinc-700/80 p-4 rounded-xl hover:border-[#d4af37]/60 transition-colors shadow-md">
                  <div className="p-2 bg-[#1b1a14] border border-[#d4af37]/50 rounded-lg text-[#d4af37] mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-amber-50 tracking-wide">{point.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Motto */}
            <div className="pt-4 border-t border-[#d4af37]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif-gold text-2xl font-bold gold-text italic tracking-wide">
                  "Every Detail Matters."
                </p>
                <p className="text-xs text-slate-300 font-medium">Serving Co. Kildare & Surrounding Townlands</p>
              </div>

              <button
                onClick={handleWhatsAppContact}
                className="bg-[#25D366] hover:bg-[#1ebd5a] text-slate-950 font-extrabold text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center space-x-2 transition-all shadow-lg cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
