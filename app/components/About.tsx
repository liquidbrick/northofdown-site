export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-[#0a0518] overflow-hidden">
      <div className="orb w-[450px] h-[450px] bg-[#7c3aed] opacity-10 bottom-0 left-[-100px]" />
      <div className="orb w-[300px] h-[300px] bg-[#06b6d4] opacity-10 top-20 right-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo + sacred ring */}
          <div className="relative flex items-center justify-center">
            {/* Outer decorative ring */}
            <div className="absolute w-[340px] h-[340px] rounded-full border border-[#d946ef]/20 spin-slow" />
            <div className="absolute w-[290px] h-[290px] rounded-full border border-[#06b6d4]/15" style={{ animationDirection: "reverse" }} />

            <div className="relative w-72 h-96 border border-[#d946ef]/25 bg-[#0d0520] flex items-center justify-center glow-violet overflow-hidden">
              {/* Replace with <Image> tag once you have a photo */}
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7c3aed]/20 to-[#d946ef]/20 border border-[#d946ef]/30 flex items-center justify-center mx-auto mb-4 float">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(217,70,239,0.5)" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/20 text-xs tracking-widest uppercase">Artist Photo</p>
                <p className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/10 text-xs mt-1">Replace with your image</p>
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#06b6d4]/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#d946ef]/40" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="font-[family-name:var(--font-raleway)] text-[#06b6d4] tracking-[0.5em] text-xs uppercase mb-4">
              ✦ The Story ✦
            </p>
            <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl text-[#f0e6ff] mb-8 leading-tight">
              About North<br />of Down
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#d946ef] to-[#06b6d4] mb-8" />

            <div className="space-y-5 font-[family-name:var(--font-raleway)] font-light text-[#f0e6ff]/65 leading-relaxed text-base">
              <p>
                North of Down is a sonic journey into the spaces between — where consciousness expands and music becomes a vessel for something deeper than words.
              </p>
              <p>
                [Add your artist bio here. Tell your story — what moves you, what you&apos;re seeking, what your music opens up.]
              </p>
              <p>
                [A third paragraph about your sound, your path, or the experience you want listeners to have.]
              </p>
            </div>

            <div className="mt-10 flex gap-6 flex-wrap">
              {[
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "YouTube", href: "#" },
                { label: "TikTok", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href}
                  className="font-[family-name:var(--font-raleway)] text-xs text-[#f0e6ff]/35 hover:text-[#d946ef] transition-colors tracking-widest uppercase">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
