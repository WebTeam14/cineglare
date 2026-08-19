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
              className="group relative overflow-hidden rounded-[1.5rem] border border-[#800000]/12 p-8 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#800000]/35 hover:shadow-[0_24px_50px_-20px_rgba(128,0,0,0.22)]"
              style={{
                animationDelay: `${index * 80}ms`,
                background:
                  "linear-gradient(145deg, #fff8f8 0%, #f7f0f0 45%, #f3e8e8 100%)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#800000]/[0.07] blur-2xl transition-opacity duration-500 group-hover:bg-[#800000]/[0.12]"
              />
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#800000]/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#800000] group-hover:shadow-[0_8px_24px_rgba(128,0,0,.28)]">
                <service.icon className="h-7 w-7 text-[#800000] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="relative mb-3 text-xl font-bold text-neutral-900">
                {service.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
