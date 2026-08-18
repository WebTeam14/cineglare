import { Package, Users2, Globe, Film, TrendingUp, Calendar } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Product Branding",
    description:
      "We craft experiences that turn first glances into lifelong loyalty — and elevate your brand globally.",
  },
  {
    icon: Users2,
    title: "Celebrity Management",
    description:
      "We bring stars who embody your brand's essence — turning every appearance into powerful influence.",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description:
      "We turn digital presence into global influence — and measurable business growth.",
  },
  {
    icon: Film,
    title: "Film & AD Production",
    description:
      "Where creativity meets cinematic excellence. From concept to screen — we deliver stories that inspire global audiences.",
  },
  {
    icon: TrendingUp,
    title: "Film Promotion",
    description:
      "From teasers to trending — your film gets the spotlight. Strategy + stardom + global reach.",
  },
  {
    icon: Calendar,
    title: "Event Management",
    description:
      "We curate unforgettable events with world-class execution. From concept to curtain call — every moment shines.",
  },
];

const Services = () => {
  return (
    <div id="services" className="w-full py-20 sm:py-24 lg:py-28">
      <div className="container-custom">
        <div className="mb-12 grid grid-cols-1 items-end gap-6 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-12 bg-[#800000]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                What we do
              </p>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Services we deliver
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/65 lg:justify-self-end">
            We elevate brands with star-powered influence, unforgettable
            experiences, and cinematic storytelling — delivering strategic,
            flawless execution that transforms brands into icons.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_50px_-28px_rgba(0,0,0,0.85)] backdrop-blur-sm p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#800000]/70 hover:bg-[#800000]/10"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#800000] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#800000]/30 bg-[#800000]/15 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#800000] group-hover:shadow-[0_0_30px_rgba(128,0,0,.35)]">
                <service.icon className="h-7 w-7 text-[#800000] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
