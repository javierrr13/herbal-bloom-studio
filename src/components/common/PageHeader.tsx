import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumbs?: Crumb[];
};

/** Cabecera editorial para las páginas interiores. */
const PageHeader = ({ eyebrow, title, intro, breadcrumbs = [] }: PageHeaderProps) => (
  <header className="border-b border-border/70 bg-beige">
    <div className="container-site pb-14 pt-10 md:pb-20 md:pt-14">
      <nav aria-label="Ruta de navegación" className="mb-10 md:mb-14">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-forest">
              Inicio
            </Link>
          </li>
          {breadcrumbs.map((crumb) => (
            <li key={crumb.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-forest">
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-pine">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="max-w-3xl">
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h1 className="text-[2.6rem] leading-[1.05] md:text-6xl">{title}</h1>
        {intro && <div className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</div>}
      </div>
    </div>
  </header>
);

export default PageHeader;
