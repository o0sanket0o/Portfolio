import React, { useEffect, useState, useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import TiltCard from './TiltCard';


const ProfileProjectsSection = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isVisible = rect.top < windowHeight && rect.bottom > 0;

      if(isVisible && !visible) {
        setVisible(true);
      }

    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  // Sample project data
  const projects = [
    {
      title: "E-Commerce Platform",
      subtitle: "Web Application",
      content: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Task Management App",
      subtitle: "Mobile App",
      content: "Cross-platform mobile application for task management with real-time synchronization, team collaboration, and productivity analytics.",
      technologies: ["React Native", "Firebase", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "AI Chatbot",
      subtitle: "Machine Learning",
      content: "Intelligent chatbot powered by natural language processing, capable of handling customer inquiries and providing automated support.",
      technologies: ["Python", "TensorFlow", "Flask", "NLP"],
      githubUrl: "https://github.com",
      liveUrl: null
    },
    {
      title: "Portfolio Website",
      subtitle: "Web Design",
      content: "Modern, responsive portfolio website showcasing creative projects with smooth animations and interactive elements.",
      technologies: ["Next.js", "Tailwind", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Data Visualization",
      subtitle: "Analytics",
      content: "Interactive dashboard for data visualization and analytics with real-time charts, filters, and export capabilities.",
      technologies: ["D3.js", "React", "Express", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Crypto Tracker",
      subtitle: "Finance App",
      content: "Cryptocurrency tracking application with real-time price updates, portfolio management, and market analysis tools.",
      technologies: ["Vue.js", "Node.js", "WebSocket", "API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <div className="relative w-full bg-gray-900 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full bg-repeat"
          style={{ 
            backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23374151" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></svg>')`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Animated Title */}
        <div ref={containerRef} className="mb-16">
          <AnimatedTitle text="Projects" visible={visible} />
          <div className={`h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mt-4 rounded-full transition-all duration-700 delay-500 ${visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          <p className={`text-gray-400 text-lg mt-6 max-w-2xl transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                visible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${800 + index * 100}ms` 
              }}
            >
              <TiltCard {...project} />
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute bottom-1/4 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50"></div>
    </div>
  );
};

export default ProfileProjectsSection;