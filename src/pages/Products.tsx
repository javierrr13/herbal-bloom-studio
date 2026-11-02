import { Link } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";
import Reveal from "@/components/common/Reveal";
import CategoryCard from "@/components/sections/CategoryCard";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CtaBand from "@/components/sections/CtaBand";
import { categories } from "@/content/categories";
import { usePageMeta } from "@/hooks/use-page-meta";

const Products = () => {
  usePageMeta({
    title: "Productos naturales en Oviedo",
    description:
      "Plantas medicinales, infusiones y tés, complementos alimenticios, alimentación natural y ecológica, dietética y cosmética natural en Herbolarium de la Fuente, Oviedo.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Catálogo"
        title={
          <>
            Productos naturales <em className="font-normal">seleccionados</em>
          </>
        }
        intro="Estas son las principales categorías que puedes encontrar en Herbolarium de la Fuente. La disponibilidad puede variar: consúltanos por cualquier producto antes de tu visita."
        breadcrumbs={[{ label: "Productos" }]}
      />

      <nav aria-label="Categorías" className="sticky top-[var(--header-height)] z-20 border-b border-border bg-warm/95 backdrop-blur-md">
        <ul className="container-site flex gap-x-6 gap-y-2 overflow-x-auto py-4 lg:flex-wrap lg:overflow-visible text-[0.72rem] font-semibold uppercase tracking-[0.14em] [scrollbar-width:none]">
          {categories.map((c) => (
            <li key={c.slug} className="shrink-0">
              <Link to={`#${c.slug}`} className="text-pine/70 hover:text-forest">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section className="section" aria-label="Categorías de productos">
        <div className="container-site grid gap-x-10 gap-y-20 md:grid-cols-2">
          {categories.map((category, i) => (
            <Reveal key={category.slug} delay={(i % 2) * 100}>
              <CategoryCard category={category} headingLevel="h2" />
            </Reveal>
          ))}
        </div>
        <p className="container-site mt-20 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Los complementos alimenticios no deben utilizarse como sustitutos de una dieta variada y equilibrada ni de un
          estilo de vida saludable. La información de esta web tiene carácter general y no sustituye el consejo de un
          profesional sanitario.
        </p>
      </section>

      <FeaturedProducts className="section border-t border-border bg-beige" />

      <CtaBand />
    </>
  );
};

export default Products;
