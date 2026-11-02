import { HandHeart, Info, PackageSearch, ClipboardList, type LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Servicios propios de la actividad comercial del herbolario.
// Los servicios profesionales de dietética no se incluyen hasta que estén confirmados.
export const services: Service[] = [
  {
    icon: HandHeart,
    title: "Atención personalizada",
    description:
      "Te escuchamos y te ayudamos a encontrar lo que buscas, con tiempo y sin prisas, en la tienda, por teléfono o por WhatsApp.",
  },
  {
    icon: Info,
    title: "Información sobre productos",
    description:
      "Te explicamos las características de cada producto, su composición y su forma de uso indicada por el fabricante.",
  },
  {
    icon: PackageSearch,
    title: "Consulta de disponibilidad",
    description:
      "Antes de acercarte, pregúntanos si tenemos el producto que necesitas y te respondemos lo antes posible.",
  },
  {
    icon: ClipboardList,
    title: "Encargos",
    description:
      "Si no encuentras un producto concreto, consúltanos: te informaremos de si es posible encargarlo y de los plazos.",
  },
];
