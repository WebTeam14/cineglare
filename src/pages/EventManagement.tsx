import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";

import { asset, logoAsset } from "@/assets/placeholder";

const eventManagementImage = asset("event-management-image.jpg");
const eventManagementCenter = asset("event-management-center.jpg");
const EventManagement = () => {
  const leftServices = [
    "Corporate Events",
    "Brand & Promotional Events",
    "Entertainment Events",
    "Social & Cultural Events",
    "Builders Expo/Roadshow",
  ];

  const rightServices = [
    "Wedding & Private Events",
    "Exihibitions & Trade Fairs",
    "Sports Events",
    "Charity & Fundraising Events",
    "Virtual & Hybrid Events",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        firstBgImage={eventManagementImage}
        title="Event Management"
        tagline="Turning Moments into Milestone"
        description="From Red Carpets to Corporate Stages, we create moments blending strategic planning, innovative design and flawless 
        execution to transform vision into reality."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={eventManagementCenter}
        imageAlt="Digital marketing visualization"
      />

      {/* Insights & Innovations Section */}
      <InsightsInnovations sectionTwoTitle="Unforgettable Experiences" sectionThreeTitle="Partner With Us to Make Your Vision Real"/>

      <Footer />
    </div>
  );
};

export default EventManagement;
