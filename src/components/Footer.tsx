import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-industrial text-industrial-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/f1c488d6-c540-47b5-83d0-38145096f531.png" 
                alt="Stronger Mecânica e Peças - Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">STRONGER</h3>
                <p className="text-sm text-gray-300">MECÂNICA E PEÇAS</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Especialistas em manutenção de máquinas agrícolas desde 2019. 
              Garantimos máximo desempenho para sua frota com técnicos qualificados 
              e peças de qualidade.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/stronger_pr280?igsh=Z214aW9hZm1ndmZi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Instagram da Stronger Mecânica"
              >
                <Instagram className="w-5 h-5 text-industrial" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61570116203060"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Facebook da Stronger Mecânica"
              >
                <Facebook className="w-5 h-5 text-industrial" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-accent transition-colors text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-accent transition-colors text-left"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-accent transition-colors text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-accent transition-colors text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    PR 280, KM 96, INTERIOR<br />
                    HORIZONTE, PALMAS - PR
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="https://wa.me/5546988111115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  (46) 98811-1115
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:strongerpecas@gmail.com"
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  strongerpecas@gmail.com
                </a>
              </li>
            </ul>

            {/* Quick WhatsApp CTA */}
            <div className="mt-6">
              <a
                href="https://wa.me/5546988111115"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#25D366]/90 transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Stronger Mecânica e Peças. Todos os direitos reservados.</p>
              <p className="mt-1">CNPJ: 35.373.742/0001-47</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://maps.app.goo.gl/k3Vh6Tz36LndMtZ76"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center space-x-1"
              >
                <span>Ver Localização</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;