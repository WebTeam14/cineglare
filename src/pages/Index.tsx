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

/**
 * About-Us style section shell:
 * solid premium surfaces + one soft maroon corner orb (not a full-page wash).
 */
function Section({
  children,
  tone = "black",
  orb = "none",
}: {
  children: ReactNode;
  tone?: "black" | "elevated" | "deep";
  orb?: "none" | "top" | "left" | "right";
}) {
  const bg =
    tone === "elevated"
      ? "bg-[#070707]"
      : tone === "deep"
        ? "bg-[#080808]"
        : "bg-black";

  const orbClass =
    orb === "top"
      ? "absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#800000]/15 blur-[120px]"
      : orb === "left"
        ? "absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#800000]/18 blur-[120px]"
        : orb === "right"
          ? "absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#800000]/14 blur-[110px]"
          : "";

  return (
    <section className={`relative overflow-hidden ${bg}`}>
      {orb !== "none" && <div aria-hidden className={orbClass} />}
      <Reveal variant="fade" duration={800}>
        {children}
      </Reveal>
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
