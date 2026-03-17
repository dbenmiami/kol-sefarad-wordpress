/**
 * Kol Sefarad — Pricing Section
 * Design: Three pricing cards, center card highlighted with gold border
 * Section number 03 in faded gold
 */

import { useEffect, useRef, useState } from "react";

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

const plans = [
  {
    name: "Private Lessons",
    price: "$60–$80",
    unit: "per hour",
    description: "Flexible 1-on-1 instruction tailored to your child's pace and schedule.",
    features: [
      "Direct B2C private lessons",
      "Personalized instruction",
      "Flexible scheduling",
      "Progress feedback each session",
      "Suitable for all levels",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Aliyah Package",
    price: "$200",
    unit: "per aliyah (~5 sessions)",
    description: "Master individual aliyot with structured sessions and premium recordings.",
    features: [
      "~5 focused sessions per aliyah",
      "Premium audio recording included",
      "Structured milestone tracking",
      "At-home practice materials",
      "Parental progress updates",
    ],
    cta: "Most Popular",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Full Parasha Mastery",
    price: "$1,400",
    unit: "complete package",
    description: "Complete parasha mastery with all recordings and full structured support.",
    features: [
      "All aliyot covered",
      "Complete premium recordings set",
      "Full milestone roadmap",
      "Extended digital access",
      "Family confidence guarantee",
    ],
    cta: "Book Consultation",
    featured: false,
  },
];

export default function PricingSection() {
  const { ref, inView } = useInView();

  const handleContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-28 relative overflow-hidden" style={{ background: "oklch(0.12 0.03 260)" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 relative">
          <span className="section-number" style={{ left: "50%", transform: "translateX(-50%)" }}>03</span>
          <div className={`relative z-10 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span
              className="text-xs tracking-[0.3em] uppercase mb-4 block"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Investment
            </span>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
              }}
            >
              Programs &{" "}
              <span style={{ color: "oklch(0.72 0.12 75)" }}>Pricing</span>
            </h2>
            <p
              className="max-w-xl mx-auto"
              style={{
                color: "oklch(0.65 0.01 80)",
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 300,
                fontSize: "1.05rem",
              }}
            >
              Flexible options designed to meet every family's needs and goals.
              All packages include personalized instruction and premium support.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative p-8 transition-all duration-700 ${
                plan.featured ? "pricing-card-featured" : "feature-card"
              } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 150}ms`, borderRadius: "2px" }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold tracking-widest uppercase"
                  style={{
                    background: "oklch(0.72 0.12 75)",
                    color: "oklch(0.12 0.03 260)",
                    fontFamily: "'Source Sans 3', sans-serif",
                    borderRadius: "2px",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-white mb-2 text-xl"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm mb-5"
                  style={{ color: "oklch(0.6 0.01 80)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300 }}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.55 0.01 80)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {plan.unit}
                  </span>
                </div>
              </div>

              <div className="h-px mb-6" style={{ background: "oklch(1 0 0 / 0.08)" }} />

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "oklch(0.75 0.01 80)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    <span style={{ color: "oklch(0.72 0.12 75)", marginTop: "2px", flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleContact}
                className={plan.featured ? "btn-gold w-full text-center" : "btn-gold-outline w-full text-center"}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Upsell note */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-sm"
            style={{
              color: "oklch(0.55 0.01 80)",
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 300,
            }}
          >
            Additional options available: Advanced modules · Group lessons · Extended digital access
          </p>
          <p
            className="text-sm mt-2"
            style={{ color: "oklch(0.55 0.01 80)", fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Online classes available globally · Initial focus: South Florida
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.3), transparent)" }} />
    </section>
  );
}
