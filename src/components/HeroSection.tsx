import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Heart, Clock } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5513988181493?text=Olá! Gostaria de fazer uma simulação de plano de saúde.";

  return (
    <section id="inicio" className="relative min-h-screen gradient-hero pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)] py-12">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                +10 anos cuidando da sua saúde
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Encontre o{" "}
              <span className="text-primary">plano de saúde ideal</span>{" "}
              para você e sua família
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Atendimento especializado em toda a Baixada Santista, com suporte 
              pós-venda por tempo indeterminado. Planos regionais e nacionais 
              para todas as necessidades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Simular plano agora
                </a>
              </Button>
              <Button variant="outline-primary" size="xl" asChild>
                <a href="#planos">
                  Conhecer planos
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Humanizado</p>
                  <p className="text-xs text-muted-foreground">Atendimento pessoal</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Ativação 24h</p>
                  <p className="text-xs text-muted-foreground">Após pagamento</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">100% Online</p>
                  <p className="text-xs text-muted-foreground">Processo digital</p>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Logo Animation */}
          <div className="relative flex items-center justify-center min-h-[320px] md:min-h-[500px] animate-slide-up stagger-2">
            {/* Background glow effects */}
            <div className="absolute w-72 h-72 md:w-[420px] md:h-[420px] bg-primary/8 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute w-56 h-56 md:w-80 md:h-80 bg-accent/50 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
            
            {/* Main logo illustration - faithful to the logo */}
              <img className="  relative z-50 w-full max-w-[160px] sm:max-w-[170px] md:max-w-[180px] lg:max-w-[200px] h-auto" src="/images/Group 238.png" alt="Logo" />
                          
            {/* Subtle floating particles */}
            <div className="absolute top-[15%] left-[20%] w-3 h-3 md:w-4 md:h-4 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute top-[30%] right-[15%] w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '0.7s' }} />
            <div className="absolute bottom-[25%] left-[15%] w-3 h-3 md:w-4 md:h-4 bg-accent/80 rounded-full animate-float" style={{ animationDelay: '1.4s' }} />
            <div className="absolute bottom-[15%] right-[25%] w-2 h-2 md:w-3 md:h-3 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '2.1s' }} />
            
            {/* Decorative rings */}
            <div className="absolute w-64 h-64 md:w-96 md:h-96 border-2 border-accent/15 rounded-full animate-spin-slow" />
            <div className="absolute w-52 h-52 md:w-80 md:h-80 border border-primary/8 rounded-full animate-spin-slow-reverse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
