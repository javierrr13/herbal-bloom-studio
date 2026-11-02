import { useSearchParams } from "react-router-dom";
import { Phone } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import Reveal from "@/components/common/Reveal";
import ContactDetails from "@/components/sections/ContactDetails";
import ContactForm from "@/components/sections/ContactForm";
import MapEmbed from "@/components/sections/MapEmbed";
import { WhatsAppIcon } from "@/components/brand/icons";
import { Button } from "@/components/ui/button";
import { site, telUrl, whatsappUrl } from "@/config/site";
import { usePageMeta } from "@/hooks/use-page-meta";

const Contact = () => {
  const [params] = useSearchParams();
  const subject = params.get("asunto") ?? "";

  usePageMeta({
    title: "Contacto y ubicación",
    description:
      "Contacta con Herbolarium de la Fuente: Calle Caveda, Pasaje Núcleo, local 15, 33002 Oviedo. Teléfono y WhatsApp 684 68 32 88, herbolariumoviedo@gmail.com.",
  });

  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title={
          <>
            Hablemos. <em className="font-normal">Estamos en Oviedo</em>
          </>
        }
        intro="Consúltanos la disponibilidad de un producto, haz un encargo o resuelve cualquier duda. Te responderemos lo antes posible."
        breadcrumbs={[{ label: "Contacto" }]}
      />

      <section className="section">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-5">
            <h2 className="text-4xl">Datos de contacto</h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button asChild size="lg" className="px-3">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-3">
                <a href={telUrl} aria-label={`Llamar al ${site.phone.display}`}>
                  <Phone strokeWidth={1.6} />
                  Llamar
                </a>
              </Button>
            </div>
            <div className="mt-8">
              <ContactDetails />
            </div>
            {site.openingHours.length === 0 && (
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Para confirmar el horario antes de tu visita, llámanos o escríbenos por WhatsApp.
              </p>
            )}
          </Reveal>

          <Reveal id="formulario" className="min-w-0 scroll-mt-28 lg:col-span-7" delay={100}>
            <div className="rounded-sm bg-beige p-6 sm:p-10">
              <h2 className="text-4xl">Escríbenos</h2>
              <p className="mt-3 text-muted-foreground">Cuéntanos qué necesitas y elige cómo prefieres enviarnos el mensaje.</p>
              <div className="mt-8">
                <ContactForm key={subject} defaultSubject={subject} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="mapa-title" className="pb-20 md:pb-28">
        <div className="container-site">
          <h2 id="mapa-title" className="mb-8 text-4xl">
            Cómo llegar
          </h2>
          <MapEmbed className="min-h-[26rem]" />
        </div>
      </section>
    </>
  );
};

export default Contact;
