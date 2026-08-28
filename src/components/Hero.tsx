import { Container, Button } from './index';
import { RESTAURANT_INFO } from '@constants/index';
import { openWhatsApp } from '@utils/whatsapp';
import { MapPin, Phone } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-dark to-dark pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="dots" x="40" y="40" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#D4D836" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#dots)" />
        </svg>
      </div>

      <Container className="relative z-10 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Conteúdo Esquerdo */}
          <div className="text-white animate-fade-in">
            <div className="mb-6">
              <p className="text-label text-lime-brand mb-4 flex items-center gap-2">
                <MapPin size={16} />
                JOÃO PESSOA • PARAÍBA
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Sabor que tem
              <span className="block text-lime-brand">sotaque.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              Uma experiência nordestina de verdade, com sabor, fartura e aquele toque arrochado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Cardápio
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Como Chegar
              </Button>
            </div>

            {/* Info Rápida */}
            <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 gap-6">
              <div>
                <p className="text-label text-lime-brand mb-2">HORÁRIO</p>
                <p className="text-white font-display font-semibold">
                  {RESTAURANT_INFO.hours.days}
                </p>
                <p className="text-gray-300">
                  {RESTAURANT_INFO.hours.open} até {RESTAURANT_INFO.hours.close}
                </p>
              </div>
              <div>
                <p className="text-label text-lime-brand mb-2">CONTATO</p>
                <button
                  onClick={() => openWhatsApp()}
                  className="text-white font-display font-semibold hover:text-lime-brand transition-colors flex items-center gap-2"
                >
                  <Phone size={18} />
                  {RESTAURANT_INFO.phone}
                </button>
              </div>
            </div>
          </div>

          {/* Elemento Visual Direita */}
          <div className="hidden md:block relative h-96 lg:h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-brand/20 to-transparent rounded-lg animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🍽️</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-lime-brand"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};
