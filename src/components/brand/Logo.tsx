import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SprigIcon } from "./icons";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
  onClick?: () => void;
};

const Logo = ({ tone = "dark", className, onClick }: LogoProps) => (
  <Link
    to="/"
    onClick={onClick}
    aria-label="Herbolarium de la Fuente, ir a la página de inicio"
    className={cn("group inline-flex items-center gap-2.5", tone === "dark" ? "text-pine" : "text-warm", className)}
  >
    <SprigIcon className={cn("h-8 w-8 shrink-0", tone === "dark" ? "text-forest" : "text-sage")} />
    <span className="flex flex-col leading-none">
      <span className="font-serif text-[1.55rem] font-semibold tracking-tight">Herbolarium</span>
      <span
        className={cn(
          "mt-0.5 font-sans text-[0.58rem] font-medium uppercase tracking-[0.32em]",
          tone === "dark" ? "text-earth" : "text-sage-soft",
        )}
      >
        de la Fuente
      </span>
    </span>
  </Link>
);

export default Logo;
