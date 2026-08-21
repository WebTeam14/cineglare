import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ServiceHeroProps {
  firstBgImage: string;
  title: string;
  tagline: string;
  description: string;
  leftServices: string[];
  rightServices: string[];
  centerImage: string;
  imageAlt: string;
}

const ServiceHero = ({
  firstBgImage,
  title,
  tagline,
  description,
  leftServices,
  rightServices,
  centerImage,
  imageAlt,
}: ServiceHeroProps) => {
  const allServices = [...leftServices, ...rightServices];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[55vh] items-end overflow-hidden bg-black md:min-h-[62svh]">
        <img
          src={firstBgImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--cine-base,#060606)] via-black/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-28 sm:px-8 md:pb-16 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[#800000]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                Our services
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 inline-flex rounded-full border border-[#800000]/40 bg-[#800000]/15 px-5 py-2 text-sm font-semibold text-white sm:text-base">
              {tagline}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="relative overflow-hidden surface-raise py-14 sm:py-16 lg:py-20">
        <div
          aria-hidden
          className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#800000]/10 blur-[100px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#800000]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                  What's included
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Capabilities that
                <span className="text-[#800000]"> deliver.</span>
              </h2>
            </div>
            <div className="hidden justify-end lg:flex">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,.4)]">
                <img
                  src={centerImage}
                  alt={imageAlt}
                  className="h-40 w-56 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((item) => (
              <div
                key={item}
                className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-all duration-300 hover:border-[#800000]/50 hover:bg-[#800000]/15"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#800000]/20 text-[#800000] transition-colors group-hover:bg-[#800000] group-hover:text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <p className="text-sm font-medium leading-snug text-white/80 group-hover:text-white sm:text-[15px]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#800000] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000]"
            >
              Start a project
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHero;
