import React, { useState } from 'react';
import { FAQ_DATA, buildWhatsAppUrl } from '../data/siteData';
import { ChevronDown, HelpCircle, MessageSquare, ShieldCheck } from 'lucide-react';

interface FaqSectionProps {
  phoneNumber: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ phoneNumber }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskOnWhatsApp = () => {
    const msg = 'Hello! I have a question about Golden Touch Cleaning services that was not listed in the FAQ.';
    window.open(buildWhatsAppUrl(phoneNumber, msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-20 bg-[#0a0b0d] border-t border-[#1a1914] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#c5a059] uppercase">
            Got Questions? We Have Answers
          </span>
          <h2 className="font-serif-gold text-3xl sm:text-4xl font-extrabold text-amber-50">
            FREQUENTLY ASKED <span className="gold-text">QUESTIONS</span>
          </h2>
          <div className="w-20 h-0.5 gold-bg mx-auto rounded-full mt-2" />
        </div>

        {/* Guarantee Callout Banner */}
        <div className="mb-8 p-5 rounded-xl bg-[#121418] border border-[#d4af37]/40 flex items-center space-x-4 shadow-xl">
          <div className="p-3.5 bg-[#1e2026] border border-[#d4af37]/40 rounded-xl text-[#d4af37] shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-amber-100 text-sm sm:text-base tracking-wide">
              The Golden Touch 100% Satisfaction Guarantee
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              If you notice any detail that doesn't meet our 5-star standard, let us know within 24 hours and we will re-clean it free of charge.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="gold-card rounded-xl overflow-hidden transition-all border border-zinc-800/80 group"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center space-x-3.5">
                    <HelpCircle className="w-5 h-5 text-[#d4af37] shrink-0" />
                    <span className="font-bold text-sm sm:text-base text-slate-100 group-hover:text-amber-200 transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#d4af37] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-slate-200 leading-relaxed border-t border-zinc-800/80 pt-4 bg-[#0b0c0e]/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered Question CTA */}
        <div className="mt-10 text-center space-y-3 p-6 bg-[#0e1013] border border-zinc-800 rounded-2xl">
          <p className="text-xs text-zinc-400 font-medium">
            Have a custom question about your home or corporate office in Kildare?
          </p>
          <button
            onClick={handleAskOnWhatsApp}
            className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Ask Us Anything on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
