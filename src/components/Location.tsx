import { Container, Section, Button } from './index';
import { RESTAURANT_INFO } from '@constants/index';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { formatPhone } from '@utils/format';

export const Location = () => {
  return (
    <Section id="location" background="light" padding="lg">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Mapa */}
          <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-strong h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDz4S-l50pVHdIZ-M-IqbBK-2BdVd3TaEg&q=${RESTAURANT_INFO.coordinates.lat},${RESTAURANT_INFO.coordinates.lng}`}
            />
          </div>

          {/* Informações */}
          <div className="order-1 md:order-2 animate-fade-in">
            <p className="text-label text-lime-brand mb-4">ENCONTRE A GENTE</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Venha Nos Visitar
            </h2>

            {/* Info Cards */}
            <div className="space-y-6 mb-8">
              {/* Endereço */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-lime-brand/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-lime-brand" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-dark mb-1">Localização</h3>
                  <p className="text-gray-dark">{RESTAURANT_INFO.address}</p>
                  <p className="text-gray-600 text-sm">{RESTAURANT_INFO.reference}</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-lime-brand/20 rounded-lg flex items-center justify-center">
                    <Clock className="text-lime-brand" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-dark mb-1">Horário de Funcionamento</h3>
                  <p className="text-gray-dark">{RESTAURANT_INFO.hours.days}</p>
                  <p className="text-gray-600 text-sm">
                    {RESTAURANT_INFO.hours.open} às {RESTAURANT_INFO.hours.close}
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-lime-brand/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-lime-brand" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-dark mb-1">Telefone</h3>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-lime-brand font-semibold hover:underline"
                  >
                    {formatPhone(RESTAURANT_INFO.phone)}
                  </a>
                  <p className="text-gray-600 text-sm">WhatsApp disponível</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-lime-brand/20 rounded-lg flex items-center justify-center">
                    <Instagram className="text-lime-brand" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-dark mb-1">Redes Sociais</h3>
                  <a
                    href={RESTAURANT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-brand font-semibold hover:underline"
                  >
                    {RESTAURANT_INFO.instagram}
                  </a>
                  <p className="text-gray-600 text-sm">Siga nossos pratos do dia</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              onClick={() => window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`, '_blank')}
            >
              Reservar no WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
