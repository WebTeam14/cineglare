import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/HomeVid-2.mp4";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>{/* Background Video with Overlay */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <video
    src={heroBackground}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
  {/* Optional dark overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/40"></div>
</div>

      {/* Content */}
      {/* <div className="container-custom relative z-10 py-10">
        <p className="text-primary text-sm md:text-base font-medium mb-4 tracking-wider uppercase bg-black text-white border rounded-2xl p-2">
          Crafting vision into reality
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-6 leading-tight">
          Experience Events<br />Like Never Before.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          We are a team of creative thinkers, strategists, and innovators — delivering impactful and unforgettable experiences.
        </p>
        <Button variant="default" size="lg" className="px-8">
          Our Services
        </Button>
      </div> */}

      <div className="relative z-10 py-10 px-6 md:px-16 lg:px-24 text-left">
  <p className="text-primary text-md md:text-base font-large mb-4 tracking-wider bg-black text-white rounded-full p-4 inline-block">
    Crafting vision into reality
  </p>
  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
    Experience Events<br />Like Never Before.
  </h1>
  <p className="text-muted-foreground text-sm md:text-md max-w-2xl mb-8 text-white">
    We are a team of creative thinkers, strategists, and innovators — delivering impactful and unforgettable experiences.
  </p>
  {/* <Button variant="default" size="lg" className="px-8">
    Our Services
  </Button> */}
</div>
    </section>
  );
};

export default Hero;
