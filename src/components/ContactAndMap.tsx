import React, { useState } from 'react';
import { MessageSquare, MapPin, Send, CheckCircle, Mail, Instagram, Phone } from 'lucide-react';
import { COVERAGE_TOWNS, buildWhatsAppUrl } from '../data/siteData';

interface ContactAndMapProps {
  phoneNumber: string;
  formattedDisplay: string;
}

export const ContactAndMap: React.FC<ContactAndMapProps> = ({ phoneNumber, formattedDisplay }) => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('Residential Cleaning');
  const [formCity, setFormCity] = useState('Naas');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct automated WhatsApp message in Irish English
    const waText = `
*QUOTE REQUEST - GOLDEN TOUCH CLEANING*
---------------------------------------
*Name:* ${formName}
*Phone:* ${formPhone || 'Not provided'}
*Email:* ${formEmail || 'Not provided'}
*Service:* ${formService}
*Location/Town:* ${formCity}
*Details:* ${formMessage || 'I would like to check availability and request a quote.'}
---------------------------------------
Looking forward to hearing from you. Thank you!
    `.trim();

    const url = buildWhatsAppUrl(phoneNumber, waText);
    setSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setSubmitted(false);
    }, 500);
  };

  const handleDirectWhatsAppClick = () => {
    const defaultMsg = 'Hello! I would like to speak with Golden Touch Cleaning regarding service availability in County Kildare.';
    window.open(buildWhatsAppUrl(phoneNumber, defaultMsg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-[#07080a] border-t border-[#1a1914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
            Prompt & Direct Customer Care
          </span>
          <h2 className="font-serif-gold text-3xl sm:text-4xl font-extrabold text-amber-50">
            CONTACT <span className="gold-text">& WHATSAPP</span>
          </h2>
          <div className="w-20 h-0.5 gold-bg mx-auto rounded-full mt-2" />
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Contact Form (5 Cols) */}
          <div className="lg:col-span-5 gold-card p-6 sm:p-8 rounded-2xl shadow-2xl space-y-4">
            <div className="border-b border-zinc-800 pb-3">
              <h3 className="font-serif-gold text-xl font-bold text-amber-100">CONTACT FORM</h3>
              <p className="text-xs text-zinc-400">Fill in your details for immediate WhatsApp quotation routing.</p>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#25D366]/10 border border-[#25D366] rounded-xl text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-[#25D366] mx-auto animate-bounce" />
                <h4 className="font-serif-gold font-bold text-lg text-amber-100">Redirecting to WhatsApp!</h4>
                <p className="text-xs text-zinc-300">
                  Your details have been pre-formatted. Opening the WhatsApp app now...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. John Murphy"
                    className="w-full bg-[#0b0c0e] border border-zinc-700/80 focus:border-[#d4af37] rounded-lg px-3.5 py-2 text-xs text-amber-50 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="e.g. 087 123 4567"
                      className="w-full bg-[#0b0c0e] border border-zinc-700/80 focus:border-[#d4af37] rounded-lg px-3.5 py-2 text-xs text-amber-50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="name@example.ie"
                      className="w-full bg-[#0b0c0e] border border-zinc-700/80 focus:border-[#d4af37] rounded-lg px-3.5 py-2 text-xs text-amber-50 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Requested Service</label>
                    <select
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full bg-[#0b0c0e] border border-zinc-700/80 focus:border-[#d4af37] rounded-lg px-3 py-2 text-xs text-amber-50 focus:outline-none"
                    >
                      <option value="Residential Cleaning">Residential Cleaning</option>
                      <option value="Commercial Cleaning">Commercial Cleaning</option>
                      <option value="Deep Cleaning">Deep Cleaning</option>
                      <option value="Post-Construction">Post-Construction</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Town / Location</label>
                    <select
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      className="w-full bg-[#0b0c0e] border border-zinc-700/80 focus:border-[#d4af37] rounded-lg px-3 py-2 text-xs text-amber-50 focus:outline-none"
                    >
                      {COVERAGE_TOWNS.map((town) => (
                        <option key={town} value={town}>{town}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Message or Specific Requirements</label>
                  <textarea
                    rows={3}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Number of bedrooms/bathrooms or preferred dates..."
                    className="w-full bg-[#0b0c0e] border border-zinc-700/80 focus:border-[#d4af37] rounded-lg px-3.5 py-2 text-xs text-amber-50 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-bg gold-bg-hover text-slate-950 font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Column 2: PHONE, EMAIL & INSTAGRAM Direct Box (3 Cols) */}
          <div className="lg:col-span-3 gold-card p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center space-y-5 justify-between h-full">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059]">Direct Channels</span>
              <h3 className="font-serif-gold text-lg font-bold text-amber-100 mt-1">PHONE, EMAIL & SOCIAL</h3>
            </div>

            <div className="space-y-4 w-full">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">Call / WhatsApp</span>
                <a href={`tel:${phoneNumber}`} className="text-xl font-extrabold gold-text tracking-wide block hover:opacity-80 transition-opacity">
                  {formattedDisplay}
                </a>
              </div>

              {/* Email section */}
              <div className="bg-[#0b0c0e] p-3 rounded-xl border border-zinc-800 text-center">
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 flex items-center justify-center gap-1 mb-1">
                  <Mail className="w-3 h-3 text-[#d4af37]" /> Official Email
                </span>
                <a 
                  href="mailto:contact@goldentouchcleaningkildare.com"
                  className="text-xs font-semibold text-amber-100 hover:text-[#d4af37] transition-colors break-all block"
                >
                  contact@goldentouchcleaningkildare.com
                </a>
              </div>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/goldentouchcleanerkildare/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl flex items-center justify-center space-x-2 shadow-md transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>
            </div>

            <button
              onClick={handleDirectWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us Directly</span>
            </button>
          </div>

          {/* Column 3: MAP / Location Coverage (4 Cols) */}
          <div className="lg:col-span-4 gold-card p-6 rounded-2xl shadow-2xl space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#d4af37]" />
              <h3 className="font-serif-gold text-lg font-bold text-amber-100">MAP & COVERAGE</h3>
            </div>

            {/* Visual Kildare Map Representation */}
            <div className="relative h-48 rounded-xl overflow-hidden border border-zinc-800 bg-[#0d0f12]">
              <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-t from-[#0c0d0f] via-transparent to-transparent">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mb-2 animate-bounce">
                  <MapPin className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h4 className="font-serif-gold text-sm font-bold text-amber-100">Serving County Kildare</h4>
                <p className="text-[11px] text-zinc-400">Naas, Maynooth, Newbridge, Celbridge & Surrounding Areas</p>
              </div>
            </div>

            {/* Towns Pills */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#c5a059] uppercase tracking-wider">Townlands & Locations Served:</h4>
              <div className="flex flex-wrap gap-1.5">
                {COVERAGE_TOWNS.map((town) => (
                  <span
                    key={town}
                    className="text-[10px] bg-[#14161b] text-zinc-300 border border-zinc-800 px-2.5 py-1 rounded-md"
                  >
                    {town}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
