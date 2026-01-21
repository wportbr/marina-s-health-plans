import { User, Users, Heart, Briefcase, Baby, UserCheck } from "lucide-react";

const AudienceSection = () => {
  const audiences = [
    {
      icon: User,
      title: "Pessoa Física",
      description: "Planos individuais com as melhores coberturas e valores para você",
    },
    {
      icon: Users,
      title: "Famílias",
      description: "Proteção completa para toda a família com condições especiais",
    },
    {
      icon: Heart,
      title: "Sênior",
      description: "Planos específicos para maiores de 59 anos com cobertura adequada",
    },
    {
      icon: Briefcase,
      title: "MEI e Empresas",
      description: "Soluções para PME e grandes empresas com valores diferenciados",
    },
    {
      icon: Baby,
      title: "Crianças",
      description: "Cobertura pediátrica completa desde os primeiros dias de vida",
    },
    {
      icon: UserCheck,
      title: "Todas as Idades",
      description: "Atendemos todas as faixas etárias com planos personalizados",
    },
  ];

  return (
    <section className="py-20 md:py-28 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
            <span className="text-sm font-medium text-accent-foreground">
              Para quem é
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Atendimento para todas as{" "}
            <span className="text-primary">necessidades</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Seja você uma pessoa física, família ou empresa, temos a solução ideal 
            para garantir sua tranquilidade e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent group-hover:gradient-cta flex items-center justify-center mb-4 transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
