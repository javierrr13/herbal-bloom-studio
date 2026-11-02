import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import WhatsAppFloat from "./WhatsAppFloat";
import CookieBanner from "./CookieBanner";
import DemoBanner from "./DemoBanner";
import CreditWatermark from "./CreditWatermark";

/** Al cambiar de página, vuelve arriba o desplaza hasta el ancla indicada en la URL. */
function useScrollRestoration() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Espera a que la página (cargada de forma diferida) esté en el DOM.
      let tries = 0;
      const tick = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView();
        else if (tries++ < 20) window.setTimeout(tick, 50);
      };
      tick();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}

const Layout = () => {
  useScrollRestoration();
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-forest focus:px-4 focus:py-2 focus:text-warm"
      >
        Saltar al contenido
      </a>
      <DemoBanner />
      <SiteHeader />
      <main id="contenido" className="flex-1">
        <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <CreditWatermark />
      <CookieBanner />
    </div>
  );
};

export default Layout;
