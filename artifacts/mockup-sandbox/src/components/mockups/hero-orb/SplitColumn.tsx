import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

export function SplitColumn() {
  return (
    <div className="relative min-h-[100dvh] w-full bg-white text-black font-sans overflow-hidden flex flex-col md:flex-row">
      {/* Dot grid background */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.03
        }}
      />

      {/* Left Column (35%) */}
      <div className="relative z-10 w-full md:w-[35%] flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/10 px-6 py-12 md:px-12 md:py-16 min-h-[50vh] md:min-h-screen">
        {/* Top label */}
        <div>
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span className="text-xs font-medium tracking-widest uppercase text-black/60">
              Aplica — Building AI Tools
            </span>
          </div>
        </div>

        {/* Middle subtext */}
        <div className="mt-20 md:mt-auto mb-20 md:mb-32 max-w-[280px]">
          <p className="text-base md:text-lg leading-relaxed text-black/70 font-light">
            We design thoughtful AI tools that make decisions easier and smarter. Starting with short term rentals, travel, and services.
          </p>
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col gap-4 w-full max-w-[320px]">
          <button className="group flex items-center justify-between w-full rounded-full bg-black text-white px-6 py-4 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]">
            <span>See What We're Building</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="group flex items-center justify-between w-full rounded-full bg-transparent border border-black/20 text-black px-6 py-4 text-sm font-medium transition-all hover:border-black hover:bg-black/5 active:scale-[0.98]">
            <span>Start a Conversation</span>
            <MessageCircle className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>

      {/* Right Column (65%) */}
      <div className="relative z-10 w-full md:w-[65%] px-6 py-12 md:px-16 md:py-16 flex flex-col justify-start min-h-[50vh] md:min-h-screen">
        <h1 
          className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9.5rem] leading-[0.85] font-light tracking-tighter"
          style={{ 
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            letterSpacing: '-0.04em'
          }}
        >
          AI-Powered<br />
          Tools for<br />
          Everyday<br />
          Decisions.
        </h1>
      </div>
    </div>
  );
}
