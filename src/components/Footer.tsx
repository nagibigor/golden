import React from 'react';
import { Phone, MessageSquare, MapPin, Instagram, Facebook, Linkedin, Mail } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/siteData';
import { Logo } from './Logo';

interface FooterProps {
  phoneNumber: string;
  formattedDisplay: string;
}

export const Footer: React.FC<FooterProps> = ({ phoneNumber, formattedDisplay }) => {
  const handleWhatsAppClick = () => {
    const msg = 'Hello! I would like more information regarding Golden Touch Cleaning services.';
    window.open(buildWhatsAppUrl(phoneNumber, msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#050607] border-t border-[#1f1e18] text-zinc-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <a href="#home">
              <Logo size="sm" />
            </a>

            <p className="text-zinc-400 text-xs leading-relaxed">
              Excellence and luxury standards in residential and commercial cleaning throughout County Kildare.
            </p>

            <p className="text-xs font-serif-gold text-[#d4af37] italic">
              "Every Detail Matters."
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-gold font-bold text-sm text-amber-100 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#d4af37] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-[#d4af37] transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-[#d4af37] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="font-serif-gold font-bold text-sm text-amber-100 uppercase tracking-wider">Contact & Enquiries</h4>
            <div className="space-y-2.5">
              <a href={`tel:${phoneNumber}`} className="flex items-center space-x-2 text-zinc-300 hover:text-[#d4af37] transition-colors">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>{formattedDisplay}</span>
              </a>

              <a href="mailto:contact@goldentouchcleaningkildare.com" className="flex items-center space-x-2 text-zinc-300 hover:text-[#d4af37] transition-colors break-all">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>contact@goldentouchcleaningkildare.com</span>
              </a>

              <button onClick={handleWhatsAppClick} className="flex items-center space-x-2 text-[#25D366] hover:underline text-left cursor-pointer">
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Us Directly</span>
              </button>

              <div className="flex items-center space-x-2 text-zinc-400">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>County Kildare, Ireland</span>
              </div>
            </div>
          </div>

          {/* Social & Area */}
          <div className="space-y-3">
            <h4 className="font-serif-gold font-bold text-sm text-amber-100 uppercase tracking-wider">Follow Us</h4>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/goldentouchcleanerkildare/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 p-0.5 shadow-md flex items-center justify-center hover:scale-105 transition-all" 
                aria-label="Instagram Profile"
                title="Follow Golden Touch Cleaning on Instagram"
              >
                <div className="w-full h-full bg-[#0b0c0e] rounded-[7px] flex items-center justify-center text-zinc-200 hover:text-white">
                  <Instagram className="w-5 h-5 text-pink-400" />
                </div>
              </a>
              <a href="https://www.instagram.com/goldentouchcleanerkildare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#101215] border border-zinc-800 flex items-center justify-center hover:border-[#d4af37] text-zinc-300 hover:text-[#d4af37] transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/goldentouchcleanerkildare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#101215] border border-zinc-800 flex items-center justify-center hover:border-[#d4af37] text-zinc-300 hover:text-[#d4af37] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-zinc-500">
                Serving Naas, Maynooth, Newbridge, Celbridge, Leixlip and all surrounding Kildare townlands.
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-zinc-500 gap-2">
          <p>© {new Date().getFullYear()} Golden Touch Cleaning. All rights reserved.</p>
          <p className="text-zinc-600">Built with instant WhatsApp automated routing for fast quotes.</p>
        </div>

      </div>
    </footer>
  );
};
