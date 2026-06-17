export function LuxuryBottom() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-white overflow-hidden font-sans text-black">
      {/* Top Ghost Zone (approx 65%) */}
      <div className="flex-[0.65] relative flex items-center justify-center min-h-[50vh]">
        <span
          className="absolute pointer-events-none select-none text-[#E8E8E8] font-bold tracking-tighter"
          style={{
            fontSize: "clamp(120px, 25vw, 450px)",
            lineHeight: 1,
          }}
        >
          Aplica
        </span>
      </div>

      {/* Separator Line */}
      <div className="w-full h-px bg-gray-200" />

      {/* Bottom Content Zone (approx 35%) */}
      <div className="flex-[0.35] w-full px-6 py-12 md:px-16 md:py-16 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-black leading-[1.1]">
              AI-Powered Tools for Everyday Decisions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-light">
              We design thoughtful AI tools that make decisions easier and smarter. Starting with short term rentals, travel, and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium text-sm md:text-base hover:bg-gray-800 transition-colors whitespace-nowrap">
                See What We're Building
              </button>
              <button className="border border-gray-300 bg-transparent text-black px-8 py-4 rounded-full font-medium text-sm md:text-base hover:border-gray-400 hover:bg-gray-50 transition-colors whitespace-nowrap">
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
