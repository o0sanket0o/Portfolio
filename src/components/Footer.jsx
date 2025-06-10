import React from 'react';
import { Github, Linkedin, Code, Twitter, Instagram, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/sanket',
      color: 'hover:text-blue-400 hover:bg-blue-500/10'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sanket',
      color: 'hover:text-white hover:bg-gray-700'
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/sanket',
      color: 'hover:text-orange-400 hover:bg-orange-500/10'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/sanket',
      color: 'hover:text-sky-400 hover:bg-sky-500/10'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/sanket',
      color: 'hover:text-pink-400 hover:bg-pink-500/10'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  Sanket
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Creating meaningful digital experiences through code, design, and good conversations. 
                  Always ready for the next adventure.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Connect with me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <div
                        key={social.name}
                        className={`group w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer ${social.color}`}
                        title={social.name}
                      >
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-300 text-sm">Currently available for projects</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <div className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer group flex items-center">
                      {link.name}
                      <ArrowUp className="w-4 h-4 ml-2 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>© 2025 Sanket. Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm font-medium">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Fun Quote */}
        <div className="text-center py-4 border-t border-gray-800/50">
          <p className="text-gray-500 text-sm italic">
            "The best way to predict the future is to create it." - Peter Drucker
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/2 left-1/12 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-20"></div>
    </footer>
  );
}