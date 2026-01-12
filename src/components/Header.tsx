import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-white border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center text-white font-bold">
              OS
            </div>
            <span className={isScrolled ? 'text-brand-black' : 'text-brand-white'}>
              One Stop
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-brand-orange'
                    : 'text-gray-200 hover:text-brand-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className={`w-6 h-6 ${isScrolled ? 'text-brand-black' : 'text-brand-white'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className={`w-6 h-6 ${isScrolled ? 'text-brand-black' : 'text-brand-white'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block font-medium py-2 transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-brand-orange'
                    : 'text-gray-200 hover:text-brand-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
