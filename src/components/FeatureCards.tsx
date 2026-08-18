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
    <div className="py-20 sm:py-24 lg:py-28">
      <div className="container-custom">
        <div className="mb-12 flex items-center gap-3">
          <span className="h-px w-12 bg-[#800000]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
            Why Cineglare
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
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[.035] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#800000]/70 hover:bg-[#800000]/10"
              >
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#800000] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#800000]/30 bg-[#800000]/15 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#800000] group-hover:shadow-[0_0_30px_rgba(128,0,0,.35)]">
                  <feature.icon className="h-7 w-7 text-[#800000] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
