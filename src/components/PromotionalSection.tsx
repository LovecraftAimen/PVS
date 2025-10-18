import { Truck, CreditCard, Headphones } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Product, products } from "../data/products";

interface PromotionalSectionProps {
  onProductClick: (product: Product) => void;
}

export function PromotionalSection({
  onProductClick,
}: PromotionalSectionProps) {
  const benefits = [
    {
      icon: <Truck className="w-8 h-8 text-[#00AEEF]" />,
      title: "Frete Grátis",
      description: "Em compras acima de R$ 99",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#00AEEF]" />,
      title: "Pagamento Flexível",
      description: "Cartão, Pix ou parcelado",
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#00AEEF]" />,
      title: "Suporte 24/7",
      description: "Atendimento via WhatsApp",
    },
  ];

  const promoProducts = [
    products.find((p) => p.id === 28)!,
    products.find((p) => p.id === 3)!,
    products.find((p) => p.id === 18)!,
  ];

  const promoCards = [
    {
      title: "IGNITE",
      subtitle: "Sutil por fora. Selvagem por dentro.",
      description: "IGNITE V80 com 30% OFF",
      image: "/images/IGNITE V80 POD DESCARTÁVEL 8.000 PUFFS.webp",
      bg: "bg-gradient-to-br from-purple-900 to-purple-700",
      product: promoProducts[0],
    },
    {
      title: "IGNITE",
      subtitle: "Duração que acompanha seu flow.",
      description: "IGNITE V120 com 20% OFF",
      image: "/images/Ignite v120 - 12000 Puffs - Pod Descartável.webp",
      bg: "bg-gradient-to-br from-blue-900 to-blue-700",
      product: promoProducts[1],
    },
    {
      title: "IGNITE",
      subtitle: "O ícone de quem joga alto.",
      description: "IGNITE V150 com 15% OFF.",
      image: "/images/IGNITE V150 POD DESCARTÁVEL.webp",
      bg: "bg-gradient-to-br from-orange-900 to-orange-700",
      product: promoProducts[2],
    },
  ];

  const categories = [
    {
      name: "Vapes Descartáveis",
      image: "/images/ELFBAR 40K ICE KING POD DESCARTÁVEL 40.000 PUFFS.webp",
      bg: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      name: "Pods Recarregáveis",
      image:
        "/images/IGNITE P100 POD DESCARTÁVEL KIT TROCAVEL 10.000 PUFFS.webp",
      bg: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
    {
      name: "Líquidos",
      image:
        "https://images.unsplash.com/photo-1674414719419-623c8612f892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXBlJTIwbGlxdWlkJTIwYm90dGxlc3xlbnwxfHx8fDE3NTg4MzEzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bg: "bg-gradient-to-br from-green-400 to-green-600",
    },
    {
      name: "Acessórios",
      image:
        "https://images.unsplash.com/photo-1624876993465-acf1ff558584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXBpbmclMjBhY2Nlc3NvcmllcyUyMG1vZGVybnxlbnwxfHx8fDE3NTg4MzEyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bg: "bg-gradient-to-br from-orange-400 to-orange-600",
    },
  ];

  return (
    <div className="bg-white py-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="mb-2 p-3 bg-gray-50 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Promotional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {promoCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 h-80"
              onClick={() => onProductClick(card.product)}
            >
              <ImageWithFallback
                src={card.image}
                alt="Product"
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${card.bg} opacity-70`}></div>
              <div className="absolute inset-0 p-6 text-white flex flex-col justify-between z-10">
                <div>
                  <p className="text-sm opacity-90 mb-1 font-bold">
                    {card.title}
                  </p>
                  <p className="text-sm opacity-90 mb-3">{card.subtitle}</p>
                  <h3 className="text-xl font-bold mb-4 leading-tight">
                    {card.description}
                  </h3>
                </div>
                <div>
                  <Button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation();
                      onProductClick(card.product);
                    }}
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    Ver Ofertas
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Choose Category Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nossas Categorias
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Descubra nossa linha completa de produtos premium para vaping. Aqui
            temos tudo que você precisa.
          </p>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
            // style={{ justifyContent: "center" }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex flex-col items-center group cursor-pointer ${
                  index === categories.length - 1
                    ? "col-span-2 mx-auto sm:col-span-1"
                    : ""
                }`}
              >
                <div className="w-40 h-40 rounded-full relative mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden border-4 border-white">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-2 ${
                      category.bg.split(" ")[0]
                    } rounded-b-full`}
                  ></div>
                </div>
                <h3 className="text-sm font-medium text-gray-900 text-center leading-tight">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
