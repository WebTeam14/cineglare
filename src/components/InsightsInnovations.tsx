import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { asset } from "@/assets/placeholder";

const blogFeatured = asset("blog-featured.jpg");
const blog1 = asset("blog-1.jpg");
const blog2 = asset("blog-2.jpg");
const blog3 = asset("blog-3.jpg");
const ctaBackground = asset("cta-bg.jpg");

interface InsightsInnovationsProps {
  sectionTwoTitle: string;
  sectionThreeTitle: string;
}

const insightPosts = [
  {
    title: "Smart Targeting, Measurable Growth — ROI that speaks for itself",
    image: blog1,
  },
  {
    title: "We Create Buzz — Making your brand the talk of the timeline",
    image: blog2,
  },
  {
    title: "Content with a Soul: Creating meaningful brand connections",
    image: blog3,
  },
];

const InsightsInnovations = ({
  sectionTwoTitle,
  sectionThreeTitle,
}: InsightsInnovationsProps) => {
  return (
    <>
      <section className="relative overflow-hidden surface-base py-14 sm:py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-[#800000]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              From the studio
            </span>
          </div>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {sectionTwoTitle}
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={blogFeatured}
                  alt="Beyond the Inbox: The Power of Personalized Email Marketing"
                  className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-xl bg-[#800000] px-3.5 py-2 text-center text-white">
                  <div className="text-lg font-bold leading-none">02</div>
                  <div className="text-[10px] uppercase tracking-wider">Sep</div>
                </div>
              </div>
              <div className="mt-5">
                <div className="mb-3 flex items-center gap-4 text-sm text-white/45">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    September 2, 2024
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    0
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Beyond the Inbox: The Power of Personalized Email Marketing
                </h3>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#800000] transition-colors hover:text-[#a00000]"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-3">
              {insightPosts.map((post) => (
                <div
                  key={post.title}
                  className="group flex cursor-pointer gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:border-[#800000]/40 hover:bg-[#800000]/10"
                >
                  <div className="h-24 w-32 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 items-center">
                    <h4 className="text-sm font-semibold leading-snug text-white/85 transition-colors group-hover:text-white sm:text-base">
                      {post.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${ctaBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
            Ready when you are
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {sectionThreeTitle}
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#800000] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000]"
          >
            Let's Talk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default InsightsInnovations;
