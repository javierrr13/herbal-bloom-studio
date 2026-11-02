import Reveal from "@/components/common/Reveal";
import { services } from "@/content/services";

const ServicesList = ({ headingLevel: H = "h3" }: { headingLevel?: "h2" | "h3" }) => (
  <ol className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
    {services.map((service, i) => (
      <Reveal as="li" key={service.title} delay={i * 80} className="flex flex-col bg-warm p-8 md:p-10">
        <div className="flex items-center justify-between">
          <service.icon className="h-7 w-7 text-forest" strokeWidth={1.25} aria-hidden="true" />
          <span className="font-serif text-lg italic text-sage" aria-hidden="true">
            0{i + 1}
          </span>
        </div>
        <H className="mt-8 text-[1.75rem]">{service.title}</H>
        <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
      </Reveal>
    ))}
  </ol>
);

export default ServicesList;
