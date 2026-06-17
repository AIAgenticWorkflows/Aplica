import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { Zap, Target, Compass, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero + Mission — one continuous section */}
      <section className="relative overflow-hidden bg-[#FAFAF9]">
        <div className="absolute inset-0 hero-grid opacity-60 parallax-bg"></div>

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative pt-32 lg:pt-40 pb-20 lg:pb-24">
          <FadeIn direction="scale" delay={0.2}>
            <h1 className="text-5xl lg:text-7xl font-light text-slate-800 mb-12 leading-tight text-balance">
              AI tools for{" "}
              <span className="gradient-text font-medium">
                everyday decisions
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work">
                <Button size="lg" className="px-8 py-4 text-base font-medium bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded-full smooth-bounce">
                  See What We're Building
                </Button>
              </Link>
              <Link href="/collaborate">
                <Button variant="outline" size="lg" className="px-8 py-4 text-base font-medium border border-gray-300 text-black hover:bg-gray-50 transition-all duration-300 rounded-full smooth-bounce">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Mission — flows directly beneath, same background */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative pb-32 lg:pb-40">
          <FadeIn>
            <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
              We're not here to chase trends.
            </p>
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
              <div className="floating-card bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-100/50 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">Privacy-first AI and transparent, ethical practices</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
