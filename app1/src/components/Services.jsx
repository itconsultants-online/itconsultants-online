import { motion } from 'framer-motion';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Custom websites and web apps built for performance and scale.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    color: '#2563eb',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'iOS and Android applications tailored to your business needs.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    color: '#7c3aed',
  },
  {
    icon: '🛠️',
    title: 'IT Support',
    desc: 'On-site and remote technical support, maintenance, and troubleshooting.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80',
    color: '#06b6d4',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    desc: 'Threat detection, security audits, and protection for your infrastructure.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    color: '#2563eb',
  },
  {
    icon: '🔌',
    title: 'Network Setup',
    desc: 'Full network design, installation, and ongoing management.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    color: '#7c3aed',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      style={{
        position: 'relative',
        padding: '100px 0 120px',
        background: '#f0f4ff',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            OUR SERVICES
          </div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 44px)',
            color: '#0f172a',
            lineHeight: 1.2,
            marginTop: 8,
          }}>
            Everything Your Business Needs
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
          className="services-grid"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 24px 56px rgba(37, 99, 235, 0.15), 0 0 0 1px rgba(37, 99, 235, 0.1)',
              }}
              transition={{ duration: 0.3 }}
              className="gradient-border"
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                background: '#ffffff',
                boxShadow: '0 4px 24px rgba(15, 23, 42, 0.06)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Card Image */}
              <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.8) 70%, #ffffff 100%)`,
                }} />
              </div>

              {/* Card Content */}
              <div style={{ padding: '0 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  fontSize: 36,
                  marginBottom: 12,
                  marginTop: -20,
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: '#0f172a',
                  marginBottom: 10,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: '#475569',
                  lineHeight: 1.6,
                  flex: 1,
                }}>
                  {service.desc}
                </p>
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    marginTop: 16,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: service.color,
                    textDecoration: 'none',
                  }}
                >
                  Learn More <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
