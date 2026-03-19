/**
 * Kol Sefarad — Hero Section
 * Design: Full-viewport Kotel background, centered title, scroll indicator
 * Photography-forward: the Kotel image is the emotional anchor
 */

import { useEffect, useRef, useState } from "react";

const KOTEL_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445369287/DXoMXNjNML2EB8EqX9zR3o/kotel-hero-imqJKYz2hubJdUfZ6HrJgx.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${KOTEL_BG})`,
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: "transform",
          top: "-15%",
          bottom: "-15%",
        }}
      />

      {/* Multi-layer overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, oklch(0.08 0.02 260 / 0.5) 0%, oklch(0.08 0.02 260 / 0.65) 50%, oklch(0.08 0.02 260 / 0.85) 100%)",
        }}
      />
      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.05 0.02 260 / 0.7) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Hebrew tagline */}
        <div
          className={`transition-all duration-1000 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span
            className="text-sm tracking-[0.3em] uppercase mb-6 block"
            style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
          >
            ✦ &nbsp; Authentic Moroccan Sephardic Nusach &nbsp; ✦
          </span>
        </div>

        {/* Main Title */}
        <div
          className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1
            className="text-white leading-tight mb-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: 700,
              textShadow: "0 4px 30px oklch(0 0 0 / 0.5)",
            }}
          >
            Kol Sefarad
          </h1>
          <p
            className="text-2xl md:text-3xl mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "oklch(0.72 0.12 75)",
              textShadow: "0 2px 15px oklch(0 0 0 / 0.4)",
            }}
          >
            קול ספרד
          </p>
        </div>

        {/* Divider */}
        <div
          className={`flex items-center justify-center gap-4 my-8 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="h-px w-16" style={{ background: "oklch(0.72 0.12 75 / 0.6)" }} />
          <span style={{ color: "oklch(0.72 0.12 75)" }}>✦</span>
          <div className="h-px w-16" style={{ background: "oklch(0.72 0.12 75 / 0.6)" }} />
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-1000 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.82)",
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 300,
              textShadow: "0 2px 10px oklch(0 0 0 / 0.4)",
            }}
          >
            Personalized Bar Mitzvah preparation rooted in authentic Moroccan tradition.
            Structured learning, premium recordings, and a lifelong connection to your heritage.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <button
            onClick={() => {
              const el = document.getElementById("pricing");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold text-sm px-8 py-4"
          >
            View Programs & Pricing
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold-outline text-sm px-8 py-4"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.65rem" }}>
          Scroll
        </span>
        <div
          className="w-px h-10 relative overflow-hidden"
          style={{ background: "rgba(255,255,255,0.2)" }}
        >
          <div
            className="absolute top-0 left-0 w-full"
            style={{
              background: "oklch(0.72 0.12 75)",
              height: "40%",
              animation: "scrollLine 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </button>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
