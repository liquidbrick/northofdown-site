export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 bg-[#0d0804] border-t border-[#f5efe6]/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-[family-name:var(--font-playfair)] text-[#f5efe6]/30 text-lg tracking-widest">
          North of Down
        </p>

        <div className="flex gap-8">
          {[
            { label: "Spotify", href: "#" },
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "YouTube", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-lato)] text-xs text-[#f5efe6]/25 hover:text-[#c8872a] transition-colors tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-[family-name:var(--font-lato)] text-[#f5efe6]/20 text-xs tracking-widest">
          © {year} North of Down
        </p>
      </div>
    </footer>
  );
}
