import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
import filmPromotionImage from "@/assets/images/MoviePromotionHero.avif";
import filmPromotionCenter from "@/assets/images/MoviePromotion.avif";

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
      sectionThreeTitle="Partner With Us to Make Your Vision Real"
      featuredTitle="From ink to impressions - we paint the city with your story"
      insightPosts={[
        { title: "Your Story, Our Spotlight - Turning Media Moments Into Milestones." },
        { title: "Strategic Stories, Seamless Coverage -We Bridge Brands And Broadcasts With Brilliance" },
        { title: "Creating Buzz Before The Blockbuster - As Big Story Deserves Grand Reveal." },
      ]}
    />
      <Footer />
    </div>
  );
};

export default FilmPromotion;
