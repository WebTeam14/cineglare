import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
// import digitalMarketingHero from "@/assets/digital-marketing-hero.jpg";
import celebrityManagementImage from "@/assets/celebrity-management-image.jpg";
import celebrityManagementCenter from "@/assets/celebrity-management-center.jpg";

const CelebrityManagement = () => {
  const leftServices = [
    "Celebrity Endorsements",
    "Brand Collaborations",
    "Event Appearances",
    "Film & Ad Casting",
    "Digital & Social Media Management",
  ];

  const rightServices = [
    "PR & Media Relations",
    "Talent Scheduling & Logistics",
    "Personal Branding & Image Consulting",
    "Crisis & Reputation Management",
    "Global Representation",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        firstBgImage={celebrityManagementImage}
        title="Celebrity Management"
        tagline="Where Star Power Meets Strategy"
        description="We strategically position talent across media platforms, endorsements, events and campaigns - aligining perfectly with
         the brand's vision and audiences."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={celebrityManagementCenter}
        imageAlt="Digital marketing visualization"
      />

      {/* Insights & Innovations Section */}
      <InsightsInnovations sectionTwoTitle="The Glare Blog" sectionThreeTitle="Partner With Us to Make Your Vision Real" />

      <Footer />
    </div>
  );
};

export default CelebrityManagement;
