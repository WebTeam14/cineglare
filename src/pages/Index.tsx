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
import { AmbientGradient, Reveal } from "@/components/motion/Reveal";

const FLOW: Record<"a" | "b" | "c", string> = {
  a: [
    "radial-gradient(ellipse 90% 70% at 15% 20%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 55%)",
    "radial-gradient(ellipse 70% 50% at 90% 80%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 50%)",
    "linear-gradient(180deg, color-mix(in oklab, var(--primary) 6%, transparent), transparent 28%, transparent 72%, color-mix(in oklab, var(--primary) 5%, transparent))",
  ].join(","),
  b: [
    "radial-gradient(ellipse 80% 60% at 85% 15%, color-mix(in oklab, var(--primary) 20%, transparent), transparent 55%)",
    "radial-gradient(ellipse 65% 55% at 10% 90%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 50%)",
    "linear-gradient(180deg, color-mix(in oklab, var(--primary) 7%, transparent), transparent 25%, transparent 75%, color-mix(in oklab, var(--primary) 8%, transparent))",
  ].join(","),
  c: [
    "radial-gradient(ellipse 70% 55% at 50% 0%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 50%)",
    "radial-gradient(ellipse 90% 60% at 50% 100%, color-mix(in oklab, var(--primary) 13%, transparent), transparent 55%)",
    "linear-gradient(180deg, transparent, color-mix(in oklab, var(--primary) 5%, transparent) 40%, transparent)",
  ].join(","),
};

function SectionShell({
  children,
  tone = "a",
}: {
  children: ReactNode;
  tone?: "a" | "b" | "c";
}) {
  return (
    <div className="relative" style={{ background: FLOW[tone] }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[12%] top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 50%, transparent), transparent)",
        }}
      />
      <Reveal variant="fade" duration={900}>
        {children}
      </Reveal>
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="relative overflow-hidden">
        <AmbientGradient className="fixed" intensity={1.2} />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background: [
              "radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)",
              "radial-gradient(ellipse 60% 40% at 100% 50%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 55%)",
              "radial-gradient(ellipse 50% 35% at 0% 80%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 50%)",
            ].join(","),
          }}
        />

        <Hero />

        <SectionShell tone="a">
          <FeatureCards />
        </SectionShell>
        <SectionShell tone="b">
          <About />
        </SectionShell>
        <SectionShell tone="c">
          <Services />
        </SectionShell>
        <SectionShell tone="a">
          <CTA />
        </SectionShell>
        <SectionShell tone="b">
          <Impact />
        </SectionShell>
        <SectionShell tone="c">
          <ProjectHighlights />
        </SectionShell>
        <SectionShell tone="a">
          <Different />
        </SectionShell>
        <SectionShell tone="b">
          <InsightsandImpact />
        </SectionShell>
        <SectionShell tone="c">
          <Slider />
        </SectionShell>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
