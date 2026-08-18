import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogFeatured from "@/assets/blog-featured.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import ctaBackground from "@/assets/cta-bg.jpg";

interface InsightsInnovationsProps {
    sectionTwoTitle: string;
    sectionThreeTitle: string;
}

const insightPosts = [
  {
    title: "Smart Targeting, Measurable Growth - ROI that speaks For Itself",
    image: blog1,
  },
  {
    title: "We Create Buzz - Making Your Brand The Talk of the Timeline",
    image: blog2,
  },
  {
    title: "Content with a Soul: Creating Meaningful Brand Connections",
    image: blog3,
  },
];

const InsightsInnovations = ({ sectionTwoTitle, sectionThreeTitle }: InsightsInnovationsProps) => {
  return (
    <>
    <section className="py-20 bg-background">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          {sectionTwoTitle}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={blogFeatured}
                alt="Beyond the Inbox: The Power of Personalized Email Marketing"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-primary px-4 py-2 rounded">
                <div className="text-primary-foreground font-bold text-lg">02</div>
                <div className="text-primary-foreground text-xs">Sep</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>September 2, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>0</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Beyond the Inbox: The Power of Personalized Email Marketing
              </h3>
              <Button variant="default" size="sm">
                Learn more
              </Button>
            </div>
          </div>

          {/* Side Posts */}
          <div className="space-y-6">
            {insightPosts.map((post, index) => (
              <div
                key={index}
                className="flex gap-4 group cursor-pointer hover:bg-card/50 p-4 rounded-lg transition-colors"
              >
                <div className="flex-shrink-0 w-32 h-24 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-foreground font-semibold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ctaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground bg-none mb-6 rounded-full">
          {sectionThreeTitle}
        </h2>
        <Button variant="default" size="lg" className="px-8">
          Let's Talk!
        </Button>
      </div>
    </section>
    </>
  );
};

export default InsightsInnovations;
