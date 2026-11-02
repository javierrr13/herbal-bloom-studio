// Artículos del blog. Este archivo no debe importar recursos: también lo usa vite.config.ts
// para generar el sitemap. Las imágenes van en /public/blog/ y se referencian por ruta.
//
// Para publicar un artículo, añade un objeto a `posts`:
// {
//   slug: "beneficios-de-una-despensa-sencilla",
//   title: "…",
//   excerpt: "Resumen de 1–2 frases (se usa también como meta description).",
//   date: "2026-11-15",            // AAAA-MM-DD
//   category: "Alimentación saludable",
//   image: "/blog/despensa.webp",
//   imageAlt: "Descripción de la imagen",
//   author: "María de la Fuente",
//   content: [
//     { type: "p", text: "…" },
//     { type: "h2", text: "…" },
//     { type: "ul", items: ["…", "…"] },
//   ],
// }
//
// Los contenidos sobre salud deben ser rigurosos y no realizar promesas de curación.

export const blogCategories = [
  "Alimentación saludable",
  "Dietética",
  "Infusiones",
  "Plantas aromáticas",
  "Productos naturales",
  "Complementos alimenticios",
  "Hábitos saludables",
  "Bienestar",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: BlogCategory;
  image: string;
  imageAlt: string;
  author?: string;
  content: BlogBlock[];
};

export const posts: BlogPost[] = [];

export const sortedPosts = () => [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function relatedPosts(post: BlogPost, limit = 3) {
  const others = sortedPosts().filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  return [...sameCategory, ...others.filter((p) => p.category !== post.category)].slice(0, limit);
}
