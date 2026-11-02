import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { site, sitemapRoutes } from "./src/config/site";
import { posts } from "./src/content/blog";

/**
 * SEO en tiempo de compilación:
 * - inyecta en index.html los datos estructurados (LocalBusiness) y, si hay dominio, las URL absolutas;
 * - genera robots.txt y sitemap.xml (el sitemap requiere VITE_SITE_URL, p. ej. https://www.midominio.es).
 */
function seo(siteUrl: string | undefined): Plugin {
  const base = siteUrl?.replace(/\/$/, "");

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: site.name,
    description: site.description,
    ...(base && { url: `${base}/`, image: `${base}/og-image.jpg` }),
    telephone: site.phone.e164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    areaServed: { "@type": "City", name: "Oviedo" },
    sameAs: [site.instagram.shop.url],
    employee: {
      "@type": "Person",
      name: site.professional.name,
      jobTitle: site.professional.jobTitle,
      identifier: site.professional.registration,
      sameAs: [site.instagram.professional.url],
    },
  };

  return {
    name: "herbolarium-seo",
    transformIndexHtml(html) {
      let out = html.replace(
        "</head>",
        `    <script type="application/ld+json">${JSON.stringify(localBusiness)}</script>\n  </head>`,
      );
      if (base) {
        out = out
          .replaceAll('content="/og-image.jpg', `content="${base}/og-image.jpg`)
          .replace("</title>", `</title>\n    <link rel="canonical" href="${base}/" />\n    <meta property="og:url" content="${base}/" />`);
      }
      return out;
    },
    generateBundle() {
      const robots = ["User-agent: *", "Allow: /", ...(base ? ["", `Sitemap: ${base}/sitemap.xml`] : [])].join("\n");
      this.emitFile({ type: "asset", fileName: "robots.txt", source: `${robots}\n` });

      if (!base) {
        this.warn("VITE_SITE_URL no está definido: no se genera sitemap.xml ni URL canónicas absolutas.");
        return;
      }
      const today = new Date().toISOString().slice(0, 10);
      const urls = [
        ...sitemapRoutes.map((route) => ({ loc: `${base}${route}`, lastmod: today })),
        ...(posts.length ? [{ loc: `${base}/blog`, lastmod: today }] : []),
        ...posts.map((p) => ({ loc: `${base}/blog/${p.slug}`, lastmod: p.date })),
      ];
      const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`),
        "</urlset>",
        "",
      ].join("\n");
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: xml });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), seo(env.VITE_SITE_URL)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
