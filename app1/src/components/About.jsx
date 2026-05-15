import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 200, suffix: '+', label: 'Clients Served' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

const checkItems = [
  'Certified & experienced IT engineers',
  'Fast response times — on-site & remote',
  'End-to-end project management',
  'Long-term partnership approach',
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function StatCard({ value, suffix, label, startCounting }) {
  const count = useCountUp(value, 2000, startCounting);

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: 14,
      padding: '24px 16px',
      textAlign: 'center',
      boxShadow: '0 4px 20px rgba(15, 23, 42, 0.06)',
      border: '1px solid rgba(37, 99, 235, 0.08)',
    }}>
      <div style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: 32,
        color: '#2563eb',
        lineHeight: 1.1,
      }}>
        {value === 24 ? (startCounting ? '24/7' : '0') : count}{value === 24 ? '' : suffix}
      </div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 13,
        fontWeight: 500,
        color: '#475569',
        marginTop: 6,
      }}>
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const [startCounting, setStartCounting] = useState(false);

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '100px 0 120px',
        background: '#f0f4ff',
      }}
    >
      <div className="container">
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
        }}>
          {/* Left Column */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="section-label">ABOUT US</div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              color: '#0f172a',
              lineHeight: 1.2,
              marginBottom: 24,
            }}>
              Your Trusted IT Partner, On-Site & Remote
            </h2>

            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              color: '#475569',
              lineHeight: 1.7,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              marginBottom: 32,
            }}>
              <p>
                We are a trusted IT partner for businesses of all sizes, providing comprehensive technology solutions that drive growth and efficiency.
              </p>
              <p>
                From startups to established enterprises, we deliver end-to-end IT services tailored to your unique needs — ensuring your technology works for you, not against you.
              </p>
              <p>
                Our team of certified engineers provides responsive support 24/7, keeping your operations running smoothly around the clock.
              </p>
            </div>

            {/* Why Choose Us */}
            <h4 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: '#0f172a',
              marginBottom: 16,
            }}>
              Why Choose Us
            </h4>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
              }}
              style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              {checkItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: '#475569',
                  }}
                >
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: 'rgba(37, 99, 235, 0.1)',
                    color: '#2563eb',
                    fontSize: 13,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            onViewportEnter={() => setStartCounting(true)}
          >
            {/* Office Image */}
            <div style={{
              position: 'relative',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(15, 23, 42, 0.1)',
              border: '2px solid rgba(37, 99, 235, 0.1)',
              marginBottom: 24,
            }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="IT Consultants team office"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                boxShadow: 'inset 0 0 60px rgba(37, 99, 235, 0.06)',
                borderRadius: 16,
                pointerEvents: 'none',
              }} />
            </div>

            {/* Stats Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
              }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 14,
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <StatCard
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    startCounting={startCounting}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
