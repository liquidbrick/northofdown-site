export default function Hero() {
  return (
    <section id="hero" className="aurora-bg relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Orb blobs */}
      <div className="orb w-[600px] h-[600px] bg-[#7c3aed] opacity-20 top-[-100px] left-[-150px] pulse-glow" />
      <div className="orb w-[500px] h-[500px] bg-[#d946ef] opacity-15 bottom-[-80px] right-[-100px] pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="orb w-[350px] h-[350px] bg-[#06b6d4] opacity-15 top-[30%] right-[10%] pulse-glow" style={{ animationDelay: "3s" }} />

      {/* Sacred geometry ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="700" height="700" viewBox="0 0 700 700" className="opacity-5 spin-slow" fill="none">
          <circle cx="350" cy="350" r="300" stroke="#d946ef" strokeWidth="0.5" />
          <circle cx="350" cy="350" r="240" stroke="#06b6d4" strokeWidth="0.5" />
          <circle cx="350" cy="350" r="180" stroke="#7c3aed" strokeWidth="0.5" />
          {[0,60,120,180,240,300].map(angle => {
            const r = 300;
            const x = 350 + r * Math.cos((angle - 90) * Math.PI / 180);
            const y = 350 + r * Math.sin((angle - 90) * Math.PI / 180);
            return <circle key={angle} cx={x} cy={y} r="180" stroke="#d946ef" strokeWidth="0.4" />;
          })}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 fade-in-up">
        <p className="font-[family-name:var(--font-raleway)] text-[#d946ef] tracking-[0.5em] text-xs uppercase mb-8 float">
          ✦ Spirit · Sound · Presence ✦
        </p>
        <h1 className="font-[family-name:var(--font-cinzel)] font-black leading-none mb-4">
          <span className="block text-6xl md:text-8xl lg:text-9xl text-[#f0e6ff] text-glow">North</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl shimmer-text">of Down</span>
        </h1>
        <p className="font-[family-name:var(--font-raleway)] font-light text-[#f0e6ff]/50 text-lg mt-10 tracking-widest max-w-sm mx-auto">
          Music from the edge of inner space.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
          <a href="#music"
            className="px-8 py-3 bg-gradient-to-r from-[#7c3aed] to-[#d946ef] text-white font-[family-name:var(--font-raleway)] font-semibold tracking-widest text-sm uppercase hover:opacity-90 transition-opacity glow-magenta">
            Listen Now
          </a>
          <a href="#shows"
            className="px-8 py-3 border border-[#d946ef]/40 text-[#f0e6ff]/70 font-[family-name:var(--font-raleway)] tracking-widest text-sm uppercase hover:border-[#06b6d4] hover:text-[#06b6d4] transition-colors">
            Tour Dates
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-[family-name:var(--font-raleway)] text-xs tracking-widest uppercase text-[#f0e6ff]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#d946ef] to-transparent" />
      </div>
    </section>
  );
}
