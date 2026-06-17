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
      {/* Hero orb — amber, centred just below the CTA buttons */}
      <motion.div
        style={{ opacity: heroOrbOpacity, top: "58%", left: "50%", x: "-50%" }}
        className="absolute w-[45rem] h-[45rem] rounded-full blur-[120px]"
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)", opacity: 0.35 }}
        />
      </motion.div>

      {/* Secondary hero orb — sand, bottom-right */}
      <motion.div
        style={{ opacity: heroOrbOpacity, top: "52%", left: "62%" }}
        className="absolute w-[40rem] h-[40rem] rounded-full blur-[100px]"
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, #D4A96A 0%, transparent 70%)", opacity: 0.35 }}
        />
      </motion.div>

      {/* Warm cream accent orb */}
      <motion.div
        style={{ opacity: heroOrbOpacity, top: "45%", left: "28%" }}
        className="absolute w-[35rem] h-[35rem] rounded-full blur-[90px]"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, #FEF3C7 0%, transparent 70%)", opacity: 0.55 }}
        />
      </motion.div>

      {/* Mission section — warm amber gradient wash */}
      <motion.div
        style={{ opacity: missionOrbOpacity, scale: missionOrbScale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          className="w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, rgba(212,169,106,0.08) 50%, transparent 70%)" }}
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-2xl top-12 left-12"
          style={{ background: "radial-gradient(circle, rgba(254,243,199,0.15) 0%, transparent 70%)" }}
          animate={{ rotate: [360, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* What Drives Us — four warm-toned value orbs */}
      <motion.div
        style={{ opacity: valuesOrbOpacity, scale: valuesOrbScale }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 right-1/6 w-32 h-32 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(212,169,106,0.2) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-32 h-32 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(254,243,199,0.3) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-32 h-32 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(180,130,80,0.2) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, delay: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
