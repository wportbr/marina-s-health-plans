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
            <div className="relative z-10 w-[200px] h-[280px] md:w-[280px] md:h-[380px]">
              
              {/* Stem - coral/orange vertical bar */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 bottom-0 w-6 md:w-8 h-[120px] md:h-[180px] rounded-full animate-grow-up origin-bottom"
                style={{ background: 'linear-gradient(to top, hsl(24 95% 53%), hsl(24 90% 58%))' }}
              />
              
              {/* Large left leaf - main leaf */}
              <div 
                className="absolute bottom-[90px] md:bottom-[140px] left-[10px] md:left-[10px] w-[70px] h-[100px] md:w-[100px] md:h-[140px] rotate-[-25deg] animate-leaf-left"
                style={{ 
                  background: 'hsl(28 70% 85%)',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                }}
              />
              
              {/* Top right leaf - upper leaf */}
              <div 
                className="absolute top-[20px] md:top-[30px] right-[20px] md:right-[25px] w-[60px] h-[85px] md:w-[85px] md:h-[120px] rotate-[35deg] animate-leaf-right"
                style={{ 
                  background: 'hsl(28 70% 85%)',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  animationDelay: '0.3s'
                }}
              />
              
              {/* Bottom right leaf - smaller leaf */}
              <div 
                className="absolute bottom-[50px] md:bottom-[70px] right-[15px] md:right-[20px] w-[50px] h-[70px] md:w-[70px] md:h-[95px] rotate-[40deg] animate-leaf-right"
                style={{ 
                  background: 'hsl(28 70% 85%)',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  animationDelay: '0.6s'
                }}
              />
              
            </div>
            
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
