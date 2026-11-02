import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/img/about-hojas.webp";
import PageHeader from "@/components/common/PageHeader";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import MariaFeature from "@/components/sections/MariaFeature";
import CtaBand from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";

const principles = [
  {
    title: "Cercanía",
    text: "Cada persona llega con una necesidad distinta. Nos tomamos el tiempo de escucharte y de responder a tus preguntas con claridad.",
  },
  {
    title: "Atención personalizada",
    text: "Te orientamos en la elección de productos según lo que buscas, sin prisas y sin recomendaciones genéricas.",
  },
  {
    title: "Alimentación saludable",
    text: "Creemos en una alimentación variada, sencilla y basada en buenos hábitos como punto de partida del bienestar.",
  },
  {
    title: "Productos naturales",
    text: "Seleccionamos plantas, infusiones, alimentos y complementos con criterio y te explicamos sus características.",
  },
  {
    title: "Bienestar",
    text: "Entendemos el bienestar como algo cotidiano: pequeños gestos y elecciones conscientes que se mantienen en el tiempo.",
  },
  {
    title: "Compromiso con el cliente",
    text: "Información honesta y rigurosa, sin promesas milagrosas. Si algo no es para ti, te lo diremos.",
  },
];

const About = () => {
  usePageMeta({
    title: "Sobre nosotros",
    description:
      "Conoce Herbolarium de la Fuente, herbolario y dietética en Oviedo: nuestra filosofía de cercanía, atención personalizada y alimentación saludable.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Sobre nosotros"
        title={
          <>
            Un herbolario con <em className="font-normal">nombre propio</em> en Oviedo
          </>
        }
        intro="Herbolarium de la Fuente es un espacio dedicado a la alimentación natural, la dietética y el bienestar, con una profesional identificable detrás del proyecto."
        breadcrumbs={[{ label: "Sobre nosotros" }]}
      />

      <section className="section">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <img
              src={aboutImage}
              alt="Plantas aromáticas frescas junto a frascos de cristal y cítricos"
              loading="lazy"
              decoding="async"
              width={820}
              height={1080}
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={100}>
            <SectionHeading eyebrow="Nuestra filosofía" title="Naturaleza, conocimiento y trato cercano" />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                No queremos ser solo un lugar donde comprar productos naturales. Queremos que cada visita sea una
                conversación: entender qué buscas, explicarte las opciones y ayudarte a elegir con información.
              </p>
              <p>
                Esa manera de trabajar nace de la mirada profesional de {site.professional.name}, dietista, responsable
                del establecimiento, y de un interés genuino por la alimentación saludable como base del bienestar.
              </p>
              <p>
                La información que te ofrecemos sobre productos es orientativa y no sustituye el consejo de tu médico u
                otro profesional sanitario.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-beige" aria-labelledby="principios-title">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Lo que nos define" title={<span id="principios-title">Nuestros principios</span>} />
          </Reveal>
          <ol className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 70} className="border-t border-forest/20 pt-6">
                <span className="font-serif text-lg italic text-earth" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-[1.75rem]">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-label={site.professional.name}>
        <div className="container-site">
          <MariaFeature />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-site flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <p className="font-serif text-3xl text-pine md:text-4xl">Descubre lo que puedes encontrar en la tienda.</p>
          <Button asChild>
            <Link to="/productos">
              Ver productos <ArrowRight strokeWidth={1.6} />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default About;
