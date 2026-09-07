import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/siteData';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  formattedDisplay: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ phoneNumber, formattedDisplay }) => {
  const [popupVisible, setPopupVisible] = useState(true);

  const handleOpenWhatsApp = () => {
    const defaultMsg = 'Hello! I would like to book a cleaning service or enquire about rates with Golden Touch Cleaning.';
    window.open(buildWhatsAppUrl(phoneNumber, defaultMsg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      
      {/* Quick Tooltip Popup */}
      {popupVisible && (
        <div className="bg-[#121418] border border-[#d4af37]/50 rounded-2xl p-4 shadow-2xl max-w-xs text-left relative animate-fade-in group">
          <button
            onClick={() => setPopupVisible(false)}
            className="absolute top-2 right-2 text-zinc-400 hover:text-white p-1 cursor-pointer"
            title="Close"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center space-x-2.5 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
            <span className="text-[11px] font-bold text-amber-100">Customer Support Online</span>
          </div>

          <p className="text-xs text-zinc-300 leading-snug">
            Need an instant quote? Chat directly with us on WhatsApp!
          </p>

          <button
            onClick={handleOpenWhatsApp}
            className="mt-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs py-1.5 rounded-lg flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Chat on WhatsApp ({formattedDisplay})</span>
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="relative group bg-[#25D366] text-slate-950 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 gold-glow flex items-center justify-center cursor-pointer"
        title="WhatsApp Direct Chat"
        aria-label="Launch WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-[#0c0d0f] flex items-center justify-center text-[9px] font-bold">
          1
        </span>
        <MessageSquare className="w-7 h-7 fill-current" />
      </button>

    </div>
  );
};
