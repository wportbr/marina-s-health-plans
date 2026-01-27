import { FileText, Upload, FileSignature, UserCheck, CreditCard, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Apresentação",
      description: "Apresento as melhores operadoras para seu perfil",
    },
    {
      icon: Upload,
      title: "Documentação",
      description: "Envio simples e seguro dos documentos necessários",
    },
    {
      icon: FileSignature,
      title: "Contrato",
      description: "Contrato online com assinatura digital",
    },
    {
      icon: UserCheck,
      title: "Entrevista",
      description: "Entrevista médica (quando necessário)",
    },
    {
      icon: CreditCard,
      title: "Pagamento",
      description: "Pagamento da primeira parcela",
    },
    {
      icon: CheckCircle,
      title: "Ativação",
      description: "Plano ativo em até 24h após pagamento",
    },
  ];

  return (
    <section className="py-20 md:py-28 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
            <span className="text-sm font-medium text-accent-foreground">
              Como Funciona
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Processo{" "}
            <span className="text-primary">100% online</span> e simplificado
          </h2>
          <p className="text-muted-foreground text-lg">
            Da simulação à ativação do plano, tudo pode ser feito de forma 
            digital, com meu suporte em cada etapa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-cta flex items-center justify-center text-sm font-bold text-primary-foreground">
                {index + 1}
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <h4 className="font-semibold text-foreground mb-2">Pessoa Física</h4>
            <p className="text-muted-foreground">
              Plano ativo em até 24 horas após o pagamento da primeira parcela.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <h4 className="font-semibold text-foreground mb-2">Adesão</h4>
            <p className="text-muted-foreground">
              Vigência dia 1 ou 15 do mês, conforme a operadora escolhida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
