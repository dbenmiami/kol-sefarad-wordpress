/**
 * Kol Sefarad — Program / Features Section
 * Design: Asymmetric feature cards with gold left-border on hover
 * Section number 02 in faded gold
 */

import { useEffect, useRef, useState } from "react";

const SYNAGOGUE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445369287/DXoMXNjNML2EB8EqX9zR3o/moroccan-synagogue-fjqES9aSsmHfYeVmCz4nA5.webp";

function useInView(threshold = 0.1) {
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

const features = [
  {
    icon: "🎯",
    title: "Customized Learning Path",
    description:
      "Every student begins with a detailed evaluation of their skill level, goals, and connection to Moroccan Sephardic nusach. A customized plan is built — whether mastering specific aliyot or completing the entire parasha.",
    details: ["Initial student evaluation", "Tailored aliyah selection", "Skill development milestones"],
  },
  {
    icon: "🎵",
    title: "Hybrid Instruction Model",
    description:
      "Private, focused sessions combined with premium recordings for structured at-home practice. Students are never dependent on a once-a-week rushed lesson — they gain independence between sessions.",
    details: ["Private 1-on-1 sessions", "Premium audio recordings", "Reinforced learning at home"],
  },
  {
    icon: "📊",
    title: "Progress Tracking & Accountability",
    description:
      "Clear milestones, independent practice support, and structured check-ins ensure parents feel confident and students feel prepared — without the stress of uncertainty.",
    details: ["Clear milestone system", "Independent practice support", "Reduced stress for families"],
  },
  {
    icon: "🏛️",
    title: "Culturally Authentic & Rooted",
    description:
      "Focused specifically on authentic Moroccan Sephardic nusach, preserving tradition at both a basic and professional level. Not a one-size-fits-all method — instruction adapts to each child's personality and pace.",
    details: ["Authentic Moroccan nusach", "Preservation of tradition", "Student-centered approach"],
  },
];

const useCases = [
  {
    title: "Bar Mitzvah Preparation",
    description: "A 12-year-old student needs to master their aliyot with the correct nusach and trope. Parents want a structured system to ensure consistent progress.",
  },
  {
    title: "Independent Practice",
    description: "Students practice at home using premium recordings and checklists, so progress continues outside of live lessons.",
  },
  {
    title: "Parental Oversight",
    description: "Parents can track their child's progress, see milestones, and know the student is prepared without stress.",
  },
  {
    title: "Cultural Preservation",
    description: "Families seeking to maintain authentic traditions ensure children learn with proper melody and meaning.",
  },
];

export default function ProgramSection() {
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  return (
    <section id="program" style={{ background: "oklch(0.14 0.028 260)" }} className="py-28 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-20 relative" ref={ref}>
          <span className="section-number" style={{ left: "50%", transform: "translateX(-50%)" }}>02</span>
          <div className={`relative z-10 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span
              className="text-xs tracking-[0.3em] uppercase mb-4 block"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              The Program
            </span>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
              }}
            >
              What Makes Kol Sefarad{" "}
              <span style={{ color: "oklch(0.72 0.12 75)" }}>Different</span>
            </h2>
            <div className="gold-divider max-w-xs mx-auto">
              <span style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.8rem" }}>✦</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`feature-card p-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="text-3xl w-14 h-14 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "oklch(0.72 0.12 75 / 0.1)",
                    borderRadius: "2px",
                    border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    className="text-white mb-3 text-xl"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="mb-4 leading-relaxed"
                    style={{
                      color: "oklch(0.65 0.01 80)",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 300,
                    }}
                  >
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        <span className="text-xs">◆</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use Cases + Image */}
        <div className="grid lg:grid-cols-5 gap-12 items-center" ref={ref2}>
          {/* Image */}
          <div className={`lg:col-span-2 transition-all duration-1000 ${inView2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              <div
                className="absolute -bottom-4 -left-4 w-full h-full border"
                style={{ borderColor: "oklch(0.72 0.12 75 / 0.3)", borderRadius: "2px" }}
              />
              <img
                src={SYNAGOGUE_IMG}
                alt="Beautiful Moroccan Sephardic synagogue interior"
                className="w-full object-cover relative z-10"
                style={{ borderRadius: "2px", maxHeight: "460px" }}
              />
            </div>
          </div>

          {/* Use Cases */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-300 ${inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <span
              className="text-xs tracking-[0.3em] uppercase mb-4 block"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Use Cases
            </span>
            <h3
              className="text-white mb-8 text-2xl"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              Who We Serve
            </h3>
            <div className="space-y-5">
              {useCases.map((uc, i) => (
                <div
                  key={uc.title}
                  className="flex gap-5 pb-5"
                  style={{ borderBottom: i < useCases.length - 1 ? "1px solid oklch(1 0 0 / 0.06)" : "none" }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5"
                    style={{
                      color: "oklch(0.72 0.12 75)",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h4
                      className="text-white mb-1 font-semibold"
                      style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem" }}
                    >
                      {uc.title}
                    </h4>
                    <p
                      style={{
                        color: "oklch(0.65 0.01 80)",
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                      }}
                    >
                      {uc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.3), transparent)" }} />
    </section>
  );
}
