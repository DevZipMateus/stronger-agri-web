import React from 'react';
import { Wrench, Settings, Truck, Zap, Hammer, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Peças de Reposição',
      description: 'Peças originais e de qualidade equivalente para garantir o perfeito funcionamento de suas máquinas agrícolas.',
      features: ['Peças Originais', 'Garantia de Qualidade', 'Preços Justos', 'Amplo Estoque']
    },
    {
      icon: Wrench,
      title: 'Revisões Preventivas',
      description: 'Manutenção preventiva programada para evitar paradas inesperadas e prejuízos na produção.',
      features: ['Inspeção Completa', 'Cronograma Personalizado', 'Relatórios Detalhados', 'Recomendações Técnicas']
    },
    {
      icon: Zap,
      title: 'Revisões Corretivas',
      description: 'Reparos especializados para resolver problemas e restaurar o desempenho de seus equipamentos.',
      features: ['Diagnóstico Preciso', 'Reparo Especializado', 'Testes de Qualidade', 'Garantia de Serviço']
    },
    {
      icon: Hammer,
      title: 'Manutenções em Geral',
      description: 'Serviços completos de manutenção para manter suas máquinas sempre em perfeito estado.',
      features: ['Manutenção Completa', 'Técnicos Qualificados', 'Equipamentos Modernos', 'Agilidade']
    },
    {
      icon: Settings,
      title: 'Reformas em Geral',
      description: 'Reformas completas e revitalização de máquinas e equipamentos agrícolas.',
      features: ['Reforma Completa', 'Modernização', 'Pintura Industrial', 'Vida Útil Estendida']
    },
    {
      icon: Wrench,
      title: 'Serviços de Torno e Solda',
      description: 'Serviços especializados de usinagem e soldagem para fabricação e reparo de peças.',
      features: ['Torno Convencional', 'Solda Especializada', 'Fabricação de Peças', 'Precisão Técnica']
    },
    {
      icon: Shield,
      title: 'Jateamento com Abrasivos',
      description: 'Preparação de superfícies e limpeza industrial com técnicas de jateamento profissional.',
      features: ['Limpeza Profunda', 'Preparação de Superfície', 'Remoção de Ferrugem', 'Acabamento Superior']
    },
    {
      icon: Truck,
      title: 'Assistência Externa',
      description: 'Atendimento diretamente em sua propriedade para maior comodidade e agilidade.',
      features: ['Atendimento Local', 'Equipamentos Móveis', 'Diagnóstico no Campo', 'Economia de Tempo']
    }
  ];

  const additionalServices = [
    {
      title: 'Máquinas e Implementos Usados',
      description: 'Seleção de máquinas e implementos agrícolas usados, revisados e com garantia.',
      icon: Settings
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos <span className="text-accent">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços especializados para manter 
            suas máquinas agrícolas sempre em perfeito funcionamento.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="card-service group p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-industrial" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-background rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Serviços <span className="text-accent">Adicionais</span>
          </h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="flex items-start space-x-6 p-6 border border-border rounded-lg hover:border-accent/30 transition-colors">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-industrial" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-industrial rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-industrial-foreground mb-6">
            Por que Escolher a <span className="text-accent">Stronger Mecânica?</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-industrial" />
              </div>
              <h4 className="text-lg font-semibold text-industrial-foreground mb-2">
                Técnicos Qualificados
              </h4>
              <p className="text-gray-300">
                Equipe especializada com anos de experiência em máquinas agrícolas
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-industrial" />
              </div>
              <h4 className="text-lg font-semibold text-industrial-foreground mb-2">
                Atendimento Rápido
              </h4>
              <p className="text-gray-300">
                Reduzimos o tempo de parada das suas máquinas com atendimento ágil
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-industrial" />
              </div>
              <h4 className="text-lg font-semibold text-industrial-foreground mb-2">
                Assistência no Campo
              </h4>
              <p className="text-gray-300">
                Levamos nossos serviços até você, onde quer que esteja
              </p>
            </div>
          </div>

          <Button 
            className="btn-accent text-lg px-8 py-3 inline-flex items-center space-x-2"
            onClick={() => window.open('https://wa.me/5546988111115', '_blank')}
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;