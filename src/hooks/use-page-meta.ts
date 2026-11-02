import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "@/config/site";

type PageMeta = {
  /** Título de la página. Se compone como «título | Herbolarium de la Fuente» salvo `exactTitle`. */
  title: string;
  description: string;
  exactTitle?: boolean;
  noindex?: boolean;
  image?: string;
  type?: "website" | "article";
  /** Datos estructurados adicionales (JSON-LD) solo para esta página. */
  jsonLd?: Record<string, unknown>;
};

const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "");

export const siteOrigin = () => SITE_URL ?? window.location.origin;

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

export function usePageMeta({ title, description, exactTitle, noindex, image, type = "website", jsonLd }: PageMeta) {
  const { pathname } = useLocation();
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    const fullTitle = exactTitle ? title : `${title} | ${site.name}`;
    const url = `${siteOrigin()}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
    const imageUrl = new URL(image ?? "/og-image.jpg", siteOrigin()).href;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);
    setCanonical(url);

    let script: HTMLScriptElement | null = null;
    if (jsonLdString) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.page = "true";
      script.text = jsonLdString;
      document.head.appendChild(script);
    }
    return () => script?.remove();
  }, [title, description, exactTitle, noindex, image, type, pathname, jsonLdString]);
}
