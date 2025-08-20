import React from 'react';
import { ArrowRight, Wrench, Shield, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFCC00' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                <span className="text-accent">STRONGER</span><br />
                MECÂNICA E PEÇAS
              </h1>
              <div className="accent-border mb-6"></div>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Especialistas em manutenção de máquinas agrícolas desde 2019. 
                Garantimos máximo desempenho para sua frota com técnicos qualificados 
                e peças de qualidade.
              </p>
            </div>

            <div className="animate-slide-right">
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">5+ Anos de Experiência</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Técnicos Qualificados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Atendimento Regional</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="btn-accent text-lg px-8 py-3"
                  onClick={() => window.open('https://wa.me/5546988111115', '_blank')}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  className="btn-outline-accent text-lg px-8 py-3"
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Wrench className="mr-2 w-5 h-5" />
                  Nossos Serviços
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative z-10 animate-fade-up delay-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="w-8 h-8 text-industrial" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Manutenção Especializada</h3>
                    <p className="text-sm text-gray-300">Preventiva e corretiva</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-industrial" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Peças Originais</h3>
                    <p className="text-sm text-gray-300">Qualidade garantida</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-industrial" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Atendimento Rápido</h3>
                    <p className="text-sm text-gray-300">Reduzindo paradas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-industrial" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Assistência Externa</h3>
                    <p className="text-sm text-gray-300">Onde você precisa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Precisa de manutenção em suas máquinas agrícolas?
          </p>
          <Button 
            className="btn-whatsapp text-lg px-8 py-3"
            onClick={() => window.open('https://wa.me/5546988111115', '_blank')}
          >
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;