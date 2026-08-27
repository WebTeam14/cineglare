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
      <section className="relative isolate flex min-h-[42vh] items-end overflow-hidden bg-black md:min-h-[48svh]">
        <img
          src={firstBgImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--cine-base,#060606)] via-black/15 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 pt-24 sm:px-8 md:pb-12 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-12 bg-[#800000]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                Our services
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-4 inline-flex rounded-full border border-[#800000]/40 bg-[#800000]/15 px-5 py-2 text-sm font-semibold text-white sm:text-base">
              {tagline}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="relative overflow-hidden surface-raise py-10 sm:py-12 lg:py-14">
        <div
          aria-hidden
          className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#800000]/10 blur-[100px]"
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-6 max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-12 bg-[#800000]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                What's included
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Capabilities that
              <span className="text-[#800000]"> deliver.</span>
            </h2>
          </div>

          {/* Two-column: services + image */}
          <div className="grid items-start gap-6 lg:grid-cols-[1fr_minmax(260px,340px)] lg:gap-10">
            {/* Left column: cards + CTAs aligned together */}
            <div className="flex flex-col">
              <div className="grid gap-2.5 sm:grid-cols-2">
                {allServices.map((item) => (
                  <div
                    key={item}
                    className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white px-4 py-3.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#800000]/40 hover:shadow-[0_12px_28px_-10px_rgba(128,0,0,0.25)]"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#800000] text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <p className="text-sm font-medium leading-snug text-neutral-900 sm:text-[15px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs — aligned with the cards column */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#800000] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000]"
                >
                  Start a project
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-100"
                >
                  All services
                </Link>
              </div>
            </div>

            {/* Featured image — sticky on desktop, full-width on mobile */}
            <div className="order-first lg:order-none lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)]">
                <img
                  src={centerImage}
                  alt={imageAlt}
                  className="aspect-[4/5] w-full object-cover sm:aspect-[16/10] lg:aspect-[4/5]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHero;
