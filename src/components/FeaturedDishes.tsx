import { Container, Section, Button } from './index';
import { FEATURED_DISHES } from '@data/menu';
import { formatPrice } from '@utils/format';
import { getWhatsAppLinkForDish } from '@utils/whatsapp';
import { Star } from 'lucide-react';

export const FeaturedDishes = () => {
  return (
    <Section id="featured" background="dark" padding="lg">
      <Container>
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <p className="text-label text-lime-brand mb-4">SELEÇÃO ESPECIAL</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Os Queridinhos da Casa
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A parte difícil é escolher só um.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURED_DISHES.map((dish, idx) => (
            <div
              key={dish.id}
              className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden hover:border-lime-brand/50 transition-all duration-300 hover:shadow-strong hover:-translate-y-2"
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Imagem do prato */}
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-lime-brand/20 to-transparent overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  🍽️
                </div>
                <div className="absolute top-4 right-4 bg-lime-brand text-dark px-3 py-1 rounded-full flex items-center gap-2">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-display font-semibold">Destaque</span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2">
                  {dish.name}
                </h3>
                {dish.description && (
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                    {dish.description}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display font-bold text-lime-brand">
                    {formatPrice(dish.price)}
                  </span>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => window.open(getWhatsAppLinkForDish(dish.name), '_blank')}
                  >
                    Quero Esse
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
