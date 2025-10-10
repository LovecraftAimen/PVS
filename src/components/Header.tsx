import { Search, MessageCircle, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { products } from "../data/products";
import { ProductModal } from "./ProductModal";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setIsFocused(false);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo e Menu Mobile */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onMenuClick}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>

              <div className="flex items-center gap-2">
                <img
                  src="/podvapeshop4.png"
                  alt="PodVapeShop Logo"
                  className="w-10 h-16 object-contain"
                />
              </div>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-[#00AEEF] transition-colors"
              >
                Home
              </a>
              <a
                href="#loja"
                className="text-gray-700 hover:text-[#00AEEF] transition-colors"
              >
                Loja
              </a>
              <a
                href="#MV"
                className="text-gray-700 hover:text-[#00AEEF] transition-colors"
              >
                Mais Vendidos
              </a>
              <a
                href="#contato"
                className="text-gray-700 hover:text-[#00AEEF] transition-colors"
              >
                Contato
              </a>
            </nav>

            {/* Search and WhatsApp */}
            <div className="flex items-center gap-4 relative">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                  className="pl-10 w-64"
                />

                {/* Dropdown de resultados */}
                {isFocused &&
                  searchQuery.length > 0 &&
                  filteredProducts.length > 0 && (
                    <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-50">
                      {filteredProducts.slice(0, 6).map((p) => (
                        <button
                          key={p.id}
                          onClick={() => handleProductClick(p)}
                          className="flex items-center gap-3 w-full text-left px-3 py-2 hover:bg-gray-100 transition-colors"
                        >
                          {p.image && (
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-8 h-8 object-cover rounded"
                            />
                          )}
                          <span className="text-gray-700 text-sm">
                            {p.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20c257] text-white"
                size="sm"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Modal do produto */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
