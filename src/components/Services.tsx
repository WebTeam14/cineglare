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
    <div id="services" className="w-full py-14 sm:py-16 lg:py-20">
      <div className="container-custom">
        <div className="mb-8 grid grid-cols-1 items-end gap-5 lg:grid-cols-2">
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
              className="group relative overflow-hidden rounded-[1.5rem] border border-[#800000]/12 bg-white p-8 shadow-[0_12px_32px_-18px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#800000] hover:bg-[#800000] hover:shadow-[0_22px_48px_-16px_rgba(128,0,0,0.4)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#800000]/10 transition-all duration-300 group-hover:bg-white/15">
                <service.icon className="h-7 w-7 text-[#800000] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="relative mb-3 text-xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white/85">
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
