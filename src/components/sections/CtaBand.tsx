import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { WhatsAppIcon } from "@/components/brand/icons";
import { Button } from "@/components/ui/button";
import { site, telUrl, whatsappUrl } from "@/config/site";

type CtaBandProps = {
  eyebrow?: string;
  title?: ReactNode;
  text?: ReactNode;
  whatsappMessage?: string;
};

const CtaBand = ({
  eyebrow = "¿Buscas un producto concreto?",
  title = (
    <>
      Consúltanos, <em className="font-normal">te ayudamos a encontrarlo</em>
    </>
  ),
  text = "Escríbenos por WhatsApp o llámanos y te informaremos sobre disponibilidad, características o posibilidad de encargo.",
  whatsappMessage,
}: CtaBandProps) => (
  <section className="bg-forest text-warm">
    <div className="container-site py-20 md:py-24">
      <Reveal className="grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-5 text-sage-soft">{eyebrow}</p>
          <h2 className="text-[2.35rem] leading-[1.08] text-warm md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-warm/80 md:text-lg">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <Button asChild variant="light" size="lg">
            <a href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Escríbenos
            </a>
          </Button>
          <Button asChild variant="outline-light" size="lg">
            <a href={telUrl}>
              <Phone strokeWidth={1.6} />
              {site.phone.display}
            </a>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaBand;
