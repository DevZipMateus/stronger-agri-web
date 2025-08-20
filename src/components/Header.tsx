import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-industrial text-industrial-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>(46) 98811-1115</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>strongerpecas@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>PR 280, KM 96 - Palmas, PR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-40 nav-industrial transition-all ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/f1c488d6-c540-47b5-83d0-38145096f531.png" 
                alt="Stronger Mecânica e Peças - Logo" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary">STRONGER</h1>
                <p className="text-sm text-muted-foreground">MECÂNICA E PEÇAS</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                Contato
              </button>
              <Button 
                className="btn-accent"
                onClick={() => window.open('https://wa.me/5546988111115', '_blank')}
              >
                Orçamento Grátis
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-4 pt-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-foreground hover:text-accent transition-colors font-medium"
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-foreground hover:text-accent transition-colors font-medium"
                >
                  Sobre Nós
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-foreground hover:text-accent transition-colors font-medium"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-foreground hover:text-accent transition-colors font-medium"
                >
                  Contato
                </button>
                <Button 
                  className="btn-accent w-fit"
                  onClick={() => window.open('https://wa.me/5546988111115', '_blank')}
                >
                  Orçamento Grátis
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;