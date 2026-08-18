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

/** Alternating red-on-black shells so sections flow instead of stacking as flat blocks. */
function SectionShell({
  children,
  tone = "a",
}: {
  children: ReactNode;
  tone?: "a" | "b" | "c";
}) {
  const toneClass =
    tone === "a"
      ? "section-flow-a"
      : tone === "b"
        ? "section-flow-b"
        : "section-flow-c";
  return (
    <div className={`relative section-bridge ${toneClass}`}>
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
        {/* Site-wide crimson atmospheric layer */}
        <AmbientGradient className="fixed" intensity={1.15} />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(ellipse 60% 40% at 100% 50%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 55%), radial-gradient(ellipse 50% 35% at 0% 80%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 50%)",
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
