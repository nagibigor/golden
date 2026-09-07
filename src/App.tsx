import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactAndMap } from './components/ContactAndMap';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { DEFAULT_WHATSAPP_CONFIG, formatPhoneDisplay } from './data/siteData';

export default function App() {
  const [phoneNumber] = useState<string>(DEFAULT_WHATSAPP_CONFIG.phoneNumber);

  const formattedDisplay = formatPhoneDisplay(phoneNumber);

  return (
    <div className="min-h-screen bg-[#0c0d0f] text-[#e2e8f0] font-sans selection:bg-[#d4af37]/30 selection:text-[#f3e5ab]">
      {/* Top Navbar */}
      <Navbar
        phoneNumber={phoneNumber}
        formattedDisplay={formattedDisplay}
      />

      {/* Main Content Sections */}
      <main id="home">
        <Hero
          phoneNumber={phoneNumber}
        />

        <ServicesSection
          phoneNumber={phoneNumber}
        />

        <WhyChooseUs
          phoneNumber={phoneNumber}
        />

        <TestimonialsSection />

        <FaqSection
          phoneNumber={phoneNumber}
        />

        <ContactAndMap
          phoneNumber={phoneNumber}
          formattedDisplay={formattedDisplay}
        />
      </main>

      {/* Footer */}
      <Footer
        phoneNumber={phoneNumber}
        formattedDisplay={formattedDisplay}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp
        phoneNumber={phoneNumber}
        formattedDisplay={formattedDisplay}
      />
    </div>
  );
}
