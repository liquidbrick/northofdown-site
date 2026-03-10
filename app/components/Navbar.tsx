"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Music", "About", "Shows", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#1a1209]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-[family-name:var(--font-playfair)] text-xl tracking-widest text-[#f5efe6] hover:text-[#c8872a] transition-colors"
        >
          NORTH OF DOWN
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="nav-link font-[family-name:var(--font-lato)] text-sm text-[#f5efe6]/80 hover:text-[#c8872a] transition-colors uppercase tracking-widest"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#f5efe6] flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1209]/98 px-6 pb-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-lato)] text-sm text-[#f5efe6]/80 hover:text-[#c8872a] transition-colors uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
