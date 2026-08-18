import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/assets/placeholder";

const heroPoster = asset("hero-poster.jpg");
/** Cinematic stock trailer — publicly available HD sample (W3C / Blender Sintel) */
const HERO_VIDEO = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

const Hero = () => {
  const [entered, setEntered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      video.pause();
      return;
    }

    const tryPlay = () => {
      video.muted = true;
      const p = video.play();
      if (p) p.catch(() => {});
    };

    video.addEventListener("canplay", tryPlay);
    tryPlay();
    return () => video.removeEventListener("canplay", tryPlay);
  }, []);

  const step = (index: number) => ({
    opacity: entered ? 1 : 0,
    transform: entered ? "none" : "translate3d(0, 28px, 0)",
    transition: `opacity 900ms var(--ease-cinema) ${180 + index * 120}ms, transform 900ms var(--ease-cinema) ${180 + index * 120}ms`,
    willChange: "opacity, transform" as const,
  });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroPoster}
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
        />
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src={HERO_VIDEO}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div
          aria-hidden
          className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#800000]/25 blur-[110px]"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#800000]/15 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pb-24 pt-32 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3" style={step(0)}>
            <span className="h-px w-10 bg-[#800000]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#800000] sm:text-xs">
              Crafting vision into reality
            </p>
          </div>

          <h1
            className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={step(1)}
          >
            Experience Events
            <br />
            <span className="text-white/90">Like Never Before.</span>
          </h1>

          <p
            className="mb-10 max-w-xl text-sm leading-relaxed text-white/70 md:text-base"
            style={step(2)}
          >
            We are a team of creative thinkers, strategists, and innovators —
            delivering impactful and unforgettable experiences across brands,
            film, and live events.
          </p>

          <div className="flex flex-wrap items-center gap-4" style={step(3)}>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#800000] px-7 font-semibold text-white shadow-[0_12px_35px_rgba(128,0,0,.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000]"
            >
              <a href="#contact" className="inline-flex items-center gap-2">
                Free Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 bg-white/5 px-7 font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              <a href="#portfolio" className="inline-flex items-center gap-2">
                <Play className="h-4 w-4 fill-current" />
                View Work
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 900ms var(--ease-cinema) 1100ms",
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
          Scroll
        </span>
        <span className="block h-10 w-px bg-gradient-to-b from-[#800000] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
