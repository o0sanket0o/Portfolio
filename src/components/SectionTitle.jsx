import React, { useState, useEffect } from 'react';

const SectionTitle = ({ title, subtitle }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('section-title');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      id="section-title"
      className={`text-white p-6 select-none transition-all duration-1000 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-80 opacity-0'
      }`}
    >
      <span className="block text-gray-400 text-sm font-semibold tracking-widest uppercase mb-2 font-mono">
        {subtitle}
      </span>
      <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wider bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-none">
        {title.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index}>&nbsp;</span>;
          }
          return (
            <span 
              key={index} 
              className="inline-block hover:animate-bounce transition-transform duration-200 cursor-default hover:text-blue-400"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          );
        })}
      </h2>
    </div>
  );
};

export default SectionTitle;