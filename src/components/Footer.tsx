import { Container } from './index';
import { Logo } from './Logo';
import { RESTAURANT_INFO, NAV_LINKS } from '@constants/index';
import { Instagram, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-dark text-white">
      <Container className="py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size="sm" />
              <div>
                <p className="font-display font-bold">SABOR</p>
                <p className="text-xs text-gray-300">Arrochado</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sabor que tem sotaque. Uma experiência nordestina de verdade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-lime-brand transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-lime-brand transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} />
                <span>{RESTAURANT_INFO.reference}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Instagram size={16} />
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime-brand transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-display font-bold mb-4">Horário</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>{RESTAURANT_INFO.hours.days}</li>
              <li>{RESTAURANT_INFO.hours.open} às {RESTAURANT_INFO.hours.close}</li>
              <li className="pt-2 mt-2 border-t border-white/20 text-xs">
                Aberto todos os dias
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 mb-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            © {currentYear} {RESTAURANT_INFO.fullName}. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-xs">
            Feito com ❤️ para os fãs de bom sabor
          </p>
        </div>
      </Container>
    </footer>
  );
};
