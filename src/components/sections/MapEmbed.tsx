import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fullAddress, mapsEmbedUrl, mapsUrl } from "@/config/site";
import { saveConsent, useConsent } from "@/lib/consent";

/** Mapa de Google Maps. Solo se carga si el usuario ha aceptado contenido de terceros. */
const MapEmbed = ({ className = "" }: { className?: string }) => {
  const consent = useConsent();

  if (consent?.external) {
    return (
      <iframe
        title={`Mapa de ubicación: ${fullAddress}`}
        src={mapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`h-full min-h-[22rem] w-full rounded-sm border-0 grayscale-[30%] ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full min-h-[22rem] flex-col items-center justify-center gap-5 rounded-sm bg-beige p-8 text-center ${className}`}
    >
      <MapPin className="h-8 w-8 text-forest" strokeWidth={1.25} aria-hidden="true" />
      <div>
        <p className="font-serif text-2xl text-pine">{fullAddress}</p>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
          El mapa interactivo lo proporciona Google Maps y puede instalar cookies de terceros.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="sm" onClick={() => saveConsent(true)}>
          Cargar mapa
        </Button>
        <Button asChild size="sm" variant="outline">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
            Abrir en Google Maps
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MapEmbed;
