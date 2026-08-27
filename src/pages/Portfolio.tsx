import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import portfolioHeroImage from "@/assets/images/Portfolio hero.avif";
import portfolioHeroVideo from "@/assets/videos/HeroVd.mp4";

/** Portfolio highlight reels from src/assets/Portfolio (Vite URL imports). */
const portfolioVideoModules = import.meta.glob("@/assets/Portfolio/*.{mp4,MP4}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function resolvePortfolioVideo(filename: string): string {
  const match = Object.entries(portfolioVideoModules).find(([path]) =>
    path.endsWith(`/${filename}`) || path.endsWith(`\\${filename}`),
  );
  return match?.[1] ?? "";
}

const videoFiles = [
  "00 PorscheGolf_2025Day1HighlightReel.MP4",
  "Customer Testimonials.MP4",
  "Day 1 Story.MP4",
  "Day 2 HL.mp4",
  "Day2 Match HL Reel.mp4",
  "Glauka.mp4",
  "Golf Day - 2 Reel.mp4",
  "HP Elevate - 2025.mp4",
  "Match Day 3.mp4",
  "Match Day 4 HL.mp4",
  "Mayur patil Reel.mp4",
  "Porsche - Golf Day 2 Story.MP4",
  "Porsche - Horizontal.mp4",
  "Shankar Mahadevan.mp4",
  "WESTSIDE.mp4",
];

function formatTitle(filename: string) {
  return filename
    .replace(/\.(mp4|MP4)$/i, "")
    .replace(/_/g, " ")
    .replace(/-/g, " ");
}

/** Load video src only when card enters viewport (avoids 15 parallel downloads). */
function PortfolioCard({
  videoPath,
  title,
  onOpen,
}: {
  videoPath: string;
  title: string;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLButtonElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;

    const seekPoster = () => {
      if (video.duration && Number.isFinite(video.duration)) {
        video.currentTime = Math.min(1, video.duration * 0.1);
        video.pause();
      }
    };

    video.addEventListener("loadeddata", seekPoster);
    return () => video.removeEventListener("loadeddata", seekPoster);
  }, [shouldLoad]);

  return (
    <button
      ref={cardRef}
      type="button"
      className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] text-left shadow-[0_16px_40px_-20px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#800000]/50 hover:shadow-[0_22px_48px_-16px_rgba(128,0,0,0.35)]"
      onClick={onOpen}
    >
      {shouldLoad && videoPath ? (
        <video
          ref={videoRef}
          src={videoPath}
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#800000] text-white shadow-[0_12px_32px_rgba(128,0,0,.45)] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
          <Play className="ml-0.5 h-5 w-5 fill-current sm:h-6 sm:w-6" />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent px-4 pb-4 pt-14">
        <h3 className="truncate text-sm font-semibold tracking-tight text-white sm:text-base">
          {title}
        </h3>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#800000]">
          Event highlight
        </p>
      </div>
    </button>
  );
}

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />

      <main className="overflow-hidden">
        <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden bg-black md:min-h-[88svh]">
          {/* Fallback poster while video loads */}
          <img
            src={portfolioHeroImage}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <video
            src={portfolioHeroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={portfolioHeroImage}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          <div
            aria-hidden
            className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#800000]/18 blur-[110px]"
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#800000]/12 blur-[100px]"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--cine-base,#060606)] to-transparent"
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-28 sm:px-8 md:pb-20 lg:px-12">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#800000]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                  Selected Work
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Events
                <span className="block text-[#800000]">worth watching.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                Highlights from brand films, live productions and unforgettable
                experiences we have brought to life.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden surface-raise py-16 sm:py-20 lg:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[#800000]/10 blur-[120px]"
          />

          <div className="relative z-[1] mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#800000]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                  Showreel
                </span>
                <span className="h-px w-10 bg-[#800000]" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Watch
                <span className="text-[#800000]"> Highlights.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
                Moments from our events, campaigns and productions — crafted to
                leave a lasting impression.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videoFiles.map((video, index) => {
                const videoPath = resolvePortfolioVideo(video);
                const title = formatTitle(video);

                return (
                  <PortfolioCard
                    key={index}
                    videoPath={videoPath}
                    title={title}
                    onOpen={() => {
                      if (!videoPath) return;
                      setActiveVideo(videoPath);
                      setOpen(true);
                    }}
                  />
                );
              })}
            </div>
          </div>

          <Dialog
            open={open}
            onOpenChange={(isOpen) => {
              setOpen(isOpen);
              if (!isOpen) setActiveVideo(null);
            }}
          >
            <DialogContent className="max-w-4xl w-[calc(100%-2rem)] gap-0 overflow-hidden border-white/10 bg-black p-0">
              <DialogTitle className="sr-only">Video Player</DialogTitle>
              {activeVideo && (
                <div
                  className="relative w-full bg-black"
                  style={{ aspectRatio: "16/9", minHeight: "400px" }}
                >
                  <video
                    key={activeVideo}
                    src={activeVideo}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
        </section>
      </main>

      <Footer />
    </div>
  );
}
