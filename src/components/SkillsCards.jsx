import React from 'react';
import { Code, Database, Globe, Smartphone, Palette, Settings, Zap, Heart, Cpu } from 'lucide-react';

// Sample skills data - replace with your actual skills

const skills = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Java & Spring Boot",
    description: "Building robust backend applications and microservices using Java and Spring Boot framework."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend Development",
    description: "Creating server-side applications and RESTful APIs with Express.js, Node.js, and Spring Boot."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Full Stack Development",
    description: "End-to-end development from frontend to backend with React, Express, and database integration."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "System Design",
    description: "Designing scalable and efficient system architectures for complex applications."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "C/C++",
    description: "Low-level programming, system design, and performance-critical applications development."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "DSA & Problem Solving",
    description: "Strong foundation in Data Structures, Algorithms, and solving complex computational problems."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "CS Fundamentals",
    description: "Deep understanding of Operating Systems, DBMS, Computer Networks, and OOP principles."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "JavaScript/React",
    description: "Developing responsive and interactive frontend applications with React.js and modern JavaScript."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Systems",
    description: "Working with MongoDB, SQL databases, and Snowflake for data storage and analytics solutions."
  },
];


const SkillsCards = () => {
  const tiltAngles = [5, -3, 7, -5, 4, -6, 8, -4]; // Different tilt for each card

  return (
    <div className="flex gap-8 py-12 px-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group relative w-72 h-80 flex-shrink-0 cursor-pointer"
          style={{
            transform: `rotate(${tiltAngles[index % tiltAngles.length]}deg)`,
            transition: 'all 0.6s ease-in-out',
          }}
        >
          {/* String/Thread */}
          <div 
            className="absolute -top-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-gray-400 to-transparent"
            style={{ transform: 'translateX(-50%)' }}
          ></div>
          
          {/* Pin/Attachment point */}
          <div 
            className="absolute -top-10 left-1/2 w-2 h-2 bg-gray-500 rounded-full border border-gray-400"
            style={{ transform: 'translateX(-50%)' }}
          ></div>
          
          {/* Card with continuous rotation animation */}
          <div
            className="w-full h-full bg-gray-800/70 backdrop-blur-sm rounded-xl border-4 border-gray-600/80 p-6 flex flex-col items-center justify-center text-center group-hover:border-purple-500/60 transition-all duration-500 overflow-hidden"
            style={{
              animation: `swing-${index % 4} 4s ease-in-out infinite`,
              transformOrigin: 'top center',
            }}
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              {skill.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 flex-shrink-0">
              {skill.title}
            </h3>
            
            {/* Description - Fixed container with proper overflow handling */}
            {/* <div className="flex-1 w-full flex items-center justify-center px-2">
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center h-16 overflow-hidden flex items-center">
                {skill.description}
              </p>
            </div> */}
          </div>
          
          {/* Floating elements that move with the card */}
          <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-400 rounded-full opacity-50 animate-ping"></div>
        </div>
      ))}
      
      {/* CSS for swinging animations */}
      <style jsx>{`
        @keyframes swing-0 {
          0%, 100% { transform: rotateZ(2deg); }
          50% { transform: rotateZ(-2deg); }
        }
        
        @keyframes swing-1 {
          0%, 100% { transform: rotateZ(-1.5deg); }
          50% { transform: rotateZ(1.5deg); }
        }
        
        @keyframes swing-2 {
          0%, 100% { transform: rotateZ(1deg); }
          50% { transform: rotateZ(-1deg); }
        }
        
        @keyframes swing-3 {
          0%, 100% { transform: rotateZ(-2.5deg); }
          50% { transform: rotateZ(2.5deg); }
        }
      `}</style>
    </div>
  );
};

export default SkillsCards;