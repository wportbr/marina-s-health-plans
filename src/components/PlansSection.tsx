import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlansSection = () => {
  const whatsappLink = "https://wa.me/5513988181493?text=Olá! Gostaria de saber mais sobre os planos de saúde.";

  const planTypes = [
    {
      title: "Individual",
      description: "Para você que busca proteção completa",
      features: [
        "Cobertura completa",
        "Consultas e exames",
        "Urgência e emergência",
        "Opções com e sem coparticipação",
      ],
      highlighted: false,
    },
    {
      title: "Familiar",
      description: "Proteção para toda sua família",
      features: [
        "Inclui dependentes",
        "Pediatria inclusa",
        "Maternidade",
        "Valores diferenciados",
      ],
      highlighted: true,
    },
    {
      title: "Empresarial",
      description: "Soluções para sua empresa",
      features: [
        "Disponível para 1 vida ou mais",
        "MEI e CNPJ",
        "Coparticipação opcional",
        "Desconto de até 40%",
      ],
      highlighted: false,
    },
  ];

  const allFeatures = [
    "Planos regionais e nacionais",
    "Plano Sênior (59+)",
    "Com e sem coparticipação",
    "Opções de baixo custo",
    "Planos odontológicos",
  ];

  return (
    <section id="planos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
            <span className="text-sm font-medium text-accent-foreground">
              Nossos Planos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos para cada{" "}
            <span className="text-primary">momento da vida</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Trabalhamos com as principais operadoras do mercado para oferecer 
            a melhor opção para você.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {planTypes.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "gradient-cta text-primary-foreground shadow-cta"
                  : "bg-card shadow-soft hover:shadow-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-xs font-semibold rounded-full">
                  Mais Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "" : "text-foreground"}`}>
                {plan.title}
              </h3>
              <p className={`mb-6 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.highlighted ? "bg-primary-foreground/20" : "bg-accent"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? "" : "text-primary"}`} />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? "secondary" : "hero"}
                className="w-full"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Simular Agora
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Plano por Adesão Highlight */}
        <div className="bg-gradient-to-r from-primary/10 via-accent to-primary/10 rounded-2xl p-6 md:p-8 mb-8 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl gradient-cta flex items-center justify-center">
              <Check className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Planos por Adesão
              </h3>
              <p className="text-muted-foreground">
                Ideal para profissionais liberais, autônomos e membros de associações. 
                Acesse planos com <span className="font-semibold text-primary">valores diferenciados</span> através 
                de entidades de classe, sindicatos e associações profissionais.
              </p>
            </div>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 gradient-cta text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Consultar Elegibilidade
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlansSection;
