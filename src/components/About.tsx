import React from 'react';
import { Target, Eye, Heart, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Compromisso com a Qualidade',
      description: 'Utilizamos peças de reposição originais ou de qualidade equivalente, realizando os serviços com precisão e atenção aos detalhes.'
    },
    {
      icon: Heart,
      title: 'Ética e Transparência',
      description: 'Atuamos com honestidade e integridade em todas as relações, mantendo transparência em custos, prazos e serviços.'
    },
    {
      icon: Users,
      title: 'Responsabilidade',
      description: 'Assumimos a responsabilidade pelos serviços prestados, garantindo a satisfação do cliente e resolução de problemas.'
    },
    {
      icon: Heart,
      title: 'Respeito',
      description: 'Valorizamos clientes, colaboradores e comunidade, promovendo um ambiente de trabalho colaborativo e respeitoso.'
    },
    {
      icon: Sparkles,
      title: 'Sustentabilidade',
      description: 'Adotamos práticas que contribuem para preservação do meio ambiente, como uso eficiente de recursos.'
    },
    {
      icon: Target,
      title: 'Inovação',
      description: 'Estamos abertos a novas tecnologias e soluções que possam melhorar a eficiência e qualidade dos serviços.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sobre a <span className="text-accent">Stronger Mecânica</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde 2019 no município de Palmas, Paraná, somos especialistas em garantir 
            o máximo desempenho da sua frota agrícola.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Nossa História</h3>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                Desde sua fundação em 2019, no município de Palmas, estado do Paraná, 
                a <strong>Stronger Mecânica e Peças</strong> entende que a agricultura moderna 
                exige máquinas eficientes e confiáveis.
              </p>
              <p className="mb-4">
                No início prestávamos serviços de manutenção e, no decorrer do tempo, 
                fomos incorporando manutenção preventiva, corretiva, serviços de torno, 
                solda e jateamento de abrasivos, com técnicos qualificados que garantem 
                um serviço eficiente.
              </p>
              <p>
                Diante das grandes distâncias entre as lavouras e as empresas do ramo, 
                a Stronger optou por estar próximo ao cliente, facilitando a logística 
                e diminuindo os custos e prazos das máquinas paradas.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="card-industrial p-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-industrial" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Nossa Missão</h4>
                    <p className="text-muted-foreground">
                      Garantir o máximo desempenho da frota agrícola do cliente, 
                      oferecendo serviços de manutenção especializada e peças de 
                      reposição para o agricultor colher os melhores resultados.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-industrial" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Nossa Visão</h4>
                    <p className="text-muted-foreground">
                      Ser referência na região, oferecendo serviços de alta qualidade 
                      e confiança na manutenção e reparação de máquinas e equipamentos 
                      agrícolas, garantindo produtividade e eficiência no campo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Nossos <span className="text-accent">Valores</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Os princípios que norteiam nosso trabalho e relacionamento com clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="card-service p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-industrial" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-industrial rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-industrial-foreground mb-4">
              Pronto para Conhecer Nossos Serviços?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar a manter 
              sua frota agrícola sempre em perfeito funcionamento.
            </p>
            <button 
              className="btn-accent px-8 py-3 text-lg font-semibold rounded-lg inline-flex items-center space-x-2 hover:shadow-accent transition-all"
              onClick={() => window.open('https://wa.me/5546988111115', '_blank')}
            >
              <span>Falar com Especialista</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;