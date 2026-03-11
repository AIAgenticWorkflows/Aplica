import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "wouter";

export function SimpleOrb() {
  const [location] = useLocation();
  const { scrollYProgress } = useScroll();
  const isHomepage = location === "/";

  // Master: everything fades out before the black footer
  const masterOpacity = useTransform(scrollYProgress, [0, 0.78, 0.86], [1, 1, 0]);

  // Hero orbs: visible on load, fade out as user scrolls away from hero
  const heroOrbOpacity = useTransform(scrollYProgress, [0, 0.05, 0.14, 0.2], [0.4, 0.5, 0.3, 0]);

  // Mission section orb
  const missionOrbOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.45, 0.55], [0, 0.9, 0.9, 0]);
  const missionOrbScale = useTransform(scrollYProgress, [0.15, 0.25, 0.45], [0.3, 2.2, 1.8]);

  // Values section orbs
  const valuesOrbOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.7, 0.78], [0, 1, 1, 0]);
  const valuesOrbScale = useTransform(scrollYProgress, [0.55, 0.65, 0.7], [0.5, 1, 0.8]);

  if (!isHomepage) {
    return null;
  }

  return (
    <motion.div
      style={{ opacity: masterOpacity }}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-30 overflow-hidden"
    >
      {/* Hero orb — centred horizontally, starting just below the CTA buttons */}
      <motion.div
        style={{ opacity: heroOrbOpacity, top: "60%", left: "50%", x: "-50%" }}
        className="absolute w-72 h-72 bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 28, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary hero orb */}
      <motion.div
        style={{ opacity: heroOrbOpacity, top: "54%", left: "62%" }}
        className="absolute w-36 h-36 bg-gradient-to-br from-blue-300 via-cyan-200 to-teal-200 rounded-full blur-2xl opacity-20"
        animate={{ y: [0, -18, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Mission section gradient orb */}
      <motion.div
        style={{ opacity: missionOrbOpacity, scale: missionOrbScale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          className="w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-blue-400/8 via-cyan-400/8 to-teal-400/8 rounded-full blur-2xl top-12 left-12"
          animate={{ rotate: [360, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* What Drives Us — four value orbs */}
      <motion.div
        style={{ opacity: valuesOrbOpacity, scale: valuesOrbScale }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-blue-600/15 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 right-1/6 w-32 h-32 bg-gradient-to-br from-green-400/15 to-green-600/15 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-orange-400/15 to-red-500/15 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 4, delay: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
