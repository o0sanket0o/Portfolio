import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';

import { useRef } from "react";

const TiltCard = ({ title, subtitle, content, technologies, githubUrl, liveUrl, image }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;

    card.style.transform = `
      perspective(700px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
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
      className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-200 ease-out hover:border-gray-600 group"
    >
      {/* Project Image/Preview */}
      <div className="relative mb-4 h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
          <div className="text-6xl text-gray-500 opacity-50">
            {title.charAt(0)}
          </div>
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {githubUrl && (
            <a 
              href={githubUrl}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-blue-400 uppercase text-xs font-semibold tracking-wider">
            {subtitle}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            <span>2024</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          {content}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


export default TiltCard;