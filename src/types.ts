export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
  recommendedFrequency?: string;
  whatsappMessage: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  service: string;
  isGoogleReview?: boolean;
  date?: string;
  authorAvatar?: string;
  googleReviewUrl?: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  notes: string;
  preferredDate?: string;
}

export interface WhatsAppConfig {
  phoneNumber: string; // e.g., '353874408534'
  formattedDisplay: string; // e.g., '087 440 8534'
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
