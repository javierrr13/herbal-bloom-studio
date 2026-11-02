import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/brand/Logo";
import { InstagramIcon, WhatsAppIcon } from "@/components/brand/icons";
import { fullAddress, legalNav, mailUrl, mainNav, mapsUrl, site, telUrl, whatsappUrl } from "@/config/site";
import { categories } from "@/content/categories";
import { posts } from "@/content/blog";
import { openConsentSettings } from "@/lib/consent";

const linkClass = "text-warm/75 transition-colors hover:text-warm";

const SiteFooter = () => {
  const year = new Date().getFullYear();
  const exploreNav = posts.length ? [...mainNav, { label: "Blog", to: "/blog" }] : mainNav;

  return (
    <footer className="bg-pine text-warm">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-warm/75">
            Herbolario y dietética en Oviedo. Alimentación natural, productos seleccionados y atención cercana.
          </p>
          <p className="mt-6 text-sm text-warm/75">
            {site.professional.name}
            <br />
            <span className="text-warm/60">{site.professional.registration}</span>
          </p>
        </div>

        <nav aria-label="Secciones" className="lg:col-span-2">
          <h2 className="mb-5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage">Explora</h2>
          <ul className="space-y-3 text-sm">
            {exploreNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Categorías de productos" className="lg:col-span-3">
          <h2 className="mb-5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage">Productos</h2>
          <ul className="space-y-3 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/productos#${c.slug}`} className={linkClass}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="mb-5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sage">Visítanos</h2>
          <address className="space-y-4 text-sm not-italic">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={`flex gap-3 ${linkClass}`}>
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" strokeWidth={1.6} />
              <span>{fullAddress}</span>
            </a>
            <a href={telUrl} className={`flex gap-3 ${linkClass}`}>
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage" strokeWidth={1.6} />
              {site.phone.display}
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={`flex gap-3 ${linkClass}`}>
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
              WhatsApp
            </a>
            <a href={mailUrl} className={`flex gap-3 break-all ${linkClass}`}>
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage" strokeWidth={1.6} />
              {site.email}
            </a>
            <a href={site.instagram.shop.url} target="_blank" rel="noopener noreferrer" className={`flex gap-3 ${linkClass}`}>
              <InstagramIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage" />@{site.instagram.shop.handle}
            </a>
            <a href={site.instagram.professional.url} target="_blank" rel="noopener noreferrer" className={`flex gap-3 ${linkClass}`}>
              <InstagramIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage" />@{site.instagram.professional.handle}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-warm/10">
        <div className="container-site flex flex-col gap-4 py-6 pb-24 text-xs text-warm/60 md:flex-row md:items-center md:justify-between md:pb-6">
          <p>
            © {year} {site.name}. Oviedo, Asturias.
            <span className="mx-2 opacity-50" aria-hidden="true">·</span>
            <span className="font-serif text-[0.85rem] italic text-warm/75">{site.credit.label}</span>
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-warm">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button type="button" onClick={openConsentSettings} className="hover:text-warm">
                Configurar cookies
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
