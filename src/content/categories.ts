import plantas from "@/assets/img/cat-plantas.webp";
import infusiones from "@/assets/img/cat-infusiones.webp";
import complementos from "@/assets/img/cat-complementos.webp";
import natural from "@/assets/img/cat-natural.webp";
import ecologica from "@/assets/img/cat-ecologica.webp";
import dietetica from "@/assets/img/cat-dietetica.webp";
import cosmetica from "@/assets/img/cat-cosmetica.webp";
import especializados from "@/assets/img/cat-especializados.webp";

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

// Categorías orientativas. No se presentan productos, marcas, precios ni existencias concretas.
export const categories: Category[] = [
  {
    slug: "plantas-medicinales",
    name: "Plantas medicinales",
    description:
      "Plantas y hierbas propias de la herboristería tradicional. Pregúntanos por la disponibilidad y por su forma de uso habitual.",
    image: plantas,
    imageAlt: "Hojas verdes frescas junto a un frasco de cristal ámbar sobre una mesa de madera",
    featured: true,
  },
  {
    slug: "infusiones-y-tes",
    name: "Infusiones y tés",
    description:
      "Infusiones, tés y mezclas de hierbas para disfrutar en cualquier momento del día.",
    image: infusiones,
    imageAlt: "Frascos de cristal con hierbas aromáticas en su interior",
    featured: true,
  },
  {
    slug: "complementos-alimenticios",
    name: "Complementos alimenticios",
    description:
      "Complementos para acompañar una alimentación variada y equilibrada, nunca para sustituirla. Te informamos sobre cada producto para que elijas con criterio.",
    image: complementos,
    imageAlt: "Frascos de cristal con aceite y cápsulas vegetales rodeados de hojas",
    featured: true,
  },
  {
    slug: "alimentacion-natural",
    name: "Alimentación natural",
    description:
      "Alimentos de despensa con ingredientes sencillos para cuidar tu alimentación día a día.",
    image: natural,
    imageAlt: "Tomates y hojas verdes sobre una mesa de madera",
    featured: true,
  },
  {
    slug: "alimentacion-ecologica",
    name: "Alimentación ecológica",
    description:
      "Productos de producción ecológica para quienes buscan una despensa más respetuosa con el entorno.",
    image: ecologica,
    imageAlt: "Cesta de mimbre con verduras y hortalizas variadas",
  },
  {
    slug: "dietetica",
    name: "Dietética",
    description:
      "Productos pensados para necesidades alimentarias específicas. Consúltanos qué tenemos disponible.",
    image: dietetica,
    imageAlt: "Cuenco con semillas molidas y cápsulas vegetales junto a hojas verdes",
  },
  {
    slug: "cosmetica-natural",
    name: "Cosmética natural",
    description: "Cuidado personal con ingredientes de origen natural.",
    image: cosmetica,
    imageAlt: "Frasco cuentagotas de cristal ámbar entre hojas verdes",
  },
  {
    slug: "productos-especializados",
    name: "Productos especializados",
    description:
      "¿Buscas algo concreto? Consúltanos y te informaremos sobre su disponibilidad o la posibilidad de encargarlo.",
    image: especializados,
    imageAlt: "Frascos de cristal con aceite, hierbas y cápsulas sobre fondo claro",
  },
];

export const categoryWhatsAppMessage = (name: string) =>
  `Hola, Herbolarium de la Fuente. Me gustaría información sobre productos de la categoría «${name}».`;
