import { motion } from "framer-motion";
import { logoAsset } from "@/assets/placeholder";

const logos = Array.from({ length: 45 }, (_, i) =>
  logoAsset(`logos/I${i + 1}.png`),
);

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
          className="group flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-[#800000]/12 px-4 py-3 shadow-[0_10px_28px_-18px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#800000]/30 hover:shadow-[0_14px_32px_-16px_rgba(128,0,0,0.2)] sm:h-24 sm:w-44"
          style={{
            background:
              "linear-gradient(145deg, #ffffff 0%, #fff5f5 55%, #fceaea 100%)",
          }}
        >
          <img
            src={logo}
            alt=""
            className="max-h-12 max-w-full object-contain opacity-90 transition duration-300 group-hover:opacity-100 sm:max-h-14"
          />
        </div>
      ))}
    </motion.div>
  </div>
);

const PartnerSlider = () => {
  const rowA = logos.slice(0, 23);
  const rowB = logos.slice(23);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-[28rem] -translate-x-1/2 rounded-full bg-[#800000]/10 blur-[90px]"
      />

      <div className="container-custom relative mb-10 text-center sm:mb-12">
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
