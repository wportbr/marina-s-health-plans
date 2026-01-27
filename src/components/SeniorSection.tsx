import { Heart, Shield, Clock, UserCheck, Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const SeniorSection = () => {
  const whatsappLink = "https://wa.me/5513988181493?text=Olá! Gostaria de saber mais sobre planos de saúde para maiores de 59 anos.";

  const benefits = [
    {
      icon: Shield,
      title: "Cobertura Completa",
      description: "Consultas, exames, internações e procedimentos",
    },
    {
      icon: Heart,
      title: "Cuidado Contínuo",
      description: "Acompanhamento médico especializado",
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Acesso rápido quando precisar",
    },
    {
      icon: UserCheck,
      title: "Adesão Facilitada",
      description: "Processo simples e humanizado",
    },
    {
      icon: Stethoscope,
      title: "Rede Credenciada",
      description: "Hospitais de qualidade na região",
    },
    {
      icon: Phone,
      title: "Suporte Dedicado",
      description: "Atendimento personalizado sempre",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-cta opacity-95" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary-foreground rounded-full" />
        <div className="absolute top-20 right-20 w-48 h-48 border-4 border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 left-1/4 w-24 h-24 border-4 border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 right-1/3 w-40 h-40 border-4 border-primary-foreground rounded-full" />
      </div>
      
      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-[5%] w-4 h-4 bg-primary-foreground/20 rounded-full animate-[leaf-float_4s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-[10%] w-6 h-6 bg-primary-foreground/15 rounded-full animate-[leaf-float_5s_ease-in-out_infinite_0.5s]" />
      <div className="absolute bottom-1/4 left-[15%] w-3 h-3 bg-primary-foreground/25 rounded-full animate-[leaf-float_3.5s_ease-in-out_infinite_1s]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-foreground/20 backdrop-blur-sm rounded-full mb-6 border border-primary-foreground/30">
            <Heart className="w-5 h-5 text-primary-foreground animate-pulse" />
            <span className="text-sm font-semibold text-primary-foreground tracking-wide uppercase">
              Plano Sênior 59+
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight max-w-3xl mx-auto">
            Cuidar de quem sempre{" "}
            <span className="relative">
              cuidou de você
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary-foreground/50" />
              </svg>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Planos de saúde pensados para quem tem mais de 59 anos, com cobertura 
            completa, atendimento humanizado e todo o suporte que você merece.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-5 rounded-2xl text-center hover:bg-primary-foreground/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-foreground/20 group-hover:bg-primary-foreground/30 flex items-center justify-center mb-4 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-sm font-semibold text-primary-foreground mb-1">
                {benefit.title}
              </h3>
              <p className="text-xs text-primary-foreground/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="bg-primary-foreground rounded-3xl p-8 md:p-10 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left - Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent rounded-full mb-4">
                <span className="text-xs font-medium text-accent-foreground">
                  +10 anos de experiência
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Atendimento humanizado para a melhor idade
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Conte com a Marina para encontrar o plano ideal, respeitando suas 
                necessidades e seu orçamento. Suporte contínuo mesmo após a contratação.
              </p>
            </div>
            
            {/* Right - CTAs */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <Button variant="hero" size="xl" className="whitespace-nowrap shadow-lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Simular Plano Sênior
                </a>
              </Button>
              <Button variant="outline" size="lg" className="whitespace-nowrap" asChild>
                <a href="#planos">
                  Ver Todos os Planos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeniorSection;
