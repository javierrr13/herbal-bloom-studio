import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { closeConsentSettings, saveConsent, useConsent, useConsentSettingsOpen } from "@/lib/consent";

const CookieBanner = () => {
  const consent = useConsent();
  const settingsOpen = useConsentSettingsOpen();
  const [external, setExternal] = useState(consent?.external ?? false);

  useEffect(() => {
    if (settingsOpen) setExternal(consent?.external ?? false);
  }, [settingsOpen, consent]);

  if (consent && !settingsOpen) return null;

  return (
    <section
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-3 bottom-3 z-50 rounded-md border border-border bg-warm p-5 shadow-[0_20px_50px_-20px_hsl(var(--pine)/0.5)] sm:inset-x-auto sm:left-5 sm:max-w-md md:p-6"
    >
      <h2 id="cookie-title" className="font-serif text-2xl">
        Tu privacidad
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Esta web solo usa almacenamiento técnico necesario. Algunos contenidos de terceros, como el mapa de Google Maps,
        pueden instalar cookies y solo se cargan si lo autorizas.{" "}
        <Link to="/politica-de-cookies" className="link-underline text-forest">
          Más información
        </Link>
        .
      </p>

      <div className="mt-4 space-y-3 rounded-sm bg-beige p-4 text-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-medium text-pine">Necesarias</p>
            <p className="text-xs text-muted-foreground">Guardan tu elección sobre cookies.</p>
          </div>
          <span className="shrink-0 whitespace-nowrap text-xs font-medium text-forest">Siempre activas</span>
        </div>
        <div className="flex items-start justify-between gap-4">
          <label htmlFor="consent-external" className="cursor-pointer">
            <span className="block font-medium text-pine">Contenido de terceros</span>
            <span className="block text-xs text-muted-foreground">Mapa interactivo de Google Maps.</span>
          </label>
          <Switch id="consent-external" checked={external} onCheckedChange={setExternal} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <Button size="sm" onClick={() => saveConsent(false)}>
          Rechazar
        </Button>
        <Button size="sm" onClick={() => saveConsent(true)}>
          Aceptar todo
        </Button>
        <Button variant="outline" size="sm" className="col-span-2" onClick={() => saveConsent(external)}>
          Guardar selección
        </Button>
      </div>
      {consent && (
        <button type="button" onClick={closeConsentSettings} className="mt-3 w-full text-center text-xs text-muted-foreground hover:text-forest">
          Cerrar sin cambios
        </button>
      )}
    </section>
  );
};

export default CookieBanner;
