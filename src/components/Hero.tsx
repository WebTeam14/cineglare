import { useEffect, useState } from "react";

import { asset } from "@/assets/placeholder";

const heroPoster = asset("hero-poster.jpg");

const Hero = () => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const step = (index: number) => ({
    opacity: entered ? 1 : 0,
    transform: entered ? "none" : "translate3d(0, 28px, 0)",
    transition: `opacity 900ms var(--ease-cinema) ${160 + index * 130}ms, transform 900ms var(--ease-cinema) ${160 + index * 130}ms`,
    willChange: "opacity, transform",
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Cinematic background layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroPoster}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Layered scrims keep the type legible and add depth */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-10 text-left md:px-16 lg:px-24">
        <p
          className="mb-6 inline-block rounded-full border border-white/15 bg-black/60 px-6 py-3 text-sm tracking-[0.18em] uppercase text-white backdrop-blur-sm md:text-base"
          style={step(0)}
        >
          Crafting vision into reality
        </p>
        <h1
          className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          style={step(1)}
        >
          Experience Events
          <br />
          Like Never Before.
        </h1>
        <p
          className="mb-8 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base"
          style={step(2)}
        >
          We are a team of creative thinkers, strategists, and innovators —
          delivering impactful and unforgettable experiences.
        </p>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 900ms var(--ease-cinema) 900ms",
        }}
      >
        <span className="block h-12 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
