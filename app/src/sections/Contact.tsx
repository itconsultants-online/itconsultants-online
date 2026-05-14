import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const serviceOptions = [
  'Select a service',
  'Web Development',
  'Mobile App Development',
  'IT Support',
  'Cybersecurity',
  'Network Setup & Maintenance',
];

export default function Contact() {
  const sectionRef = useScrollReveal(0.15);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Select a service',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.service === 'Select a service') {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (fieldName: keyof FormErrors) =>
    `w-full bg-[rgba(8,8,15,0.6)] border rounded-[10px] px-4 py-3 text-white placeholder-[rgba(136,146,164,0.5)] outline-none transition-all duration-200 focus:border-neon focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] ${
      errors[fieldName] ? 'border-red-500' : 'border-[rgba(0,212,255,0.15)]'
    }`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-bgdark scroll-mt-nav"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="reveal-element text-white font-bold text-[clamp(28px,4vw,40px)] leading-[1.2] tracking-[-0.01em]">
            Get In Touch
          </h2>
          <p
            className="reveal-element text-text-muted mt-4 max-w-lg mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', '--stagger-index': 1 } as React.CSSProperties}
          >
            Ready to transform your IT infrastructure? Reach out and let's discuss how we can help.
          </p>
        </div>

        {/* Contact Card */}
        <div className="reveal-element glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center animate-success-pop">
                  <CheckCircle size={48} className="text-neon" />
                  <h3 className="text-white font-semibold text-xl">Thank You!</h3>
                  <p className="text-text-muted leading-relaxed">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-text-muted text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClasses('name')}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-text-muted text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClasses('email')}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-text-muted text-sm font-medium mb-2">
                      Phone Number <span className="text-[rgba(136,146,164,0.5)]">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+961 76 144 546"
                      className="w-full bg-[rgba(8,8,15,0.6)] border border-[rgba(0,212,255,0.15)] rounded-[10px] px-4 py-3 text-white placeholder-[rgba(136,146,164,0.5)] outline-none transition-all duration-200 focus:border-neon focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-text-muted text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClasses('service')}
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option} className="bg-surface">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-400 text-xs mt-1">{errors.service}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-text-muted text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or IT needs..."
                      rows={4}
                      className={`${inputClasses('message')} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="gradient-cta text-white font-semibold py-3.5 rounded-[10px] hover:shadow-neon-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 mt-1"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-8 pt-2">
              {[
                { icon: Phone, label: 'Phone', value: '+961 76 144 546' },
                { icon: Mail, label: 'Email', value: 'angeloyazbeck@gmail.com' },
                {
                  icon: Clock,
                  label: 'Working Hours',
                  value: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM',
                },
                { icon: MapPin, label: 'Location', value: 'Available On-Site & Remotely' },
              ].map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[rgba(0,212,255,0.1)] flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-neon" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-text-muted text-sm">{detail.label}</span>
                      <p className="text-white whitespace-pre-line">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
