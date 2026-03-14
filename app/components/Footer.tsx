export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 bg-[#05030f] border-t border-[#d946ef]/10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-[family-name:var(--font-cinzel)] text-[#f0e6ff]/25 text-base tracking-widest shimmer-text">
          North of Down
        </p>

        <div className="flex gap-8">
          {[
            { label: "Spotify", href: "#" },
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "YouTube", href: "#" },
          ].map((link) => (
            <a key={link.label} href={link.href}
              className="font-[family-name:var(--font-raleway)] text-xs text-[#f0e6ff]/20 hover:text-[#d946ef] transition-colors tracking-widest uppercase">
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/15 text-xs tracking-widest">
          © {year} North of Down
        </p>
      </div>
    </footer>
  );
}
