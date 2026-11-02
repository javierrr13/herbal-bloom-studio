import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  usePageMeta({
    title: "Página no encontrada",
    description: "La página que buscas no existe o ha cambiado de dirección.",
    noindex: true,
  });

  return (
    <section className="container-site flex min-h-[65vh] flex-col items-start justify-center py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-5 text-5xl md:text-7xl">
        Esta página <em className="font-normal">no existe</em>
      </h1>
      <p className="mt-6 max-w-lg text-lg text-muted-foreground">
        Puede que el enlace haya cambiado o que la dirección no sea correcta.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link to="/">Volver al inicio</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/productos">Ver productos</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
