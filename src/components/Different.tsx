import { Check } from "lucide-react";
import StatsCounter from "./StatsCounter";
import { asset } from "@/assets/placeholder";

const differentiatorsBg = asset("differentiators-bg.jpg");

const points = [
  "Fostered high-impact celebrity collaborations across industries",
  "Managed world-class events with flawless execution",
  "Created storytelling that drives real audience engagement",
  "Built international partnerships with measurable business growth",
];

const Different = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0">
        <img
          src={differentiatorsBg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/50" />
        <div
          aria-hidden
          className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#800000]/20 blur-[100px]"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#800000]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                Our edge
              </p>
            </div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              What makes us different
            </h2>

            <ul className="space-y-4">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-colors duration-300 hover:border-[#800000]/35 hover:bg-[#800000]/10"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#800000]">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-white/90 sm:text-base">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:justify-center lg:justify-end">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/60 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)] backdrop-blur-sm">
              <StatsCounter end={132} label="Projects Completed" />
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/60 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)] backdrop-blur-sm">
              <StatsCounter end={84} label="Happy Clients" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Different;
