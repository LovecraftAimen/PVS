import { X } from "lucide-react";
import { Button } from "./ui/button";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  policyType: "privacy" | "return";
}

export function PolicyModal({ isOpen, onClose, policyType }: PolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h2 className="text-xl font-semibold text-black">
            {policyType === "privacy"
              ? "Política de Privacidade"
              : "Política de Trocas e Devoluções"}
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5 text-black" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="prose prose-sm sm:prose-base max-w-none text-black">
            {policyType === "privacy" && (
              <>
                <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6 text-center">
                  Política de Privacidade
                </h1>
                <p className="text-black">
                  A <strong className="text-black">PodVapeShop</strong> valoriza
                  e respeita a privacidade de nossos clientes e visitantes do
                  nosso site. Esta política de privacidade descreve como
                  coletamos, usamos e protegemos as informações que você nos
                  fornece.
                </p>
                <h2 className="text-black">Informações Coletadas</h2>
                <p className="text-black">
                  Ao navegar em nosso site ou interagir com nossos serviços,
                  podemos coletar as seguintes informações:
                </p>
                <ul className="text-black">
                  <li className="text-black">
                    <strong className="text-black">
                      Informações Pessoais:
                    </strong>{" "}
                    Podemos coletar informações pessoais como nome, endereço de
                    e-mail, endereço físico e número de telefone quando você faz
                    uma compra ou se registra em nosso site.
                  </li>
                  <li className="text-black">
                    <strong className="text-black">
                      Informações de Pagamento:
                    </strong>{" "}
                    Ao efetuar uma compra, podemos coletar informações de
                    pagamento, como números de cartão de crédito ou débito,
                    endereço de faturamento e outras informações necessárias
                    para processar o pagamento.
                  </li>
                  <li className="text-black">
                    <strong className="text-black">
                      Informações de Navegação:
                    </strong>{" "}
                    Podemos coletar informações sobre como você interage com
                    nosso site, como páginas visitadas, tempo gasto em cada
                    página e outros dados de navegação.
                  </li>
                </ul>
                <h2 className="text-black">Uso de Informações</h2>
                <p className="text-black">
                  As informações que coletamos são usadas para os seguintes
                  fins:
                </p>
                <ul className="text-black">
                  <li className="text-black">
                    Processar e gerenciar pedidos de produtos e serviços.
                  </li>
                  <li className="text-black">
                    Personalizar sua experiência de usuário e fornecer conteúdo
                    relevante.
                  </li>
                  <li className="text-black">
                    Enviar comunicações de marketing, promoções ou atualizações
                    sobre nossos produtos e serviços, sempre que você optar por
                    recebê-las.
                  </li>
                  <li className="text-black">
                    Melhorar nossos produtos, serviços e site com base no
                    feedback e no comportamento dos usuários.
                  </li>
                  <li className="text-black">
                    Cumprir obrigações legais e regulamentares.
                  </li>
                </ul>
                <h2 className="text-black">Proteção de Informações</h2>
                <p className="text-black">
                  A <strong className="text-black">PodVapeShop</strong> se
                  compromete a proteger suas informações pessoais e tomar todas
                  as medidas razoáveis para garantir sua segurança. Utilizamos
                  práticas de segurança padrão do setor para proteger suas
                  informações contra acesso não autorizado, uso indevido ou
                  divulgação.
                </p>
                <h2 className="text-black">Compartilhamento de Informações</h2>
                <p className="text-black">
                  Não compartilhamos suas informações pessoais com terceiros,
                  exceto conforme necessário para fornecer nossos serviços,
                  processar transações ou cumprir obrigações legais.
                </p>
                <h2 className="text-black">
                  Cookies e Tecnologias Semelhantes
                </h2>
                <p className="text-black">
                  Nosso site pode usar cookies e outras tecnologias de
                  rastreamento para melhorar a experiência do usuário, analisar
                  tendências, administrar o site e rastrear o movimento dos
                  usuários pelo site. Você pode optar por aceitar ou recusar
                  cookies através das configurações do seu navegador.
                </p>
                <h2 className="text-black">Consentimento</h2>
                <p className="text-black">
                  Ao usar nosso site, você consente com nossa política de
                  privacidade e concorda com a coleta e uso de suas informações
                  conforme descrito nesta política.
                </p>
                <h2 className="text-black">Contate-nos</h2>
                <p className="text-black">
                  Se você tiver alguma dúvida ou preocupação sobre nossa
                  política de privacidade, entre em contato conosco através das
                  informações fornecidas em nossa página de contato .
                </p>
              </>
            )}
            {policyType === "return" && (
              <>
                <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6 text-center">
                  Política de Trocas e Devoluções
                </h1>
                <p className="text-black">
                  Na <strong className="text-black">PodVapeShop</strong>, nosso
                  compromisso é oferecer produtos de qualidade e um serviço
                  excepcional aos nossos clientes. No entanto, devido às
                  regulamentações e condições específicas do mercado de vape no
                  Brasil, é importante compreender nossa política de trocas e
                  devoluções.
                </p>
                <h2 className="text-black">Trocas</h2>
                <p className="text-black">
                  Em virtude da não homologação de vape e afins no Brasil,
                  ausentando assim assistências técnicas aqui, fica anulada toda
                  e qualquer garantia em produtos por nós vendidos. Não será
                  feita troca sob nenhuma condição.
                </p>
                <p className="text-black">
                  Entendemos a importância da satisfação do cliente, mas devido
                  às restrições legais e técnicas relacionadas aos produtos
                  vape, não podemos oferecer trocas em nenhum produto vendido
                  pela <strong className="text-black">PodVapeShop</strong>.
                  Recomendamos que os clientes revisem cuidadosamente as
                  especificações dos produtos antes de efetuar a compra.
                </p>
                <h2 className="text-black">Envios</h2>
                <p className="text-black">
                  Mediante as condições de comercialização de Vape no Brasil,
                  não nos responsabilizamos por pedidos: Extraviados,
                  Apreendidos, ou qualquer outro tipo de problema no trajeto.
                </p>
                <p className="text-black">
                  Devido às complexidades e restrições legais associadas aos
                  produtos vape, a{" "}
                  <strong className="text-black">PodVapeShop</strong> não pode
                  se responsabilizar por quaisquer problemas relacionados ao
                  envio de produtos vape. Isso inclui, mas não se limita a,
                  extravios, apreensões ou outros contratempos que possam
                  ocorrer durante o transporte.
                </p>
                <h2 className="text-black">Contate-nos</h2>
                <p className="text-black">
                  Se você tiver alguma dúvida ou preocupação sobre nossa
                  política de trocas e devoluções, não hesite em nos contatar.
                  Nossa equipe de suporte ao cliente está sempre disponível para
                  ajudá-lo.
                </p>
                <p className="text-black">
                  Agradecemos sua compreensão e confiança na{" "}
                  <strong className="text-black">PodVapeShop</strong>.
                </p>
                <p className="text-black">Atenciosamente,</p>
                <p className="text-black">
                  <strong className="text-black">PodVapeShop</strong>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
