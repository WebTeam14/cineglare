import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InsightsInnovations from "@/components/InsightsInnovations";
import ServiceHero from "@/components/ServiceHero";
import productBrandingImage from "@/assets/images/ProductbrandingHero.avif";
import productBrandingCenter from "@/assets/images/PrdtBrBox.avif";

const ProductBranding = () => {
  const leftServices = [
    "Brand Naming & Tagline",
    "Brand Strategy & Competitive Positioning",
    "Brand Story & Messaging Guideline",
    "Logo Design & Visual Identity System",
    "Packaging Design & Retail Presentation",
  ];

  const rightServices = [
    "Digital Branding (Website / Social / E-com)",
    "Marketing Campaign Concept",
    "AD Production — TV, Radio and Print",
    "Product Launch Promotion & Media Integration",
    "Influencer & Celebrity Collaboration Planning",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden surface-base text-white">
      <Header />
      <ServiceHero
        firstBgImage={productBrandingImage}
        title="Product Branding"
        tagline="We don't just name brands — we create legacies"
        description="We specialize in building brands that inspire trust, spark emotion and drive engagement — giving your product a distinctive voice and lasting identity."
        leftServices={leftServices}
        rightServices={rightServices}
        centerImage={productBrandingCenter}
        imageAlt="Product branding"
      />
      <InsightsInnovations
        sectionTwoTitle="Insights & Innovations"
        sectionThreeTitle="Let's make your brand shine brighter"
      />
      <Footer />
    </div>
  );
};

export default ProductBranding;
