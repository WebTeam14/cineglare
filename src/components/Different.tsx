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
        <div className="absolute inset-0 bg-black/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/45" />
        <div
          aria-hidden
          className="absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#800000]/18 blur-[110px]"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[#800000]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                Our edge
              </p>
            </div>
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              What makes us different
            </h2>

            <ul className="space-y-3.5">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3.5 rounded-2xl border border-[#800000]/15 px-4 py-3.5 shadow-[0_10px_28px_-18px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#800000]/30"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #fff5f5 55%, #fceaea 100%)",
                  }}
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#800000]">
                    <Check className="h-4 w-4 text-white" strokeWidth={2.75} />
                  </span>
                  <p className="text-sm font-semibold leading-relaxed text-neutral-900 sm:text-[15px]">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:justify-center lg:justify-end">
            <div
              className="overflow-hidden rounded-[1.5rem] border border-[#800000]/15 shadow-[0_20px_48px_-24px_rgba(0,0,0,0.55)]"
              style={{
                background:
                  "linear-gradient(145deg, #ffffff 0%, #fff5f5 50%, #fceaea 100%)",
              }}
            >
              <StatsCounter end={132} label="Projects Completed" dark={false} />
            </div>
            <div
              className="overflow-hidden rounded-[1.5rem] border border-[#800000]/15 shadow-[0_20px_48px_-24px_rgba(0,0,0,0.55)]"
              style={{
                background:
                  "linear-gradient(145deg, #ffffff 0%, #fff5f5 50%, #fceaea 100%)",
              }}
            >
              <StatsCounter end={84} label="Happy Clients" dark={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Different;
