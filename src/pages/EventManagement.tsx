import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
import eventManagementImage from "@/assets/images/eventManagementHero.jpg";
import eventManagementCenter from "@/assets/images/eventManagement.avif";

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
      sectionThreeTitle="Partner With Us to Make Your Vision Real"
      featuredTitle="The Power of Exhibitions & Trade Fairs - Where Brands Come Alive"
      insightPosts={[
        { title: "Where Culture Meets Creativity: The Gulf's Event Success Formula" },
        { title: "Cineglare Turns Corporate Look Captivating - Reflecting Your Brand's Brilliance" },
        { title: "Lights, Music, Magic - We Unleash Fun And Ignite Crowds." },
      ]}
    />
      <Footer />
    </div>
  );
};

export default EventManagement;
