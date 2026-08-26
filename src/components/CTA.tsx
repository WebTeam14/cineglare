import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { Link } from "@tanstack/react-router";
import ctaBackground from "@/assets/images/cta-bg.jpg";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBackground}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#800000]/25 blur-[100px]"
        />
      </div>

      <Reveal className="container-custom relative z-10" duration={900}>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#800000]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              Let’s collaborate
            </p>
            <span className="h-px w-10 bg-[#800000]" />
          </div>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Partner With Us to Make
            <br className="hidden sm:block" /> Your Vision Real
          </h2>

          <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            From concept to curtain call — star influence, cinematic storytelling,
            and flawless execution that turns bold ideas into iconic moments.
          </p>

          <Button
            asChild
            className="h-14 rounded-full bg-[#800000] px-9 text-base font-semibold text-white shadow-[0_14px_36px_rgba(128,0,0,.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000] hover:shadow-[0_18px_42px_rgba(128,0,0,.45)] sm:h-16 sm:px-10 sm:text-lg"
          >
            <Link to="/contact" className="inline-flex items-center gap-2.5">
              Let’s Talk
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
};

export default CTA;
