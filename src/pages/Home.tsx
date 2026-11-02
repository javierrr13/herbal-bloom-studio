import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import hero768 from "@/assets/img/hero-768.webp";
import hero1280 from "@/assets/img/hero-1280.webp";
import hero1920 from "@/assets/img/hero-1920.webp";
import aboutImage from "@/assets/img/about-cesta.webp";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import CategoryCard from "@/components/sections/CategoryCard";
import MariaFeature from "@/components/sections/MariaFeature";
import ServicesList from "@/components/sections/ServicesList";
import InstagramAccounts from "@/components/sections/InstagramAccounts";
import ContactDetails from "@/components/sections/ContactDetails";
import MapEmbed from "@/components/sections/MapEmbed";
import CtaBand from "@/components/sections/CtaBand";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { categories } from "@/content/categories";
import { site } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";

const values = [
  { title: "Atención cercana", text: "Un trato personal, con tiempo para escucharte y orientarte." },
  { title: "Productos seleccionados", text: "Una selección cuidada de productos naturales y de dietética." },
  { title: "Alimentación saludable", text: "Una filosofía basada en comer bien y en hábitos sencillos." },
  { title: "Comercio de Oviedo", text: "Un establecimiento local, en Calle Caveda, cerca de ti." },
];

const Home = () => {
  usePageMeta({
    title: "Herbolarium de la Fuente | Herbolario y dietética en Oviedo",
    exactTitle: true,
    description: site.description,
  });

  const featured = categories.filter((c) => c.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-pine">
        <img
          src={hero1920}
          srcSet={`${hero768} 768w, ${hero1280} 1280w, ${hero1920} 1920w`}
          sizes="100vw"
          alt="Hojas frescas, frascos de cristal ámbar y fruta sobre una mesa de madera"
          {...{ fetchpriority: "high" }}
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-pine/95 via-pine/75 to-pine/20 max-md:bg-gradient-to-t max-md:from-pine/95 max-md:via-pine/80 max-md:to-pine/40"
          aria-hidden="true"
        />
        <div className="container-site flex min-h-[min(calc(100svh-var(--header-height)),46rem)] flex-col justify-end py-16 md:min-h-[44rem] md:justify-center md:py-24">
          <div className="max-w-2xl animate-fade-up text-warm">
            <p className="eyebrow mb-6 text-sage-soft">Herbolario y dietética en Oviedo</p>
            <h1 className="text-[2.9rem] leading-[1.02] text-warm sm:text-6xl lg:text-7xl">
              Herbolarium de la Fuente:{" "}
              <em className="font-normal text-sage-soft">naturaleza y bienestar a tu alcance</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-warm/85 md:text-lg">
              Un espacio dedicado a la alimentación natural, la dietética y el bienestar, donde encontrarás productos
              seleccionados y atención cercana en Oviedo.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="light" size="lg">
                <Link to="/productos">Descubre nuestros productos</Link>
              </Button>
              <Button asChild variant="outline-light" size="lg">
                <Link to="/contacto">Contacta con nosotros</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Presentación */}
      <section className="section">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="Bienvenida"
              title={
                <>
                  Mucho más que una tienda de <em className="font-normal">productos naturales</em>
                </>
              }
            />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Herbolarium de la Fuente es un herbolario y centro de dietética en Oviedo con identidad propia. Detrás del
                proyecto hay una profesional identificable, {site.professional.name}, dietista, y una forma de trabajar
                basada en la cercanía y en el interés por la alimentación saludable.
              </p>
              <p>
                Aquí encontrarás plantas, infusiones, complementos alimenticios y alimentación natural y ecológica, con
                alguien dispuesto a escucharte y a orientarte en tu elección.
              </p>
            </div>
            <Button asChild variant="link" className="mt-8">
              <Link to="/sobre-nosotros">
                Conoce nuestra filosofía <ArrowRight strokeWidth={1.6} />
              </Link>
            </Button>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={120}>
            <img
              src={aboutImage}
              alt="Cesta de mimbre con verduras, hortalizas y hierbas frescas"
              loading="lazy"
              decoding="async"
              width={640}
              height={800}
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
          </Reveal>
        </div>
        <div className="container-site mt-20 md:mt-24">
          <dl className="grid gap-x-10 gap-y-10 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <dt className="font-serif text-2xl text-pine">{v.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Categorías */}
      <section className="section bg-beige" aria-labelledby="categorias-title">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Nuestros productos"
                title={<span id="categorias-title">Categorías principales</span>}
                intro="Una selección organizada para que encuentres fácilmente lo que buscas. Consúltanos la disponibilidad de cualquier producto."
              />
            </Reveal>
            <Button asChild variant="outline" className="max-w-full self-start whitespace-normal text-center md:self-auto">
              <Link to="/productos">
                Ver todas las categorías <ArrowRight strokeWidth={1.6} />
              </Link>
            </Button>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((category, i) => (
              <Reveal key={category.slug} delay={i * 80}>
                <CategoryCard category={category} variant="link" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts limit={4} className="section border-b border-border" />

      {/* María */}
      <section className="section" aria-label={site.professional.name}>
        <div className="container-site">
          <MariaFeature />
        </div>
      </section>

      {/* Servicios y encargos */}
      <section className="section bg-beige" aria-labelledby="servicios-title">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              eyebrow="Servicios"
              title={<span id="servicios-title">Atención personalizada en cada visita</span>}
              intro="Te acompañamos antes, durante y después de tu compra, en la tienda o a distancia."
            />
            <div className="mt-10 rounded-sm border-l-2 border-earth bg-warm p-6">
              <h3 className="text-2xl">¿Necesitas un producto que no tenemos?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pregúntanos por él. Te informaremos de si es posible encargarlo y de cuándo podría estar disponible.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link to="/servicios#encargos">
                  Cómo funcionan <ArrowRight strokeWidth={1.6} />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <ServicesList />
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="section" aria-labelledby="novedades-title">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Novedades"
              title={<span id="novedades-title">Síguenos en Instagram</span>}
              intro="Las novedades de la tienda y los contenidos sobre alimentación saludable se publican en nuestras cuentas de Instagram."
            />
          </Reveal>
          <div className="mt-12">
            <InstagramAccounts />
          </div>
        </div>
      </section>

      <CtaBand />

      {/* Ubicación */}
      <section className="section" aria-labelledby="visitanos-title">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Ven a visitarnos"
              title={<span id="visitanos-title">Te esperamos en Oviedo</span>}
              intro={
                <p className="flex gap-2">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-forest" strokeWidth={1.4} aria-hidden="true" />
                  Calle Caveda, Pasaje Núcleo, local 15. 33002 Oviedo, Asturias.
                </p>
              }
            />
            <div className="mt-10">
              <ContactDetails />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <MapEmbed className="lg:min-h-full" />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
