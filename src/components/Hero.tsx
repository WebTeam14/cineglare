import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import heroVideo from "@/assets/videos/HeroVd.mp4";

const HERO_SOURCES = [heroVideo];

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
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden surface-base"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-40"
          }`}
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

        {/* Balanced overlays for centered content */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[var(--cine-base)] to-transparent"
        />
        <div
          aria-hidden
          className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#800000]/12 blur-[110px]"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#800000]/10 blur-[100px]"
        />
      </div>

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-20 text-center md:px-10 lg:px-12">
        <div className="flex max-w-3xl flex-col items-center">
          <div className="mb-5 flex items-center justify-center gap-3" style={step(0)}>
            <span className="h-px w-10 bg-[#ff6b6b]" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff6b6b] sm:text-[11px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              Crafting vision into reality
            </p>
            <span className="h-px w-10 bg-[#ff6b6b]" />
          </div>

          <h1
            className="mb-5 text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)]"
            style={step(1)}
          >
            Experience Events
            <br />
            <span className="text-white">Like Never Before.</span>
          </h1>

          <p
            className="mb-8 max-w-lg text-sm leading-relaxed text-white/85 md:text-[15px] drop-shadow-[0_1px_12px_rgba(0,0,0,0.75)]"
            style={step(2)}
          >
            Creating unforgettable experiences across brands, film, and live events.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4" style={step(3)}>
            <Button
              asChild
              className="h-12 rounded-full bg-[#800000] px-7 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(128,0,0,.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000] sm:h-14 sm:px-9 sm:text-base"
            >
              <Link to="/portfolio" className="inline-flex items-center gap-2.5">
                <Play className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
                View Work
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 900ms var(--ease-cinema) 1100ms",
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
          Scroll
        </span>
        <span className="block h-10 w-px bg-gradient-to-b from-[#800000] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;