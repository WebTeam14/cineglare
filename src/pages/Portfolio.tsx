import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
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

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="overflow-hidden">
        {/* ---------------------- HERO SECTION ---------------------- */}
        <section className="relative flex items-center h-[70vh] md:h-[90vh] overflow-hidden">
          <video
            src={aboutHero}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />

          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right max-w-[90%] md:max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#fff4f4] font-cinematic animate-dynamic-hero">
              Events <span className="text-white"></span>
            </h1>
          </div>
        </section>

        {/* ---------------------- PORTFOLIO VIDEOS SECTION ---------------------- */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Watch Highlights</h2>
            <p className="text-muted-foreground">
              Watch highlights from our events
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoFiles.map((video, index) => {
          // Stock video until real showreels are uploaded to /public/VideoUpload
          const videoPath = portfolioVideo(video);

          return (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden"
              onClick={() => {
                setActiveVideo(videoPath);
                setOpen(true);
              }}
            >
              <div className="relative bg-black h-52 overflow-hidden">
                <video
                  src={videoPath}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onLoadedMetadata={(e) => {
                    // Seek to show a frame instead of black thumbnail
                    const video = e.currentTarget;
                    if (video.duration && video.readyState >= 2) {
                      // Seek to 1 second or 10% of video, whichever is smaller
                      const seekTime = Math.min(1, video.duration * 0.1);
                      video.currentTime = seekTime;
                      video.pause(); // Ensure it doesn't play
                    }
                  }}
                  onCanPlay={(e) => {
                    // Fallback: ensure thumbnail is visible
                    const video = e.currentTarget;
                    if (video.readyState >= 2 && video.currentTime === 0) {
                      const seekTime = Math.min(1, video.duration * 0.1 || 1);
                      video.currentTime = seekTime;
                      video.pause();
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-base truncate">
                  {video.replace(/\.(mp4|MP4)$/i, "").replace(/_/g, " ").replace(/-/g, " ")}
                </h3>
              </CardContent>
            </Card>
          );
        })}
          </div>

          {/* Modal */}
      <Dialog open={open} onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          setActiveVideo(null);
        }
      }}>
        <DialogContent className="max-w-4xl w-[calc(100%-2rem)] p-0 gap-0 overflow-hidden">
          <DialogTitle className="sr-only">Video Player</DialogTitle>
          {activeVideo && (
            <div className="relative w-full bg-black" style={{ aspectRatio: "16/9", minHeight: "400px" }}>
              <video
                key={activeVideo}
                src={activeVideo}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full"
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
