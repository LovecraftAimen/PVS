import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Product } from "../data/products";
import { Pagination } from "./Pagination";

interface ProductGridProps {
  products: Product[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  onProductClick: (product: Product) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function ProductGrid({
  products,
  selectedCategory,
  onCategorySelect,
  onProductClick,
  currentPage,
  totalPages,
  onPageChange,
}: ProductGridProps) {
  const categories = [
    { name: "Todos", value: null },
    { name: "Vapes Descartáveis", value: "Vapes Descartáveis" },
    { name: "Pods Recarregáveis", value: "Pods Recarregáveis" },
  ];

  return (
    <div id="product-grid" className="flex-1">
      <div className="mb-6 products-wrapper">
        <div className="flex space-x-1 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className={`whitespace-nowrap border-gray-200 ${
                selectedCategory === category.value
                  ? "border-[#00AEEF] text-[#00AEEF] bg-blue-50"
                  : "hover:border-[#00AEEF] hover:text-[#00AEEF]"
              }`}
              onClick={() => onCategorySelect(category.value)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
          >
            <div className="aspect-square bg-gray-50 overflow-hidden">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <Badge variant="secondary" className="mb-2 text-xs">
                {product.brand.toUpperCase()}
              </Badge>
              <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#00AEEF]">
                  {product.price}
                </span>
                <Button
                  onClick={() => onProductClick(product)}
                  className="bg-[#00AEEF] hover:bg-[#0099d4] text-white"
                  size="sm"
                >
                  Ver Detalhes
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Nenhum produto encontrado com os filtros selecionados.
          </p>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
