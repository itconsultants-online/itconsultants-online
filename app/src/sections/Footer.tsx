const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-bgdark border-t border-[rgba(0,212,255,0.08)] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <span className="text-neon font-bold text-lg">IT Consultants</span>

        {/* Tagline */}
        <p className="text-text-muted text-sm">Your Trusted IT Partner</p>

        {/* Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-1 text-sm">
          {navLinks.map((link, index) => (
            <span key={link.href} className="flex items-center">
              {index > 0 && (
                <span className="text-[rgba(136,146,164,0.4)] mx-2">·</span>
              )}
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-text-muted hover:text-neon transition-colors duration-300"
              >
                {link.label}
              </button>
            </span>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-[rgba(136,146,164,0.6)] text-sm mt-4">
          2025 IT Consultants. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
