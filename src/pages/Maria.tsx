import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import MariaFeature from "@/components/sections/MariaFeature";
import InstagramAccounts from "@/components/sections/InstagramAccounts";
import CtaBand from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { siteOrigin, usePageMeta } from "@/hooks/use-page-meta";

const Maria = () => {
  usePageMeta({
    title: "María de la Fuente, dietista en Oviedo",
    description:
      "María de la Fuente, dietista nº 2278 – ASNADI, profesional responsable de Herbolarium de la Fuente, herbolario y dietética en Oviedo.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: site.professional.name,
      jobTitle: site.professional.jobTitle,
      identifier: site.professional.registration,
      url: `${siteOrigin()}/maria-de-la-fuente`,
      sameAs: [site.instagram.professional.url],
      worksFor: { "@type": "Store", name: site.name, url: `${siteOrigin()}/` },
    },
  });

  return (
    <>
      <PageHeader
        eyebrow="La profesional"
        title={
          <>
            María de la Fuente, <em className="font-normal">dietista</em>
          </>
        }
        intro="Profesional responsable de Herbolarium de la Fuente."
        breadcrumbs={[{ label: "María de la Fuente" }]}
      />

      <section className="section">
        <div className="container-site">
          <MariaFeature headingLevel="h2" showLink={false} />
        </div>
      </section>

      <section className="section bg-beige" aria-labelledby="ambitos-title">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Dos ámbitos diferenciados"
              title={<span id="ambitos-title">El herbolario y la profesional</span>}
            />
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <Reveal className="border-t border-forest/20 pt-6">
              <h3 className="text-[1.75rem]">Herbolarium de la Fuente</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Actividad comercial: venta de productos naturales, de dietética y de alimentación, con atención e
                información sobre los productos.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link to="/servicios">
                  Ver servicios <ArrowRight strokeWidth={1.6} />
                </Link>
              </Button>
            </Reveal>
            <Reveal className="border-t border-forest/20 pt-6" delay={100}>
              <h3 className="text-[1.75rem]">{site.professional.name}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Actividad profesional como dietista ({site.professional.registration}). Para cualquier consulta
                relacionada, ponte en contacto con nosotros.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link to="/contacto">
                  Contactar <ArrowRight strokeWidth={1.6} />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="redes-title">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Comunicación"
              title={<span id="redes-title">Dos cuentas, dos voces</span>}
              intro={
                <>
                  En <strong className="font-medium text-pine">@{site.instagram.professional.handle}</strong> María comparte
                  contenidos sobre alimentación saludable y bienestar. En{" "}
                  <strong className="font-medium text-pine">@{site.instagram.shop.handle}</strong> encontrarás la actualidad
                  del establecimiento.
                </>
              }
            />
          </Reveal>
          <div className="mt-12">
            <InstagramAccounts />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Hablemos"
        title={
          <>
            ¿Tienes alguna pregunta? <em className="font-normal">Escríbenos</em>
          </>
        }
        text="Puedes contactar por WhatsApp, por teléfono o a través del formulario de contacto."
      />
    </>
  );
};

export default Maria;
