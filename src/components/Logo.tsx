import React from 'react';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'icon-only' | 'compact';
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  // Unique gradient IDs to prevent conflicts when multiple logos render
  const idPrefix = React.useId().replace(/:/g, '');
  const gradientId = `genkimed-grad-${idPrefix}`;
  const pulseGradId = `genkimed-pulse-${idPrefix}`;
  const textGradId = `genkimed-text-${idPrefix}`;

  // Dimensions based on size
  const sizeConfig = {
    sm: { height: 32, iconSize: 28, textClass: 'text-lg', subClass: 'text-[7px]' },
    md: { height: 42, iconSize: 38, textClass: 'text-2xl', subClass: 'text-[9px]' },
    lg: { height: 54, iconSize: 48, textClass: 'text-3xl', subClass: 'text-[11px]' },
    xl: { height: 72, iconSize: 64, textClass: 'text-4xl', subClass: 'text-[13px]' }
  }[size];

  // SVG Icon Heart with ECG Pulse matching the official logo
  const LogoIcon = ({ size: customSize }: { size?: number }) => {
    const s = customSize || sizeConfig.iconSize;
    return (
      <svg
        width={s}
        height={s}
        viewBox="0 0 120 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A8287F" />
            <stop offset="35%" stopColor="#87359C" />
            <stop offset="70%" stopColor="#4A4DB0" />
            <stop offset="100%" stopColor="#2066BA" />
          </linearGradient>
          <linearGradient id={pulseGradId} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#A8287F" />
            <stop offset="40%" stopColor="#7E37A0" />
            <stop offset="75%" stopColor="#3C56B4" />
            <stop offset="100%" stopColor="#2066BA" />
          </linearGradient>
        </defs>

        {/* Heart Outline */}
        <path
          d="M 60 98 C 45 84 15 58 15 36 C 15 20 28 10 44 10 C 51 10 57 14 60 19 C 63 14 69 10 76 10 C 92 10 105 20 105 36 C 105 58 75 84 60 98 Z"
          stroke={`url(#${gradientId})`}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* ECG / Pulse Waveform through the heart center */}
        <path
          d="M 4 54 L 32 54 L 38 60 L 46 16 L 58 92 L 68 34 L 76 54 L 92 54 L 116 54"
          stroke={`url(#${pulseGradId})`}
          strokeWidth="8.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  };

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <LogoIcon />
      </div>
    );
  }

  const isDark = theme === 'dark';
  const subtitleColor = isDark ? 'text-slate-300' : 'text-[#1E293B]';

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Icon */}
      <LogoIcon />

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-start">
          <span 
            className={`font-black tracking-tight ${sizeConfig.textClass} leading-none font-sans bg-gradient-to-r from-[#A8287F] via-[#7B37A0] to-[#2066BA] bg-clip-text text-transparent`}
            style={{
              fontFamily: "'Outfit', 'Montserrat', 'Inter', system-ui, -apple-system, sans-serif",
              letterSpacing: '-0.02em'
            }}
          >
            GENKIMED
          </span>
          <span 
            className="text-[10px] font-bold text-[#2066BA] ml-0.5 -mt-0.5"
            style={{ fontSize: size === 'sm' ? '8px' : size === 'lg' ? '12px' : '10px' }}
          >
            ®
          </span>
        </div>

        {showSubtitle && (
          <span 
            className={`font-semibold uppercase tracking-[0.28em] ${sizeConfig.subClass} ${subtitleColor} leading-tight mt-0.5`}
            style={{
              fontFamily: "'Outfit', 'Montserrat', 'Inter', system-ui, sans-serif"
            }}
          >
            Medical Solutions
          </span>
        )}
      </div>
    </div>
  );
};
