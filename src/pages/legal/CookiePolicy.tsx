import LegalPage from "@/components/common/LegalPage";
import { Button } from "@/components/ui/button";
import { openConsentSettings } from "@/lib/consent";

const CookiePolicy = () => (
  <LegalPage title="Política de cookies" description="Política de cookies del sitio web de Herbolarium de la Fuente, Oviedo.">
    <h2>1. Qué utiliza esta web</h2>
    <p>
      Esta web no utiliza cookies propias de análisis ni de publicidad. Solo emplea almacenamiento técnico en el navegador
      para recordar tu decisión sobre las cookies, y permite cargar contenido de terceros únicamente si lo autorizas.
    </p>

    <h2>2. Detalle</h2>
    <ul>
      <li>
        <strong>hdlf-consent-v1</strong> (almacenamiento local, propio, técnico): guarda tus preferencias de
        consentimiento. No caduca hasta que lo borres desde tu navegador.
      </li>
      <li>
        <strong>Google Maps</strong> (terceros, opcional): al cargar el mapa interactivo, Google puede instalar cookies
        propias. Solo se carga si aceptas «Contenido de terceros».
      </li>
    </ul>

    <h2>3. Cómo cambiar tu elección</h2>
    <p>Puedes modificar o retirar tu consentimiento en cualquier momento:</p>
    <Button type="button" variant="outline" onClick={openConsentSettings}>
      Configurar cookies
    </Button>
    <p className="mt-6">
      También puedes eliminar el almacenamiento y las cookies desde la configuración de tu navegador.
    </p>
  </LegalPage>
);

export default CookiePolicy;
