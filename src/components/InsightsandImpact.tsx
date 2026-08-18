import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
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
    <section id="impact" className="py-20 bg-transparent">
      <div className="container-custom">
        <Reveal
          as="h2"
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          Insights & Impact
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 lg:items-stretch">
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl min-h-[420px] lg:min-h-0 lg:h-full">
            <img
              src={insightsMain}
              alt="Event celebration with sparklers"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="mb-5 max-w-md text-2xl font-bold leading-tight text-white md:text-3xl">
                Transforming Ideas into Memorable Event Experiences
              </h3>
              <Button
                variant="default"
                className="bg-crimson text-white hover:bg-crimson/90"
              >
                Learn more
              </Button>
            </div>
          </div>

          <div className="flex min-h-[420px] flex-col gap-5 lg:min-h-0 lg:h-full lg:gap-6">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="relative min-h-[120px] flex-1 overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
                <div className="absolute inset-0 flex items-center p-5 md:p-6">
                  <h4 className="max-w-[90%] text-base font-semibold leading-snug text-white md:text-lg">
                    {insight.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
