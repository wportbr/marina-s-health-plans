import { Award, Users, HeartHandshake, Calendar } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "+10 anos",
      description: "de experiência no mercado",
    },
    {
      icon: HeartHandshake,
      title: "Humanizado",
      description: "Atendimento personalizado",
    },
    {
      icon: Users,
      title: "Pós-venda",
      description: "Suporte por tempo indeterminado",
    },
    {
      icon: Calendar,
      title: "Flexível",
      description: "Online e presencial",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
              <span className="text-sm font-medium text-accent-foreground">
                Sobre Marina
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Cuidar da saúde é garantir{" "}
              <span className="text-primary">tranquilidade</span> para você e sua família
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Escolhi trabalhar com planos de saúde porque acredito que cuidar da saúde 
                é garantir tranquilidade, segurança e qualidade de vida para as pessoas.
              </p>
              <p>
                Meu propósito é ajudar cada cliente a encontrar o plano ideal, respeitando 
                sua realidade, sua cidade e suas necessidades, oferecendo suporte contínuo 
                mesmo após a contratação.
              </p>
              <p>
                Atuo em toda a Baixada Santista, oferecendo planos regionais e nacionais 
                das melhores operadoras do mercado, sempre com análise personalizada para 
                encontrar a melhor opção para você.
              </p>
            </div>

            <div className="pt-4">
              <p className="font-semibold text-foreground text-lg">Marina da Costa Barros</p>
              <p className="text-muted-foreground">Corretora de Planos de Saúde | Corretora Carol Flor</p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="gradient-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
