import { motion } from 'framer-motion';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    shortDesc: 'Custom websites & web apps built for performance and scale.',
    fullDesc:
      'From landing pages to complex enterprise platforms, we design and build fast, secure, and scalable web solutions tailored to your brand and business goals. We cover front-end, back-end, APIs, databases, CMS integrations, and ongoing maintenance.',
    tags: ['React', 'Node.js', 'WordPress', 'APIs'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(37,99,235,0.02))',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    shortDesc: 'iOS & Android apps tailored to your business needs.',
    fullDesc:
      'We build native and cross-platform mobile apps that deliver seamless user experiences. From initial concept and UI/UX design to App Store deployment and post-launch updates, we handle the complete mobile development lifecycle.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(124,58,237,0.02))',
  },
  {
    icon: '🛠️',
    title: 'IT Support',
    shortDesc: 'On-site & remote technical support, maintenance & troubleshooting.',
    fullDesc:
      'Our certified support engineers are available 24/7 to resolve hardware, software, and connectivity issues — whether on-site at your office or remotely within minutes. We also offer proactive monitoring and scheduled maintenance plans to prevent problems before they occur.',
    tags: ['24/7 Remote', 'On-Site', 'Help Desk', 'Monitoring'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(6,182,212,0.02))',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    shortDesc: 'Threat detection, security audits & infrastructure protection.',
    fullDesc:
      'Protect your business from evolving cyber threats with our end-to-end security services. We perform vulnerability assessments, penetration testing, firewall configuration, employee security training, and real-time threat monitoring — so your data and systems stay protected around the clock.',
    tags: ['Pen Testing', 'Firewalls', 'Audits', 'Compliance'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(37,99,235,0.02))',
  },
  {
    icon: '🔌',
    title: 'Network Setup & Maintenance',
    shortDesc: 'Full network design, installation & ongoing management.',
    fullDesc:
      'Whether you\'re setting up a new office or upgrading an existing network, we design, install, and manage reliable wired and wireless network infrastructures. Our team handles routers, switches, VLANs, VPNs, and Wi-Fi coverage — ensuring fast, stable, and secure connectivity at all times.',
    tags: ['LAN/WAN', 'Wi-Fi', 'VPN', 'Cabling'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(124,58,237,0.02))',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      style={{ position: 'relative', padding: '100px 0 120px', background: '#f0f4ff' }}
    >
      {/* Subtle background decoration */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.15), transparent)',
      }} />

      <div className="container">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>OUR SERVICES</div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 44px)', color: '#0f172a',
            lineHeight: 1.2, marginTop: 8, marginBottom: 16,
          }}>
            Everything Your Business Needs
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16,
            color: '#475569', maxWidth: 560, margin: '0 auto', lineHeight: 1.7,
          }}>
            From building your digital presence to securing your infrastructure — we cover every layer of your IT needs, on-site and remotely.
          </p>
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
                y: -10,
                boxShadow: `0 28px 60px rgba(37, 99, 235, 0.14), 0 0 0 1px rgba(37, 99, 235, 0.1)`,
              }}
              transition={{ duration: 0.3 }}
              style={{
                borderRadius: 18,
                overflow: 'hidden',
                background: '#ffffff',
                boxShadow: '0 4px 24px rgba(15, 23, 42, 0.07)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(37, 99, 235, 0.06)',
              }}
            >
              {/* Card Image */}
              <div style={{ position: 'relative', height: 170, overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 60%, #ffffff 100%)`,
                }} />
                {/* Color accent top bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${service.color}, transparent)`,
                }} />
              </div>

              {/* Card Content */}
              <div style={{
                padding: '0 24px 28px', flex: 1,
                display: 'flex', flexDirection: 'column',
                background: service.gradient,
              }}>
                {/* Icon bubble */}
                <div style={{
                  fontSize: 28, marginBottom: 12, marginTop: 20,
                  width: 52, height: 52, borderRadius: 14,
                  background: '#ffffff',
                  boxShadow: `0 4px 14px rgba(15, 23, 42, 0.1)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `1.5px solid ${service.color}22`,
                  flexShrink: 0,
                }}>
                  {service.icon}
                </div>

                <h3 style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  fontSize: 18, color: '#0f172a', marginBottom: 8,
                }}>
                  {service.title}
                </h3>

                {/* Short bold line */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                  fontWeight: 600, color: service.color, marginBottom: 10, lineHeight: 1.4,
                }}>
                  {service.shortDesc}
                </p>

                {/* Full description */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  color: '#475569', lineHeight: 1.65, flex: 1,
                }}>
                  {service.fullDesc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, margin: '16px 0 18px' }}>
                  {service.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                      fontWeight: 600, letterSpacing: '0.04em',
                      padding: '3px 10px', borderRadius: 999,
                      background: `${service.color}12`,
                      color: service.color,
                      border: `1px solid ${service.color}25`,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <motion.button
                  onClick={() => scrollTo('#contact')}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700,
                    color: service.color, background: 'none', border: 'none',
                    cursor: 'pointer', padding: 0, textAlign: 'left',
                  }}
                >
                  Get a Quote <span style={{ fontSize: 16 }}>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
