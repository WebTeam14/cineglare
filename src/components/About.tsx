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

const stats = [
  { value: "17+", label: "Years of experience" },
  { value: "500+", label: "Projects delivered" },
  { value: "50+", label: "Brand partners" },
];

const About = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#800000]/10 blur-[100px]"
      />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left" duration={800} className="relative">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.75rem] border border-[#800000]/20"
              />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_30px_60px_-28px_rgba(0,0,0,0.7)]">
                <img
                  src={aboutUsImage}
                  alt="Cineglare creative team"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6] lg:aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-5 left-6 right-6 sm:left-auto sm:right-[-1rem] sm:bottom-8 sm:w-44">
                <div
                  className="rounded-2xl border border-[#800000]/15 px-5 py-4 text-center shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)]"
                  style={{
                    background:
                      "linear-gradient(145deg, #fff8f8 0%, #f7f0f0 50%, #f3e8e8 100%)",
                  }}
                >
                  <p className="text-4xl font-black tracking-tight text-[#800000]">17+</p>
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
              className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 rounded-xl border border-[#800000]/12 px-3.5 py-2.5 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#800000]/30 hover:shadow-[0_12px_28px_-14px_rgba(128,0,0,0.2)]"
                  style={{
                    background:
                      "linear-gradient(145deg, #fff8f8 0%, #f7f0f0 50%, #f3e8e8 100%)",
                  }}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#800000]/12">
                    <Check className="h-3.5 w-3.5 text-[#800000]" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-neutral-800">{highlight}</span>
                </div>
              ))}
            </Stagger>

            <div className="mb-10 grid grid-cols-3 gap-4 border-y border-white/10 py-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/50 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#800000] px-7 font-semibold text-white shadow-[0_12px_32px_rgba(128,0,0,.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000]"
            >
              <Link to="/aboutus" className="inline-flex items-center gap-2">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
