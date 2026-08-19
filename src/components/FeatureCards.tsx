import { Users, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Amiable Team",
    description:
      "We are a team of creative thinkers, strategists, and innovators — delivering impactful and unforgettable experiences.",
  },
  {
    icon: Star,
    title: "Indelible Experience",
    description:
      "We turn brand purpose into powerful stories — and experiences that engage, delight, and keep audiences loyal.",
  },
  {
    icon: MapPin,
    title: "Premier Venue",
    description:
      "Handpicked venues aligned to your brand — crafted into immersive, sensory engagement and unforgettable spaces.",
  },
];

const FeatureCards = () => {
  return (
    <div className="py-14 sm:py-16 lg:py-20">
      <div className="container-custom">
        <div className="mb-8 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-[#800000]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              Why Cineglare
            </p>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            What sets us apart
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
            Creative strategy, star power, and flawless execution — the pillars
            that turn bold ideas into unforgettable brand experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => {
            const directions = ["left", "bottom", "right"] as const;
            const direction = directions[index % 3];
            const variants = {
              hidden: {
                opacity: 0,
                x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
                y: direction === "bottom" ? 60 : 0,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
              },
            };

            return (
              <motion.div
                key={index}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#800000]/12 p-8 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-[#800000]/35 hover:shadow-[0_24px_50px_-20px_rgba(128,0,0,0.25)]"
                style={{
                  background:
                    "linear-gradient(145deg, #fff8f8 0%, #f7f0f0 45%, #f3e8e8 100%)",
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#800000]/[0.07] blur-2xl transition-opacity duration-500 group-hover:bg-[#800000]/[0.12]"
                />
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#800000]/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#800000] group-hover:shadow-[0_8px_24px_rgba(128,0,0,.3)]">
                  <feature.icon className="h-7 w-7 text-[#800000] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="relative mb-3 text-xl font-bold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
