"use client";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 bg-[#0a0518] overflow-hidden">
      <div className="orb w-96 h-96 bg-[#06b6d4] opacity-10 bottom-0 right-[-80px]" />
      <div className="orb w-64 h-64 bg-[#d946ef] opacity-10 top-10 left-[-40px]" />

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-raleway)] text-[#06b6d4] tracking-[0.5em] text-xs uppercase mb-4">
            ✦ Connect ✦
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-6xl text-[#f0e6ff]">Contact</h2>
          <div className="w-16 h-px bg-gradient-to-r from-[#d946ef] to-[#06b6d4] mx-auto mt-6 mb-6" />
          <p className="font-[family-name:var(--font-raleway)] font-light text-[#f0e6ff]/45 text-sm leading-relaxed">
            For booking, press, or to share what the music means to you.
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}
          action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-[family-name:var(--font-raleway)] text-xs text-[#f0e6ff]/35 tracking-widest uppercase mb-2">Name</label>
              <input type="text" name="name" required placeholder="Your name"
                className="w-full bg-[#0d0520] border border-[#f0e6ff]/10 focus:border-[#d946ef] outline-none px-4 py-3 text-[#f0e6ff] font-[family-name:var(--font-raleway)] text-sm transition-colors placeholder:text-[#f0e6ff]/20" />
            </div>
            <div>
              <label className="block font-[family-name:var(--font-raleway)] text-xs text-[#f0e6ff]/35 tracking-widest uppercase mb-2">Email</label>
              <input type="email" name="email" required placeholder="your@email.com"
                className="w-full bg-[#0d0520] border border-[#f0e6ff]/10 focus:border-[#d946ef] outline-none px-4 py-3 text-[#f0e6ff] font-[family-name:var(--font-raleway)] text-sm transition-colors placeholder:text-[#f0e6ff]/20" />
            </div>
          </div>

          <div>
            <label className="block font-[family-name:var(--font-raleway)] text-xs text-[#f0e6ff]/35 tracking-widest uppercase mb-2">Subject</label>
            <select name="subject"
              className="w-full bg-[#0d0520] border border-[#f0e6ff]/10 focus:border-[#d946ef] outline-none px-4 py-3 text-[#f0e6ff]/60 font-[family-name:var(--font-raleway)] text-sm transition-colors">
              <option value="booking">Booking Inquiry</option>
              <option value="press">Press / Media</option>
              <option value="general">General</option>
            </select>
          </div>

          <div>
            <label className="block font-[family-name:var(--font-raleway)] text-xs text-[#f0e6ff]/35 tracking-widest uppercase mb-2">Message</label>
            <textarea name="message" required rows={5} placeholder="What moves you to reach out..."
              className="w-full bg-[#0d0520] border border-[#f0e6ff]/10 focus:border-[#d946ef] outline-none px-4 py-3 text-[#f0e6ff] font-[family-name:var(--font-raleway)] text-sm transition-colors resize-none placeholder:text-[#f0e6ff]/20" />
          </div>

          <button type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#7c3aed] to-[#d946ef] hover:opacity-90 text-white font-[family-name:var(--font-raleway)] font-semibold tracking-[0.25em] uppercase text-sm transition-opacity glow-magenta">
            Send Message
          </button>
        </form>

        <div className="mt-14 pt-10 border-t border-[#f0e6ff]/5 grid sm:grid-cols-2 gap-6 text-center">
          <div>
            <p className="font-[family-name:var(--font-cinzel)] text-[#d946ef] text-xs tracking-widest uppercase mb-2">Booking</p>
            <a href="mailto:booking@northofdown.com"
              className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/40 text-sm hover:text-[#06b6d4] transition-colors">
              booking@northofdown.com
            </a>
          </div>
          <div>
            <p className="font-[family-name:var(--font-cinzel)] text-[#d946ef] text-xs tracking-widest uppercase mb-2">Press</p>
            <a href="mailto:press@northofdown.com"
              className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/40 text-sm hover:text-[#06b6d4] transition-colors">
              press@northofdown.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
