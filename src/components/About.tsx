import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { asset } from "@/assets/placeholder";

const aboutUsImage = asset("Cineglare Trans Logo.jpg");

const highlights = [
  "Star Influence",
  "Global Reach",
  "Creative Strategy",
  "Cinematic Production",
  "Impactful Promotions",
  "Flawless Execution",
  "Custom Solutions",
  "Innovation First",
];

const About = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#800000]/10 blur-[100px]"
      />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-14 xl:grid-cols-[minmax(0,380px)_1fr] xl:gap-16">
          <Reveal variant="left" duration={800} className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px] lg:mx-0 lg:max-w-full">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-2.5 rounded-[1.5rem] border border-[#800000]/20"
              />
              <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.65)]">
                <img
                  src={aboutUsImage}
                  alt="Cineglare creative team"
                  className="aspect-[4/5] h-auto max-h-[420px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-3 left-3 right-3 sm:left-auto sm:right-[-0.5rem] sm:bottom-5 sm:w-32">
                <div
                  className="rounded-2xl border border-[#800000]/15 px-5 py-4 text-center shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)]"
                  style={{
                    background:
                      "linear-gradient(145deg, #fff8f8 0%, #f7f0f0 50%, #f3e8e8 100%)",
                  }}
                >
                  <p className="text-2xl font-black tracking-tight text-[#800000] sm:text-3xl">17+</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-600">
                    Years of excellence
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" duration={800}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[#800000]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                About Cineglare
              </p>
            </div>

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Crafting vision
              <br />
              into reality
            </h2>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/65">
              Cineglare is a creative powerhouse driving brands into the spotlight
              through star influence, cinematic storytelling, and unforgettable
              experiential events. With global reach and industry-leading expertise,
              we turn brand visions into iconic moments — where creativity meets
              execution and excellence takes center stage.
            </p>

            <Stagger
              step={60}
              className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 rounded-xl border border-[#800000]/20 px-3.5 py-2.5 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#800000]/40 hover:shadow-[0_12px_28px_-14px_rgba(128,0,0,0.2)]"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #fff5f5 55%, #fceaea 100%)",
                  }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#800000]">
                    <Check className="h-4 w-4 text-white" strokeWidth={2.75} />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-neutral-900">
                    {highlight}
                  </span>
                </div>
              ))}
            </Stagger>

            <Button
              asChild
              className="mt-2 h-14 rounded-full bg-[#800000] px-9 text-base font-semibold text-white shadow-[0_14px_36px_rgba(128,0,0,.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000] hover:shadow-[0_18px_42px_rgba(128,0,0,.4)] sm:h-16 sm:px-10 sm:text-lg"
            >
              <Link to="/aboutus" className="inline-flex items-center gap-2.5">
                Learn more
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
