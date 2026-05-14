import ParticleCanvas from '../components/ParticleCanvas';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero scroll-mt-nav"
    >
      <ParticleCanvas />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Headline */}
        <h1
          className="text-white font-bold leading-[1.1] tracking-[-0.02em] animate-fade-in-up"
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            animationDelay: '0.3s',
            opacity: 0,
          }}
        >
          We Build. We Secure. We Support.
        </h1>

        {/* Subtitle */}
        <p
          className="text-text-muted mt-6 mx-auto max-w-2xl leading-relaxed animate-fade-in-up"
          style={{
            fontSize: 'clamp(15px, 1.8vw, 17px)',
            animationDelay: '0.5s',
            opacity: 0,
          }}
        >
          Full-service IT solutions delivered on-site and remotely. From web development to cybersecurity,
          we handle every aspect of your technology infrastructure so you can focus on growing your business.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mt-10 animate-fade-in-up"
          style={{
            animationDelay: '0.7s',
            opacity: 0,
          }}
        >
          <button
            onClick={() => handleScrollTo('#services')}
            className="gradient-cta text-white font-semibold px-8 py-3.5 rounded-[10px] hover:shadow-neon-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Explore Services
          </button>
          <button
            onClick={() => handleScrollTo('#contact')}
            className="border border-[rgba(0,212,255,0.5)] bg-transparent text-neon font-semibold px-8 py-3.5 rounded-[10px] hover:bg-[rgba(0,212,255,0.1)] hover:border-neon hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => handleScrollTo('#services')}
          className="text-[rgba(136,146,164,0.5)] animate-bounce-gentle hover:text-text-muted transition-colors"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
}
