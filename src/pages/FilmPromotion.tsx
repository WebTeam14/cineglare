import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
import { asset } from "@/assets/placeholder";

const filmPromotionImage = asset("fil-promotion-image.jpg");
const filmPromotionCenter = asset("film-promotion-center.jpg");

const FilmPromotion = () => {
  const leftServices = [
    "Strategic Promotion Planning",
    "Digital & Social Media Campaigns",
    "Press & Media Management",
    "Celebrity & Cast Appearances",
    "Trailer & Teaser Launches",
  ];

  const rightServices = [
    "Event & Premiere Management",
    "Content Marketing & Storytelling",
    "Brand Collaborations & Tie-Ins",
    "Outdoor & Print Campaigns",
    "Post-Release Publicity",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden surface-base text-white">
      <Header />
      <ServiceHero
        firstBgImage={filmPromotionImage}
        title="Film Promotion"
        tagline="Promotions that move hearts and fill theatres"
        description="Creative storytelling, digital innovation and event excellence — so your film stands out on screen and beyond."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={filmPromotionCenter}
        imageAlt="Film promotion"
      />
      <InsightsInnovations
        sectionTwoTitle="Insights & Innovations"
        sectionThreeTitle="Partner with us to make your vision real"
      />
      <Footer />
    </div>
  );
};

export default FilmPromotion;
