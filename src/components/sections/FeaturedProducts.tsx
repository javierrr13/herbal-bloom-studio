import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SprigIcon, WhatsAppIcon } from "@/components/brand/icons";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/config/site";
import { categories } from "@/content/categories";
import { featuredProducts } from "@/content/products";

// Fondos alternos para las fichas sin fotografía.
const tones = ["bg-[#E6DCCB] text-earth", "bg-sage-soft text-pine", "bg-forest text-warm", "bg-[#D8E0D3] text-pine"];

type FeaturedProductsProps = {
  /** Número máximo de productos; sin límite muestra todos. */
  limit?: number;
  className?: string;
};

/** Productos destacados. No se renderiza si no hay productos (reales o de demostración). */
const FeaturedProducts = ({ limit, className = "section" }: FeaturedProductsProps) => {
  if (featuredProducts.length === 0) return null;

  const items = limit ? featuredProducts.slice(0, limit) : featuredProducts;
  const isDemo = featuredProducts.some((p) => p.demo);

  return (
    <section id="destacados" className={`scroll-mt-16 ${className}`} aria-labelledby="destacados-title">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Selección"
              title={<span id="destacados-title">Productos destacados</span>}
              intro={
                isDemo
                  ? "Catálogo de demostración: los productos son ejemplos ilustrativos. Los productos reales de la tienda se incorporarán próximamente."
                  : undefined
              }
            />
          </Reveal>
          {limit && featuredProducts.length > limit && (
            <Button asChild variant="outline" className="max-w-full self-start whitespace-normal text-center md:self-auto">
              <Link to="/productos#destacados">
                Ver más productos <ArrowRight strokeWidth={1.6} />
              </Link>
            </Button>
          )}
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => {
            const category = categories.find((c) => c.slug === p.category);
            return (
              <Reveal as="li" key={p.name} delay={(i % 4) * 80} className="group">
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.imageAlt ?? p.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full bg-beige object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className={`flex h-full w-full flex-col justify-end p-6 ${tones[i % tones.length]}`} aria-hidden="true">
                      <SprigIcon
                        className="absolute -right-6 -top-4 h-[75%] w-auto opacity-25 transition-transform duration-700 group-hover:rotate-6"
                        strokeWidth={0.6}
                      />
                      <span className="relative font-serif text-[2rem] italic leading-[1.05]">{p.name}</span>
                    </div>
                  )}
                  {p.demo && (
                    <span className="absolute left-3 top-3 rounded-full bg-warm/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-earth backdrop-blur-sm">
                      Ejemplo
                    </span>
                  )}
                </div>
                {category && (
                  <Link to={`/productos#${category.slug}`} className="eyebrow mt-5 inline-block hover:text-pine">
                    {category.name}
                  </Link>
                )}
                <h3 className="mt-2 text-2xl">{p.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <a
                  href={whatsappUrl(`Hola, Herbolarium de la Fuente. Me gustaría información sobre «${p.name}».`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-[2.75rem] items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-forest hover:text-pine"
                  aria-label={`Consultar por WhatsApp sobre ${p.name}`}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Consultar
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProducts;
