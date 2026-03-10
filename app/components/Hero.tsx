export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient — replace with artist photo later */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0804] via-[#2a1a0a] to-[#1a1209]" />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at 60% 40%, rgba(200,135,42,0.25) 0%, transparent 60%),
                            radial-gradient(ellipse at 20% 80%, rgba(107,124,92,0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 fade-in-up">
        <p className="font-[family-name:var(--font-lato)] text-[#c8872a] tracking-[0.4em] text-sm uppercase mb-6">
          Country &amp; Americana
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl lg:text-9xl font-black text-[#f5efe6] hero-text-shadow leading-none mb-4">
          North
          <br />
          <span className="text-[#c8872a]">of Down</span>
        </h1>
        <p className="font-[family-name:var(--font-lato)] text-[#f5efe6]/60 text-lg mt-8 tracking-widest max-w-md mx-auto">
          Stories from the road. Songs from the soul.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="#music"
            className="px-8 py-3 bg-[#c8872a] text-[#1a1209] font-[family-name:var(--font-lato)] font-bold tracking-widest text-sm uppercase hover:bg-[#d99a3a] transition-colors"
          >
            Listen Now
          </a>
          <a
            href="#shows"
            className="px-8 py-3 border border-[#f5efe6]/30 text-[#f5efe6]/80 font-[family-name:var(--font-lato)] tracking-widest text-sm uppercase hover:border-[#c8872a] hover:text-[#c8872a] transition-colors"
          >
            Tour Dates
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-[family-name:var(--font-lato)] text-xs tracking-widest uppercase text-[#f5efe6]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#f5efe6] to-transparent" />
      </div>
    </section>
  );
}
