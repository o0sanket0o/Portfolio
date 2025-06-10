import SkillsCards from "./SkillsCards";
import SectionTitle from "./SectionTitle";
import MarqueeCards from "./MarqueeCards";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="w-full min-h-[800px] flex flex-col xl:w-[90%] relative z-10">
        <div className="w-full">
          <SectionTitle title="SKILLS" subtitle="WHAT I DO" />
        </div>
        
        <div className="xl:border-l-2 xl:border-r-2 xl:border-gray-700/50 h-full">
          {/* First marquee row */}
          <div className="relative mb-8">
            <div className="absolute top-[190px] w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <MarqueeCards direction="left">
              <SkillsCards />
            </MarqueeCards>
          </div>
          
          {/* Second marquee row */}
          <div className="relative">
            <div className="absolute top-[190px] w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <MarqueeCards direction="right">
              <SkillsCards />
            </MarqueeCards>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50"></div>
      <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
    </div>
  );
};

export default Skills;