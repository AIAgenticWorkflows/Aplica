import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import "./_group.css";

export function EditorialLeft() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Slight delay to ensure smooth transition
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden font-sans selection:bg-black selection:text-white">
      {/* Background container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Horizontal rule separating "above" from "below" */}
        <div 
          className={`absolute top-[20%] left-0 w-full h-[1px] bg-black/10 origin-left transition-transform duration-1000 delay-300 ease-out ${
            mounted ? "scale-x-100" : "scale-x-0"
          }`} 
        />
        
        {/* Subtle vertical rule on the right */}
        <div 
          className={`absolute top-[20%] right-12 w-[1px] h-[80%] bg-black/10 origin-top hidden lg:block transition-transform duration-1000 delay-700 ease-out ${
            mounted ? "scale-y-100" : "scale-y-0"
          }`} 
        />
        
        {/* Subtle vertical text on the right */}
        <div className="absolute top-[35%] right-8 origin-top-right -rotate-90 hidden lg:block">
          <span 
            className={`text-[8rem] xl:text-[10rem] font-bold text-black/[0.03] tracking-tighter uppercase leading-none select-none transition-all duration-1000 delay-1000 ease-out inline-block ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            01
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col pt-[20%]">
        
        {/* Header content */}
        <div className="flex-1 flex flex-col justify-center pb-24 lg:w-[70%] xl:w-[60%]">
          
          {/* Eyebrow */}
          <div className="overflow-hidden mb-12">
            <p 
              className={`text-sm font-medium tracking-widest uppercase flex items-center gap-4 text-black/60 transition-transform duration-700 ease-out delay-200 ${
                mounted ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <span className="w-8 h-[1px] bg-black/60 inline-block"></span>
              Aplica
            </p>
          </div>

          {/* Headline */}
          <h1 
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-12 transition-all duration-1000 ease-out delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            AI-Powered Tools<br />
            <span className="text-black/30">for Everyday Decisions</span>
          </h1>

          {/* Subtext */}
          <p 
            className={`text-lg md:text-xl text-black/60 leading-relaxed max-w-lg mb-16 transition-all duration-1000 ease-out delay-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We design thoughtful AI tools that make decisions easier and smarter. 
            Starting with short term rentals, travel, and services.
          </p>

          {/* Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 transition-all duration-1000 ease-out delay-800 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button className="group relative px-8 py-4 bg-black text-white rounded-full text-sm font-medium tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-2">
                See What We're Building
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
            
            <button className="px-8 py-4 bg-transparent border border-black/20 text-black rounded-full text-sm font-medium tracking-wide transition-all hover:border-black hover:bg-black/5 active:scale-95 w-full sm:w-auto">
              Start a Conversation
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
