import portfolio from "@/data/portfolioData";

const ProjectGallery = () => {
  return (
    <section id="projeler" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Galeri
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Proje Galerimiz
          </h2>
        </div>

        {portfolio.map((cat, ci) => (
          <div key={ci} className="mb-10 last:mb-0">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {cat.category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {cat.images.map((img, ii) => (
                <div key={ii} className="relative overflow-hidden group rounded-lg">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs md:text-sm font-medium leading-snug">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
