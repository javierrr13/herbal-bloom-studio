import LegalPage, { Pending } from "@/components/common/LegalPage";
import { fullAddress, mailUrl, site, telUrl } from "@/config/site";

const LegalNotice = () => (
  <LegalPage title="Aviso legal" description="Aviso legal del sitio web de Herbolarium de la Fuente, Oviedo.">
    <h2>1. Datos identificativos</h2>
    <p>
      En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio
      Electrónico (LSSI-CE), se facilitan los siguientes datos:
    </p>
    <ul>
      <li>Nombre comercial: {site.name}</li>
      <li>
        Titular: <Pending>nombre y apellidos o razón social</Pending>
      </li>
      <li>
        NIF/CIF: <Pending>número de identificación fiscal</Pending>
      </li>
      <li>Domicilio: {fullAddress}</li>
      <li>
        Teléfono: <a href={telUrl}>{site.phone.display}</a>
      </li>
      <li>
        Correo electrónico: <a href={mailUrl}>{site.email}</a>
      </li>
      <li>
        Datos de inscripción registral, si procede: <Pending>a confirmar por el titular</Pending>
      </li>
    </ul>

    <h2>2. Objeto</h2>
    <p>
      Este sitio web tiene carácter informativo y presenta la actividad de {site.name}, establecimiento de herbolario y
      dietética situado en Oviedo. A través de la web no se realizan ventas en línea.
    </p>

    <h2>3. Condiciones de uso</h2>
    <p>
      El acceso a este sitio web es gratuito y atribuye la condición de usuario, que se compromete a hacer un uso adecuado
      de sus contenidos.
    </p>

    <h2>4. Información sobre salud</h2>
    <p>
      Los contenidos de esta web tienen carácter general y divulgativo. No constituyen diagnóstico ni tratamiento y no
      sustituyen el consejo de un médico u otro profesional sanitario.
    </p>

    <h2>5. Propiedad intelectual e industrial</h2>
    <p>
      <Pending>redacción definitiva sobre titularidad de textos, imágenes, logotipo y diseño</Pending>
    </p>

    <h2>6. Enlaces externos</h2>
    <p>
      Esta web contiene enlaces a servicios de terceros (Instagram, WhatsApp y Google Maps). {site.name} no se
      responsabiliza de los contenidos ni de las políticas de dichos servicios.
    </p>

    <h2>7. Legislación aplicable</h2>
    <p>
      <Pending>legislación y jurisdicción aplicables, a revisar por un profesional</Pending>
    </p>
  </LegalPage>
);

export default LegalNotice;
