import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "wouter";

export function SimpleOrb() {
  const [location] = useLocation();
  const { scrollYProgress } = useScroll();
  const isHomepage = location === "/";
  
  // Mission section highlight (around 25-50% of scroll)
  const missionOrbOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.65], [0, 1, 1, 0]);
  const missionOrbScale = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0.8, 1.8, 1.2]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Main animated orb */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 rounded-full blur-2xl opacity-60"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary orb */}
      <motion.div
        className="absolute top-32 right-32 w-24 h-24 bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-200 rounded-full blur-xl opacity-40"
        animate={{
          y: [0, -20, 0],
          scale: [1, 0.9, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Mission section gradient orb - Homepage only */}
      {isHomepage && (
        <motion.div
          style={{
            opacity: missionOrbOpacity,
            scale: missionOrbScale,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {/* Purple/Pink/Orange gradient */}
          <motion.div
            className="w-96 h-96 bg-gradient-to-br from-purple-400/30 via-pink-400/30 to-orange-400/30 rounded-full blur-3xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Blue/Cyan/Teal gradient overlay */}
          <motion.div
            className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-blue-300/25 via-cyan-300/25 to-teal-300/25 rounded-full blur-2xl top-8 left-8"
            animate={{
              rotate: [360, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </div>
  );
}