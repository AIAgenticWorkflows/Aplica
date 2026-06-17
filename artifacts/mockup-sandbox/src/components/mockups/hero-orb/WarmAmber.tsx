import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import "./_group.css";

export function WarmAmber() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#FAFAF9]">
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      
      {/* Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[45rem] h-[45rem] rounded-full blur-[120px] opacity-40 mix-blend-multiply"
          style={{
            background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)",
            top: "-10%",
            left: "-5%",
          }}
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[40rem] h-[40rem] rounded-full blur-[100px] opacity-40 mix-blend-multiply"
          style={{
            background: "radial-gradient(circle, #D4A96A 0%, transparent 70%)",
            bottom: "-10%",
            right: "-5%",
          }}
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[35rem] h-[35rem] rounded-full blur-[90px] opacity-60 mix-blend-multiply"
          style={{
            background: "radial-gradient(circle, #FEF3C7 0%, transparent 70%)",
            top: "20%",
            left: "30%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-slate-900 tracking-tight mb-6">
          AI-Powered Tools for <br className="hidden md:block" />
          Everyday Decisions
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          We design thoughtful AI tools that make decisions easier and smarter. Starting with short term rentals, travel, and services.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="rounded-full px-8 py-6 text-lg bg-black text-white hover:bg-slate-800 transition-colors">
            See What We're Building
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
