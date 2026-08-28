import { Container, Section } from './index';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import clsx from 'clsx';

const GALLERY_IMAGES = [
  { id: 1, emoji: '🍤', label: 'Camarão Fresco', featured: true },
  { id: 2, emoji: '🥩', label: 'Carnes Selecionadas' },
  { id: 3, emoji: '🍛', label: 'Pratos Nordestinos', featured: true },
  { id: 4, emoji: '🐟', label: 'Frutos do Mar' },
  { id: 5, emoji: '🌶️', label: 'Temperos Autênticos', featured: true },
  { id: 6, emoji: '🍽️', label: 'Apresentação Especial' },
];

export const Gallery = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <Section id="gallery" background="dark" padding="lg">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <p className="text-label text-lime-brand mb-4">GALERIA</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            A Beleza dos Nossos Pratos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada prato é preparado com cuidado e apresentado com estilo.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {GALLERY_IMAGES.map((image, idx) => (
            <div
              key={image.id}
              className={clsx(
                'relative group overflow-hidden rounded-xl bg-gradient-to-br from-lime-brand/20 to-green-dark/20 aspect-square cursor-pointer transition-all duration-500',
                image.featured ? 'md:col-span-1 md:row-span-1' : '',
                isVisible ? 'animate-fade-in' : 'opacity-0',
              )}
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Emoji/Imagem */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-500">
                {image.emoji}
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <p className="text-white font-display font-semibold text-sm md:text-base translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  {image.label}
                </p>
              </div>

              {/* Border highlight */}
              <div className="absolute inset-0 border-2 border-lime-brand/0 group-hover:border-lime-brand/50 transition-colors duration-300 rounded-xl" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
