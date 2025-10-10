import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    question: "Como funciona o processo de compra?",
    answer:
      "Navegue pelos nossos produtos, escolha o que deseja e clique em 'Comprar via WhatsApp'. Você será redirecionado para nosso WhatsApp com sua mensagem pré-formatada para finalizar a compra de forma rápida e segura.",
  },
  {
    question: "Vocês fazem entrega?",
    answer:
      "Sim! Fazemos entregas rápidas e seguras. O valor do frete será calculado com base no seu CEP e será informado durante o atendimento via WhatsApp. Entregas na região metropolitana em até 24h.",
  },
  {
    question: "Os produtos têm garantia?",
    answer:
      "Todos os nossos produtos possuem garantia contra defeitos de fabricação. Vapes e pods têm garantia de 3 meses, enquanto acessórios têm garantia de 30 dias. Entre em contato conosco para mais detalhes.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos PIX, cartão de crédito, cartão de débito e dinheiro. Para compras via WhatsApp, você pode escolher a forma de pagamento que preferir durante o atendimento.",
  },
  {
    question: "Como escolher o melhor vape para iniciantes?",
    answer:
      "Para iniciantes, recomendamos pods descartáveis ou kits básicos. Eles são fáceis de usar, não precisam de manutenção e vêm prontos para uso. Nossa equipe pode ajudar a escolher o melhor produto para seu perfil.",
  },
  {
    question: "Vocês têm loja física?",
    answer:
      "Sim! Além do atendimento online, temos loja física onde você pode conhecer os produtos pessoalmente. Entre em contato pelo WhatsApp para saber nossa localização e horários de funcionamento.",
  },
  {
    question: "Como cuidar do meu vape?",
    answer:
      "Mantenha seu vape limpo, carregue regularmente, use apenas liquids de qualidade e armazene em local seco. Evite quedas e temperaturas extremas. Temos um guia completo de cuidados que enviamos com cada produto.",
  },
  {
    question: "Vocês fazem troca de produtos?",
    answer:
      "Fazemos trocas em caso de defeito ou produto em desacordo com o pedido em até 7 dias após a compra. O produto deve estar em perfeitas condições e com a embalagem original.",
  },
];

export function FAQ() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos produtos, processos de compra e
            entrega. Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 last:border-b-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div id="contato" className="text-center mt-12">
          <div className="bg-[#00AEEF] rounded-xl p-6 text-white">
            <h3 className="font-semibold mb-2">Ainda tem dúvidas?</h3>
            <p className="text-sm opacity-90 mb-4">
              Nossa equipe está pronta para ajudar você no WhatsApp
            </p>
            <a
              href="https://wa.me/5511999999999"
              className="inline-block bg-white text-[#00AEEF] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
