import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function PureType() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-[100dvh] w-full bg-white text-zinc-950 overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.03,
        }}
      />

      {/* Faint geometric circle outline structural element */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-zinc-200 pointer-events-none"
        style={{
          opacity: mounted ? 0.3 : 0,
          transform: `translate(-50%, -50%) scale(${mounted ? 1 : 0.95})`,
          transition: 'opacity 2s ease-out, transform 2s ease-out'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Accent line above headline */}
        <div 
          className="h-px bg-zinc-300 w-12 mb-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: `scaleX(${mounted ? 1 : 0})`,
            transition: 'opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s',
            transformOrigin: 'center'
          }}
        />

        {/* Headline */}
        <h1 
          className="text-5xl md:text-[88px] leading-[1.05] tracking-tight font-light text-zinc-900 mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: `translateY(${mounted ? 0 : '20px'})`,
            transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s'
          }}
        >
          AI-Powered Tools for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-400 font-normal">
            Everyday Decisions
          </span>
        </h1>

        {/* Subtext */}
        <p 
          className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12 font-light"
          style={{
            opacity: mounted ? 1 : 0,
            transform: `translateY(${mounted ? 0 : '20px'})`,
            transition: 'opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s'
          }}
        >
          We design thoughtful AI tools that make decisions easier and smarter. Starting with short term rentals, travel, and services.
        </p>

        {/* Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: `translateY(${mounted ? 0 : '20px'})`,
            transition: 'opacity 1s ease-out 0.7s, transform 1s ease-out 0.7s'
          }}
        >
          <button className="h-12 px-8 rounded-full bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 group">
            See What We're Building
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="h-12 px-8 rounded-full bg-transparent border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center">
            Start a Conversation
          </button>
        </div>
      </div>
    </div>
  );
}
