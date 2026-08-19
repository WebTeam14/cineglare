import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { asset } from "@/assets/placeholder";

const insightsMain = asset("insights-main.jpg");
const insightBranding = asset("insight-branding.jpg");
const insightFilms = asset("insight-films.jpg");
const insightDigital = asset("insight-digital.jpg");

const insights = [
  {
    image: insightBranding,
    title: "How we craft Impactful Branding & Creative Strategy",
  },
  {
    image: insightFilms,
    title: "How we elevate films into global entertainment moments",
  },
  {
    image: insightDigital,
    title: "How our digital marketing turns into global visibility",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-[#800000]/10 blur-[100px]"
      />

      <div className="container-custom relative">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-[#800000]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              From the studio
            </p>
          </div>
          <Reveal
            as="h2"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Insights & Impact
          </Reveal>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            Stories, strategy, and craft behind the brands and films we elevate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          <div className="group relative min-h-[380px] cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.7)] lg:min-h-[480px]">
            <img
              src={insightsMain}
              alt="Transforming ideas into memorable event experiences"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="mb-5 max-w-md text-2xl font-bold leading-tight text-white md:text-3xl">
                Transforming Ideas into Memorable Event Experiences
              </h3>
              <Button
                asChild
                className="h-12 rounded-full bg-[#800000] px-6 font-semibold text-white shadow-[0_10px_28px_rgba(128,0,0,.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000]"
              >
                <a href="#contact" className="inline-flex items-center gap-2">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex min-h-[380px] flex-col gap-5 lg:min-h-0 lg:h-full lg:gap-5">
            {insights.map((insight) => (
              <div
                key={insight.title}
                className="group relative min-h-[110px] flex-1 cursor-pointer overflow-hidden rounded-[1.25rem] border border-white/10"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/25" />
                <div className="absolute inset-0 flex items-center justify-between gap-4 p-5 md:p-6">
                  <h4 className="max-w-[85%] text-base font-semibold leading-snug text-white md:text-lg">
                    {insight.title}
                  </h4>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
