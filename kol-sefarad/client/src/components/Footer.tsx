/**
 * Kol Sefarad — Footer Component
 * Design: Dark footer with gold accents, nav links, and tagline
 */

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Program", href: "#program" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "oklch(0.09 0.025 260)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: "oklch(0.72 0.12 75)" }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Playfair Display', serif" }}
                >
                  KS
                </span>
              </div>
              <div>
                <div
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Kol Sefarad
                </div>
                <div
                  className="text-xs tracking-widest"
                  style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.6rem" }}
                >
                  קול ספרד
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "oklch(0.55 0.01 80)",
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 300,
              }}
            >
              Personalized Bar Mitzvah preparation rooted in authentic Moroccan Sephardic tradition.
              Structured learning, premium recordings, and a lifelong connection to your heritage.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white mb-5 text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="hover-gold-underline text-sm transition-colors duration-200"
                    style={{ color: "oklch(0.55 0.01 80)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4
              className="text-white mb-5 text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Programs
            </h4>
            <ul className="space-y-3">
              {[
                "Private Lessons ($60–$80/hr)",
                "Aliyah Package ($200/aliyah)",
                "Full Parasha Mastery ($1,400)",
                "Group Lessons (Coming Soon)",
                "Advanced Modules (Coming Soon)",
              ].map((item) => (
                <li key={item}>
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.55 0.01 80)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider mb-8">
          <span style={{ color: "oklch(0.72 0.12 75)", fontSize: "0.7rem" }}>✦</span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "oklch(0.4 0.01 80)", fontFamily: "'Source Sans 3', sans-serif" }}
          >
            © {year} Kol Sefarad. All rights reserved.
          </p>
          <p
            className="text-xs text-center"
            style={{
              color: "oklch(0.4 0.01 80)",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "0.85rem",
            }}
          >
            Preserving Moroccan Sephardic nusach for the next generation
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav("#contact")}
              className="text-xs hover-gold-underline"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
