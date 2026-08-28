import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo, Container, Button } from './index';
import { RESTAURANT_INFO, NAV_LINKS } from '@constants/index';
import { useScrollPosition } from '@hooks/useScrollPosition';
import { openWhatsApp } from '@utils/whatsapp';
import clsx from 'clsx';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const hasScroll = scrollPosition > 50;

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300',
        hasScroll
          ? 'bg-white/95 backdrop-blur shadow-subtle'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <Logo size="md" />
            <span className={clsx(
              'font-display font-bold text-lg',
              hasScroll ? 'text-dark' : 'text-white'
            )}>
              SABOR
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'font-display font-semibold text-sm transition-colors',
                  hasScroll
                    ? 'text-dark hover:text-lime-brand'
                    : 'text-white hover:text-lime-brand'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#menu"
              className="btn-primary px-6 py-2 text-sm"
            >
              Ver Cardápio
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={clsx(
              'md:hidden p-2 transition-colors',
              hasScroll ? 'text-dark' : 'text-white'
            )}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <Container className="py-4">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-display font-semibold text-dark hover:text-lime-brand transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2" />
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => {
                  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
              >
                Ver Cardápio
              </Button>
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => {
                  openWhatsApp();
                  setMobileMenuOpen(false);
                }}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
