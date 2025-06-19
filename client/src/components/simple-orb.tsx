import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "wouter";

export function SimpleOrb() {
  const [location] = useLocation();
  const { scrollYProgress } = useScroll();
  const isHomepage = location === "/";
  
  // Only render on homepage
  if (!isHomepage) {
    return null;
  }
  
  // Mission section highlight (around 30-60% of scroll for better visibility)
  const missionOrbOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55, 0.7], [0, 0.9, 0.9, 0]);
  const missionOrbScale = useTransform(scrollYProgress, [0.25, 0.4, 0.55], [0.5, 2, 1.5]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-30 overflow-hidden">
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

      {/* Mission section gradient orb */}
      <motion.div
        style={{
          opacity: missionOrbOpacity,
          scale: missionOrbScale,
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {/* Purple/Pink/Orange gradient */}
        <motion.div
          className="w-[500px] h-[500px] bg-gradient-to-br from-purple-500/70 via-pink-500/70 to-orange-500/70 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Blue/Cyan/Teal gradient overlay */}
        <motion.div
          className="absolute inset-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-400/60 via-cyan-400/60 to-teal-400/60 rounded-full blur-2xl top-12 left-12"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
}