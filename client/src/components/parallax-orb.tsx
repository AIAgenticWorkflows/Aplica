import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "wouter";

export function ParallaxOrb() {
  const [location] = useLocation();
  const { scrollYProgress } = useScroll();
  
  // Hero section (0-0.25): Large colorful orb
  const heroOrbY = useTransform(scrollYProgress, [0, 0.25], [0, 200]);
  const heroOrbScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.6]);
  const heroOrbOpacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [0.8, 0.4, 0]);
  
  // Mission section (0.25-0.5): Highlight mission with color transformation
  const missionOrbOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const missionOrbScale = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0.8, 1.5, 1.2]);
  const missionOrbY = useTransform(scrollYProgress, [0.25, 0.5], [-100, 100]);
  
  // Mission background pattern
  const missionPatternOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 0.6, 0.6, 0]);
  const missionPatternY = useTransform(scrollYProgress, [0.25, 0.5], [-50, 50]);
  
  // Values section (0.5-0.75): Four large orbs highlighting values
  const valuesDotsOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
  const valuesDotsScale = useTransform(scrollYProgress, [0.5, 0.6, 0.75], [0.5, 1.2, 0.8]);
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
  const isHomepage = location === "/";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Hero Section: Large Animated Orb - Show on all pages */}
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

      {/* Mission Section: Enhanced Orb Highlighting - Homepage Only */}
      {isHomepage && (
        <>
          {/* Mission-focused large orb */}
          <motion.div
            style={{
              opacity: missionOrbOpacity,
              scale: missionOrbScale,
              y: missionOrbY,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              className="w-80 h-80 bg-gradient-to-br from-blue-400/40 via-purple-400/40 to-pink-400/40 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 w-60 h-60 bg-gradient-to-br from-cyan-300/30 via-blue-300/30 to-indigo-300/30 rounded-full blur-2xl top-10 left-10"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Mission text overlay effect */}
          <motion.div
            style={{
              opacity: useTransform(missionOrbOpacity, [0, 1], [0, 0.8]),
              scale: useTransform(missionOrbScale, [0.8, 1.5], [0.9, 1.1]),
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
          >
            <motion.div
              className="text-6xl font-light text-white/20 select-none"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Our Mission
            </motion.div>
          </motion.div>

          {/* Background pattern */}
          <motion.div
            style={{
              opacity: missionPatternOpacity,
              y: missionPatternY,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Subtle background circles */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-pink-200/10 to-orange-200/10 rounded-full blur-3xl" />
            </div>
            
            {/* Animated particles */}
            <div className="grid grid-cols-16 gap-8 opacity-10 w-full max-w-6xl">
              {Array.from({ length: 32 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  animate={{
                    scale: [0.5, 1.5, 0.5],
                    opacity: [0.1, 0.6, 0.1],
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
        </>
      )}

      {/* Values Section: Four Prominent Orbs Highlighting Values - Homepage Only */}
      {isHomepage && (
        <motion.div
          style={{
            opacity: valuesDotsOpacity,
            scale: valuesDotsScale,
          }}
          className="absolute inset-0"
        >
          {/* Simplicity - Top Left with label */}
          <motion.div className="absolute top-1/4 left-1/6">
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full relative"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(59, 130, 246, 0.6)",
                  "0 0 20px rgba(59, 130, 246, 0.3)"
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/60 to-blue-500/60 rounded-full blur-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Simplicity</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Usefulness - Top Right with label */}
          <motion.div className="absolute top-1/4 right-1/6">
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full relative"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(34, 197, 94, 0.3)",
                  "0 0 40px rgba(34, 197, 94, 0.6)",
                  "0 0 20px rgba(34, 197, 94, 0.3)"
                ],
              }}
              transition={{
                duration: 3,
                delay: 0.75,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-300/60 to-green-500/60 rounded-full blur-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Usefulness</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Curiosity - Bottom Left with label */}
          <motion.div className="absolute bottom-1/4 left-1/6">
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full relative"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(251, 146, 60, 0.3)",
                  "0 0 40px rgba(251, 146, 60, 0.6)",
                  "0 0 20px rgba(251, 146, 60, 0.3)"
                ],
              }}
              transition={{
                duration: 3,
                delay: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300/60 to-red-400/60 rounded-full blur-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Curiosity</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Integrity - Bottom Right with label */}
          <motion.div className="absolute bottom-1/4 right-1/6">
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full relative"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                  "0 0 40px rgba(168, 85, 247, 0.6)",
                  "0 0 20px rgba(168, 85, 247, 0.3)"
                ],
              }}
              transition={{
                duration: 3,
                delay: 2.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300/60 to-pink-400/60 rounded-full blur-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Integrity</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

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