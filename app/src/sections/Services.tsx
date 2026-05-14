import { Globe, Smartphone, Wrench, Shield, Network } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built for performance, scalability, and exceptional user experience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native iOS and Android applications tailored to your business needs with intuitive design and robust functionality.',
  },
  {
    icon: Wrench,
    title: 'IT Support',
    description: 'On-site and remote technical support, maintenance, and troubleshooting to keep your operations running smoothly.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced threat detection, security audits, and comprehensive protection for your digital infrastructure and data.',
  },
  {
    icon: Network,
    title: 'Network Setup & Maintenance',
    description: 'Complete network design, installation, and ongoing management to ensure reliable connectivity and optimal performance.',
  },
];

export default function Services() {
  const sectionRef = useScrollReveal(0.15);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-bgdark scroll-mt-nav"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="reveal-element text-white font-bold text-[clamp(28px,4vw,40px)] leading-[1.2] tracking-[-0.01em]">
            Our Services
          </h2>
          <p
            className="reveal-element text-text-muted mt-4 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', '--stagger-index': 1 } as React.CSSProperties}
          >
            Comprehensive IT solutions tailored to your business needs, delivered by experienced professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            // On lg screens, center the last 2 cards by placing them in cols 2 and 3
            const colClass = index === 3 ? 'lg:col-start-2' : index === 4 ? 'lg:col-start-3' : '';
            return (
              <div
                key={service.title}
                className={`reveal-element glass-card glass-card-hover p-6 md:p-8 flex flex-col gap-4 ${colClass}`}
                style={{ '--stagger-index': index + 1 } as React.CSSProperties}
              >
                <div className="icon-glow">
                  <Icon size={32} className="text-neon" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-[clamp(20px,2.5vw,24px)] leading-[1.3]">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-[clamp(14px,1.6vw,15px)]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
