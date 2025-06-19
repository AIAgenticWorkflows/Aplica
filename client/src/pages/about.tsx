import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { Zap, Target, Compass, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section className="py-32 min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <FadeIn>
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-12 tracking-tight">About Aplica</h1>
            <p className="text-2xl text-gray-600 font-light">
              Building thoughtful AI tools with a global mindset and local impact
            </p>
          </FadeIn>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <FadeIn>
            <div className="floating-card bg-white/90 backdrop-blur-xl rounded-3xl p-16 shadow-2xl border border-gray-100/50">
              <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Our Story</h2>
              <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  Aplica was born from a simple observation: people make countless decisions every day, 
                  and technology should make those decisions easier, not harder. We're an early-stage company 
                  exploring how automation and agent-based AI can bring real value to businesses and individuals.
                </p>
                <p>
                  We started with practical use cases in real estate, shopping, tourism, and services—areas 
                  where good decisions have real impact on people's lives. Our approach is deliberate: 
                  build lean, experiment fast, and focus on solving problems that actually matter.
                </p>
                <p>
                  While we're just getting started, we build with a global mindset. We believe the best 
                  solutions come from diverse perspectives and collaborative thinking. That's why we're 
                  always open to working with people who share our vision of creating meaningful, useful products.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <FadeIn>
            <h2 className="text-5xl font-black text-slate-900 mb-16 text-center tracking-tight">Our Values</h2>
          </FadeIn>
          <div className="space-y-10">
            <FadeIn delay={0.1}>
              <div className="floating-card bg-white/90 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-blue-100/50">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Simplicity</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  We believe the best solutions are often the simplest ones. Our tools remove complexity 
                  from decision-making rather than adding it. Every interface, every feature, every interaction 
                  is designed to be intuitive and clear.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 logo-yellow" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">Usefulness</h3>
                </div>
                <p className="text-secondary leading-relaxed">
                  Every feature we build must serve a real purpose and add genuine value. We don't chase 
                  trends or add features for their own sake. If it doesn't make decisions easier or outcomes 
                  better, it doesn't belong in our products.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4">
                    <Compass className="w-6 h-6 logo-coral" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">Curiosity</h3>
                </div>
                <p className="text-secondary leading-relaxed">
                  We're driven by continuous learning and exploration. The AI landscape is evolving rapidly, 
                  and we stay curious about new possibilities while remaining grounded in practical applications 
                  that solve real problems.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                    <ShieldCheck className="w-6 h-6 logo-emerald" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">Integrity</h3>
                </div>
                <p className="text-secondary leading-relaxed">
                  We build privacy-first AI with transparent, ethical practices. Our users' data and trust 
                  are sacred. We're committed to responsible AI development that respects user privacy 
                  and promotes beneficial outcomes for society.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Future Vision */}
        <FadeIn delay={0.5}>
          <div className="relative rounded-2xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 gradient-bg opacity-5"></div>
            <div className="relative z-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Looking Forward</h2>
            <p className="text-xl text-secondary leading-relaxed mb-8">
              We're building more than tools—we're creating a new way for people to interact with AI 
              that feels natural, trustworthy, and genuinely helpful. Our vision is a world where 
              technology amplifies human decision-making rather than replacing it.
            </p>
            <Link href="/collaborate">
              <Button size="lg" className="px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Join Our Journey
              </Button>
            </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
