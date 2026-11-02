import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/icons";
import { whatsappUrl } from "@/config/site";
import { categoryWhatsAppMessage, type Category } from "@/content/categories";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
  category: Category;
  /** "link": la tarjeta lleva al catálogo. "detail": muestra las acciones de consulta. */
  variant?: "link" | "detail";
  headingLevel?: "h2" | "h3";
  className?: string;
};

const CategoryCard = ({ category, variant = "detail", headingLevel: H = "h3", className }: CategoryCardProps) => {
  const image = (
    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-beige">
      <img
        src={category.image}
        alt={category.imageAlt}
        loading="lazy"
        decoding="async"
        width={960}
        height={720}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    </div>
  );

  if (variant === "link") {
    return (
      <Link to={`/productos#${category.slug}`} className={cn("group block", className)}>
        {image}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <H className="text-2xl md:text-[1.7rem]">{category.name}</H>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
          </div>
          <ArrowUpRight
            className="mt-1.5 h-5 w-5 shrink-0 text-forest transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>
      </Link>
    );
  }

  return (
    <article id={category.slug} className={cn("group scroll-mt-16", className)}>
      {image}
      <H className="mt-6 text-[1.85rem]">{category.name}</H>
      <p className="mt-2 leading-relaxed text-muted-foreground">{category.description}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.75rem] font-semibold uppercase tracking-[0.12em]">
        <a
          href={whatsappUrl(categoryWhatsAppMessage(category.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[2.75rem] items-center gap-2 text-forest hover:text-pine"
          aria-label={`Consultar por WhatsApp sobre ${category.name}`}
        >
          <WhatsAppIcon className="h-4 w-4" />
          Consultar por WhatsApp
        </a>
        <Link
          to={`/contacto?asunto=${encodeURIComponent(category.name)}#formulario`}
          className="inline-flex min-h-[2.75rem] items-center gap-2 text-earth hover:text-pine"
          aria-label={`Escribirnos sobre ${category.name}`}
        >
          Escríbenos
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default CategoryCard;
