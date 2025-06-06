import React, { useRef } from "react";

const TiltCard = ({ title, subtitle, content }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max tilt of 10 deg
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `
      perspective(700px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white shadow-xl rounded-lg p-6 max-w-md mx-auto my-10 transition-transform duration-200 ease-out"
    >
      <span className="text-indigo-500 uppercase text-sm font-semibold tracking-widest opacity-70">
        {subtitle}
      </span>
      <h2 className="text-3xl font-bold mb-2 text-gray-800 font-sans">
        {title}
      </h2>
      <p className="text-gray-600 text-md">{content}</p>
    </div>
  );
};

export default TiltCard;
