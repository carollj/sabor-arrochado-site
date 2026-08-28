import { Container, Section } from './index';

export const About = () => {
  return (
    <Section id="about" background="light">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Conteúdo */}
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Mais que comida.
              <span className="block text-lime-brand">É Sabor Arrochado.</span>
            </h2>

            <p className="text-lg text-gray-dark mb-6 leading-relaxed">
              O Sabor Arrochado traz para a mesa o sabor e a personalidade do Nordeste em pratos generosos, cheios de sabor e feitos para compartilhar bons momentos.
            </p>

            <p className="text-gray-dark mb-8 leading-relaxed">
              Aqui o prato chega arrochado: fartura, qualidade e aquele toque especial que só o Nordeste sabe fazer. Comida boa pede mesa cheia, amigos de verdade e histórias que rendem.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Tradição', text: 'Nordestina' },
                { label: 'Pratos', text: 'Generosos' },
                { label: 'Sabor', text: 'de Verdade' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-lime-brand/10 rounded-lg border border-lime-brand/30 text-center hover:bg-lime-brand/20 transition-colors"
                >
                  <p className="text-label text-lime-brand mb-2">{item.label}</p>
                  <p className="font-display font-semibold text-dark">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-lime-brand to-green-dark rounded-2xl flex items-center justify-center text-6xl shadow-strong">
              🌴
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
