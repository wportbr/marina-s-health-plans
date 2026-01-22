import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5513988181493?text=Olá! Gostaria de fazer uma simulação de plano de saúde.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-whatsapp hover:bg-whatsapp-hover rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground transition-transform group-hover:scale-110" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-25" />
    </a>
  );
};

export default WhatsAppButton;
