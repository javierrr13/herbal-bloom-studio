import { site } from "@/config/site";

// Productos. Solo deben publicarse como reales productos disponibles en la tienda,
// sin precios ni existencias salvo que el negocio los confirme y mantenga actualizados.
//
// `demoProducts` son ejemplos genéricos (sin marcas, precios ni existencias) que solo se
// muestran mientras `site.demo` sea true. Los productos reales van en `realProducts`.
//
// Ejemplo de producto real:
// import foto from "@/assets/img/producto-x.webp";
// { name: "Nombre del producto", category: "infusiones-y-tes", description: "…", image: foto, imageAlt: "…" }

export type FeaturedProduct = {
  name: string;
  /** slug de una categoría de src/content/categories.ts */
  category: string;
  description: string;
  /** Si no se indica, se muestra una ficha tipográfica. */
  image?: string;
  imageAlt?: string;
  demo?: boolean;
};

const realProducts: FeaturedProduct[] = [];

const demoProducts: FeaturedProduct[] = [
  { name: "Manzanilla", category: "infusiones-y-tes", description: "Flor de manzanilla para preparar en infusión." },
  { name: "Romero", category: "plantas-medicinales", description: "Hojas secas de romero, aromática tradicional." },
  { name: "Copos de avena ecológicos", category: "alimentacion-ecologica", description: "Copos de avena de producción ecológica." },
  { name: "Aceite de rosa mosqueta", category: "cosmetica-natural", description: "Aceite vegetal para el cuidado de la piel." },
  { name: "Té verde", category: "infusiones-y-tes", description: "Hojas de té verde para disfrutar a cualquier hora." },
  { name: "Semillas de chía", category: "alimentacion-natural", description: "Semillas para añadir a yogures, cremas o ensaladas." },
  { name: "Magnesio", category: "complementos-alimenticios", description: "Complemento alimenticio a base de magnesio." },
  { name: "Bebida vegetal de almendra", category: "dietetica", description: "Alternativa vegetal para el día a día." },
  { name: "Tila", category: "plantas-medicinales", description: "Brácteas de tila para infusión." },
  { name: "Miel", category: "alimentacion-natural", description: "Miel para endulzar de forma sencilla." },
  { name: "Levadura de cerveza", category: "complementos-alimenticios", description: "Complemento alimenticio en copos o comprimidos." },
  { name: "Jabón de aceite de oliva", category: "cosmetica-natural", description: "Jabón elaborado con aceite de oliva." },
].map((p) => ({ ...p, demo: true }));

export const featuredProducts: FeaturedProduct[] = realProducts.length
  ? realProducts
  : site.demo
    ? demoProducts
    : [];
