import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Gallery = () => {
  const [api, setApi] = React.useState<CarouselApi>()

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  )

  // Lista das imagens disponíveis
  const images = [
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 07.56.24.jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 07.56.25.jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 07.56.26 (1).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 07.56.26 (2).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 07.56.26 (3).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 07.56.26.jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 07.56.27.jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.08.jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.09.jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.32 (1).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.32 (2).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.32.jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.33 (1).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.33 (2).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.33 (3).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.33.jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.34 (1).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.34 (2).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.34.jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.35 (1).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.35 (2).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.35 (3).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.35.jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.36 (1).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.36 (2).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.36 (3).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.36 (4).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.36.jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.37 (1).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.37 (2).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.37 (3).jpeg",
    "/lovable-uploads/imagens/novas/WhatsApp Image 2025-09-16 at 08.05.37.jpeg"
  ]

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos serviços já realizados pela nossa equipe especializada em máquinas e implementos agrícolas.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="aspect-square relative overflow-hidden">
                          <img
                            src={image}
                            alt={`Serviço realizado ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-primary text-primary-foreground hover:bg-primary/90" />
            <CarouselNext className="bg-primary text-primary-foreground hover:bg-primary/90" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Gallery