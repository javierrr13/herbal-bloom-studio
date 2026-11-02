# Herbolarium de la Fuente

Web corporativa de Herbolarium de la Fuente, herbolario y dietética en Oviedo (Calle Caveda, Pasaje Núcleo, local 15).

Tecnologías: Vite, React 18, TypeScript, Tailwind CSS y componentes shadcn/ui (Radix).

## Desarrollo

Requisitos: Node.js 18 o superior y npm.

```sh
npm install
npm run dev        # servidor local en http://localhost:8080
npm run build      # compilación de producción en dist/
npm run preview    # sirve la compilación
npm run lint
```

## Publicación

1. Copia `.env.example` a `.env` e indica el dominio definitivo en `VITE_SITE_URL`.
   Con esa variable, la compilación genera `sitemap.xml`, la línea `Sitemap:` de `robots.txt`
   y las URL canónicas y Open Graph absolutas.
2. `npm run build` y sube el contenido de `dist/` al alojamiento.
3. La web usa URL amigables (`/productos`, `/contacto`…) gestionadas en el navegador. El servidor debe
   devolver `index.html` para cualquier ruta que no sea un archivo (configuración «SPA fallback»).

## Dónde editar el contenido

| Qué | Archivo |
| --- | --- |
| Datos del negocio (dirección, teléfono, correo, Instagram, horario) | `src/config/site.ts` |
| Categorías de productos | `src/content/categories.ts` |
| Productos destacados (vacío hasta confirmar) | `src/content/products.ts` |
| Servicios | `src/content/services.ts` |
| Biografía y fotografía de María de la Fuente | `src/content/maria.ts` |
| Novedades | `src/content/news.ts` |
| Artículos del blog | `src/content/blog.ts` |
| Textos legales | `src/pages/legal/` |

Las secciones con listas vacías (productos destacados, novedades, blog, horario) no se muestran
o muestran un estado alternativo hasta que se añada contenido verificado.
