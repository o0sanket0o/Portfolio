import React from 'react';
import worldmap from '../assets/background/world-map.png';
import sanket from '../assets/Sanket.png';

export default function DiagonalSplitImages() {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-screen overflow-hidden">
      
      {/* LEFT: World Map Background with Text */}
      <div className="relative w-full h-screen">
        <img src={worldmap} alt="" className="object-cover w-full h-full" />
        
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 z-10">
          <h1 className="font-bold text-[72px] leading-tight">
            Hi, I'm <br />
            <span className="neucha-regular text-gray-500">Sanket</span>
          </h1>
          <div className="max-w-[80%] font-bold text-2xl mt-4">
            I try not to take life too seriously. <br />
            I enjoy meaningful conversations, good music and cricket.
          </div>
        </div>
      </div>

      {/* RIGHT: Diagonal Black Section with Image */}
      <div
        className="absolute top-0 right-0 w-2/3 h-screen bg-black opacity-80 flex justify-center items-center"
        style={{ clipPath: 'polygon(90% 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        <img
          src={sanket}
          alt="Sanket"
          className="object-contain max-w-[65%] max-h-[65%] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
