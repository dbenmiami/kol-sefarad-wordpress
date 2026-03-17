/**
 * Kol Sefarad — About / Mission Section
 * Design: Asymmetric layout, image right, text left
 * Section number 01 in faded gold behind title
 */

import { useEffect, useRef, useState } from "react";

const TORAH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445369287/DXoMXNjNML2EB8EqX9zR3o/torah-reading-43unU8Ayszp9yKLnWCkP8u.webp";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: "oklch(0.12 0.03 260)" }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a843' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Block */}
          <div className={`relative transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            {/* Section number */}
            <span className="section-number">01</span>

            <div className="relative z-10">
              <span
                className="text-xs tracking-[0.3em] uppercase mb-4 block"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Our Mission
              </span>
              <h2
                className="text-white mb-6 leading-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                }}
              >
                Preserving Tradition,<br />
                <span style={{ color: "oklch(0.72 0.12 75)" }}>One Voice at a Time</span>
              </h2>

              <div className="h-px w-16 mb-8" style={{ background: "oklch(0.72 0.12 75)" }} />

              <p
                className="mb-6 leading-relaxed"
                style={{
                  color: "oklch(0.75 0.01 80)",
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 300,
                }}
              >
                Authentic Sephardic — especially Moroccan — nusach is increasingly difficult to preserve and transmit in a structured, meaningful way. Today, many Bar Mitzvah students learn tefillah in rushed, inconsistent sessions where the focus is simply "getting through it."
              </p>
              <p
                className="mb-8 leading-relaxed"
                style={{
                  color: "oklch(0.75 0.01 80)",
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 300,
                }}
              >
                Kol Sefarad changes that. We create a structured, student-centered system that combines personalized instruction with premium digital support — so students gain confidence, mastery, and a <em>lifelong</em> connection to their tradition.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "1-on-1", label: "Private Lessons" },
                  { number: "100%", label: "Customized Plans" },
                  { number: "∞", label: "Cultural Legacy" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="text-xs tracking-wider uppercase"
                      style={{ color: "oklch(0.55 0.01 80)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Block */}
          <div className={`relative transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative">
              {/* Gold frame accent */}
              <div
                className="absolute -top-4 -right-4 w-full h-full border"
                style={{ borderColor: "oklch(0.72 0.12 75 / 0.3)", borderRadius: "2px" }}
              />
              <img
                src={TORAH_IMG}
                alt="Young student reading Torah in a Moroccan synagogue"
                className="w-full object-cover relative z-10"
                style={{ borderRadius: "2px", maxHeight: "520px" }}
              />
              {/* Caption */}
              <div
                className="absolute bottom-0 left-0 right-0 z-20 p-6"
                style={{
                  background: "linear-gradient(to top, oklch(0.08 0.02 260 / 0.9), transparent)",
                  borderRadius: "0 0 2px 2px",
                }}
              >
                <p
                  className="text-sm"
                  style={{
                    color: "oklch(0.72 0.12 75)",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                  }}
                >
                  "Not just memorization — a moment of identity and pride."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
