"use client";
export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#140e06]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-[#c8872a] tracking-[0.4em] text-xs uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#f5efe6]">
            Contact
          </h2>
          <div className="w-16 h-px bg-[#c8872a] mx-auto mt-6 mb-6" />
          <p className="font-[family-name:var(--font-lato)] text-[#f5efe6]/50 text-sm leading-relaxed">
            For booking, press inquiries, or general info — reach out below.
          </p>
        </div>

        {/* Contact form */}
        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-[family-name:var(--font-lato)] text-xs text-[#f5efe6]/40 tracking-widest uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-[#2a1a0a] border border-[#f5efe6]/10 focus:border-[#c8872a] outline-none px-4 py-3 text-[#f5efe6] font-[family-name:var(--font-lato)] text-sm transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-[family-name:var(--font-lato)] text-xs text-[#f5efe6]/40 tracking-widest uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-[#2a1a0a] border border-[#f5efe6]/10 focus:border-[#c8872a] outline-none px-4 py-3 text-[#f5efe6] font-[family-name:var(--font-lato)] text-sm transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block font-[family-name:var(--font-lato)] text-xs text-[#f5efe6]/40 tracking-widest uppercase mb-2">
              Subject
            </label>
            <select
              name="subject"
              className="w-full bg-[#2a1a0a] border border-[#f5efe6]/10 focus:border-[#c8872a] outline-none px-4 py-3 text-[#f5efe6]/70 font-[family-name:var(--font-lato)] text-sm transition-colors"
            >
              <option value="booking">Booking Inquiry</option>
              <option value="press">Press / Media</option>
              <option value="general">General</option>
            </select>
          </div>

          <div>
            <label className="block font-[family-name:var(--font-lato)] text-xs text-[#f5efe6]/40 tracking-widest uppercase mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full bg-[#2a1a0a] border border-[#f5efe6]/10 focus:border-[#c8872a] outline-none px-4 py-3 text-[#f5efe6] font-[family-name:var(--font-lato)] text-sm transition-colors resize-none"
              placeholder="Tell us about your inquiry..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#c8872a] hover:bg-[#d99a3a] text-[#1a1209] font-[family-name:var(--font-lato)] font-bold tracking-[0.2em] uppercase text-sm transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Direct contact links */}
        <div className="mt-14 pt-10 border-t border-[#f5efe6]/5 grid sm:grid-cols-2 gap-6 text-center">
          <div>
            <p className="font-[family-name:var(--font-lato)] text-[#c8872a] text-xs tracking-widest uppercase mb-2">
              Booking
            </p>
            <a
              href="mailto:booking@northofdown.com"
              className="font-[family-name:var(--font-lato)] text-[#f5efe6]/50 text-sm hover:text-[#c8872a] transition-colors"
            >
              booking@northofdown.com
            </a>
          </div>
          <div>
            <p className="font-[family-name:var(--font-lato)] text-[#c8872a] text-xs tracking-widest uppercase mb-2">
              Press
            </p>
            <a
              href="mailto:press@northofdown.com"
              className="font-[family-name:var(--font-lato)] text-[#f5efe6]/50 text-sm hover:text-[#c8872a] transition-colors"
            >
              press@northofdown.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
