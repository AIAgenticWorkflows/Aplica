import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxOrb() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to move the orb down and change its properties
  const orbY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 150, 400, 600]);
  const orbScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.5, 0.3]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.6, 0.4, 0.2, 0.1]);
  
  // Create time display based on scroll position
  const timeOpacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [0, 0, 1]);
  const timeY = useTransform(scrollYProgress, [0.5, 0.8, 1], [50, 20, 0]);

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
      {/* Animated Orb */}
      <motion.div
        style={{
          y: orbY,
          scale: orbScale,
          opacity: orbOpacity,
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 rounded-full blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Smaller secondary orb */}
      <motion.div
        style={{
          y: useTransform(orbY, (value) => value * 0.7),
          scale: useTransform(orbScale, (value) => value * 0.6),
          opacity: useTransform(orbOpacity, (value) => value * 0.5),
        }}
        className="absolute top-32 right-32 w-20 h-20 bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-200 rounded-full blur-lg"
      />

      {/* Time Display */}
      <motion.div
        style={{
          opacity: timeOpacity,
          y: timeY,
        }}
        className="absolute bottom-20 right-20 text-2xl font-light text-gray-400"
      >
        {currentTime}
      </motion.div>
    </div>
  );
}