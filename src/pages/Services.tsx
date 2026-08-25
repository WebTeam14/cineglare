import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@tanstack/react-router";
import {
  Package,
  Users2,
  Globe,
  Film,
  TrendingUp,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { asset } from "@/assets/placeholder";

const heroImage = asset("about-image.jpg");

const services = [
  {
    icon: Package,
    title: "Product Branding",
    tagline: "We don't just name brands — we create legacies",
    description:
      "Build brands that inspire trust, spark emotion and drive engagement with a distinctive voice and lasting impact.",
    path: "/services/product-branding",
  },
  {
    icon: Users2,
    title: "Celebrity Management",
    tagline: "Where star power meets strategy",
    description:
      "Position talent across media, endorsements, events and campaigns — aligned with your brand vision and audience.",
    path: "/services/celebrity-management",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    tagline: "Digital brilliance with a global pulse",
    description:
      "Creative storytelling meets data-driven strategy — visibility, identity and performance in every click.",
    path: "/services/digital-marketing",
  },
  {
    icon: Film,
    title: "Film & Ad Production",
    tagline: "Turning concepts into cinematic reality",
    description:
      "From concept to screen — cinematic excellence with marketing insight that inspires and builds brand emotion.",
    path: "/services/film-and-ad-production",
  },
  {
    icon: TrendingUp,
    title: "Film Promotion",
    tagline: "Promotions that move hearts and fill theatres",
    description:
      "Creative storytelling, digital innovation and event excellence so your film stands out — on screen and beyond.",
    path: "/services/film-promotion",
  },
  {
    icon: Calendar,
    title: "Event Management",
    tagline: "Turning moments into milestones",
    description:
      "From red carpets to corporate stages — strategic planning, innovative design and flawless execution.",
    path: "/services/event-management",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen overflow-x-hidden surface-base text-white">
      <Header />

      <main>
        <section className="relative isolate flex min-h-[55vh] items-end overflow-hidden bg-black md:min-h-[62svh]">
          <img
            src={heroImage}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--cine-base,#060606)] via-transparent to-black/10" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-28 sm:px-8 md:pb-16 lg:px-12">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-12 bg-[#800000]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                  What we do
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Services
                <span className="block text-[#800000]">we deliver.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                Star-powered influence, unforgettable experiences and cinematic
                storytelling — strategy and execution that turns brands into
                icons.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden surface-raise py-14 sm:py-16 lg:py-20">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#800000]/10 blur-[100px]"
          />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-[#800000]/12 bg-white p-7 shadow-[0_12px_32px_-18px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#800000] hover:bg-[#800000] hover:shadow-[0_22px_48px_-16px_rgba(128,0,0,0.4)] sm:p-8"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#800000]/10 text-[#800000] transition-all duration-300 group-hover:bg-white/15 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#800000] transition-colors duration-300 group-hover:text-white/85">
                      {service.tagline}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-white/85">
                      {service.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#800000] transition-colors duration-300 group-hover:text-white">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden surface-base py-14 text-center sm:py-16">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#800000]/15 blur-[100px]" />
          <div className="relative mx-auto max-w-3xl px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              Next step
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/60">
              Tell us about your brand or project — we'll recommend the
              right mix of services.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#800000] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000]"
            >
              Get a free quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
