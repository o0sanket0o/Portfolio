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
      className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden transition-all duration-200 ease-out hover:border-gray-600 group"
    >
      {/* Project Image/Preview */}
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
            <div className="text-6xl text-gray-500 opacity-50">
              {title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {githubUrl && (
            <a 
              href={githubUrl}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
        </div>

        {/* Project type badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full uppercase tracking-wider">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            <span>2024</span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {content}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600 hover:bg-gray-600/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom action buttons (alternative to hover overlay) */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex space-x-3">
            {githubUrl && (
              <a 
                href={githubUrl}
                className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
          
          {/* Optional: Add a "View Details" button */}
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors opacity-0 group-hover:opacity-100">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TiltCard;