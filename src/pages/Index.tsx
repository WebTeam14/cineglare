import type { ReactNode } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import About from "@/components/About";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import ProjectHighlights from "@/components/ProjectHighlights";
import InsightsandImpact from "@/components/InsightsandImpact";
import Different from "@/components/Different";
import Slider from "@/components/Slider";
import { Reveal } from "@/components/motion/Reveal";

function Section({
  children,
  tone = "black",
  orb = "none",
}: {
  children: ReactNode;
  tone?: "black" | "elevated" | "deep";
  orb?: "none" | "top" | "left" | "right";
}) {
  const surface =
    tone === "elevated"
      ? "bg-[#070707] border-y border-white/[0.04]"
      : tone === "deep"
        ? "bg-[#050505] border-t border-white/[0.035]"
        : "bg-black";

  const sheen =
    tone === "elevated" || tone === "deep"
      ? "pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.035] to-transparent"
      : "";

  const orbClass =
    orb === "top"
      ? "absolute left-1/2 top-0 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[#800000]/12 blur-[100px]"
      : orb === "left"
        ? "absolute -left-24 top-16 h-[20rem] w-[20rem] rounded-full bg-[#800000]/10 blur-[100px]"
        : orb === "right"
          ? "absolute -right-20 top-8 h-[20rem] w-[20rem] rounded-full bg-[#800000]/10 blur-[100px]"
          : "";

  return (
    <section className={`relative overflow-hidden ${surface}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {sheen && <div aria-hidden className={sheen} />}
      {orb !== "none" && <div aria-hidden className={orbClass} />}
      <div className="relative z-[1]">
        <Reveal variant="fade" duration={800}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />
      <main>
        <Hero />

        <Section tone="elevated" orb="top">
          <FeatureCards />
        </Section>

        <Section tone="black" orb="right">
          <About />
        </Section>

        <Section tone="deep" orb="left">
          <Services />
        </Section>

        <Section tone="black">
          <CTA />
        </Section>

        <Section tone="elevated" orb="top">
          <Impact />
        </Section>

        <Section tone="black" orb="right">
          <ProjectHighlights />
        </Section>

        <Different />

        <Section tone="deep" orb="left">
          <InsightsandImpact />
        </Section>

        <Section tone="elevated" orb="top">
          <Slider />
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
