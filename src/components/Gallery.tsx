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
    "/lovable-uploads/imagens/Cliente_1_1_1E3F1CE549BD2A5D6C7D603FA76D65.jpeg",
    "/lovable-uploads/imagens/Cliente_1_2_2BA53FF45E681BD02C8B79AFD461C6.jpeg",
    "/lovable-uploads/imagens/Cliente_1_3_2BE09FC339C1959C74E02A4B351D84.jpeg",
    "/lovable-uploads/imagens/Cliente_1_4_2D596B5B1D3D9820B6F30CA21B72F8.jpeg",
    "/lovable-uploads/imagens/Cliente_1_5_3F02E7FA2CB90FE6EC78611241A3D8.jpeg",
    "/lovable-uploads/imagens/Cliente_1_6_5DF8F1846FB58A53CC34B4778B5B4E.jpeg",
    "/lovable-uploads/imagens/Cliente_1_7_6F41C894BC6EB85DE5C462DC647832.jpeg",
    "/lovable-uploads/imagens/Cliente_1_8_20BB83568D34E6D46B9D96562FD301.jpeg",
    "/lovable-uploads/imagens/Cliente_1_9_48C4455580A43C26E0FA25D05FFE0A.jpeg",
    "/lovable-uploads/imagens/Cliente_1_10_061EC9258F3F53C26CC9ADB36BE874.jpeg",
    "/lovable-uploads/imagens/Cliente_1_11_62DB123CB12909210EC0BF31F6736E.jpeg",
    "/lovable-uploads/imagens/Cliente_1_12_75E4446FCE253DE6781E61CFF0054F.jpeg",
    "/lovable-uploads/imagens/Cliente_1_13_221CE12088B865B20B54EE0306F6A5.jpeg",
    "/lovable-uploads/imagens/Cliente_1_14_494DE6EC8833569AD22BE6F49ACB49.jpeg",
    "/lovable-uploads/imagens/Cliente_1_15_5772E35E126FF2881B2705CC63187D.jpeg",
    "/lovable-uploads/imagens/Cliente_1_16_213124EBB0FB7BEC3A86ED1F29BEEC.jpeg",
    "/lovable-uploads/imagens/Cliente_1_17_4085701EC978804C889F057C600AB3.jpeg",
    "/lovable-uploads/imagens/Cliente_1_18_C7D69BD10DB28547322BC608118F7E.jpeg",
    "/lovable-uploads/imagens/Cliente_1_20_DC4E4ED1AF6F7B6041E01EB7EEB707.jpeg",
    "/lovable-uploads/imagens/Cliente_1_21_DCC0EDFF2E26919F604059549B0D1B.jpeg",
    "/lovable-uploads/imagens/Cliente_1_22_EDC4CA9C256C32A5E7137D4A3DC3B3.jpeg",
    "/lovable-uploads/imagens/Cliente_1_23_F5D28C9D46916287E6E28FFEBEED6A.jpeg",
    "/lovable-uploads/imagens/Cliente_1_24_F17F651EC78CF477EE2B78F15A6A97.jpeg",
    "/lovable-uploads/imagens/Cliente_1_25_F30F5B3C8B34FDDFB1E636692426D9.jpeg",
    "/lovable-uploads/imagens/Cliente_1_26_FADC585AD069025C16215D9EEFDBF9.jpeg",
    "/lovable-uploads/imagens/Cliente_2_1_IMG-20240925-WA0087.jpg",
    "/lovable-uploads/imagens/Cliente_2_2_IMG-20240925-WA0085.jpg",
    "/lovable-uploads/imagens/Cliente_2_3_IMG-20240925-WA0086.jpg",
    "/lovable-uploads/imagens/Cliente_2_4_IMG-20240925-WA0089.jpg",
    "/lovable-uploads/imagens/Cliente_2_5_IMG-20240925-WA0088.jpg",
    "/lovable-uploads/imagens/Cliente_2_6_IMG-20240925-WA0090.jpg",
    "/lovable-uploads/imagens/Cliente_3_1_IMG-20240617-WA0019.jpg",
    "/lovable-uploads/imagens/Cliente_3_2_IMG-20240617-WA0017.jpg",
    "/lovable-uploads/imagens/Cliente_3_3_IMG-20240617-WA0016.jpg",
    "/lovable-uploads/imagens/Cliente_3_4_IMG-20240617-WA0015.jpg",
    "/lovable-uploads/imagens/Cliente_3_5_20240417_130608.jpg",
    "/lovable-uploads/imagens/Cliente_3_6_20240417_130639.jpg",
    "/lovable-uploads/imagens/Cliente_3_7_20240417_130601.jpg"
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