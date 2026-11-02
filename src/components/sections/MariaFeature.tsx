import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { InstagramIcon, SprigIcon } from "@/components/brand/icons";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { maria } from "@/content/maria";

/** Retrato editorial. Si no hay fotografía disponible, muestra un panel tipográfico. */
export const MariaPortrait = ({ className = "" }: { className?: string }) =>
  maria.photo ? (
    <img
      src={maria.photo}
      alt={`${site.professional.name}, dietista y responsable de Herbolarium de la Fuente`}
      loading="lazy"
      decoding="async"
      className={`aspect-[4/5] w-full rounded-sm object-cover object-[42%_center] ${className}`}
    />
  ) : (
    <div
      className={`relative flex aspect-[4/5] w-full flex-col justify-between overflow-hidden rounded-sm bg-forest p-8 text-warm md:p-10 ${className}`}
    >
      <SprigIcon className="absolute -right-12 -top-4 h-[80%] w-auto text-sage/25" strokeWidth={0.5} />
      <span className="relative font-serif text-[7rem] italic leading-none text-sage-soft/90 md:text-[9rem]" aria-hidden="true">
        M
      </span>
      <div className="relative">
        <p className="font-serif text-3xl leading-tight">{site.professional.name}</p>
        <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage-soft">{site.professional.registration}</p>
      </div>
    </div>
  );

type MariaFeatureProps = { headingLevel?: "h2" | "h1"; showLink?: boolean };

const MariaFeature = ({ headingLevel: H = "h2", showLink = true }: MariaFeatureProps) => (
  <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
    <Reveal className="lg:col-span-5">
      <MariaPortrait />
    </Reveal>
    <Reveal className="lg:col-span-7" delay={120}>
      <p className="eyebrow mb-5">La profesional detrás del proyecto</p>
      <H className="text-[2.6rem] leading-[1.05] md:text-6xl">{site.professional.name}</H>
      <p className="mt-4 inline-flex items-center gap-3 border-y border-border py-3 text-sm font-medium tracking-wide text-pine">
        <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
        {site.professional.registration}
      </p>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>
          Herbolarium de la Fuente tiene nombre y apellidos. {site.professional.name}, dietista, es la profesional
          responsable del establecimiento y la persona que da forma a su manera de entender la alimentación natural y el
          bienestar.
        </p>
        {maria.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
        <p>
          Además de la tienda, María comparte contenidos sobre alimentación saludable y bienestar en su cuenta de
          Instagram{" "}
          <a href={site.instagram.professional.url} target="_blank" rel="noopener noreferrer" className="link-underline text-forest">
            @{site.instagram.professional.handle}
          </a>
          .
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        {showLink && (
          <Button asChild>
            <Link to="/maria-de-la-fuente">
              Conoce a María
              <ArrowRight strokeWidth={1.6} />
            </Link>
          </Button>
        )}
        <Button asChild variant="outline" className="normal-case tracking-normal">
          <a href={site.instagram.professional.url} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />@{site.instagram.professional.handle}
          </a>
        </Button>
      </div>
    </Reveal>
  </div>
);

export default MariaFeature;
