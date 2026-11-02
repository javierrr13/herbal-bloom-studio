// Novedades del establecimiento (llegadas de producto, avisos, eventos…).
// Solo deben añadirse novedades reales. Mientras la lista esté vacía, la página de
// Novedades remite a las cuentas de Instagram.

export type NewsItem = {
  title: string;
  date: string; // AAAA-MM-DD
  text: string;
  image?: string;
  imageAlt?: string;
  link?: { label: string; href: string };
};

export const news: NewsItem[] = [];
