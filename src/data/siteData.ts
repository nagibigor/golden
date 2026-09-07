import { ServiceItem, Testimonial, WhatsAppConfig, FaqItem } from '../types';

export const DEFAULT_WHATSAPP_CONFIG: WhatsAppConfig = {
  phoneNumber: '353871338596',
  formattedDisplay: '+353 87 133 8596'
};

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Are your staff Garda vetted and fully insured?',
    answer: 'Yes, 100%. Every single team member at Golden Touch Cleaning undergoes strict background checks and Garda vetting. We carry comprehensive public liability insurance so you have complete peace of mind while we care for your property.'
  },
  {
    question: 'Do I need to supply cleaning products or equipment?',
    answer: 'No, we bring our own commercial-grade, eco-friendly cleaning solutions and high-precision HEPA filter equipment. However, if you have specific specialized surface sprays or products you prefer us to use, we are happy to accommodate.'
  },
  {
    question: 'How quickly can I get a quote and book a slot?',
    answer: 'We provide immediate quotes via WhatsApp! Simply tap any "WhatsApp" button on our site or contact us directly. In most cases, we respond within minutes and can schedule your clean within 24 to 48 hours across Co. Kildare.'
  },
  {
    question: 'What happens if I need to cancel or reschedule my appointment?',
    answer: 'We understand schedules change. We kindly request at least 24 hours notice to reschedule or cancel your slot without any fee so we can reassign our cleaning specialists.'
  },
  {
    question: 'What is your 100% Satisfaction Guarantee?',
    answer: 'If for any reason you are not completely satisfied with an area we cleaned, notify us within 24 hours and our team will return to re-clean that specific area free of charge. Your complete satisfaction is our highest priority.'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'residential',
    title: 'RESIDENTIAL',
    subtitle: 'Luxury Residential Cleaning',
    description: 'Complete 5-star hotel standard house and apartment maintenance. Meticulous care for natural stone, marble, hardwoods, and delicate upholstery.',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Full kitchen and bathroom deep sanitisation',
      'High-precision HEPA filter vacuuming',
      'Fixture polishing & surface treatment',
      'Linen changing & luxury bed making'
    ],
    recommendedFrequency: 'Weekly or Fortnightly',
    whatsappMessage: 'Hello! I would like to request a quote for Luxury Residential Cleaning.'
  },
  {
    id: 'commercial',
    title: 'COMMERCIAL',
    subtitle: 'Office & Corporate Spaces',
    description: 'Tailored business solutions to maintain an immaculate, hygienic, and prestigious environment for your clients and team.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Corporate offices & reception areas',
      'Workstation & equipment sanitisation',
      'Meeting room & window cleaning',
      'Flexible out-of-hours scheduling'
    ],
    recommendedFrequency: 'Daily or Weekly',
    whatsappMessage: 'Hello! I would like to enquire about Commercial & Office Cleaning services.'
  },
  {
    id: 'deep-cleaning',
    title: 'DEEP CLEANING',
    subtitle: 'Intensive Top-to-Bottom Clean',
    description: 'A comprehensive, detailed clean covering every corner, skirting board, appliance interior, and hard-to-reach spot.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    features: [
      'Limescale & stubborn grease removal',
      'Oven, fridge & appliance interior cleaning',
      'Detailed skirting board & light fixture wipe-down',
      'High-temperature steam sanitisation'
    ],
    recommendedFrequency: 'Every 3 to 6 Months',
    whatsappMessage: 'Hello! I would like to book an intensive Deep Cleaning service.'
  },
  {
    id: 'post-construction',
    title: 'POST-CONSTRUCTION',
    subtitle: 'After-Builders & Renovation Clean',
    description: 'Technical removal of fine plaster dust, paint spots, grout haze, and building debris. Making your new build or renovation ready to move into.',
    iconName: 'HardHat',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    features: [
      'Safe plaster, paint & grout residue removal',
      'Polishing newly installed tiles & floors',
      'Deep frame, sill, and glass cleaning',
      'Move-in ready sanitisation'
    ],
    recommendedFrequency: 'Post-renovation or build completion',
    whatsappMessage: 'Hello! I need an urgent Post-Construction / After-Builders cleaning quote.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'The Golden Touch truly is golden! Our house has never looked better. Professional, punctual, and extremely thorough.',
    author: 'Sarah M.',
    location: 'Naas, Co. Kildare',
    rating: 5,
    service: 'Residential Cleaning'
  },
  {
    id: 't2',
    quote: 'We hired Golden Touch for the post-renovation clean of our offices in Maynooth. They exceeded all expectations!',
    author: 'Liam O’Connor',
    location: 'Maynooth, Co. Kildare',
    rating: 5,
    service: 'Post-Construction & Commercial'
  },
  {
    id: 't3',
    quote: 'WhatsApp enquiry was answered within minutes. I got a transparent quote and the team arrived right on schedule the next morning.',
    author: 'Aoife Kelly',
    location: 'Newbridge, Co. Kildare',
    rating: 5,
    service: 'Deep Cleaning'
  },
  {
    id: 't4',
    quote: 'Trustworthy, Garda-vetted, uniformed staff who pay attention to every tiny detail. Highly recommended across Kildare!',
    author: 'Michael B.',
    location: 'Celbridge, Co. Kildare',
    rating: 5,
    service: 'Weekly Residential'
  }
];

export const COVERAGE_TOWNS = [
  'Naas',
  'Maynooth',
  'Newbridge',
  'Celbridge',
  'Leixlip',
  'Kildare Town',
  'Clane',
  'Athy',
  'Sallins',
  'Kilcock'
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Meticulous Attention to Every Detail',
    desc: 'We leave no corner untouched. Every surface is treated with specialized, non-scratch luxury products for lasting shine.'
  },
  {
    title: 'Premium & Eco-Friendly Products',
    desc: 'Biodegradable, high-efficiency formulas that are completely safe for children, pets, and delicate materials.'
  },
  {
    title: 'Garda Vetted & Fully Insured Team',
    desc: 'Rigorously background-checked, trained, and backed by comprehensive public liability insurance.'
  },
  {
    title: 'County Kildare’s Trusted Partner',
    desc: 'Years of dedicated local service caring for luxury homes and leading businesses throughout Co. Kildare.'
  }
];

export function buildWhatsAppUrl(phoneNumber: string, customMessage: string): string {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const encodedText = encodeURIComponent(customMessage.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function formatPhoneDisplay(phoneNumber: string): string {
  if (phoneNumber.startsWith('353') && phoneNumber.length === 12) {
    const area = phoneNumber.substring(3, 5);
    const mid = phoneNumber.substring(5, 8);
    const end = phoneNumber.substring(8);
    return `+353 ${area} ${mid} ${end}`;
  }
  return phoneNumber;
}
