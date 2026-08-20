import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { asset, portfolioVideo } from "@/assets/placeholder";

const aboutHero = asset("Portfolio.mp4");
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

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />

      <main className="overflow-hidden">
        {/* ---------------------- HERO SECTION ---------------------- */}
        <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden bg-black md:min-h-[88svh]">
          <video
            src={aboutHero}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />

          {/* Cinematic scrims — match home / About Us */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.92)_0%,rgba(0,0,0,.55)_48%,rgba(0,0,0,.2)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.9)_0%,transparent_45%,rgba(0,0,0,.25)_100%)]" />
          <div
            aria-hidden
            className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#800000]/25 blur-[110px]"
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

        {/* ---------------------- PORTFOLIO VIDEOS SECTION ---------------------- */}
        <section className="relative overflow-hidden surface-raise py-16 sm:py-20 lg:py-28">
          {/* Soft grain + ambient orb (home-page Section pattern) */}
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

            {/* Video Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videoFiles.map((video, index) => {
                const videoPath = portfolioVideo(video);
                const title = formatTitle(video);

                return (
                  <button
                    key={index}
                    type="button"
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-left backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#800000]/60 hover:bg-[#800000]/10"
                    onClick={() => {
                      setActiveVideo(videoPath);
                      setOpen(true);
                    }}
                  >
                    <div className="relative h-52 overflow-hidden bg-black sm:h-56">
                      <video
                        src={videoPath}
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onLoadedMetadata={(e) => {
                          const el = e.currentTarget;
                          if (el.duration && el.readyState >= 2) {
                            const seekTime = Math.min(1, el.duration * 0.1);
                            el.currentTime = seekTime;
                            el.pause();
                          }
                        }}
                        onCanPlay={(e) => {
                          const el = e.currentTarget;
                          if (el.readyState >= 2 && el.currentTime === 0) {
                            const seekTime = Math.min(
                              1,
                              el.duration * 0.1 || 1,
                            );
                            el.currentTime = seekTime;
                            el.pause();
                          }
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#800000] text-white shadow-[0_12px_35px_rgba(128,0,0,.4)] transition-transform duration-300 group-hover:scale-110">
                          <Play className="ml-0.5 h-6 w-6 fill-current" />
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                    <div className="p-5">
                      <h3 className="truncate text-base font-semibold tracking-tight text-white">
                        {title}
                      </h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-white/40">
                        Event highlight
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modal */}
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
