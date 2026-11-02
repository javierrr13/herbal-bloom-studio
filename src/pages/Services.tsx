import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import ServicesList from "@/components/sections/ServicesList";
import CtaBand from "@/components/sections/CtaBand";
import { WhatsAppIcon } from "@/components/brand/icons";
import { Button } from "@/components/ui/button";
import { site, telUrl, whatsappUrl } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";

const orderSteps = [
  { title: "Consúltanos", text: "Dinos qué producto buscas por WhatsApp, por teléfono, por correo o en la tienda." },
  { title: "Te informamos", text: "Comprobamos si es posible conseguirlo y te indicamos los plazos aproximados." },
  { title: "Te avisamos", text: "Si el encargo es posible, te avisaremos cuando el producto esté disponible." },
];

const Services = () => {
  usePageMeta({
    title: "Servicios y atención personalizada",
    description:
      "Atención personalizada, información sobre productos, consulta de disponibilidad y encargos en Herbolarium de la Fuente, herbolario y dietética en Oviedo.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title={
          <>
            Atención cercana, <em className="font-normal">antes y después</em> de tu compra
          </>
        }
        intro="Te ayudamos a encontrar lo que necesitas en la tienda, por teléfono o por WhatsApp."
        breadcrumbs={[{ label: "Servicios" }]}
      />

      <section className="section" aria-label="Servicios del herbolario">
        <div className="container-site">
          <ServicesList headingLevel="h2" />
        </div>
      </section>

      <section id="encargos" className="section scroll-mt-24 bg-beige" aria-labelledby="encargos-title">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Encargos"
              title={<span id="encargos-title">¿Buscas un producto concreto?</span>}
              intro="Si no lo encuentras en la tienda, pregúntanos. Te informaremos de si es posible encargarlo."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a
                  href={whatsappUrl("Hola, Herbolarium de la Fuente. Me gustaría consultar la posibilidad de encargar un producto: ")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Consultar un encargo
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={telUrl}>
                  <Phone strokeWidth={1.6} />
                  {site.phone.display}
                </a>
              </Button>
            </div>
          </Reveal>
          <ol className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {orderSteps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90} className="border-t border-forest/20 pt-6">
                <span className="font-serif text-4xl italic text-sage">{i + 1}</span>
                <h3 className="mt-3 text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="ambito-title">
        <div className="container-site max-w-4xl">
          <Reveal className="rounded-sm border border-border p-8 md:p-12">
            <p className="eyebrow mb-4">Importante</p>
            <h2 id="ambito-title" className="text-3xl md:text-4xl">
              Actividad comercial y actividad profesional
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Los servicios de esta página corresponden a la actividad comercial del herbolario. La información que
                ofrecemos sobre productos tiene carácter orientativo y no sustituye el diagnóstico ni el tratamiento de
                un médico u otro profesional sanitario.
              </p>
              <p>
                {site.professional.name} ejerce como dietista ({site.professional.registration}). Si tienes alguna
                consulta relacionada con su actividad profesional, contacta con nosotros y te informaremos.
              </p>
            </div>
            <Button asChild variant="link" className="mt-6">
              <Link to="/maria-de-la-fuente">
                Conoce a María de la Fuente <ArrowRight strokeWidth={1.6} />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default Services;
