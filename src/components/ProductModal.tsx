import { X, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Product } from "../data/products";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedFlavor, setSelectedFlavor] = useState<string>("");

  if (!isOpen || !product) return null;

  const handleWhatsAppPurchase = () => {
    if (!selectedFlavor) return;

    const message = `Olá! Quero comprar ${product.name} no sabor ${selectedFlavor}. Preço: ${product.price}`;
    const whatsappUrl = `https://wa.me/5574988248384?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image */}
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <Badge variant="secondary" className="mb-2">
                  {product.brand}
                </Badge>
                <p className="text-2xl font-bold text-[#00AEEF]">
                  {product.price}
                </p>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>

              {/* Category */}
              <div>
                <span className="text-sm text-gray-500">Categoria: </span>
                <span className="text-sm font-medium">{product.category}</span>
              </div>

              {/* Purchase Button */}
              <Button
                onClick={handleWhatsAppPurchase}
                disabled={!selectedFlavor}
                className="w-full bg-[#25D366] hover:bg-[#20c257] text-white disabled:bg-gray-300"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {selectedFlavor ? "Comprar via WhatsApp" : "Selecione um sabor"}
              </Button>

              {selectedFlavor && (
                <p className="text-sm text-gray-600 text-center">
                  Sabor selecionado:{" "}
                  <span className="font-medium">{selectedFlavor}</span>
                </p>
              )}
            </div>
          </div>

          {/* Flavor Selection - Full Width Below Image */}
          <div className="mt-8">
            <h3 className="font-medium mb-4">Escolha o sabor:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {product.flavors.map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => setSelectedFlavor(flavor)}
                  className={`p-3 text-sm rounded-md border transition-all text-center ${
                    selectedFlavor === flavor
                      ? "bg-[#00AEEF] text-white border-[#00AEEF]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#00AEEF] hover:text-[#00AEEF]"
                  }`}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-medium mb-2">Informações Importantes</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Produto destinado apenas para maiores de 18 anos</li>
              <li>• Entrega via WhatsApp para toda região</li>
              <li>• Garantia de qualidade e procedência</li>
              <li>• Pagamento facilitado no ato da entrega</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
