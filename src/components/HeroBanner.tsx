import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// import b1 from "/images/b1.webp";

const banners = [
  {
    id: 1,
    desktop: "/images/1.webp",
    mobile: "/images/1.1.webp",
    title: "Novidades em Vapes",
    subtitle: "Descubra os melhores sabores e tecnologia",
    cta: "Veja Ofertas",
  },
  {
    id: 2,
    desktop: "/images/2.webp",
    mobile: "/images/2.1.webp",
    title: "ENTREGAS DE MOTOBOY",
    subtitle:
      "De Segunda a Sexta, pedidos confirmados até as 13h serão entregues no mesmo dia",
    cta: "Comprar Agora",
  },
  {
    id: 3,
    desktop: "/images/3.webp",
    mobile: "/images/3.1.webp",
    title: "Acessórios Premium",
    subtitle: "Complete sua experiência de vaping",
    cta: "Explorar",
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative h-96 lg:h-[500px] overflow-hidden bg-gray-900">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            {/* <ImageWithFallback
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover z-0"
            /> */}
            {/* ✅ IMAGEM RESPONSIVA */}
            <picture>
              <source srcSet={banner.mobile} media="(max-width: 768px)" />
              <img
                src={banner.desktop}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
            </picture>
            {/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-center text-white px-4 max-w-2xl">
                {/* <h2 className="text-4xl lg:text-6xl font-bold mb-4">
                  {banner.title}
                </h2>
                <p className="text-xl lg:text-2xl mb-8">{banner.subtitle}</p> */}
                {/* <Button
                  size="lg"
                  className="bg-[#00AEEF] hover:bg-[#0099d4] text-white px-8 py-3 text-lg"
                >
                  {banner.cta}
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button> */}

      {/* Dots Indicator */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}
