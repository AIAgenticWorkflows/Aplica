import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxOrb() {
  const { scrollYProgress } = useScroll();
  
  // Hero section (0-0.25): Large colorful orb
  const heroOrbY = useTransform(scrollYProgress, [0, 0.25], [0, 200]);
  const heroOrbScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.6]);
  const heroOrbOpacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [0.8, 0.4, 0]);
  
  // Mission section (0.25-0.5): Transform to geometric background pattern
  const missionPatternOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const missionPatternY = useTransform(scrollYProgress, [0.25, 0.5], [-100, 100]);
  
  // Values section (0.5-0.75): Grid of dots matching values
  const valuesDotsOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
  const valuesDotsY = useTransform(scrollYProgress, [0.5, 0.75], [50, 200]);
  
  // Footer section (0.75-1): Time display with subtle glow
  const timeOpacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);
  const timeY = useTransform(scrollYProgress, [0.75, 1], [50, 0]);
  const timeGlowOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 0.3]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Hero Section: Large Animated Orb */}
      <motion.div
        style={{
          y: heroOrbY,
          scale: heroOrbScale,
          opacity: heroOrbOpacity,
        }}
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 rounded-full blur-2xl"
      />
      
      <motion.div
        style={{
          y: useTransform(heroOrbY, (value) => value * 0.8),
          scale: useTransform(heroOrbScale, (value) => value * 0.7),
          opacity: useTransform(heroOrbOpacity, (value) => value * 0.6),
        }}
        className="absolute top-32 right-32 w-24 h-24 bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-200 rounded-full blur-xl"
      />

      {/* Mission Section: Geometric Background Pattern */}
      <motion.div
        style={{
          opacity: missionPatternOpacity,
          y: missionPatternY,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="grid grid-cols-8 gap-4 opacity-10">
          {Array.from({ length: 32 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Values Section: Four Corner Dots */}
      <motion.div
        style={{
          opacity: valuesDotsOpacity,
          y: valuesDotsY,
        }}
        className="absolute inset-0"
      >
        {/* Simplicity - Top Left */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-sm"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Usefulness - Top Right */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full blur-sm"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Curiosity - Bottom Left */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-sm"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Integrity - Bottom Right */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            delay: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Footer Section: Time with Glow */}
      <motion.div
        style={{
          opacity: timeOpacity,
          y: timeY,
        }}
        className="absolute bottom-20 right-20 relative"
      >
        {/* Glow effect */}
        <motion.div
          style={{ opacity: timeGlowOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-xl scale-150"
        />
        <div className="relative text-3xl font-light text-gray-600 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-200">
          {currentTime}
        </div>
      </motion.div>
    </div>
  );
}