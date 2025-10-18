import { useState, useMemo } from "react";
import { AgeVerification } from "./components/AgeVerification";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Sidebar } from "./components/Sidebar";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { PromotionalSection } from "./components/PromotionalSection";
import { ProductGrid } from "./components/ProductGrid";
import { ProductModal } from "./components/ProductModal";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import { products, Product } from "./data/products";

export default function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  const handleAgeVerified = () => {
    setIsAgeVerified(true);
  };

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedCategory(null);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
    }

    return filtered;
  }, [selectedCategory, selectedCategories, selectedBrands]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isAgeVerified) {
    return <AgeVerification onVerified={handleAgeVerified} />;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header onMenuClick={handleMenuClick} />
      <HeroBanner />
      <PromotionalSection onProductClick={handleProductClick} />

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> */}
      <FeaturedProducts onProductClick={handleProductClick} />
      {/* </div> */}

      <div
        id="loja"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
      >
        <div className="flex gap-8 products-wrapper">
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <Sidebar
                isOpen={true}
                onClose={() => {}}
                selectedCategories={selectedCategories}
                selectedBrands={selectedBrands}
                onCategoryChange={handleCategoryChange}
                onBrandChange={handleBrandChange}
                onClearFilters={handleClearFilters}
              />
            </div>
          </div>

          <div className="lg:hidden">
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={handleSidebarClose}
              selectedCategories={selectedCategories}
              selectedBrands={selectedBrands}
              onCategoryChange={handleCategoryChange}
              onBrandChange={handleBrandChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Todos os Produtos
              </h1>
              {/* <p className="text-gray-600">
                Explore nossa linha completa de vapes, pods e acessórios
              </p> */}
            </div>

            <ProductGrid
              products={paginatedProducts}
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
              onProductClick={handleProductClick}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      <FAQ />
      {/* Nova seção: Nos siga no Instagram */}
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Nos siga no Instagram
        </h2>
        <a
          href="https://www.instagram.com/podvapeshop/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl font-bold text-[#00AEEF] hover:underline"
        >
          @podvapeshop
        </a>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />

      <Footer />
    </div>
  );
}
