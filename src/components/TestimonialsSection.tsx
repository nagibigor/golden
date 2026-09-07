import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, ExternalLink } from 'lucide-react';
import { INITIAL_GOOGLE_REVIEWS } from '../services/googleReviewsService';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [reviews] = useState<Testimonial[]>(INITIAL_GOOGLE_REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [googleRating] = useState(5.0);
  const [totalCount] = useState(48);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const currentRev = reviews[currentIndex] || reviews[0];

  return (
    <section id="testimonials" className="py-20 bg-[#0a0b0d] border-t border-[#1a1914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold tracking-[0.2em] text-[#e5c158] uppercase">
            Client Satisfaction & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GOOGLE BUSINESS <span className="gold-text">REVIEWS</span>
          </h2>
          <div className="w-20 h-0.5 gold-bg mx-auto rounded-full mt-2" />
        </div>

        {/* Google Business Profile Header Card */}
        <div className="max-w-3xl mx-auto mb-10 p-5 rounded-2xl bg-[#121418] border border-[#d4af37]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Google Badge info */}
          <div className="flex items-center space-x-4">
            {/* Google Colorful G Icon */}
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-md shrink-0">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-extrabold text-white">{googleRating.toFixed(1)}</span>
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Verified Profile
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                Based on <strong className="text-white">{totalCount}+ authentic customer reviews</strong> on Google Maps Co. Kildare
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://share.google/fmrXwkUlZqt636Nn0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center space-x-2 shadow-lg"
            >
              <span>Review Us on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Carousel / Cards Display */}
        <div className="relative max-w-4xl mx-auto">
          
          <div className="gold-card p-8 sm:p-12 rounded-2xl relative shadow-2xl text-center space-y-6 border border-[#d4af37]/30 bg-[#0e1014]">
            
            {/* Top Review Metadata */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 max-w-2xl mx-auto">
              <div className="flex items-center space-x-3 text-left">
                {currentRev.authorAvatar ? (
                  <img
                    src={currentRev.authorAvatar}
                    alt={currentRev.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#d4af37]/50"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#1e2128] border border-[#d4af37]/50 flex items-center justify-center font-bold text-amber-200 text-sm">
                    {currentRev.author.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-white text-base leading-tight">
                    {currentRev.author}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    {currentRev.location} • <span className="text-amber-200 font-semibold">{currentRev.service}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <a
                  href={currentRev.googleReviewUrl || "https://share.google/fmrXwkUlZqt636Nn0"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 hover:border-emerald-400 px-2.5 py-0.5 rounded-full flex items-center space-x-1 transition-all"
                  title="View Google Review"
                >
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Google Review</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-0.5 text-emerald-300" />
                </a>
                {currentRev.date && (
                  <span className="text-[11px] text-slate-400 mt-1">{currentRev.date}</span>
                )}
              </div>
            </div>

            {/* Quote Icon & Stars */}
            <Quote className="w-10 h-10 text-[#d4af37]/40 mx-auto" />

            <div className="flex justify-center space-x-1 text-[#f59e0b]">
              {[...Array(currentRev.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Review Body */}
            <p className="text-base sm:text-xl text-slate-100 leading-relaxed max-w-2xl mx-auto font-medium">
              "{currentRev.quote}"
            </p>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center space-x-2 pt-4">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex ? 'bg-[#d4af37] w-8' : 'bg-zinc-700 hover:bg-zinc-500 w-2.5'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 bg-[#121418] border border-[#d4af37]/60 p-3 rounded-full text-[#d4af37] hover:bg-[#d4af37] hover:text-slate-950 transition-all shadow-xl cursor-pointer"
            title="Previous Review"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-[#121418] border border-[#d4af37]/60 p-3 rounded-full text-[#d4af37] hover:bg-[#d4af37] hover:text-slate-950 transition-all shadow-xl cursor-pointer"
            title="Next Review"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};
