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

/** Thin crimson rule — separates sections without flooding the page with color. */
function SectionDivider() {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-6" aria-hidden>
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, color-mix(in oklab, var(--primary) 45%, transparent) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="relative overflow-hidden">
        {/* Soft top accent only — does not wash the whole page */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[min(90vw,56rem)] -translate-x-1/2 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
          }}
        />

        <Hero />

        <Reveal variant="fade" duration={800}>
          <FeatureCards />
        </Reveal>

        <SectionDivider />

        <Reveal variant="fade" duration={800}>
          <About />
        </Reveal>

        <SectionDivider />

        <Reveal variant="fade" duration={800}>
          <Services />
        </Reveal>

        <SectionDivider />

        <Reveal variant="fade" duration={800}>
          <CTA />
        </Reveal>

        <SectionDivider />

        <Reveal variant="fade" duration={800}>
          <Impact />
        </Reveal>

        <SectionDivider />

        <Reveal variant="fade" duration={800}>
          <ProjectHighlights />
        </Reveal>

        <SectionDivider />

        <Reveal variant="fade" duration={800}>
          <Different />
        </Reveal>

        <SectionDivider />

        <Reveal variant="fade" duration={800}>
          <InsightsandImpact />
        </Reveal>

        <SectionDivider />

        <Reveal variant="fade" duration={800}>
          <Slider />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
