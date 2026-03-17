/**
 * Kol Sefarad — Contact Section
 * Design: Split layout, contact info left, form right
 * Section number 05 in faded gold
 */

import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

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

export default function ContactSection() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    childName: "",
    message: "",
    package: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! We'll be in touch within 24 hours.", {
        description: "A member of the Kol Sefarad team will contact you shortly.",
      });
      setForm({ name: "", email: "", phone: "", childName: "", message: "", package: "" });
    }, 1500);
  };

  const inputStyle = {
    background: "oklch(0.18 0.025 260)",
    border: "1px solid oklch(1 0 0 / 0.1)",
    color: "oklch(0.9 0.01 80)",
    fontFamily: "'Source Sans 3', sans-serif",
    fontSize: "0.95rem",
    padding: "0.75rem 1rem",
    borderRadius: "2px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle = {
    color: "oklch(0.65 0.01 80)",
    fontFamily: "'Source Sans 3', sans-serif",
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    fontWeight: 600,
    display: "block",
    marginBottom: "0.4rem",
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: "oklch(0.12 0.03 260)" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.12 75 / 0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left: Info */}
          <div className={`lg:col-span-2 transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              <span className="section-number">05</span>
              <div className="relative z-10">
                <span
                  className="text-xs tracking-[0.3em] uppercase mb-4 block"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Get in Touch
                </span>
                <h2
                  className="text-white mb-6 leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    fontWeight: 700,
                  }}
                >
                  Begin Your Child's{" "}
                  <span style={{ color: "oklch(0.72 0.12 75)" }}>Journey</span>
                </h2>

                <div className="h-px w-16 mb-8" style={{ background: "oklch(0.72 0.12 75)" }} />

                <p
                  className="mb-10 leading-relaxed"
                  style={{
                    color: "oklch(0.65 0.01 80)",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 300,
                    fontSize: "1rem",
                  }}
                >
                  Book a free consultation to discuss your child's Bar Mitzvah preparation.
                  We'll evaluate their current level, discuss your goals, and build a customized plan together.
                </p>

                {/* Contact Details */}
                <div className="space-y-5">
                  {[
                    {
                      icon: "📍",
                      label: "Location",
                      value: "South Florida (Online Globally Available)",
                    },
                    {
                      icon: "🌐",
                      label: "Online Classes",
                      value: "Available worldwide via video call",
                    },
                    {
                      icon: "⏱️",
                      label: "Response Time",
                      value: "Within 24 hours",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg"
                        style={{
                          background: "oklch(0.72 0.12 75 / 0.1)",
                          borderRadius: "2px",
                          border: "1px solid oklch(0.72 0.12 75 / 0.2)",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div
                          className="text-xs uppercase tracking-wider mb-0.5"
                          style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600 }}
                        >
                          {item.label}
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "oklch(0.75 0.01 80)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div
                  className="mt-10 p-6 relative"
                  style={{
                    background: "oklch(0.16 0.025 260)",
                    borderLeft: "3px solid oklch(0.72 0.12 75)",
                    borderRadius: "0 2px 2px 0",
                  }}
                >
                  <p
                    className="text-base leading-relaxed"
                    style={{
                      color: "oklch(0.75 0.01 80)",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    }}
                  >
                    "A powerful moment of identity and pride — transformational, not transactional."
                  </p>
                  <p
                    className="mt-3 text-xs tracking-wider uppercase"
                    style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    — Kol Sefarad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div
              className="p-8 md:p-10"
              style={{
                background: "oklch(0.15 0.025 260)",
                border: "1px solid oklch(1 0 0 / 0.08)",
                borderRadius: "2px",
              }}
            >
              <h3
                className="text-white mb-8 text-xl"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Free Consultation Request
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="First & Last Name"
                      style={inputStyle}
                      required
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Child's Name</label>
                    <input
                      type="text"
                      name="childName"
                      value={form.childName}
                      onChange={handleChange}
                      placeholder="Student's Name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      required
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Interested Package</label>
                  <select
                    name="package"
                    value={form.package}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                  >
                    <option value="">Select a package...</option>
                    <option value="private">Private Lessons ($60–$80/hr)</option>
                    <option value="aliyah">Aliyah Package ($200/aliyah)</option>
                    <option value="full">Full Parasha Mastery ($1,400)</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your child, their current level, and your goals for the Bar Mitzvah..."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.72 0.12 75)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.1)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full text-center py-4"
                  style={{ opacity: submitting ? 0.7 : 1 }}
                >
                  {submitting ? "Sending..." : "Book Free Consultation"}
                </button>

                <p
                  className="text-xs text-center"
                  style={{ color: "oklch(0.5 0.01 80)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  No commitment required. We'll reach out within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
