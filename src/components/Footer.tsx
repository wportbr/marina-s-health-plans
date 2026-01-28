import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-cta flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CF</span>
            </div>
            <span className="font-semibold text-foreground">Corretora Carol Flor</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} WPORT. Todos os direitos reservados.
          </p>

          <a href="https://wportbr.netlify.app/"> 
            <img src="/images/wportlogo.png" alt="WPORT Logo" width="200" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
