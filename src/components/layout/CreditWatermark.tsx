import { site } from "@/config/site";

/** Firma discreta del diseñador, fija en la esquina inferior izquierda. */
const CreditWatermark = () => (
  <p
    className="pointer-events-none fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 z-20 select-none rounded-full bg-warm/70 px-3 py-1 font-serif text-[0.8rem] italic text-pine/60 backdrop-blur-sm sm:left-5"
    aria-hidden="true"
  >
    {site.credit.label}
  </p>
);

export default CreditWatermark;
