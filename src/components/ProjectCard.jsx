import React, { useState } from "react";

const ProjectCard = () => {
  const [style, setStyle] = useState({});

  // Handler for mouse move over the card
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left; // X within card
    const y = e.clientY - rect.top;  // Y within card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate offset from center (-1 to 1)
    const offsetX = (x - centerX) / centerX;
    const offsetY = (y - centerY) / centerY;

    // Multiply by how much you want to move the card (e.g. max 15px)
    const translateX = offsetX * 15; // move max 15px horizontally
    const translateY = offsetY * 15; // move max 15px vertically

    setStyle({
      transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
      transition: 'transform 0.1s ease',
    });
  };

  // Reset on mouse leave
  const handleMouseLeave = () => {
    setStyle({
      transform: 'translate3d(0,0,0)',
      transition: 'transform 0.3s ease',
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="w-64 h-40 bg-white shadow-lg rounded-lg cursor-pointer select-none"
    >
      <h2 className="text-xl font-semibold p-4">Hover Me</h2>
    </div>
  );
};

export default ProjectCard;
