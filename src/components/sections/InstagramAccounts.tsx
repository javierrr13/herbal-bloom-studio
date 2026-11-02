import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { InstagramIcon } from "@/components/brand/icons";
import { site } from "@/config/site";

const accounts = [
  {
    ...site.instagram.shop,
    label: "El herbolario",
    text: "Novedades de la tienda, productos que llegan y avisos del establecimiento.",
  },
  {
    ...site.instagram.professional,
    label: `${site.professional.name}`,
    text: "Contenidos sobre alimentación saludable y bienestar.",
  },
];

const InstagramAccounts = ({ headingLevel: H = "h3" }: { headingLevel?: "h2" | "h3" }) => (
  <div className="grid gap-5 md:grid-cols-2">
    {accounts.map((account, i) => (
      <Reveal key={account.handle} delay={i * 100}>
        <a
          href={account.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full min-w-0 flex-col justify-between gap-10 rounded-sm border border-border bg-warm p-6 sm:p-8 transition-colors duration-300 hover:border-forest/40 hover:bg-white md:p-10"
        >
          <div className="flex items-start justify-between">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-beige text-forest">
              <InstagramIcon className="h-6 w-6" />
            </span>
            <ArrowUpRight
              className="h-5 w-5 text-forest transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">{account.label}</p>
            <H className="text-[1.6rem] leading-tight [overflow-wrap:anywhere] sm:text-[1.9rem] md:text-4xl">@{account.handle}</H>
            <p className="mt-3 leading-relaxed text-muted-foreground">{account.text}</p>
            <span className="mt-6 inline-block text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-forest">
              Seguir en Instagram
            </span>
          </div>
        </a>
      </Reveal>
    ))}
  </div>
);

export default InstagramAccounts;
