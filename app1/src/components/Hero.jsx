import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  const words = ['We', 'Build.', 'We', 'Secure.', 'We', 'Support.'];

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#f0f4ff',
      }}
    >
      {/* Animated Background Blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Mesh gradient overlay */}
        <div className="mesh-bg" style={{ position: 'absolute', inset: 0 }} />

        {/* Floating blob 1 - Blue */}
        <motion.div
          animate={{
            x: [0, 40, -20, 30, 0],
            y: [0, -60, -40, 20, 0],
            scale: [1, 1.05, 0.95, 1.02, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Floating blob 2 - Purple */}
        <motion.div
          animate={{
            x: [0, -50, 20, -30, 0],
            y: [0, 30, 60, -20, 0],
            scale: [1, 1.03, 0.97, 1.01, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1), transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Floating blob 3 - Cyan */}
        <motion.div
          animate={{
            x: [0, 30, -40, 20, 0],
            y: [0, 40, -30, -50, 0],
            scale: [1, 0.96, 1.04, 0.98, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '40%',
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent 70%)',
            filter: 'blur(45px)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ maxWidth: 720 }}>
          {/* Headline with word-by-word animation */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(40px, 7vw, 80px)',
              lineHeight: 1.1,
              color: '#0f172a',
              marginBottom: 24,
              letterSpacing: '-0.02em',
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                style={{
                  display: 'inline-block',
                  marginRight: word.endsWith('.') ? 12 : 8,
                  color: word === 'Build.' || word === 'Secure.' || word === 'Support.'
                    ? '#2563eb'
                    : '#0f172a',
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: 400,
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: 600,
              marginBottom: 40,
            }}
          >
            Delivering full-stack IT solutions — on-site and remotely — for businesses that demand reliability, security, and scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <motion.button
              onClick={() => scrollTo('#services')}
              style={{
                padding: '14px 32px',
                borderRadius: 12,
                border: '2px solid #2563eb',
                background: 'transparent',
                color: '#2563eb',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.05, background: 'rgba(37, 99, 235, 0.05)' }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.button>
            <motion.button
              onClick={() => scrollTo('#contact')}
              style={{
                padding: '14px 32px',
                borderRadius: 12,
                border: 'none',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 6px 28px rgba(37, 99, 235, 0.45)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative hero image on the right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-image-wrap"
          style={{
            position: 'absolute',
            right: '-5%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '45%',
            maxWidth: 600,
            opacity: 0.15,
            pointerEvents: 'none',
            mixBlendMode: 'multiply',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&q=80"
            alt=""
            style={{
              width: '100%',
              borderRadius: 20,
              filter: 'blur(1px)',
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo('#services')}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          fontWeight: 500,
          color: '#475569',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: '#2563eb', fontSize: 18 }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-image-wrap { display: none !important; }
        }
      `}</style>
    </section>
  );
}
