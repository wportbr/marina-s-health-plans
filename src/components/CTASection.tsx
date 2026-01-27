import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin } from "lucide-react";

const CTASection = () => {
  const whatsappLink = "https://wa.me/5513988181493?text=Olá Marina! Gostaria de fazer uma simulação de plano de saúde.";

  return (
    <section id="contato" className="py-20 md:py-28 bg-accent text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6">
            Encontre o plano ideal para você{" "}
            <span className="text-primary">hoje mesmo</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground text-background/70 mb-8">
              Mande uma mensagem agora para esclarecer qualquer dúvida e receba uma simulação gratuita e personalizada. Atendimento em toda a Baixada Santista.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-background/30 text-black hover:bg-background hover:text-primary"
              asChild
            >
              <a href="tel:+5513988181493">
                <Phone className="w-5 h-5" />
                (13) 98818-1493
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-foreground/60">
            <MapPin className="w-4 h-4" />
            <span>Atendimento em toda a Baixada Santista</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
