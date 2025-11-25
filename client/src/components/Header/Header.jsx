import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personalInfo } from '../../data/placeholderData';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-normal text-[var(--color-text)] hover:opacity-70 transition-opacity focus:outline-none rounded"
            aria-label="Home"
          >
            {personalInfo.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-sm font-normal text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus:outline-none rounded"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-secondary text-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-neutral-950 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="block px-4 py-3 rounded-lg text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block px-4 py-3 rounded-lg btn-primary text-center"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

