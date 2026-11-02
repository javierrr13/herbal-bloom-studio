import type { ReactNode } from "react";
import PageHeader from "./PageHeader";
import { usePageMeta } from "@/hooks/use-page-meta";

type LegalPageProps = {
  title: string;
  description: string;
  children: ReactNode;
};

/** Estructura común de las páginas legales. No se indexan hasta que el texto esté revisado. */
const LegalPage = ({ title, description, children }: LegalPageProps) => {
  usePageMeta({ title, description, noindex: true });

  return (
    <>
      <PageHeader eyebrow="Información legal" title={title} breadcrumbs={[{ label: title }]} />
      <div className="container-site max-w-3xl py-14 md:py-20">
        <aside className="mb-12 rounded-sm border-l-2 border-earth bg-beige p-6 text-sm leading-relaxed text-pine" role="note">
          <p className="font-semibold">Documento en preparación</p>
          <p className="mt-1 text-muted-foreground">
            Esta página recoge la estructura y la información disponible. Los apartados marcados como pendientes deben
            completarse con los datos del titular y el texto debe ser revisado por un profesional antes de considerarse
            definitivo.
          </p>
        </aside>
        <div className="prose-site">{children}</div>
      </div>
    </>
  );
};

export const Pending = ({ children }: { children: ReactNode }) => (
  <span className="rounded-sm bg-beige px-1.5 py-0.5 text-sm font-medium text-earth">Pendiente: {children}</span>
);

export default LegalPage;
