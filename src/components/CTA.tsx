import { Button } from "@/components/ui/button";
import ctaBackground from "@/assets/cta-bg.jpg";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ctaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 bg-none pt-8 pb-8 rounded-full">
          Partner With Us to Make Your Vision Real
        </h2>
        {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Let's create something extraordinary together. From concept to execution, we bring your boldest ideas to life.
        </p> */}
        <Button variant="default" size="lg" className="px-8">
          Let's Talk
        </Button>
      </div>
    </section>
  );
};

export default CTA;
