const ProvidersSection = () => {
  const providers = [
    { name: "Unimed", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Logo_unimed.svg/2000px-Logo_unimed.svg.png" },
    { name: "Bradesco Saúde", logo: "https://logodownload.org/wp-content/uploads/2019/08/bradesco-saude-logo.png" },
    { name: "SulAmérica", logo: "https://logodownload.org/wp-content/uploads/2017/04/sulamerica-logo.png" },
    { name: "Amil", logo: "https://logodownload.org/wp-content/uploads/2017/04/amil-logo.png" },
    { name: "Porto Seguro", logo: "https://logodownload.org/wp-content/uploads/2014/05/porto-seguro-logo-1.png" },
    { name: "NotreDame Intermédica", logo: "https://logodownload.org/wp-content/uploads/2019/11/intermedica-logo.png" },
  ];

  return (
    <section id="operadoras" className="py-20 md:py-28 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
            <span className="text-sm font-medium text-accent-foreground">
              Operadoras Parceiras
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            As melhores{" "}
            <span className="text-primary">operadoras</span> do mercado
          </h2>
          <p className="text-muted-foreground text-lg">
            Trabalhamos com as principais operadoras para garantir a melhor 
            cobertura e atendimento para você.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 flex items-center justify-center h-24 group"
            >
              <img
                src={provider.logo}
                alt={provider.name}
                className="max-h-12 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            E mais: Blue Med, Ana Costa Saúde, Santa Casa Saúde, Prevent Senior, Trasmontano
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;
