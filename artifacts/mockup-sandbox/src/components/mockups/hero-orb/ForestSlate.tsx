import React from 'react';
import { motion } from 'framer-motion';

export function ForestSlate() {
  return (
    <div className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#fafafa]">
      {/* Subtle radial gradient background wash */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: 'radial-gradient(circle at center, #ffffff 0%, #f1f5f9 100%)'
        }}
      />

      {/* Orbs - Forest Green & Slate */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(22, 101, 52, 0.08) 0%, rgba(22, 101, 52, 0) 70%)',
          filter: 'blur(80px)'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[900px] h-[900px] rounded-full z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(51, 65, 85, 0.06) 0%, rgba(51, 65, 85, 0) 70%)',
          filter: 'blur(100px)'
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(21, 128, 61, 0.04) 0%, rgba(21, 128, 61, 0) 70%)',
          filter: 'blur(120px)'
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-light text-slate-900 tracking-tight leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          AI-Powered Tools<br />
          <span className="font-normal">for Everyday Decisions</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          We design thoughtful AI tools that make decisions easier and smarter. Starting with short term rentals, travel, and services.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <button className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium text-sm hover:bg-slate-800 transition-colors duration-300 w-full sm:w-auto">
            See What We're Building
          </button>
          <button className="px-8 py-3.5 bg-transparent border border-slate-300 text-slate-700 rounded-full font-medium text-sm hover:border-slate-400 hover:text-slate-900 transition-colors duration-300 w-full sm:w-auto">
            Start a Conversation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
