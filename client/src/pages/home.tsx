import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { Zap, Target, Compass, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
              AI-Powered Tools for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Everyday Decisions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              We design thoughtful AI tools that make decisions easier and smarter. 
              Starting with real estate, shopping, tourism, and services—building lean, 
              experimenting fast, and solving problems that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work">
                <Button size="lg" className="px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  See What We're Building
                </Button>
              </Link>
              <Link href="/collaborate">
                <Button variant="outline" size="lg" className="px-8 py-4 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">Our Mission</h2>
            <p className="text-xl text-secondary leading-relaxed mb-8">
              We're not here to chase trends. We build lean, experiment fast, and focus on solving problems that matter. 
              Our goal is to turn promising ideas into reliable tools—backed by thoughtful design, privacy-aware AI, and continuous learning.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </FadeIn>
        </div>
      </section>

      {/* Values Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">What Drives Us</h2>
              <p className="text-xl text-secondary">Four principles that guide everything we build</p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Simplicity</h3>
                <p className="text-secondary">Clear, intuitive tools that remove complexity from decision-making</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Usefulness</h3>
                <p className="text-secondary">Every feature serves a real purpose and adds genuine value</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Curiosity</h3>
                <p className="text-secondary">Continuous learning and exploration of new possibilities</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-accent" />
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
