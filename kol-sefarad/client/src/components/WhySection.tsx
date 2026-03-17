/**
 * Kol Sefarad — Why Now / Problem Section
 * Design: Dark section with three reason cards and family image
 * Section number 04 in faded gold
 */

import { useEffect, useRef, useState } from "react";

const FAMILY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445369287/DXoMXNjNML2EB8EqX9zR3o/bar-mitzvah-celebration-3e6qMb4DJwr4MP5AveA2RB.webp";

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

const reasons = [
  {
    icon: "⏰",
    title: "Cultural Urgency",
    description:
      "Moroccan Sephardic nusach is at risk of dilution as fewer structured, high-quality learning pathways exist for the next generation. The time to act is now.",
  },
  {
    icon: "📈",
    title: "Market Demand",
    description:
      "Parents are actively searching for reliable, personalized solutions that go beyond rushed weekly lessons and provide clarity, structure, and measurable progress.",
  },
  {
    icon: "🌟",
    title: "Opportunity & Leadership",
    description:
      "A younger, patient educator who connects naturally with children — combined with an automated, structured platform — creates consistency and accountability that traditional models cannot.",
  },
];

const brandValues = [
  { label: "Cultural & Authentic", desc: "Preserves Moroccan Sephardic nusach while teaching in a modern, structured way." },
  { label: "Patient & Student-Focused", desc: "Instruction is tailored to each child's pace, personality, and interests." },
  { label: "Premium & Professional", desc: "High-quality recordings, clear milestones, and expert guidance." },
  { label: "Trustworthy & Supportive", desc: "Parents feel confident their child is learning with care and structure." },
  { label: "Engaging & Fun", desc: "Connects with children through melody, story, and personal attention." },
];

export default function WhySection() {
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  return (
    <section id="why" style={{ background: "oklch(0.14 0.028 260)" }} className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 relative" ref={ref}>
          <span className="section-number" style={{ left: "50%", transform: "translateX(-50%)" }}>04</span>
          <div className={`relative z-10 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span
              className="text-xs tracking-[0.3em] uppercase mb-4 block"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Why Now
            </span>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
              }}
            >
              The Right Time to{" "}
              <span style={{ color: "oklch(0.72 0.12 75)" }}>Preserve Our Heritage</span>
            </h2>
          </div>
        </div>

        {/* Reason Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`feature-card p-8 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className="text-4xl mb-5 w-16 h-16 flex items-center justify-center mx-auto"
                style={{
                  background: "oklch(0.72 0.12 75 / 0.1)",
                  borderRadius: "50%",
                  border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                }}
              >
                {reason.icon}
              </div>
              <h3
                className="text-white mb-3 text-xl"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                {reason.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: "oklch(0.65 0.01 80)",
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 300,
                }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Values + Image */}
        <div className="grid lg:grid-cols-5 gap-12 items-center" ref={ref2}>
          {/* Brand Values */}
          <div className={`lg:col-span-3 transition-all duration-1000 ${inView2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <span
              className="text-xs tracking-[0.3em] uppercase mb-4 block"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Our Brand Identity
            </span>
            <h3
              className="text-white mb-8 text-2xl"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              What We Stand For
            </h3>
            <div className="space-y-4">
              {brandValues.map((val, i) => (
                <div
                  key={val.label}
                  className={`flex gap-4 items-start transition-all duration-700 ${inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-1 flex-shrink-0 mt-1.5 rounded-full"
                    style={{ height: "1.2rem", background: "oklch(0.72 0.12 75)" }}
                  />
                  <div>
                    <span
                      className="font-semibold text-white text-sm"
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {val.label}
                    </span>
                    <span
                      className="text-sm ml-2"
                      style={{ color: "oklch(0.6 0.01 80)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}
                    >
                      {val.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative">
              <div
                className="absolute -top-4 -right-4 w-full h-full border"
                style={{ borderColor: "oklch(0.72 0.12 75 / 0.3)", borderRadius: "2px" }}
              />
              <img
                src={FAMILY_IMG}
                alt="Sephardic family celebrating Bar Mitzvah"
                className="w-full object-cover relative z-10"
                style={{ borderRadius: "2px", maxHeight: "420px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.3), transparent)" }} />
    </section>
  );
}
