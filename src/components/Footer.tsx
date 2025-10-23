import { Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { PolicyModal } from "./PolicyModal";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState<"privacy" | "return">("privacy");

  const handleOpenModal = (type: "privacy" | "return") => {
    setPolicyType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <img
              src="/logoWhite5.webp"
              alt="PodVapeShop Logo"
              className="h-12 w-auto mb-4 limit-image"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Sua loja especializada em vapes, pods e acessórios premium.
              Oferecemos produtos de qualidade com os melhores preços do
              mercado.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/podvapeshop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5511937750190"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] p-2 rounded-full hover:opacity-80 transition-opacity"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              {/* <li>
                <a href="#" className="hover:text-[#00AEEF] transition-colors">
                  Página Inicial
                </a>
              </li> */}
              <li>
                <button
                  onClick={() => handleOpenModal("privacy")}
                  className="text-left hover:text-[#00AEEF] transition-colors bg-transparent border-none p-0"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenModal("return")}
                  className="text-left hover:text-[#00AEEF] transition-colors bg-transparent border-none p-0"
                >
                  Política de Trocas e Devoluções
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2 text-[#25D366]" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#00AEEF]" />
                <span className="text-sm">contato@podstore.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-red-500" />
                <span className="text-sm">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 PodVapeShop. Todos os direitos reservados.
            </p>

            {/* Aviso Legal */}
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm text-center md:text-right">
                ⚠️ Venda proibida para menores de 18 anos
              </p>
            </div>
          </div>

          {/* Aviso de Responsabilidade */}
          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <p className="text-gray-300 text-xs text-center">
              <strong>AVISO:</strong> Os produtos comercializados neste site
              podem causar dependência física ou psíquica. Venda proibida para
              menores de 18 anos. Este produto não é medicamento. Consulte
              sempre um médico antes do uso.
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Políticas */}
      <PolicyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        policyType={policyType}
      />
    </footer>
  );
}
