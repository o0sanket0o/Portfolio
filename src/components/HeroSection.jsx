import React from 'react';
import { ChevronDown, ArrowRight, Code, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      
      {/* Background World Map - Full Screen */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><path d="M200 100l50 30-20 40 30 20-10 30 40 10v20l-30 20 20 30-40 20 10 30-50-10-20 40-30-20-40 10v-30l-20-20 30-40-20-30 40-20-10-40 50-10zm400 50l60 20-30 50 40 30-20 40 50 20v30l-40 30 30 40-50 30 20 40-60-20-30 50-40-30-50 20v-40l-30-30 40-50-30-40 50-30-20-50 60-20zm-300 200l40 15-15 35 25 25-15 35 35 15v25l-25 25 15 35-35 25 15 35-40-15-15 35-25-25-35 15v-35l-15-25 25-35-15-35 35-25-15-35 40-15z" fill="%23374151" opacity="0.3"/></svg>')`
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center min-h-screen py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Greeting Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300 text-sm">Available for opportunities</span>
            </div>

            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Sanket
                </span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Subtitle */}
            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light mb-8 max-w-3xl mx-auto">
                Carpediem
            </h2>

            {/* Description */}
            <div className="space-y-6 max-w-2xl mx-auto mb-12">
              <p className="text-xl text-gray-300 leading-relaxed">
                I try not to take life too seriously.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I enjoy meaningful conversations, good music and cricket. 
                Let's create something amazing together.
              </p>
            </div>



            {/* Abstract Geometric Elements */}
            <div className="relative">
              {/* Decorative Shapes */}
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -top-32 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
              
              {/* Central Design Element */}
              <div className="relative mx-auto w-80 h-32 lg:w-96 lg:h-40">
                <svg 
                  viewBox="0 0 400 160" 
                  className="w-full h-full opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  
                  {/* Flowing Lines */}
                  <path 
                    d="M0,80 Q100,20 200,80 T400,80" 
                    stroke="url(#lineGradient)" 
                    fill="none" 
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                  
                  <path 
                    d="M0,60 Q150,100 300,60 Q350,40 400,60" 
                    stroke="rgba(139, 92, 246, 0.5)" 
                    fill="none" 
                    strokeWidth="1.5"
                  />
                  
                  <path 
                    d="M0,100 Q100,140 200,100 T400,100" 
                    stroke="rgba(59, 130, 246, 0.3)" 
                    fill="none" 
                    strokeWidth="1"
                  />
                  
                  {/* Geometric Points */}
                  <circle cx="100" cy="40" r="3" fill="#3b82f6" className="animate-ping" />
                  <circle cx="200" cy="80" r="2" fill="#8b5cf6" />
                  <circle cx="300" cy="60" r="2.5" fill="#ec4899" className="animate-pulse" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50"></div>
      <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
    </div>
  );
}