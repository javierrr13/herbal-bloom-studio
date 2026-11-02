import { Link } from "react-router-dom";
import LegalPage, { Pending } from "@/components/common/LegalPage";
import { fullAddress, mailUrl, site } from "@/config/site";

const PrivacyPolicy = () => (
  <LegalPage
    title="Política de privacidad"
    description="Política de privacidad del sitio web de Herbolarium de la Fuente, Oviedo."
  >
    <h2>1. Responsable del tratamiento</h2>
    <ul>
      <li>
        Responsable: <Pending>nombre y apellidos o razón social</Pending>
      </li>
      <li>
        NIF/CIF: <Pending>número de identificación fiscal</Pending>
      </li>
      <li>Domicilio: {fullAddress}</li>
      <li>
        Correo electrónico: <a href={mailUrl}>{site.email}</a>
      </li>
    </ul>

    <h2>2. Cómo funciona el formulario de contacto</h2>
    <p>
      El formulario de esta web no envía ni almacena datos en ningún servidor. Al pulsar «Enviar», se abre la aplicación
      de correo o WhatsApp del propio usuario con el mensaje ya redactado, y es el usuario quien decide enviarlo. Los datos
      que nos lleguen por correo electrónico, WhatsApp o teléfono se utilizarán para responder a la consulta.
    </p>

    <h2>3. Finalidad y base jurídica</h2>
    <p>
      <Pending>finalidades, base jurídica y plazos de conservación, a definir por el responsable</Pending>
    </p>

    <h2>4. Servicios de terceros</h2>
    <ul>
      <li>
        WhatsApp (Meta Platforms): cuando el usuario decide contactar por WhatsApp, se aplica la política de privacidad de
        ese servicio.
      </li>
      <li>Google Maps (Google): el mapa interactivo solo se carga si el usuario lo autoriza.</li>
      <li>
        Google Fonts (Google): las tipografías de la web se cargan desde los servidores de Google, lo que implica la
        transmisión de la dirección IP del visitante a dicho proveedor.
      </li>
    </ul>

    <h2>5. Derechos</h2>
    <p>
      Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
      portabilidad escribiendo a <a href={mailUrl}>{site.email}</a>. También puedes presentar una reclamación ante la
      Agencia Española de Protección de Datos (www.aepd.es).
    </p>

    <h2>6. Cookies</h2>
    <p>
      Consulta la <Link to="/politica-de-cookies">política de cookies</Link>.
    </p>
  </LegalPage>
);

export default PrivacyPolicy;
