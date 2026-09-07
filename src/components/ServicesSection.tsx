import React, { useState } from 'react';
import { Home, Building2, Sparkles, HardHat, ChevronRight, MessageSquare, Check, X } from 'lucide-react';
import { SERVICES_DATA, buildWhatsAppUrl } from '../data/siteData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  phoneNumber: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ phoneNumber }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-8 h-8 text-[#d4af37]" />;
      case 'Building2':
        return <Building2 className="w-8 h-8 text-[#d4af37]" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-[#d4af37]" />;
      case 'HardHat':
        return <HardHat className="w-8 h-8 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#d4af37]" />;
    }
  };

  const handleWhatsAppForService = (service: ServiceItem) => {
    const url = buildWhatsAppUrl(phoneNumber, service.whatsappMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 bg-[#090a0c] border-t border-[#1a1914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
            Our Specialist Services
          </span>
          <h2 className="font-serif-gold text-3xl sm:text-4xl font-extrabold text-amber-50">
            SERVICES <span className="gold-text">| OUR WORK</span>
          </h2>
          <div className="w-24 h-0.5 gold-bg mx-auto rounded-full mt-2" />
          <p className="text-zinc-400 text-sm sm:text-base pt-2">
            Complete cleaning and sanitisation solutions tailored for luxury residences and leading businesses across County Kildare.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="gold-card rounded-xl overflow-hidden flex flex-col transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0f] via-black/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#0c0d0f]/90 border border-[#d4af37]/40 p-2.5 rounded-lg shadow-lg">
                  {getServiceIcon(service.iconName)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-amber-100 tracking-wide mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#e5c158] mb-2">{service.subtitle}</p>
                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] mr-1.5 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Actions */}
                <div className="pt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-[#d4af37] hover:text-amber-200 flex items-center space-x-1 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppForService(service)}
                    className="bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-slate-950 border border-[#25D366]/40 text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    <MessageSquare className="w-3 h-3 fill-current" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#101215] border border-[#d4af37]/40 rounded-2xl max-w-xl w-full p-6 relative shadow-2xl space-y-5">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-[#181a1f] border border-[#d4af37]/40 rounded-xl">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">{selectedService.title}</h3>
                <p className="text-xs text-[#e5c158] font-bold tracking-wide">{selectedService.subtitle}</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="bg-[#0b0c0e] p-4 rounded-xl border border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">What is included:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedService.recommendedFrequency && (
              <p className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white">Recommended Frequency:</strong> {selectedService.recommendedFrequency}
              </p>
            )}

            <div className="pt-3 flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-amber-100 rounded-lg text-xs font-bold cursor-pointer"
              >
                Close
              </button>
              
              <button
                onClick={() => {
                  handleWhatsAppForService(selectedService);
                  setSelectedService(null);
                }}
                className="px-5 py-2.5 bg-[#25D366] text-slate-950 font-bold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Enquire via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
