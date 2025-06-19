import { motion } from "framer-motion";

export function SimpleOrb() {
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
    </div>
  );
}