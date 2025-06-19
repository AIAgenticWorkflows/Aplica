import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { Zap, Target, Compass, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tight">
              AI-Powered Tools for{" "}
              <span className="gradient-text relative">
                Everyday Decisions
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              We design thoughtful AI tools that make decisions easier and smarter. 
              Starting with real estate, shopping, tourism, and services—building lean, 
              experimenting fast, and solving problems that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/work">
                <Button size="lg" className="px-10 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 rounded-2xl">
                  See What We're Building
                </Button>
              </Link>
              <Link href="/collaborate">
                <Button variant="outline" size="lg" className="px-10 py-6 text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 rounded-2xl backdrop-blur-sm">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-12 tracking-tight">Our Mission</h2>
            <p className="text-2xl text-gray-600 leading-relaxed mb-12 font-light max-w-4xl mx-auto">
              We're not here to chase trends. We build lean, experiment fast, and focus on solving problems that matter. 
              Our goal is to turn promising ideas into reliable tools—backed by thoughtful design, privacy-aware AI, and continuous learning.
            </p>
            <div className="w-32 h-2 gradient-bg mx-auto rounded-full shadow-lg"></div>
          </FadeIn>
        </div>
      </section>

      {/* Values Preview */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">What Drives Us</h2>
              <p className="text-xl text-gray-600 font-light">Four principles that guide everything we build</p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="floating-card bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-100/50 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Simplicity</h3>
                <p className="text-gray-600 leading-relaxed">Clear, intuitive tools that remove complexity from decision-making</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="floating-card bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-100/50 group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Usefulness</h3>
                <p className="text-gray-600 leading-relaxed">Every feature serves a real purpose and adds genuine value</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="floating-card bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-100/50 group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Curiosity</h3>
                <p className="text-gray-600 leading-relaxed">Continuous learning and exploration of new possibilities</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-green-500">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 logo-emerald" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Integrity</h3>
                <p className="text-secondary">Privacy-first AI and transparent, ethical practices</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
