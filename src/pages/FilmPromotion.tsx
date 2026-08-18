import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
import filmPromotionImage from "@/assets/fil-promotion-image.jpg";
import filmPromotionCenter from "@/assets/film-promotion-center.jpg";

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
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        firstBgImage={filmPromotionImage}
        title="Film Promotion"
        tagline="Promotions that Move Hearts and Fill Theatres"
        description="Through a mix of creative storytelling, digital innovation and event excellence, we ensure your film stands out - 
        on screen and beyond."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={filmPromotionCenter}
        imageAlt="Digital marketing visualization"
      />

      {/* Insights & Innovations Section */}
      <InsightsInnovations sectionTwoTitle="Insights & Innovations" sectionThreeTitle="Partner With Us to Make Your Vision Real" />

      <Footer />
    </div>
  );
};

export default FilmPromotion;
