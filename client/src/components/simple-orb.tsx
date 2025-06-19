import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "wouter";

export function SimpleOrb() {
  const [location] = useLocation();
  const { scrollYProgress } = useScroll();
  const isHomepage = location === "/";
  
  // Mission section highlight - expand right at mission start
  const missionOrbOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0, 0.9, 0.9, 0]);
  const missionOrbScale = useTransform(scrollYProgress, [0.15, 0.25, 0.45], [0.3, 2.2, 1.8]);
  
  // What Drives Us section - orb splits into four value orbs (ends before black nav area)
  const valuesOrbOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.7, 0.75], [0, 1, 1, 0]);
  const valuesOrbScale = useTransform(scrollYProgress, [0.55, 0.65, 0.7], [0.5, 1, 0.8]);

  if (!isHomepage) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-30 overflow-hidden">
      {/* Main animated orb - starts at bottom of CTA */}
      <motion.div
        className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 rounded-full blur-2xl opacity-30"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary orb */}
      <motion.div
        className="absolute bottom-60 right-32 w-24 h-24 bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-200 rounded-full blur-xl opacity-20"
        animate={{
          y: [0, -20, 0],
          scale: [1, 0.9, 1],
          opacity: [0.2, 0.4, 0.2],
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
          className="w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
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
          className="absolute inset-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-400/8 via-cyan-400/8 to-teal-400/8 rounded-full blur-2xl top-12 left-12"
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

      {/* What Drives Us section - Four value orbs */}
      <motion.div
        style={{
          opacity: valuesOrbOpacity,
          scale: valuesOrbScale,
        }}
        className="absolute inset-0"
      >
        {/* Simplicity - Top Left */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-blue-600/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Usefulness - Top Right */}
        <motion.div
          className="absolute top-1/4 right-1/6 w-32 h-32 bg-gradient-to-br from-green-400/15 to-green-600/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
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
          className="absolute bottom-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-orange-400/15 to-red-500/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
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
          className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 4,
            delay: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}