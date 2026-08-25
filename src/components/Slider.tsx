import { motion } from "framer-motion";

/** Load all partner logos (I1.png … I45.png) and sort by number */
const partnerModules = import.meta.glob("@/assets/partners/I*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const logos = Object.entries(partnerModules)
  .sort(([a], [b]) => {
    const na = Number(a.match(/I(\d+)\.png$/i)?.[1] ?? 0);
    const nb = Number(b.match(/I(\d+)\.png$/i)?.[1] ?? 0);
    return na - nb;
  })
  .map(([, src]) => src);

const MarqueeRow = ({
  items,
  reverse = false,
  duration = 80,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) => (
  <div className="relative overflow-hidden">
    <motion.div
      className="flex w-max items-center gap-5 sm:gap-6"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration,
      }}
    >
      {[...items, ...items].map((logo, index) => (
        <div
          key={`${reverse ? "b" : "a"}-${index}`}
          className="group relative flex h-20 w-36 shrink-0 items-center justify-center overflow-hidden rounded-2xl sm:h-24 sm:w-44"
        >
          <img
            src={logo}
            alt="Partner logo"
            className="relative z-0 h-full w-full rounded-2xl object-contain opacity-95 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-4 -top-4 z-10 h-16 w-16 rounded-full bg-[#800000]/25 blur-xl"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

const PartnerSlider = () => {
  const mid = Math.ceil(logos.length / 2);
  const rowA = logos.slice(0, mid);
  const rowB = logos.slice(mid);

  return (
    <section className="relative overflow-hidden py-12 sm:py-14 lg:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-[28rem] -translate-x-1/2 rounded-full bg-[#800000]/10 blur-[90px]"
      />

      <div className="container-custom relative mb-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#800000]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
            Trusted network
          </p>
          <span className="h-px w-10 bg-[#800000]" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Our Partners & Sponsors
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
          Brands and creators who trust Cineglare to deliver cinematic impact.
        </p>
      </div>

      <div className="relative space-y-5">
        <MarqueeRow items={rowA} duration={70} />
        <MarqueeRow items={rowB} reverse duration={85} />
      </div>
    </section>
  );
};

export default PartnerSlider;
