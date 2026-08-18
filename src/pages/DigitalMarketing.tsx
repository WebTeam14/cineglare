import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
// import digitalMarketingHero from "@/assets/digital-marketing-hero.jpg";
import digitalMarketingCenter from "@/assets/digital-marketing-center.jpg"

import { asset, logoAsset } from "@/assets/placeholder";

const digitalMarketingImage = asset("digital-marketing-image.jpg");

const DigitalMarketing = () => {
  const leftServices = [
    "SEO - brand rise above the noise",
    "Social Media Marketing - Storytelling in Motion",
    "Content Marketing - Crafted to Connect.",
    "Email Marketing - Personalised campaigns",
    "PPC Campaigns",
  ];

  const rightServices = [
    "Influencer Marketing - Star Power Amplified",
    "Affiliate Marketing - Performance That Grows",
    "Mobile Marketing",
    "Video Marketing - Visual Stories That Sell",
    "Online PR - Reputation in the Spotlight.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        firstBgImage={digitalMarketingImage}
        title="Digital Marketing"
        tagline="Digital Brilliance with a Global Pulse"
        description="From creative storytelling to data driven strategies, we focus on brand identity, driving visibility, blending innovation and insight to make every click count."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={digitalMarketingCenter}
        imageAlt="Digital marketing visualization"
      />

      {/* Insights & Innovations Section */}
      <InsightsInnovations sectionTwoTitle="Insights & Innovations" sectionThreeTitle="Partner With Us to Make Your Vision Real"/>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
