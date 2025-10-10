// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { Star } from "lucide-react";
// import { Product } from "../data/products";

// interface FeaturedProductsProps {
//   onProductClick: (product: Product) => void;
// }

// const featuredProducts: Product[] = [
//   {
//     id: 101,
//     name: "Ignite V80 8000 Puffs Premium",
//     price: "R$ 89,90",
//     image:
//       "https://images.unsplash.com/photo-1742820626945-cb8f4fc0992b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXBlJTIwcG9kJTIwZGV2aWNlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1ODgzMTI4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     description:
//       "O mais avançado vape descartável com display digital e 8000 puffs de pura qualidade",
//     brand: "Ignite",
//     category: "Vapes Descartáveis",
//   },
//   {
//     id: 102,
//     name: "Elf Bar BC5000 Rechargeable",
//     price: "R$ 52,90",
//     image:
//       "https://images.unsplash.com/photo-1671001832098-0f76eba732d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXBlJTIwZGV2aWNlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU4ODMxMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     description:
//       "Design colorido e ergonômico com 5000 puffs e carregamento USB-C",
//     brand: "Elf Bar",
//     category: "Vapes Descartáveis",
//   },
//   {
//     id: 103,
//     name: "Zomo Neon RGB Kit",
//     price: "R$ 89,90",
//     image:
//       "https://images.unsplash.com/photo-1562411054-261f857a7c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2QlMjBzeXN0ZW0lMjB2YXBpbmd8ZW58MXx8fHwxNzU4ODMxMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     description:
//       "Pod system premium com iluminação RGB e controle de airflow ajustável",
//     brand: "Zomo",
//     category: "Pods Recarregáveis",
//   },
// ];

// export function FeaturedProducts({ onProductClick }: FeaturedProductsProps) {
//   return (
//     <section className="mb-12 ">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <div className="flex items-center justify-center mb-4">
//           <Star className="h-6 w-6 text-yellow-500 fill-current mr-2" />
//           <h2 className="text-3xl font-bold text-gray-900">Mais Vendidos</h2>
//           <Star className="h-6 w-6 text-yellow-500 fill-current ml-2" />
//         </div>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Nossa seleção exclusiva dos melhores produtos com tecnologia avançada
//           e qualidade superior
//         </p>
//       </div>

//       {/* Featured Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {featuredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-xl shadow-lg border-2 border-[#00AEEF]/20 overflow-hidden hover:shadow-xl hover:border-[#00AEEF] transition-all duration-300 group relative flex flex-col h-[500px]"
//           >
//             {/* Premium Badge */}
//             <div className="absolute top-3 left-3 z-10">
//               <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg">
//                 <Star className="h-3 w-3 mr-1 fill-current" />
//                 Premium
//               </Badge>
//             </div>

//             {/* Product Image */}
//             <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
//               <ImageWithFallback
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </div>

//             {/* Product Info */}
//             <div className="p-5 flex flex-col">
//               <Badge
//                 variant="outline"
//                 className="mb-3 border-[#00AEEF] text-[#00AEEF] w-fit"
//               >
//                 {product.brand}
//               </Badge>

//               <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#00AEEF] transition-colors">
//                 {product.name}
//               </h3>

//               <p className="text-sm text-gray-600 mb-8 line-clamp-3">
//                 {product.description}
//               </p>

//               {/* Centralized Price and Button */}
//               <div className="mt-auto text-center space-y-3">
//                 <div className="flex flex-col items-center">
//                   <span className="text-2xl font-bold text-[#00AEEF]">
//                     {product.price}
//                   </span>
//                   <span className="text-xs text-gray-500 line-through">
//                     R${" "}
//                     {(
//                       parseFloat(
//                         product.price.replace("R$ ", "").replace(",", ".")
//                       ) * 1.3
//                     )
//                       .toFixed(2)
//                       .replace(".", ",")}
//                   </span>
//                 </div>

//                 <Button
//                   onClick={() => onProductClick(product)}
//                   className="bg-gradient-to-r from-[#00AEEF] to-[#0099d4] hover:from-[#0099d4] hover:to-[#0088bb] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full"
//                   size="sm"
//                 >
//                   Ver Detalhes
//                 </Button>
//               </div>
//             </div>

//             {/* Glow Effect */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-[#00AEEF] to-[#0099d4] rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
//           </div>
//         ))}
//       </div>

//       {/* Call to Action */}
//       <div className="text-center mt-8">
//         <p className="text-gray-600 mb-4">
//           Produtos com garantia estendida e suporte premium
//         </p>
//       </div>
//     </section>
//   );
// }

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star } from "lucide-react";
// import { Product } from "../data/products";
import { products, Product } from "../data/products";

const featuredProductIds = [5, 19, 13];
const featuredProducts: Product[] = products
  .filter((product) => featuredProductIds.includes(product.id))
  .sort(
    (a, b) =>
      featuredProductIds.indexOf(a.id) - featuredProductIds.indexOf(b.id)
  );

interface FeaturedProductsProps {
  onProductClick: (product: Product) => void;
}

// const featuredProducts: Product[] = [
//   {
//     id: 28,
//     name: "IGNITE V80 POD DESCARTÁVEL 8.000 PUFFS",
//     price: "R$ 64,90",
//     image: "/images/IGNITE V80 POD DESCARTÁVEL 8.000 PUFFS.webp",
//     description: "Vape descartável compacto com 8.000 puffs",
//     brand: "Ignite",
//     category: "Vapes Descartáveis",
//   },
//   {
//     id: 18,
//     name: "Ignite V150",
//     price: "R$ 79,90",
//     image: "/images/IGNITE V150 POD DESCARTÁVEL.webp",
//     description: "Vape descartável com 15.000 puffs e sabores exóticos",
//     brand: "Ignite",
//     category: "Vapes Descartáveis",
//   },
//   {
//     id: 3,
//     name: "IGNITE V120 POD DESCARTÁVEL 12.000 PUFFS",
//     price: "R$ 74,90",
//     image: "/images/Ignite v120 - 12000 Puffs - Pod Descartável.webp",
//     description: "Vape descartável com 12.000 puffs e sabores únicos",
//     brand: "IGNITE",
//     category: "Vapes Descartáveis",
//   },
// ];
// const featuredProducts: Product[] = [
//   {
//     id: 5,
//     name: "IGNITE V400 MIX POD DESCARTÁVEL 40.000 PUFFS",
//     price: "R$ 109,90",
//     image: "/images/Pod Descartável Ignite MIX V400 com 40000 Puffs.webp",
//     description:
//       "Vape descartável de alta capacidade com sabores duplos e 40.000 puffs",
//     brand: "Ignite",
//     category: "Vapes Descartáveis",
//   },
//   {
//     id: 19,
//     name: "ELFBAR 40K ICE KING POD DESCARTÁVEL 40.000 PUFFS",
//     price: "R$ 109,90",
//     image: "/images/ELFBAR 40K ICE KING POD DESCARTÁVEL 40.000 PUFFS.webp",
//     description: "Vape descartável de alta capacidade com 40.000 puffs",
//     brand: "Elf Bar",
//     category: "Vapes Descartáveis",
//   },
//   {
//     id: 13,
//     name: "IGNITE V300 POD DESCARTÁVEL 30.000 PUFFS",
//     price: "R$ 95,90",
//     image: "/images/IGNITE V300 POD DESCARTÁVEL 30.000 PUFFS.webp",
//     description: "Vape descartável premium com 30.000 puffs e sabores exóticos",
//     brand: "Ignite",
//     category: "Vapes Descartáveis",
//   },
// ];

export function FeaturedProducts({ onProductClick }: FeaturedProductsProps) {
  return (
    <section id="MV" className="bg-dark mb-12 p-8">
      {/* SVG para o filtro de borda elétrica */}
      {/* <svg className="absolute">
        <defs>
          <filter
            id="turbulent-displace"
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="1"
            />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate
                attributeName="dy"
                values="700; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="1"
            />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate
                attributeName="dy"
                values="0; -700"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="2"
            />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate
                attributeName="dx"
                values="490; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="2"
            />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate
                attributeName="dx"
                values="0; -490"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend
              in="part1"
              in2="part2"
              mode="color-dodge"
              result="combinedNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg> */}
      <svg className="absolute">
        <defs>
          <filter id="turbulent-displace" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="2"
              seed="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="12"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      {/* Header */}
      <div className="bg-dark text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          {/* <Star className="h-6 w-6 text-yellow-500 fill-current mr-2" /> */}
          <h2 className="text-4xl font-bold road-rage-regular text-white mb-4">
            Mais Vendidos
          </h2>
          {/* <Star className="h-6 w-6 text-yellow-500 fill-current ml-2" /> */}
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Nossa seleção exclusiva dos melhores produtos com tecnologia avançada
          e qualidade superior
        </p>
      </div>

      {/* Featured Products Grid */}
      <div className="bg-dark grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featuredProducts.map((product) => (
          <div key={product.id} className="card-container group relative">
            <div className="border-outer">
              <div className="main-card absolute inset-0 wavey" />
            </div>
            <div className="glow-layer-1" />
            <div className="glow-layer-2" />
            <div className="overlay-1" />
            <div className="overlay-2" />
            <div className="background-glow" />
            {/* Conteúdo do card */}
            <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-[500px]">
              {/* Premium Badge */}
              <div className="absolute top-3 left-3 z-10">
                <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Premium
                </Badge>
              </div>

              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col">
                <Badge
                  variant="outline"
                  className="mb-3 border-[#00AEEF] text-[#00AEEF] w-fit"
                >
                  {product.brand}
                </Badge>

                <h3 className="font-bold group-hover:text-white mb-2 line-clamp-2 text-[#00AEEF] transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-400 mb-8 line-clamp-3">
                  {product.description}
                </p>

                {/* Centralized Price and Button */}
                <div className="mt-auto text-center space-y-3">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-[#00AEEF]">
                      {product.price}
                    </span>
                    <span className="text-xs text-gray-500 line-through">
                      R${" "}
                      {(
                        parseFloat(
                          product.price.replace("R$ ", "").replace(",", ".")
                        ) * 1.3
                      )
                        .toFixed(2)
                        .replace(".", ",")}
                    </span>
                  </div>

                  <Button
                    onClick={() => onProductClick(product)}
                    className="bg-gradient-to-r from-[#00AEEF] to-[#0099d4] hover:from-[#0099d4] hover:to-[#0088bb] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full"
                    size="sm"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </div>

              {/* Glow Effect (removido, já que o efeito de borda é tratado pelo main-card) */}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-dark text-center mt-8">
        <p className="text-gray-400 mb-4">
          Produtos exclusivos com atendimento nível premium
        </p>
      </div>
    </section>
  );
}
