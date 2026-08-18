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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden">
        <AmbientGradient className="fixed" intensity={0.9} />
        <Hero />
        <Reveal variant="fade" duration={900}>
          <FeatureCards />
        </Reveal>
        <Reveal variant="fade" duration={900}>
          <About />
        </Reveal>
        <Reveal variant="fade" duration={900}>
          <Services />
        </Reveal>
        <Reveal variant="fade" duration={900}>
          <CTA />
        </Reveal>
        <Reveal variant="fade" duration={900}>
          <Impact />
        </Reveal>
        <Reveal variant="fade" duration={900}>
          <ProjectHighlights />
        </Reveal>
        <Reveal variant="fade" duration={900}>
          <Different />
        </Reveal>
        <Reveal variant="fade" duration={900}>
          <InsightsandImpact />
        </Reveal>
        <Reveal variant="fade" duration={900}>
          <Slider />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
