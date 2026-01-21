import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Heart, Clock } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";

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

          {/* Hero Image */}
          <div className="relative animate-slide-up stagger-2">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={heroFamily}
                alt="Família feliz e saudável"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-card animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">(13) 98818-1493</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
