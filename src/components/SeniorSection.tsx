import { Heart, Shield, Clock, UserCheck, Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const SeniorSection = () => {
  const whatsappLink = "https://wa.me/5513988181493?text=Olá! Gostaria de saber mais sobre planos de saúde para maiores de 59 anos.";

  const benefits = [
    {
      icon: Shield,
      title: "Cobertura Completa",
      description: "Consultas, exames, internações e procedimentos sem preocupação",
    },
    {
      icon: Heart,
      title: "Cuidado Contínuo",
      description: "Acompanhamento médico especializado para sua saúde",
    },
    {
      icon: Clock,
      title: "Agilidade no Atendimento",
      description: "Acesso rápido a consultas e exames quando precisar",
    },
    {
      icon: UserCheck,
      title: "Adesão Facilitada",
      description: "Processo simples e humanizado, sem burocracia",
    },
    {
      icon: Stethoscope,
      title: "Rede Credenciada",
      description: "Hospitais e clínicas de qualidade na Baixada Santista",
    },
    {
      icon: Phone,
      title: "Suporte Dedicado",
      description: "Atendimento personalizado antes e após a contratação",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Plano Sênior 59+
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Cuidar de quem sempre{" "}
              <span className="text-primary">cuidou de você</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sabemos que cada fase da vida merece atenção especial. Por isso, oferecemos 
              planos de saúde pensados para quem tem mais de 59 anos, com cobertura 
              completa, atendimento humanizado e todo o suporte que você precisa.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Conte com a Marina para encontrar o plano ideal, respeitando suas 
              necessidades e seu orçamento. Atendimento sem pressa, com a atenção 
              que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Simular Plano Sênior
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#planos">
                  Ver Todos os Planos
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-5 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent group-hover:gradient-cta flex items-center justify-center mb-4 transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-card rounded-2xl p-6 md:p-8 shadow-soft">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Mais de 10 anos cuidando de famílias na Baixada Santista
              </h3>
              <p className="text-muted-foreground">
                Atendimento humanizado e suporte pós-venda por tempo indeterminado
              </p>
            </div>
            <Button variant="whatsapp" size="xl" className="whitespace-nowrap" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar com a Marina
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeniorSection;
