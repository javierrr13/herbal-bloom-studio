import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/brand/icons";
import { fullAddress, mailUrl, mapsUrl, site, telUrl, whatsappUrl } from "@/config/site";

const items = [
  { icon: MapPin, label: "Dirección", value: fullAddress, href: mapsUrl, external: true },
  { icon: Phone, label: "Teléfono", value: site.phone.display, href: telUrl },
  { icon: WhatsAppIcon, label: "WhatsApp", value: site.phone.display, href: whatsappUrl(), external: true },
  { icon: Mail, label: "Correo electrónico", value: site.email, href: mailUrl },
  { icon: InstagramIcon, label: "Instagram del herbolario", value: `@${site.instagram.shop.handle}`, href: site.instagram.shop.url, external: true },
  {
    icon: InstagramIcon,
    label: `Instagram de ${site.professional.name}`,
    value: `@${site.instagram.professional.handle}`,
    href: site.instagram.professional.url,
    external: true,
  },
];

const ContactDetails = () => (
  <address className="not-italic">
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-start gap-4 py-5 transition-colors hover:text-forest"
          >
            <item.icon className="mt-1 h-5 w-5 shrink-0 text-forest" strokeWidth={1.4} aria-hidden="true" />
            <span className="min-w-0">
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-earth">{item.label}</span>
              <span className="mt-1 block text-base [overflow-wrap:anywhere] text-pine group-hover:text-forest">{item.value}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
    {site.openingHours.length > 0 && (
      <div className="mt-8">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-earth">Horario</p>
        <dl className="mt-3 space-y-1 text-pine">
          {site.openingHours.map((h) => (
            <div key={h.days} className="flex justify-between gap-4">
              <dt>{h.days}</dt>
              <dd>{h.hours}</dd>
            </div>
          ))}
        </dl>
      </div>
    )}
  </address>
);

export default ContactDetails;
