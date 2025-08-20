import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Entre em <span className="text-accent">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades. Entre em contato conosco 
            e tire todas suas dúvidas sobre nossos serviços.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">
              Informações de <span className="text-accent">Contato</span>
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-industrial" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Telefone</h4>
                  <p className="text-muted-foreground mb-2">(46) 98811-1115</p>
                  <Button 
                    className="btn-whatsapp text-sm px-4 py-2"
                    onClick={() => window.open('https://wa.me/5546988111115', '_blank')}
                  >
                    Chamar no WhatsApp
                  </Button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-industrial" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">E-mail</h4>
                  <p className="text-muted-foreground mb-2">strongerpecas@gmail.com</p>
                  <Button 
                    variant="outline"
                    className="btn-outline-accent text-sm px-4 py-2"
                    onClick={() => window.open('mailto:strongerpecas@gmail.com', '_blank')}
                  >
                    Enviar E-mail
                  </Button>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-industrial" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Endereço</h4>
                  <p className="text-muted-foreground mb-2">
                    PR 280, KM 96, INTERIOR<br />
                    HORIZONTE, PALMAS - PR
                  </p>
                  <Button 
                    variant="outline"
                    className="btn-outline-accent text-sm px-4 py-2"
                    onClick={() => window.open('https://maps.app.goo.gl/k3Vh6Tz36LndMtZ76', '_blank')}
                  >
                    Ver no Mapa
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* CNPJ */}
              <div className="flex items-start space-x-4 p-4 rounded-lg border border-border">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-industrial" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">CNPJ</h4>
                  <p className="text-muted-foreground">35.373.742/0001-47</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-primary mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                <Button 
                  variant="outline"
                  className="btn-outline-accent px-4 py-2"
                  onClick={() => window.open('https://www.instagram.com/stronger_pr280?igsh=Z214aW9hZm1ndmZi', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
                <Button 
                  variant="outline"
                  className="btn-outline-accent px-4 py-2"
                  onClick={() => window.open('https://www.facebook.com/profile.php?id=61570116203060', '_blank')}
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">
              Nossa <span className="text-accent">Localização</span>
            </h3>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.123456789!2d-51.123456!3d-26.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI0LjQiUyA1McKwMDcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Stronger Mecânica e Peças"
              ></iframe>
              
              {/* Map Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <h5 className="font-semibold text-primary mb-1">Stronger Mecânica</h5>
                <p className="text-sm text-muted-foreground">PR 280, KM 96 - Palmas, PR</p>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="mt-8 bg-accent/10 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-primary mb-2">
                Precisa de Atendimento Urgente?
              </h4>
              <p className="text-muted-foreground mb-4">
                Entre em contato conosco agora mesmo pelo WhatsApp
              </p>
              <Button 
                className="btn-whatsapp text-base px-6 py-3"
                onClick={() => window.open('https://wa.me/5546988111115', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                (46) 98811-1115
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-industrial rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-industrial-foreground mb-4">
              Pronto para Começar?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar 
              a manter suas máquinas agrícolas sempre funcionando perfeitamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-accent text-lg px-8 py-3"
                onClick={() => window.open('https://wa.me/5546988111115', '_blank')}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                variant="outline"
                className="btn-outline-accent text-lg px-8 py-3"
                onClick={() => window.open('mailto:strongerpecas@gmail.com', '_blank')}
              >
                Enviar E-mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;