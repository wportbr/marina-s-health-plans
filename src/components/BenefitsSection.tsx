import { Stethoscope, AlertTriangle, Microscope, Syringe, Building2, MapPin } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Baixada Santista",
      description: "Atendimento em toda a região",
    },
    {
      icon: AlertTriangle,
      title: "Urgência e Emergência",
      description: "Atendimento 24 horas",
    },
    {
      icon: Stethoscope,
      title: "Consultas Médicas",
      description: "Todas as especialidades",
    },
    {
      icon: Microscope,
      title: "Exames",
      description: "Simples e complexos",
    },
    {
      icon: Syringe,
      title: "Cirurgias",
      description: "Cobertura completa",
    },
    {
      icon: Building2,
      title: "Internações",
      description: "Rede hospitalar ampla",
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
            <span className="text-sm font-medium text-accent-foreground">
              Benefícios
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cobertura completa para sua{" "}
            <span className="text-primary">tranquilidade</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Todos os planos incluem benefícios essenciais para cuidar da sua 
            saúde com segurança e qualidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-secondary hover:bg-accent transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-card group-hover:gradient-cta mx-auto flex items-center justify-center mb-4 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Economy Section */}
        <div className="mt-16 bg-accent rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Economize com planos regionais
              </h3>
              <p className="text-muted-foreground mb-6">
                Se você mora na Baixada Santista, os planos regionais podem ser a 
                opção ideal para economizar sem perder qualidade. Faço uma análise 
                personalizada conforme seu município para encontrar o melhor 
                custo-benefício.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Simulação gratuita e sem compromisso
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Análise personalizada por município
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Comparativo entre operadoras
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h4 className="font-semibold text-foreground mb-4">Opções especiais:</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Redução de carência</span>
                  <span className="font-semibold text-primary">Sim</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Compra parcial de carência</span>
                  <span className="font-semibold text-primary">Sim</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Troca de operadora</span>
                  <span className="font-semibold text-primary">Sim</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-muted-foreground">Migração direta</span>
                  <span className="font-semibold text-muted-foreground">Não</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
