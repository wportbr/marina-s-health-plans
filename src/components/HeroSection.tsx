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
          <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[500px] animate-slide-up stagger-2">
            {/* Background glow effects */}
            <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-accent/40 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
            
            {/* Main logo illustration */}
            <div className="relative z-10">
              {/* Stem */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-4 md:w-6 h-32 md:h-48 bg-gradient-to-t from-primary to-primary/80 rounded-full animate-grow-up origin-bottom" />
              
              {/* Left leaf 1 */}
              <div 
                className="absolute left-1/2 bottom-20 md:bottom-32 -translate-x-[140%] w-16 h-24 md:w-24 md:h-36 bg-accent rounded-[60%_40%_70%_30%] animate-leaf-sway origin-bottom-right"
                style={{ animationDelay: '0.3s' }}
              />
              
              {/* Right leaf 1 */}
              <div 
                className="absolute left-1/2 bottom-16 md:bottom-24 translate-x-[40%] w-14 h-20 md:w-20 md:h-28 bg-accent/80 rounded-[40%_60%_30%_70%] animate-leaf-sway-reverse origin-bottom-left"
                style={{ animationDelay: '0.6s' }}
              />
              
              {/* Top leaf */}
              <div 
                className="absolute left-1/2 bottom-28 md:bottom-44 -translate-x-[20%] w-12 h-20 md:w-16 md:h-28 bg-accent/90 rounded-[50%_50%_60%_40%] rotate-[-20deg] animate-leaf-float"
                style={{ animationDelay: '0.9s' }}
              />
              
              {/* Small accent leaves */}
              <div 
                className="absolute left-1/2 bottom-12 md:bottom-16 -translate-x-[180%] w-8 h-12 md:w-10 md:h-16 bg-primary/30 rounded-[60%_40%_70%_30%] animate-leaf-sway"
                style={{ animationDelay: '1.2s' }}
              />
              <div 
                className="absolute left-1/2 bottom-36 md:bottom-52 translate-x-[80%] w-10 h-14 md:w-14 md:h-20 bg-accent/60 rounded-[40%_60%_30%_70%] animate-leaf-sway-reverse"
                style={{ animationDelay: '1.5s' }}
              />
              
              {/* Floating particles */}
              <div className="absolute -top-4 left-0 w-3 h-3 md:w-4 md:h-4 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '0s' }} />
              <div className="absolute top-8 -right-8 w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-20 -left-12 w-4 h-4 md:w-5 md:h-5 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-8 right-4 w-3 h-3 bg-accent/60 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
              <div className="absolute top-4 right-12 w-2 h-2 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
              
              {/* Spacer for layout */}
              <div className="w-48 h-48 md:w-72 md:h-72" />
            </div>
            
            {/* Decorative rings */}
            <div className="absolute w-56 h-56 md:w-80 md:h-80 border-2 border-accent/20 rounded-full animate-spin-slow" />
            <div className="absolute w-44 h-44 md:w-64 md:h-64 border border-primary/10 rounded-full animate-spin-slow-reverse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
