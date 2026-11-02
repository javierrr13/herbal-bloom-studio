import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import Logo from "@/components/brand/Logo";
import { InstagramIcon, WhatsAppIcon } from "@/components/brand/icons";
import { Button } from "@/components/ui/button";
import { mainNav, site, telUrl, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/utils";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-warm/95 backdrop-blur-md transition-shadow duration-300 supports-[backdrop-filter]:bg-warm/85",
        scrolled ? "border-border shadow-[0_6px_24px_-18px_hsl(var(--pine)/0.45)]" : "border-transparent",
      )}
    >
      <div className="container-site flex h-[var(--header-height)] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Navegación principal" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative py-2 text-[0.8rem] font-medium tracking-wide text-pine/80 transition-colors hover:text-forest",
                      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-forest after:transition-transform after:duration-300 hover:after:scale-x-100",
                      isActive && "text-forest after:scale-x-100",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
            <a href={telUrl}>
              <Phone strokeWidth={1.6} />
              <span>{site.phone.display}</span>
            </a>
          </Button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-pine transition-colors hover:bg-beige xl:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-pine/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-warm shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=open]:duration-300">
                <div className="flex h-[var(--header-height)] items-center justify-between border-b border-border px-5">
                  <Logo onClick={() => setOpen(false)} />
                  <Dialog.Close
                    className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-pine hover:bg-beige"
                    aria-label="Cerrar menú"
                  >
                    <X className="h-6 w-6" strokeWidth={1.5} />
                  </Dialog.Close>
                </div>
                <Dialog.Title className="sr-only">Menú</Dialog.Title>
                <Dialog.Description className="sr-only">Navegación principal del sitio</Dialog.Description>

                <nav aria-label="Navegación móvil" className="flex-1 overflow-y-auto px-5 py-6">
                  <ul className="divide-y divide-border/70">
                    {mainNav.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          end={item.to === "/"}
                          className={({ isActive }) =>
                            cn(
                              "flex min-h-[3.25rem] items-center font-serif text-2xl text-pine transition-colors hover:text-forest",
                              isActive && "text-forest italic",
                            )
                          }
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="space-y-3 border-t border-border bg-beige px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5">
                  <div className="grid grid-cols-2 gap-3">
                    <Button asChild variant="outline">
                      <a href={telUrl}>
                        <Phone strokeWidth={1.6} />
                        Llamar
                      </a>
                    </Button>
                    <Button asChild>
                      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                  <a
                    href={site.instagram.shop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 text-sm text-pine/80 hover:text-forest"
                  >
                    <InstagramIcon className="h-4 w-4" />@{site.instagram.shop.handle}
                  </a>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
