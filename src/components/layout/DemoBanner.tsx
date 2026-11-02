import { Link } from "react-router-dom";
import { site } from "@/config/site";

/** Aviso de versión de demostración. Desaparece al poner `site.demo` a false. */
const DemoBanner = () => {
  if (!site.demo) return null;
  return (
    <div className="bg-earth text-warm">
      <p className="container-site py-2 text-center text-[0.72rem] leading-snug tracking-wide sm:text-xs">
        <span className="font-semibold uppercase tracking-[0.16em]">Versión demo</span>
        <span className="mx-2 opacity-60" aria-hidden="true">·</span>
        Los productos mostrados son ejemplos; el catálogo real se incorporará próximamente.{" "}
        <Link to="/productos#destacados" className="underline decoration-warm/50 underline-offset-2 hover:decoration-warm">
          Ver ejemplos
        </Link>
      </p>
    </div>
  );
};

export default DemoBanner;
