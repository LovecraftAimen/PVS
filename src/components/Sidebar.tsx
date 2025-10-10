// import { X, ListFilter as Filter } from "lucide-react";
// import { Button } from "./ui/button";
// import { Checkbox } from "./ui/checkbox";
// import { Separator } from "./ui/separator";
// import { categories, brands } from "../data/products";

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
//   selectedCategories: string[];
//   selectedBrands: string[];
//   onCategoryChange: (category: string) => void;
//   onBrandChange: (brand: string) => void;
//   onClearFilters: () => void;
// }

// export function Sidebar({
//   isOpen,
//   onClose,
//   selectedCategories,
//   selectedBrands,
//   onCategoryChange,
//   onBrandChange,
//   onClearFilters,
// }: SidebarProps) {
//   return (
//     <>
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={onClose}
//         />
//       )}

//       <div
//         className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 lg:relative lg:translate-x-0 lg:shadow-none lg:border-r lg:border-gray-200 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
//           <div className="flex items-center gap-2">
//             <Filter className="h-5 w-5" />
//             <span className="font-medium">Filtros</span>
//           </div>
//           <Button variant="ghost" size="sm" onClick={onClose}>
//             <X className="h-5 w-5" />
//           </Button>
//         </div>

//         <div className="p-4 space-y-6 overflow-y-auto h-full pb-20">
//           <div>
//             <h3 className="font-medium mb-3">Categorias</h3>
//             <div className="space-y-2">
//               {categories.map((category) => (
//                 <div key={category} className="flex items-center space-x-2">
//                   <Checkbox
//                     id={category}
//                     checked={selectedCategories.includes(category)}
//                     onCheckedChange={() => onCategoryChange(category)}
//                   />
//                   <label
//                     htmlFor={category}
//                     className="text-sm text-gray-700 cursor-pointer"
//                   >
//                     {category}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Separator />

//           <div>
//             <h3 className="font-medium mb-3">Marcas</h3>
//             <div className="space-y-2">
//               {brands.map((brand) => (
//                 <div key={brand} className="flex items-center space-x-2">
//                   <Checkbox
//                     id={brand}
//                     checked={selectedBrands.includes(brand)}
//                     onCheckedChange={() => onBrandChange(brand)}
//                   />
//                   <label
//                     htmlFor={brand}
//                     className="text-sm text-gray-700 cursor-pointer"
//                   >
//                     {brand}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Button variant="outline" className="w-full" onClick={onClearFilters}>
//             Limpar Filtros
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }

import { Search, X, ListFilter as Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { categories, brands, products } from "../data/products";
import { useState, useEffect } from "react";
import { ProductModal } from "./ProductModal";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: string[];
  selectedBrands: string[];
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onClearFilters: () => void;
}

export function Sidebar({
  isOpen,
  onClose,
  selectedCategories,
  selectedBrands,
  onCategoryChange,
  onBrandChange,
  onClearFilters,
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Detectar se a tela é mobile (< 640px)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    // Definir estado inicial
    handleMediaChange(mediaQuery);

    // Adicionar listener para mudanças de tamanho de tela
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setSearchQuery(""); // Limpar busca após selecionar
  };

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 lg:relative lg:translate-x-0 lg:shadow-none lg:border-r lg:border-gray-200 ${
          isOpen && isMobile ? "translate-x-0" : "-translate-x-full"
        } lg:flex`}
      >
        <div className="flex flex-col h-full p-4 space-y-6 overflow-y-auto pb-20">
          {/* Cabeçalho mobile */}
          {isMobile && (
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                <span className="font-medium">Filtros</span>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Searchbar (apenas no mobile) */}
          {isMobile && (
            <div className="relative">
              {/* {console.log("Searchbar mobile renderizada")} */}
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => console.log("Searchbar focada")}
                className="pl-10 w-full border border-gray-200 rounded-md"
              />
              {searchQuery.length > 0 && filteredProducts.length > 0 && (
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
                      <span className="text-gray-700 text-sm">{p.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Filtros de categorias */}
          <div>
            <h3 className="font-medium mb-3">Categorias</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => onCategoryChange(category)}
                  />
                  <label
                    htmlFor={category}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Filtros de marcas */}
          <div>
            <h3 className="font-medium mb-3">Marcas</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => onBrandChange(brand)}
                  />
                  <label
                    htmlFor={brand}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full" onClick={onClearFilters}>
            Limpar Filtros
          </Button>
        </div>
      </div>

      {/* Modal do produto */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
