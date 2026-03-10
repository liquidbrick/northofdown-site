export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#140e06]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-[#2a1a0a] border border-[#c8872a]/20 flex items-center justify-center overflow-hidden">
              {/* Replace this div with an <Image> tag once you have a photo */}
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-[#c8872a]/10 border border-[#c8872a]/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(200,135,42,0.5)" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="font-[family-name:var(--font-lato)] text-[#f5efe6]/20 text-xs tracking-widest uppercase">
                  Artist Photo
                </p>
                <p className="font-[family-name:var(--font-lato)] text-[#f5efe6]/15 text-xs mt-1">
                  Replace with your image
                </p>
              </div>
            </div>
            {/* Decorative amber border offset */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#c8872a]/20 -z-10" />
          </div>

          {/* Bio */}
          <div>
            <p className="font-[family-name:var(--font-lato)] text-[#c8872a] tracking-[0.4em] text-xs uppercase mb-4">
              The Story
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl text-[#f5efe6] mb-8 leading-tight">
              About North of Down
            </h2>
            <div className="w-16 h-px bg-[#c8872a] mb-8" />

            {/* Replace this placeholder text with the artist's real bio */}
            <div className="space-y-5 font-[family-name:var(--font-lato)] text-[#f5efe6]/70 leading-relaxed text-base">
              <p>
                Born from the open roads and wide skies of the American heartland, North of Down weaves together the honest storytelling of classic country with the raw edge of Americana.
              </p>
              <p>
                [Add your artist bio here. Tell your story — where you&apos;re from, what drives your music, who you are.]
              </p>
              <p>
                [A third paragraph about your journey, influences, or what listeners can expect from your music.]
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              {[
                { label: "Facebook", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "YouTube", href: "#" },
                { label: "TikTok", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-[family-name:var(--font-lato)] text-xs text-[#f5efe6]/40 hover:text-[#c8872a] transition-colors tracking-widest uppercase"
                >
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
