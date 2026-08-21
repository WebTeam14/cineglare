import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
import { asset } from "@/assets/placeholder";

const eventManagementImage = asset("event-management-image.jpg");
const eventManagementCenter = asset("event-management-center.jpg");

const EventManagement = () => {
  const leftServices = [
    "Corporate Events",
    "Brand & Promotional Events",
    "Entertainment Events",
    "Social & Cultural Events",
    "Builders Expo / Roadshow",
  ];

  const rightServices = [
    "Wedding & Private Events",
    "Exhibitions & Trade Fairs",
    "Sports Events",
    "Charity & Fundraising Events",
    "Virtual & Hybrid Events",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden surface-base text-white">
      <Header />
      <ServiceHero
        firstBgImage={eventManagementImage}
        title="Event Management"
        tagline="Turning moments into milestones"
        description="From red carpets to corporate stages — strategic planning, innovative design and flawless execution that turns vision into reality."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={eventManagementCenter}
        imageAlt="Event management"
      />
      <InsightsInnovations
        sectionTwoTitle="Unforgettable Experiences"
        sectionThreeTitle="Partner with us to make your vision real"
      />
      <Footer />
    </div>
  );
};

export default EventManagement;
