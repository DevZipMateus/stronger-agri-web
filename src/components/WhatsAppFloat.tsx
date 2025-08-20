import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after a delay when page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip for first-time visitors
      const hasSeenTooltip = localStorage.getItem('whatsapp-tooltip-seen');
      if (!hasSeenTooltip) {
        setShowTooltip(true);
        localStorage.setItem('whatsapp-tooltip-seen', 'true');
        
        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre os serviços da Stronger Mecânica e Peças.'
    );
    window.open(`https://wa.me/5546988111115?text=${message}`, '_blank');
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 mb-2 w-64 bg-white rounded-lg shadow-xl border border-border p-4 animate-fade-up">
            <button
              onClick={hideTooltip}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start space-x-3">
              <img 
                src="/lovable-uploads/f1c488d6-c540-47b5-83d0-38145096f531.png" 
                alt="Stronger Logo" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-primary text-sm">Stronger Mecânica</h4>
                <p className="text-muted-foreground text-xs mt-1">
                  Precisa de manutenção em suas máquinas agrícolas? 
                  Fale conosco no WhatsApp!
                </p>
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-0 right-4 transform translate-y-full">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          className="whatsapp-float group relative overflow-hidden"
          aria-label="Contato via WhatsApp"
        >
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
          
          {/* Button Content */}
          <div className="relative w-full h-full flex items-center justify-center">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>

          {/* Hover Text */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-industrial text-industrial-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Fale conosco no WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-industrial"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Alternative Contact Suggestion */}
      <div className="fixed bottom-24 right-6 z-40">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-border p-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-xs text-muted-foreground text-center">
            Ou ligue: <br />
            <span className="font-semibold text-primary">(46) 98811-1115</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;