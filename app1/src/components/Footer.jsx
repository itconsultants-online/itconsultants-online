import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      style={{
        background: '#0f172a',
        color: '#e2e8f0',
        padding: '64px 0 32px',
      }}
    >
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr',
          gap: 48,
          marginBottom: 48,
        }}>
          {/* Brand Column */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: '#f8fafc',
                textDecoration: 'none',
                marginBottom: 16,
              }}
            >
              <span style={{ color: '#2563eb', fontSize: 24 }}>⬡</span>
              IT Consultants
            </a>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: 300,
            }}>
              Building smarter IT solutions, one business at a time. Your trusted partner for technology that drives growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              color: '#f8fafc',
              marginBottom: 20,
              letterSpacing: '0.02em',
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#2563eb')}
                    onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              color: '#f8fafc',
              marginBottom: 20,
              letterSpacing: '0.02em',
            }}>
              Get in Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: '#94a3b8',
              }}>
                📞 +961 76 144 546
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: '#94a3b8',
              }}>
                📧 angeloyazbeck@gmail.com
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: '#94a3b8',
              }}>
                📍 Beirut, Lebanon
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: '#94a3b8',
              }}>
                🕐 Mon–Sat, 9am–7pm
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: 1,
          background: 'rgba(148, 163, 184, 0.1)',
          marginBottom: 24,
        }} />

        {/* Copyright */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 8,
        }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: '#64748b',
          }}>
            © {new Date().getFullYear()} IT Consultants. All rights reserved.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </motion.footer>
  );
}
