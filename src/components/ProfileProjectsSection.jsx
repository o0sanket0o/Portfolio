import React, { useEffect, useState, useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import TiltCard from './TiltCard';
import { title } from 'framer-motion/client';

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

  // Sample project data with images
  const projects = [
    {
      title: "Authenticated Huffman Coding",
      subtitle: "Command Line Application",
      content: "This project implements Huffman encoding, a popular algorithm for data compression, along with a password protection mechanism.",
      technologies: ["C", "Data Structures", "Encoding", "Algorithms"],
      githubUrl: "https://github.com/o0sanket0o/Authenticated_Huffman_Coding",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      title: "DriveHive",
      subtitle: "Web Application",
      content: "A ride booking application that connects drivers and passengers, featuring real-time tracking, booking management, and user authentication.",
      technologies: ["React.js", "Mongo DB", "Redux", "Express.js"],
      githubUrl: "https://github.com/o0sanket0o/DriveHive",
      liveUrl: "https://drive-hive.vercel.app/",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      title: "Movie Recommendation System",
      subtitle: "Machine Learning",
      content: "A machine learning-based movie recommendation system that suggests movies to users based on their preferences and viewing history.",
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy"],
      githubUrl: "http://github.com/o0sanket0o/Movie_Recommendation_System",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Job Portal",
      subtitle: "Web Application",
      content: "A comprehensive job portal that connects job seekers with employers, featuring job listings, application tracking, and user profiles.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/o0sanket0o/Job-Portal",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Blogify",
      subtitle: "Blog Platform",
      content: "A frontend blog platform that allows users to read blogs based on their interests, featuring a clean UI, smooth navigation, and responsive design.",
      technologies: ["React.js", "Tailwind CSS", "API", "Responsive Design"],
      githubUrl: "https://github.com/o0sanket0o/Blog_Project",
      liveUrl: "https://blog-project-topaz-ten.vercel.app/",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      title: "GIF Generator",
      subtitle: "Web Application",
      content: "A web application that allows users to search for and generate GIFs based on keywords, featuring a user-friendly interface and smooth animations.",
      technologies: ["React.js", "API", "CSS Animations", "Design"],
      githubUrl: "https://github.com/o0sanket0o/GIF_Generator",
      liveUrl: "https://gif-generator-smoky-alpha.vercel.app/",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      title: "Ecomzy",
      subtitle: "E-commerce Frontend",
      content: "A frontend e-commerce application that provides a seamless shopping experience, featuring product listings and cart management.",
      technologies: ["React.js", "Redux", "Tailwind CSS", "Design"],
      githubUrl: "https://github.com/o0sanket0o/Ecomzy",
      liveUrl: "https://ecomzy-psi.vercel.app/",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    },
    {
      title: "RazorPay Clone Frontend",
      subtitle: "Clone",
      content: "A frontend clone of RazorPay, a popular payment gateway, featuring a similar user interface and functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "Design"],
      githubUrl: "https://github.com/o0sanket0o/RazorPay-Clone",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80"
    }
  ];

  return (
    <div id='projects' className="relative w-full bg-gray-900 py-20">
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