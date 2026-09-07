import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Sparkles, Mail, Instagram } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/siteData';
import { Logo } from './Logo';

interface NavbarProps {
  phoneNumber: string;
  formattedDisplay: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  phoneNumber,
  formattedDisplay
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDirectWhatsApp = () => {
    const defaultMsg = 'Hello! I would like to book a cleaning service or enquire about rates with Golden Touch Cleaning.';
    window.open(buildWhatsAppUrl(phoneNumber, defaultMsg), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#07080a] border-b border-[#2a2820] text-xs py-2 px-4 text-[#a3a3a3]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-[#d4af37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-medium tracking-wide">Luxury Cleaning Excellence Across County Kildare</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-4 text-xs">
            <a 
              href="mailto:contact@goldentouchcleaningkildare.com"
              className="hidden sm:flex items-center space-x-1 text-[#e2e8f0] hover:text-[#d4af37] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>contact@goldentouchcleaningkildare.com</span>
            </a>

            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center space-x-1 text-[#e2e8f0] hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-semibold">{formattedDisplay}</span>
            </a>

            <a
              href="https://www.instagram.com/goldentouchcleanerkildare/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-[#e2e8f0] hover:text-[#d4af37] transition-colors pl-2 border-l border-zinc-800"
              title="Instagram Profile"
            >
              <Instagram className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden md:inline font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#0c0d0f]/95 backdrop-blur-md border-b border-[#22211b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
            <a href="#home" className="hover:text-[#d4af37] transition-colors py-1">Home</a>
            <a href="#services" className="hover:text-[#d4af37] transition-colors py-1">Services</a>
            <a href="#about" className="hover:text-[#d4af37] transition-colors py-1">About Us</a>
            <a href="#testimonials" className="hover:text-[#d4af37] transition-colors py-1">Testimonials</a>
            <a href="#faq" className="hover:text-[#d4af37] transition-colors py-1">FAQ</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors py-1">Contact Us</a>
          </nav>

          {/* Actions & WhatsApp CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={handleDirectWhatsApp}
              className="flex items-center space-x-2 bg-[#122e1e] hover:bg-[#183e28] text-[#25D366] border border-[#25D366]/40 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp</span>
            </button>

            <button
              onClick={handleDirectWhatsApp}
              className="gold-bg gold-bg-hover text-[#0c0d0f] font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-lg hover:shadow-[#d4af37]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={handleDirectWhatsApp}
              className="p-2 bg-[#25D366] text-slate-950 rounded-lg shadow-md"
              title="WhatsApp Direct"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-[#d4af37] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0e0f12] border-b border-[#2a2820] px-4 pt-3 pb-6 space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-200 hover:text-[#d4af37]"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-200 hover:text-[#d4af37]"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-200 hover:text-[#d4af37]"
            >
              About Us
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-200 hover:text-[#d4af37]"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-200 hover:text-[#d4af37]"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-zinc-200 hover:text-[#d4af37]"
            >
              Contact Us
            </a>
            <div className="pt-2 flex flex-col space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDirectWhatsApp();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-[#25D366] text-slate-950 font-bold py-3 rounded-lg text-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp ({formattedDisplay})</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDirectWhatsApp();
                }}
                className="w-full gold-bg text-slate-950 font-bold py-3 rounded-lg text-sm uppercase tracking-wider"
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
