/**
 * Kol Sefarad — Navbar Component
 * Design: Modern Jerusalem — transparent on hero, dark on scroll
 * Sticky top nav: logo left, links center, CTA right
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Program", href: "#program" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-scrolled"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: "oklch(0.72 0.12 75)" }}>
              <span className="text-xs font-bold" style={{ 
                color: "oklch(0.72 0.12 75)",
                fontFamily: "'Playfair Display', serif"
              }}>KS</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Kol Sefarad
              </span>
              <span className="text-xs tracking-widest uppercase"
                style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.6rem" }}>
                קול ספרד
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover-gold-underline text-sm font-semibold tracking-wider uppercase transition-colors duration-200"
                style={{
                  color: scrolled ? "oklch(0.85 0.01 80)" : "rgba(255,255,255,0.85)",
                  fontFamily: "'Source Sans 3', sans-serif",
                  letterSpacing: "0.08em",
                  fontSize: "0.75rem",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-gold"
            >
              Book Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "oklch(0.12 0.03 260 / 0.98)", backdropFilter: "blur(20px)" }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-sm font-semibold tracking-wider uppercase py-2 border-b"
              style={{
                color: "oklch(0.85 0.01 80)",
                borderColor: "oklch(1 0 0 / 0.08)",
                fontFamily: "'Source Sans 3', sans-serif",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-gold mt-2 text-center"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
