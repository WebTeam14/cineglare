import { Button } from "@/components/ui/button";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { asset } from "@/assets/placeholder";

const insightsMain = asset("insights-main.jpg");
const insightBranding = asset("insight-branding.jpg");
const insightFilms = asset("insight-films.jpg");
const insightDigital = asset("insight-digital.jpg");

const insights = [
  {
    image: insightBranding,
    title: "How we craft Impactful Branding & Creative Strategy",
  },
  {
    image: insightFilms,
    title: "How we elevate films into global entertainment moments.",
  },
  {
    image: insightDigital,
    title: "How our digital marketing turn to global visibility",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-black">
      <div className="container-custom">
        <Reveal as="h2" className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Insights & Impact
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Large Featured Insight */}
          <div className="relative group cursor-pointer rounded-lg overflow-hidden h-[600px] hover-lift media-zoom">
            <img
              src={insightsMain}
              alt="Event celebration with sparklers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
                Transforming Ideas into Memorable Event Experiences
              </h3>
              <Button variant="default" className="bg-crimson hover:bg-crimson/90 text-white">
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Side - Three Insight Cards */}
          <Stagger step={120} className="flex flex-col gap-6">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-lg overflow-hidden h-[192px] hover-lift media-zoom"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent group-hover:from-background/95 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center p-6">
                  <h4 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
                    {insight.title}
                  </h4>
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default Impact;
