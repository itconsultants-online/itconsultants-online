import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const RECIPIENT_EMAIL = 'angeloyazbeck@gmail.com';

const contactInfo = [
  { icon: FaPhone, label: 'Phone', value: '+961 76 144 546', href: 'tel:+96176144546' },
  { icon: FaEnvelope, label: 'Email', value: 'angeloyazbeck@gmail.com', href: 'mailto:angeloyazbeck@gmail.com' },
  { icon: FaClock, label: 'Hours', value: 'Mon–Sat, 9am–7pm', href: null },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Beirut, Lebanon', href: null },
];

const serviceOptions = [
  'Web Development',
  'Mobile Apps',
  'IT Support',
  'Cybersecurity',
  'Network Setup & Maintenance',
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
  boxSizing: 'border-box',
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
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build mailto link — opens the user's email app with everything pre-filled
    const subject = encodeURIComponent(`[IT Consultants] ${formData.service} Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello IT Consultants,\n\n` +
      `My name is ${formData.name} and I'm reaching out regarding ${formData.service}.\n\n` +
      `📋 MESSAGE:\n${formData.message}\n\n` +
      `📞 CONTACT DETAILS:\n` +
      `• Name:    ${formData.name}\n` +
      `• Email:   ${formData.email}\n` +
      `• Phone:   ${formData.phone}\n` +
      `• Service: ${formData.service}\n\n` +
      `Looking forward to hearing from you.\n\n` +
      `Best regards,\n${formData.name}`
    );

    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const getFocusStyle = (field) =>
    focusedField === field
      ? { borderColor: '#2563eb', boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.15)' }
      : {};

  return (
    <section
      id="contact"
      style={{ position: 'relative', padding: '100px 0 120px', background: '#f0f4ff' }}
    >
      {/* Section header */}
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>CONTACT US</div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 44px)',
            color: '#0f172a',
            lineHeight: 1.2,
            marginTop: 8,
          }}>
            Let's Start a Conversation
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            color: '#475569',
            marginTop: 12,
            maxWidth: 520,
            margin: '12px auto 0',
            lineHeight: 1.6,
          }}>
            Ready to transform your IT infrastructure? Fill out the form and we'll open your email app with everything pre-filled — ready to send.
          </p>
        </motion.div>

        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: 48,
          alignItems: 'start',
        }}>

          {/* ── FORM ── */}
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
            {/* Ambient glows inside card */}
            <div style={{
              position: 'absolute', top: -100, right: -100,
              width: 300, height: 300, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12), transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: -80, left: -80,
              width: 250, height: 250, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08), transparent 70%)',
              pointerEvents: 'none',
            }} />

            <h3 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 28px)', color: '#f8fafc', marginBottom: 6,
            }}>
              Send Us a Message
            </h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14,
              color: '#94a3b8', marginBottom: 28, lineHeight: 1.6,
            }}>
              Your email app will open with the message pre-filled — just hit send.
            </p>

            {/* Success banner */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: '16px 20px', borderRadius: 12,
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.25)',
                  }}>
                    <FaCheckCircle style={{ color: '#22c55e', fontSize: 20, flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#22c55e' }}>
                        Your email app should be opening now!
                      </div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#86efac', marginTop: 2 }}>
                        Your message is pre-filled and ready. Just review and hit Send in your email client.
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
                <label style={labelStyle}>Full Name *</label>
                <input
                  type="text" name="name" value={formData.name}
                  onChange={handleChange} placeholder="Your full name"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...inputStyle,
                    borderColor: errors.name ? '#ef4444' : 'rgba(37, 99, 235, 0.15)',
                    ...getFocusStyle('name'),
                  }}
                />
                {errors.name && <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>{errors.name}</span>}
              </motion.div>

              {/* Email + Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <motion.div variants={fieldVariants}>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email" name="email" value={formData.email}
                    onChange={handleChange} placeholder="you@company.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...inputStyle,
                      borderColor: errors.email ? '#ef4444' : 'rgba(37, 99, 235, 0.15)',
                      ...getFocusStyle('email'),
                    }}
                  />
                  {errors.email && <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>{errors.email}</span>}
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <label style={labelStyle}>Phone *</label>
                  <input
                    type="tel" name="phone" value={formData.phone}
                    onChange={handleChange} placeholder="+961 XX XXX XXX"
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...inputStyle,
                      borderColor: errors.phone ? '#ef4444' : 'rgba(37, 99, 235, 0.15)',
                      ...getFocusStyle('phone'),
                    }}
                  />
                  {errors.phone && <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>{errors.phone}</span>}
                </motion.div>
              </div>

              {/* Service */}
              <motion.div variants={fieldVariants}>
                <label style={labelStyle}>Service Needed *</label>
                <select
                  name="service" value={formData.service} onChange={handleChange}
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...inputStyle,
                    borderColor: errors.service ? '#ef4444' : 'rgba(37, 99, 235, 0.15)',
                    ...getFocusStyle('service'),
                    cursor: 'pointer', appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: 40,
                  }}
                >
                  <option value="" disabled style={{ background: '#1e293b' }}>Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} style={{ background: '#1e293b' }}>{opt}</option>
                  ))}
                </select>
                {errors.service && <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>{errors.service}</span>}
              </motion.div>

              {/* Message */}
              <motion.div variants={fieldVariants}>
                <label style={labelStyle}>Message *</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your project, goals, timeline, or any questions you have..."
                  rows={5}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...inputStyle,
                    borderColor: errors.message ? '#ef4444' : 'rgba(37, 99, 235, 0.15)',
                    ...getFocusStyle('message'),
                    resize: 'vertical',
                  }}
                />
                {errors.message && <span style={{ fontSize: 12, color: '#ef4444', marginTop: 4, display: 'block' }}>{errors.message}</span>}
              </motion.div>

              {/* Submit */}
              <motion.div variants={fieldVariants}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(37, 99, 235, 0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    width: '100%', padding: '15px 28px', borderRadius: 12, border: 'none',
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    color: '#fff', fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15, fontWeight: 600, cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(37, 99, 235, 0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 4,
                  }}
                >
                  <FaPaperPlane style={{ fontSize: 14 }} />
                  Open in Email App
                </motion.button>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                  color: '#64748b', textAlign: 'center', marginTop: 10,
                }}>
                  This will open your default email app (Gmail, Outlook, Mail, etc.) with the message ready to send.
                </p>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* ── CONTACT INFO ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="section-label">GET IN TOUCH</div>
            <h3 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 30px)', color: '#0f172a',
              marginBottom: 12, marginTop: 8,
            }}>
              We're Here to Help
            </h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              color: '#475569', lineHeight: 1.7, marginBottom: 32,
            }}>
              Have a question or ready to kick off a project? Reach out directly — we respond to all inquiries within a few hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={item.href ? { x: 4 } : {}}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 16,
                      padding: '18px 20px', borderRadius: 14,
                      background: '#ffffff',
                      boxShadow: '0 2px 12px rgba(15, 23, 42, 0.05)',
                      border: '1px solid rgba(37, 99, 235, 0.08)',
                      textDecoration: 'none',
                      cursor: item.href ? 'pointer' : 'default',
                      transition: 'box-shadow 0.2s',
                    }}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: 44, height: 44, borderRadius: 12,
                      background: 'rgba(37, 99, 235, 0.08)', color: '#2563eb',
                      fontSize: 18, flexShrink: 0,
                    }}>
                      <Icon />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                        fontWeight: 500, color: '#94a3b8', textTransform: 'uppercase',
                        letterSpacing: '0.05em', marginBottom: 2,
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 15,
                        fontWeight: 600, color: item.href ? '#2563eb' : '#0f172a',
                      }}>
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                );
                return item.href
                  ? <a key={item.label} href={item.href} style={{ textDecoration: 'none' }}>{inner}</a>
                  : <div key={item.label}>{inner}</div>;
              })}
            </div>

            {/* Quick-email CTA */}
            <motion.a
              href={`mailto:${RECIPIENT_EMAIL}?subject=Quick%20Inquiry%20—%20IT%20Consultants`}
              whileHover={{ scale: 1.02, boxShadow: '0 6px 24px rgba(37, 99, 235, 0.2)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '14px 24px', borderRadius: 12, textDecoration: 'none',
                background: 'rgba(37, 99, 235, 0.06)',
                border: '1.5px solid rgba(37, 99, 235, 0.2)',
                color: '#2563eb', fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, fontWeight: 600, transition: 'all 0.2s',
              }}
            >
              <FaEnvelope />
              Email Us Directly
            </motion.a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
