const ProvidersSection = () => {
  const providers = [
    { name: "Blue Med", logo: "images/blue-med.png" },
    { name: "Ana Costa Saúde", logo: "images/Ana-Costa-Saude.png" },
    { name: "Santa Saúde", logo: "images/santa_saude.png" },
    { name: "Trasmontano", logo: "images/trasmontano.png" },
    { name: "Porto Seguro", logo: "images/porto_saude.png" },
    { name: "NotreDame Intermédica", logo: "images/notredame.png" },
  ];


  const extraProviders = [
    { name: "Unimed", logo: "images/unimed.png" },
    { name: "Bradesco Saúde", logo: "images/bradesco-saude.jpg" },
    { name: "SulAmérica", logo: "images/sulamerica.png" },
    { name: "Amil", logo: "images/amil.png" },
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

       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {providers.map((provider, index) => (
          <div
            key={index}
            className="
              bg-card/80 backdrop-blur
              p-3 rounded-2xl
              border border-border/50
              shadow-sm hover:shadow-xl
              transition-all duration-300
              flex items-center justify-center
              h-40
              group
              hover:-translate-y-1
            "
          >
            <img
              src={provider.logo}
              alt={provider.name}
              className="
                max-h-13 
                object-contain
                transition-all duration-300
                group-hover:opacity-100 group-hover:grayscale-0
                group-hover:scale-105
              "
            />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <div
          className="
            grid gap-10
            grid-cols-[repeat(auto-fit,minmax(110px,1fr))]
            max-w-3xl
            w-full
            justify-items-center
          "
        >
        {extraProviders.map((provider, index) => (
          <div
            key={index}
            className="
              bg-card/60 backdrop-blur
              p-2 rounded-xl
              border border-border/40
              shadow-sm hover:shadow-md
              transition-all duration-300
              flex items-center justify-center
              h-24 w-full
              hover:-translate-y-1
            "
          >
            <img
              src={provider.logo}
              alt={provider.name}
              className="
                max-h-20
                object-contain
                transition-all duration-300
                group-hover:opacity-100
                group-hover:scale-105
              "
            />
          </div>
        ))}
        </div>
      </div>
      </div>
    </section>

    
  );
};

export default ProvidersSection;
