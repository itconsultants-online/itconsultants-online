import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const contactInfo = [
  { icon: FaPhone, label: 'Phone', value: '+961 76 144 546' },
  { icon: FaEnvelope, label: 'Email', value: 'angeloyazbeck@gmail.com' },
  { icon: FaClock, label: 'Hours', value: 'Mon–Sat, 9am–7pm' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Beirut, Lebanon' },
];

const serviceOptions = [
  'Web Development',
  'Mobile Apps',
  'IT Support',
  'Cybersecurity',
  'Network Setup',
  'General Inquiry',
];

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  borderRadius: 12,
  border: '1px solid rgba(37, 99, 235, 0.15)',
  background: 'rgba(255, 255, 255, 0.05)',
  color: '#f1f5f9',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 15,
  outline: 'none',
  transition: 'border-color 0.3s, box-shadow 0.3s',
};

const labelStyle = {
  display: 'block',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  fontWeight: 500,
  color: '#94a3b8',
  marginBottom: 6,
  letterSpacing: '0.02em',
};

const formContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });

    // Auto-hide success after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '100px 0 120px',
        background: '#f0f4ff',
      }}
    >
      <div className="container">
        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: 48,
          alignItems: 'start',
        }}>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            style={{
              background: '#0f172a',
              borderRadius: 20,
              padding: 'clamp(28px, 4vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle glow */}
            <div style={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1), transparent 70%)',
              pointerEvents: 'none',
            }} />

            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 30px)',
              color: '#f8fafc',
              marginBottom: 8,
            }}>
              Get in Touch
            </h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: '#94a3b8',
              marginBottom: 28,
            }}>
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            {/* Success Message */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    overflow: 'hidden',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '16px 20px',
                    borderRadius: 12,
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                  }}>
                    <FaCheckCircle style={{ color: '#22c55e', fontSize: 20, flexShrink: 0 }} />
                    <div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#22c55e',
                      }}>
                        Message sent!
                      </div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        color: '#86efac',
                      }}>
                        We'll be in touch shortly.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form
              onSubmit={handleSubmit}
              variants={formContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
            >
              {/* Name */}
              <motion.div variants={fieldVariants}>
                <label style={labelStyle}>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={{
                    ...inputStyle,
                    borderColor: errors.name ? '#ef4444' : 'rgba(37, 99, 235, 0.15)',
                  }}
                />
                {errors.name && (
                  <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>
                    {errors.name}
                  </span>
                )}
              </motion.div>

              {/* Email + Phone row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <motion.div variants={fieldVariants}>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    style={{
                      ...inputStyle,
                      borderColor: errors.email ? '#ef4444' : 'rgba(37, 99, 235, 0.15)',
                    }}
                  />
                  {errors.email && (
                    <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <label style={labelStyle}>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+961 XX XXX XXX"
                    style={{
                      ...inputStyle,
                      borderColor: errors.phone ? '#ef4444' : 'rgba(37, 99, 235, 0.15)',
                    }}
                  />
                  {errors.phone && (
                    <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>
                      {errors.phone}
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Service Dropdown */}
              <motion.div variants={fieldVariants}>
                <label style={labelStyle}>Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    borderColor: errors.service ? '#ef4444' : 'rgba(37, 99, 235, 0.15)',
                    cursor: 'pointer',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    paddingRight: 40,
                  }}
                >
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.service && (
                  <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>
                    {errors.service}
                  </span>
                )}
              </motion.div>

              {/* Message */}
              <motion.div variants={fieldVariants}>
                <label style={labelStyle}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  style={{
                    ...inputStyle,
                    borderColor: errors.message ? '#ef4444' : 'rgba(37, 99, 235, 0.15)',
                    resize: 'vertical',
                  }}
                />
                {errors.message && (
                  <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>
                    {errors.message}
                  </span>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fieldVariants}>
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 6px 28px rgba(37, 99, 235, 0.45)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    width: '100%',
                    padding: '14px 28px',
                    borderRadius: 12,
                    border: 'none',
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    color: '#fff',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
                    marginTop: 4,
                  }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 30px)',
              color: '#0f172a',
              marginBottom: 12,
            }}>
              Contact Information
            </h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: 36,
            }}>
              Have a question or ready to start a project? Reach out to us directly — we're here to help.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      padding: '18px 20px',
                      borderRadius: 14,
                      background: '#ffffff',
                      boxShadow: '0 2px 12px rgba(15, 23, 42, 0.05)',
                      border: '1px solid rgba(37, 99, 235, 0.08)',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: 'rgba(37, 99, 235, 0.08)',
                      color: '#2563eb',
                      fontSize: 18,
                      flexShrink: 0,
                    }}>
                      <Icon />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        fontWeight: 500,
                        color: '#94a3b8',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: 2,
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 15,
                        fontWeight: 600,
                        color: '#0f172a',
                      }}>
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
