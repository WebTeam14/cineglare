import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { asset, portfolioVideo } from "@/assets/placeholder";

const portfolioHero = asset("portfoliohero.png");

const videoFiles = [
  "00 PorscheGolf 2025Day1HighlightReel.mp4",
  "Customer Testimonials.mp4",
  "Day 1 Story.mp4",
  "Day2.mp4",
  "Day3.mp4",
  "Porsche Highlight Video.mp4",
];

const formatTitle = (filename: string) =>
  filename
    .replace(/\.mp4$/i, "")
    .replace(/[_-]+/g, " ")
    .trim();

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden surface-base text-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative isolate min-h-[55svh] overflow-hidden surface-deep sm:min-h-[60svh]">
          <video
            src={portfolioHero}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
          />
          {/* Light scrims — keep type readable without hiding the video (aligned with home Hero) */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,6,.92)_0%,rgba(6,6,6,.55)_45%,rgba(6,6,6,.25)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--cine-base)_0%,rgba(6,6,6,.4)_30%,transparent_55%,rgba(6,6,6,.25)_100%)]" />
          <div
            aria-hidden
            className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#800000]/18 blur-[110px]"
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#800000]/12 blur-[100px]"
          />

          <div className="relative mx-auto flex min-h-[55svh] max-w-7xl items-end px-6 pb-12 pt-28 sm:min-h-[60svh] sm:px-8 md:pb-16 lg:px-12">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-12 bg-[#800000]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                  Our Work
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Portfolio
                <span className="block text-[#800000]">in motion.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                A selection of campaigns, events and productions that turned brand
                visions into memorable experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Showreel grid */}
        <section className="relative overflow-hidden surface-raise py-14 sm:py-16 lg:py-20">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[#800000]/10 blur-[120px]"
          />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#800000]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                  Showreel
                </span>
                <span className="h-px w-10 bg-[#800000]" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Watch <span className="text-[#800000]">Highlights.</span>
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
                    className="group relative overflow-hidden rounded-2xl border border-[#800000]/15 text-left shadow-[0_12px_32px_-18px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-[#800000]/40 hover:shadow-[0_18px_40px_-14px_rgba(128,0,0,0.25)]"
                    style={{
                      background:
                        "linear-gradient(145deg, #ffffff 0%, #fff5f5 55%, #fceaea 100%)",
                    }}
                    onClick={() => {
                      setActiveVideo(videoPath);
                      setOpen(true);
                    }}
                  >
                    <div className="relative h-52 overflow-hidden bg-neutral-900 sm:h-56">
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
                      <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#800000] text-white shadow-[0_12px_35px_rgba(128,0,0,.4)] transition-transform duration-300 group-hover:scale-110">
                          <Play className="ml-0.5 h-6 w-6 fill-current" />
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="truncate text-base font-semibold tracking-tight text-neutral-900">
                        {title}
                      </h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#800000]/70">
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
                <video
                  key={activeVideo}
                  src={activeVideo}
                  controls
                  autoPlay
                  className="aspect-video w-full bg-black"
                />
              )}
            </DialogContent>
          </Dialog>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
