import React from 'react';
import { Code, Database, Globe, Smartphone, Palette, Settings, Zap, Heart } from 'lucide-react';

// MarqueeCards Component
const MarqueeCards = ({ children, direction = 'left' }) => {
  const animationDirection = direction === 'left' ? 'scroll-left' : 'scroll-right';

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className={`inline-flex animate-${animationDirection} hover:pause-animation`}>
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
      
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
        
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};




export default MarqueeCards;