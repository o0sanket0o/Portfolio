import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function DiagonalSplitImages() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      
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
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Greeting Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-300 text-sm">Available for opportunities</span>
              </div>

              {/* Main Title */}
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Sanket
                  </span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mt-4 rounded-full"></div>
              </div>

              {/* Description */}
              <div className="space-y-4 max-w-lg">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I try not to take life too seriously.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  I enjoy meaningful conversations, good music and cricket. 
                  Let's create something amazing together.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  View My Work
                </button>
                <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/30 transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Decorative Elements */}
              <div className="absolute top-1/4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 -left-4 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
              
              {/* Abstract Design Container */}
              <div className="relative z-10">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-75 animate-pulse"></div>
                  <div className="absolute inset-1 bg-gray-900 rounded-2xl"></div>
                  
                  {/* Abstract Geometric Design */}
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
                    <svg 
                      viewBox="0 0 200 200" 
                      className="w-full h-full opacity-80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Background Gradient */}
                      <defs>
                        <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                          <stop offset="0%" stopColor="#4f46e5" />
                          <stop offset="100%" stopColor="#7c3aed" />
                        </radialGradient>
                      </defs>
                      
                      {/* Abstract Shapes */}
                      <rect x="10" y="10" width="180" height="180" fill="url(#gradient)" rx="10" />
                      
                      <path 
                        d="M20,20 L180,20 L180,180 L20,180 Z" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="2"
                      />
                      
                      <path 
                        d="M50,50 Q100,20 150,50 T250,50" 
                        stroke="rgba(255,255,255,0.3)" 
                        fill="none" 
                        strokeWidth="1.5"
                      />
                      
                      <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                      
                      <polygon 
                        points="100,30 130,70 100,110 70,70" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.4)" 
                        strokeWidth="1.5"
                      />
                      
                      <line 
                        x1="20" y1="100" x2="180" y2="100" 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="1"
                      />
                      
                      <line 
                        x1="100" y1="20" x2="100" y2="180" 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50"></div>
      <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
    </div>
  );
}