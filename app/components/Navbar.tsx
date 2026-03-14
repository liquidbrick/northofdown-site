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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#05030f]/90 backdrop-blur-md border-b border-[#d946ef]/10" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#hero"
          className="font-[family-name:var(--font-cinzel)] text-lg tracking-[0.3em] text-[#f0e6ff] hover:text-[#d946ef] transition-colors duration-300">
          NORTH OF DOWN
        </a>

        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}
                className="nav-link font-[family-name:var(--font-raleway)] text-sm text-[#f0e6ff]/60 hover:text-[#d946ef] transition-colors uppercase tracking-widest">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden flex flex-col gap-1.5 text-[#f0e6ff]"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#05030f]/98 backdrop-blur-md px-6 pb-6 flex flex-col gap-5 border-b border-[#d946ef]/10">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-raleway)] text-sm text-[#f0e6ff]/70 hover:text-[#d946ef] transition-colors uppercase tracking-widest">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
