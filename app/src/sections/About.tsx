import { Users, Calendar, FolderCheck, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  isNumeric: boolean;
  target?: number;
  suffix?: string;
  staggerIndex: number;
}

function StatCard({ icon: Icon, value, label, isNumeric, target, suffix, staggerIndex }: StatCardProps) {
  const { ref, displayValue } = useCountUp({
    target: target || 0,
    duration: 2000,
    suffix: suffix || '',
  });

  return (
    <div
      className="reveal-element bg-[rgba(17,17,24,0.6)] border border-[rgba(0,212,255,0.1)] rounded-xl p-6 flex flex-col gap-2"
      style={{ '--stagger-index': staggerIndex } as React.CSSProperties}
      ref={isNumeric ? ref : undefined}
    >
      <div className="icon-glow">
        <Icon size={24} className="text-neon" strokeWidth={1.5} />
      </div>
      <span className="text-white font-bold text-[clamp(36px,5vw,48px)] leading-none mt-1">
        {isNumeric ? displayValue : value}
      </span>
      <span className="text-text-muted text-[clamp(13px,1.5vw,14px)]">{label}</span>
    </div>
  );
}

const stats = [
  { icon: Users, value: '200+', label: 'Clients Served', isNumeric: true, target: 200, suffix: '+' },
  { icon: Calendar, value: '5+', label: 'Years Experience', isNumeric: true, target: 5, suffix: '+' },
  { icon: FolderCheck, value: '500+', label: 'Projects Completed', isNumeric: true, target: 500, suffix: '+' },
  { icon: Clock, value: '24/7', label: 'Support Available', isNumeric: false },
];

export default function About() {
  const sectionRef = useScrollReveal(0.15);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-bgdark section-glow scroll-mt-nav"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col">
            <span
              className="reveal-element text-neon font-medium text-sm uppercase tracking-[0.1em] mb-4"
            >
              About Us
            </span>
            <h2
              className="reveal-element text-white font-bold text-[clamp(28px,4vw,40px)] leading-[1.2] tracking-[-0.01em] mb-6"
              style={{ '--stagger-index': 1 } as React.CSSProperties}
            >
              Your Trusted IT Partner
            </h2>
            <div className="flex flex-col gap-4">
              <p
                className="reveal-element text-text-muted leading-relaxed"
                style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', '--stagger-index': 2 } as React.CSSProperties}
              >
                IT Consultants is a full-service technology company dedicated to helping businesses thrive
                in the digital age. We combine technical expertise with a deep understanding of business
                needs to deliver solutions that drive real results.
              </p>
              <p
                className="reveal-element text-text-muted leading-relaxed"
                style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', '--stagger-index': 3 } as React.CSSProperties}
              >
                Our team of certified professionals brings years of experience across web development,
                mobile applications, cybersecurity, network infrastructure, and technical support. We
                serve businesses of all sizes — from startups to enterprises.
              </p>
              <p
                className="reveal-element text-text-muted leading-relaxed"
                style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', '--stagger-index': 4 } as React.CSSProperties}
              >
                Whether you need us on-site at your office or working remotely, we provide flexible
                engagement models that fit your workflow and budget. Our mission is to make technology
                work seamlessly for your business.
              </p>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 content-start">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                isNumeric={stat.isNumeric}
                target={stat.target}
                suffix={stat.suffix}
                staggerIndex={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
