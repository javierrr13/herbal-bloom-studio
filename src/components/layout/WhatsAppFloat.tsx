import { WhatsAppIcon } from "@/components/brand/icons";
import { whatsappUrl } from "@/config/site";

const WhatsAppFloat = () => (
  <a
    href={whatsappUrl()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escríbenos por WhatsApp"
    className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-30 inline-flex h-14 items-center gap-2 rounded-full bg-forest pl-4 pr-4 text-warm shadow-[0_12px_30px_-10px_hsl(var(--pine)/0.6)] transition-all duration-300 hover:bg-pine md:pr-5"
  >
    <WhatsAppIcon className="h-6 w-6" />
    <span className="hidden text-[0.72rem] font-semibold uppercase tracking-[0.12em] md:inline">WhatsApp</span>
  </a>
);

export default WhatsAppFloat;
