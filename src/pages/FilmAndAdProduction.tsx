import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
import { asset } from "@/assets/placeholder";

const filmAndAdProductionImage = asset("film-and-ad-production-image.jpg");
const filmAdProductionCenter = asset("film-and-ad-production-center.jpg");

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
    "Behind-the-Scenes & Promo Shoots",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden surface-base text-white">
      <Header />
      <ServiceHero
        firstBgImage={filmAndAdProductionImage}
        title="Film & Ad Production"
        tagline="Turning concepts into cinematic reality"
        description="From concept to screen — cinematic excellence with marketing insight that inspires, influences and builds brand emotion."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={filmAdProductionCenter}
        imageAlt="Film and ad production"
      />
      <InsightsInnovations
        sectionTwoTitle="Insights & Innovations"
        sectionThreeTitle="Partner with us to make your vision real"
      />
      <Footer />
    </div>
  );
};

export default FilmAndAdProduction;
