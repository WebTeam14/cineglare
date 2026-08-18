import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";

import { asset, logoAsset } from "@/assets/placeholder";

const filAndAdproductionImage = asset("film-and-ad-production-image.jpg");
const filmAdProductionCenter = asset("film-and-ad-production-center.jpg");
// import digitalMarketingHero from "@/assets/digital-marketing-hero.jpg";
const FilmAndAdProduction = () => {
  const leftServices = [
    "Concept & Script Development",
    "Casting & Talent Management",
    "Location Scouting & Set Design",
    "Pre-Production Planning",
    "Filming & Direction",
  ];

  const rightServices = [
    "Post-Production Excellence",
    "Music, Voiceover & Sound Design",
    "Brand Films & TV Commercials",
    "Digital & Social Media Ads",
    "Behind-the-scenes & Promo Shoots",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        firstBgImage={filAndAdproductionImage}
        title="Film and Ad Production"
        tagline="Turning Concepts into Cinematic Reality"
        description="From concepts to screen, we handle every stage - combining cinematic excellence with marketing insight, that inspire, 
        influence and build brand emotion."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={filmAdProductionCenter}
        imageAlt="Digital marketing visualization"
      />

      {/* Insights & Innovations Section */}
      <InsightsInnovations sectionTwoTitle="Insights & Innovations" sectionThreeTitle="Partner With Us to Make Your Vision Real" />

      <Footer />
    </div>
  );
};

export default FilmAndAdProduction;
