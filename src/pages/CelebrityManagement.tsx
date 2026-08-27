import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
import celebrityManagementImage from "@/assets/images/CelebrityMangeHero.avif";
import celebrityManagementCenter from "@/assets/images/celeb.avif";

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
    <div className="min-h-screen overflow-x-hidden surface-base text-white">
      <Header />
      <ServiceHero
        firstBgImage={celebrityManagementImage}
        title="Celebrity Management"
        tagline="Where star power meets strategy"
        description="We strategically position talent across media platforms, endorsements, events and campaigns — aligned with your brand's vision and audiences."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={celebrityManagementCenter}
        imageAlt="Celebrity management"
      />
      <InsightsInnovations
        sectionTwoTitle="The Glare Blog"
        sectionThreeTitle="Partner with us to make your vision real"
      />
      <Footer />
    </div>
  );
};

export default CelebrityManagement;
