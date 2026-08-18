import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { asset } from "@/assets/placeholder";

const heroPoster = asset("hero-poster.jpg");

/**
 * Prefer same-origin asset if present; otherwise public CDNs known to allow
 * cross-origin playback (Google bucket often returns 403 in browsers).
 */
const HERO_SOURCES = [
  "/videos/hero-bg.mp4",
  "https://cdn.jsdelivr.net/gh/mediaelement/mediaelement-files/big_buck_bunny.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
];

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

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const markReady = () => {
      setVideoReady(true);
      video.muted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise) playPromise.catch(() => {});
    };

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);
    video.addEventListener("playing", () => setVideoReady(true));

    video.load();
    markReady();

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
    };
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
          className="absolute inset-0 h-full w-full object-cover"
        />

        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-40"
          }`}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          {HERO_SOURCES.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>

        {/* Light scrims — keep type readable without hiding the video */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div
          aria-hidden
          className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#800000]/18 blur-[110px]"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#800000]/12 blur-[100px]"
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
