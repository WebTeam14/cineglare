import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
import { asset } from "@/assets/placeholder";

const digitalMarketingImage = asset("digital-marketing-image.jpg");
const digitalMarketingCenter = asset("digital-marketing-center.jpg");

const DigitalMarketing = () => {
  const leftServices = [
    "SEO — rise above the noise",
    "Social Media Marketing — storytelling in motion",
    "Content Marketing — crafted to connect",
    "Email Marketing — personalised campaigns",
    "PPC Campaigns",
  ];

  const rightServices = [
    "Influencer Marketing — star power amplified",
    "Affiliate Marketing — performance that grows",
    "Mobile Marketing",
    "Video Marketing — visual stories that sell",
    "Online PR — reputation in the spotlight",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden surface-base text-white">
      <Header />
      <ServiceHero
        firstBgImage={digitalMarketingImage}
        title="Digital Marketing"
        tagline="Digital brilliance with a global pulse"
        description="From creative storytelling to data-driven strategies — brand identity, visibility and insight so every click counts."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={digitalMarketingCenter}
        imageAlt="Digital marketing"
      />
      <InsightsInnovations
        sectionTwoTitle="Insights & Innovations"
        sectionThreeTitle="Partner with us to make your vision real"
      />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
