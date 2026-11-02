// Datos verificados del negocio. Fuente única para la web, el SEO y los datos estructurados.
// Este archivo no debe importar recursos (imágenes, CSS): también lo usa vite.config.ts.

export const site = {
  // Modo demostración: muestra el aviso de demo y los productos de ejemplo.
  // Ponlo a false cuando se carguen los productos reales.
  demo: true,
  credit: { label: "Designed by Javier Rioseco" },
  name: "Herbolarium de la Fuente",
  shortName: "Herbolarium",
  tagline: "Herbolario y dietética en Oviedo",
  description:
    "Herbolario y dietética en Oviedo: plantas medicinales, infusiones, complementos alimenticios y alimentación natural y ecológica, con atención cercana.",
  locale: "es_ES",
  address: {
    street: "Calle Caveda, Pasaje Núcleo, local 15",
    postalCode: "33002",
    city: "Oviedo",
    region: "Asturias",
    country: "España",
    countryCode: "ES",
  },
  phone: {
    display: "684 68 32 88",
    e164: "+34684683288",
  },
  email: "herbolariumoviedo@gmail.com",
  instagram: {
    shop: {
      handle: "herbolarium.delafuente",
      url: "https://www.instagram.com/herbolarium.delafuente/",
    },
    professional: {
      handle: "comesanoycomebien",
      url: "https://www.instagram.com/comesanoycomebien/",
    },
  },
  professional: {
    name: "María de la Fuente",
    jobTitle: "Dietista",
    registration: "Dietista nº 2278 – ASNADI",
  },
  // Pendiente de confirmar por el negocio. Mientras esté vacío no se muestra en ningún sitio.
  openingHours: [] as { days: string; hours: string }[],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.region}`;

export const mapsQuery = encodeURIComponent(
  `Calle Caveda, Pasaje Núcleo, local 15, ${site.address.postalCode} ${site.address.city}, ${site.address.region}`,
);
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

export const telUrl = `tel:${site.phone.e164}`;
export const mailUrl = `mailto:${site.email}`;

export const defaultWhatsAppMessage =
  "Hola, Herbolarium de la Fuente. Me gustaría hacer una consulta.";

export function whatsappUrl(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${site.phone.e164.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export type NavItem = { label: string; to: string };

export const mainNav: NavItem[] = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/sobre-nosotros" },
  { label: "María de la Fuente", to: "/maria-de-la-fuente" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Novedades", to: "/novedades" },
  { label: "Contacto", to: "/contacto" },
];

export const legalNav: NavItem[] = [
  { label: "Aviso legal", to: "/aviso-legal" },
  { label: "Política de privacidad", to: "/politica-de-privacidad" },
  { label: "Política de cookies", to: "/politica-de-cookies" },
];

// Rutas indexables que se publican en sitemap.xml.
export const sitemapRoutes = [
  "/",
  "/sobre-nosotros",
  "/maria-de-la-fuente",
  "/productos",
  "/servicios",
  "/novedades",
  "/contacto",
];
