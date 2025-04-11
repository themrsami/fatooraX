import React from 'react';

interface SectionDividerProps {
  className?: string;
  variant?: 'wave' | 'slant' | 'curve' | 'triangle' | 'line';
  gradientFrom?: string;
  gradientTo?: string;
}

export default function SectionDivider({
  className = '',
  variant = 'line',
  gradientFrom = 'from-zinc-800',
  gradientTo = 'to-black'
}: SectionDividerProps) {
  // Tailwind gradient classes combined
  const gradientClasses = `bg-gradient-to-r ${gradientFrom} ${gradientTo}`;

  // Divider variants
  const renderDivider = () => {
    switch (variant) {
      case 'wave':
        return (
          <div className={`h-24 w-full ${gradientClasses} ${className}`}>
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                className="fill-gray-900 opacity-100"
              />
            </svg>
          </div>
        );
      case 'slant':
        return (
          <div className={`h-24 w-full ${gradientClasses} ${className}`}>
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path 
                d="M1200 120L0 16.48V0h1200v120z" 
                className="fill-gray-900 opacity-100"
              />
            </svg>
          </div>
        );
      case 'curve':
        return (
          <div className={`h-24 w-full ${gradientClasses} ${className}`}>
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path 
                d="M600,112.77C268.63,112.77,0,65.52,0,7.23V0H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
                className="fill-gray-900 opacity-100"
              />
            </svg>
          </div>
        );
      case 'triangle':
        return (
          <div className={`h-24 w-full ${gradientClasses} ${className}`}>
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path 
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" 
                className="fill-gray-900 opacity-100"
              />
            </svg>
          </div>
        );
      case 'line':
      default:
        return (
          <div className={`h-2 w-full ${gradientClasses} ${className}`}>
            <div className="h-full w-full bg-opacity-20"></div>
          </div>
        );
    }
  };

  return renderDivider();
}