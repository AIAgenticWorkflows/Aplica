import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { Zap, Target, Compass, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="text-5xl lg:text-6xl font-light text-black mb-8 text-balance">About Aplica</h1>
            <p className="text-xl text-gray-600">
              Building thoughtful AI tools with a global mindset and local impact
            </p>
          </FadeIn>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <FadeIn>
            <div className="minimal-card rounded-2xl p-12">
              <h2 className="text-3xl font-light text-black mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-4xl font-light text-black mb-12 text-center">Our Values</h2>
          </FadeIn>
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="minimal-card rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-black">Simplicity</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We believe the best solutions are often the simplest ones. Our tools remove complexity 
                  from decision-making rather than adding it. Every interface, every feature, every interaction 
                  is designed to be intuitive and clear.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="minimal-card rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-black">Usefulness</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Every feature serves a real purpose and adds genuine value. We prioritize solving 
                  real problems over building impressive technology for its own sake.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="minimal-card rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-black">Curiosity</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We stay curious about new possibilities while staying grounded in practical applications. 
                  Continuous learning drives our innovation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="minimal-card rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mr-4">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-black">Integrity</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Privacy-first AI, transparent practices, and ethical considerations guide every decision. 
                  We build tools that respect users and their data.
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
