import { useState } from 'react';
import { Container, Section, Button } from './index';
import { MENU_DATA, MENU_CATEGORIES } from '@data/menu';
import { formatPrice } from '@utils/format';
import { getWhatsAppLinkForDish } from '@utils/whatsapp';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  const filteredMenu = MENU_DATA.filter((item) => item.category === activeCategory);
  const categoryLabel = MENU_CATEGORIES.find((cat) => cat.id === activeCategory)?.label;

  return (
    <Section id="menu" background="light" padding="lg">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <p className="text-label text-lime-brand mb-4">CARDÁPIO COMPLETO</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
            Sabor em <span className="text-lime-brand">Cada Prato</span>
          </h2>
          <p className="text-xl text-gray-dark max-w-2xl mx-auto">
            Do aperitivo ao prato principal, tudo feito com qualidade e dedicação.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-12 md:mb-16 justify-center">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={clsx(
                'px-4 md:px-6 py-2 md:py-3 rounded-full font-display font-semibold transition-all duration-300',
                activeCategory === category.id
                  ? 'bg-lime-brand text-dark shadow-medium'
                  : 'bg-white border-2 border-gray-200 text-dark hover:border-lime-brand'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredMenu.map((item, idx) => (
            <div
              key={item.id}
              className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-lime-brand/50 transition-all duration-300 hover:shadow-medium hover:-translate-y-1"
              style={{
                animationDelay: `${idx * 0.05}s`,
              }}
            >
              {/* Nome e Destaque */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-display font-bold text-dark flex-1">
                  {item.name}
                </h3>
                {item.featured && (
                  <span className="ml-2 bg-lime-brand/20 text-lime-brand text-xs font-display font-semibold px-2 py-1 rounded whitespace-nowrap">
                    ⭐ Destaque
                  </span>
                )}
              </div>

              {/* Descrição */}
              {item.description && (
                <p className="text-sm text-gray-600 mb-4">
                  {item.description}
                </p>
              )}

              {/* Preço e CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-2xl font-display font-bold text-lime-brand">
                  {formatPrice(item.price)}
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => window.open(getWhatsAppLinkForDish(item.name), '_blank')}
                  className="!px-4 !py-2"
                >
                  Pedir
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-gray-dark mb-6">
            Não achou o prato que procura? Fale conosco!
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.open('https://wa.me/5583999328932', '_blank')}
          >
            Falar no WhatsApp
          </Button>
        </div>
      </Container>
    </Section>
  );
};
