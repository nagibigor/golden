import React from 'react';
import logoImg from '../assets/images/golden_touch_logo_1787776616488.jpg';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      <div className={`${sizeClasses[size]} rounded-xl overflow-hidden border border-[#d4af37]/60 shadow-lg shadow-[#d4af37]/10 group-hover:border-[#d4af37] group-hover:scale-105 transition-all duration-300 bg-black flex items-center justify-center p-0.5`}>
        <img
          src={logoImg}
          alt="Golden Touch Cleaning Logo"
          className="w-full h-full object-cover rounded-lg"
          referrerPolicy="no-referrer"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-serif-gold text-lg sm:text-xl font-extrabold tracking-wider gold-text leading-tight group-hover:brightness-110 transition-all">
            GOLDEN TOUCH
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#e5c158] uppercase font-semibold">
            CLEANING
          </span>
        </div>
      )}
    </div>
  );
};
