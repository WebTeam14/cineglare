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
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#800000]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              From the studio
            </span>
          </div>
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {sectionTwoTitle}
          </h2>

          {/* Equal-height two-column layout */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Featured — fills column height */}
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                <img
                  src={blogFeatured}
                  alt="Beyond the Inbox: The Power of Personalized Email Marketing"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-xl bg-[#800000] px-3.5 py-2 text-center text-white">
                  <div className="text-lg font-bold leading-none">02</div>
                  <div className="text-[10px] uppercase tracking-wider">Sep</div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-white/45">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    September 2, 2024
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    0
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                  Beyond the Inbox: The Power of Personalized Email Marketing
                </h3>
                <button
                  type="button"
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#800000] transition-colors hover:text-[#a00000]"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>

            {/* Side list — same total height, equal card distribution */}
            <div className="flex h-full flex-col gap-4">
              {insightPosts.map((post) => (
                <article
                  key={post.title}
                  className="group flex min-h-0 flex-1 cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:border-[#800000]/45 hover:bg-[#800000]/10 sm:p-4"
                >
                  <div className="h-full min-h-[5.5rem] w-28 shrink-0 overflow-hidden rounded-xl sm:w-32">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 items-center py-1">
                    <h4 className="text-sm font-semibold leading-snug text-white/85 transition-colors group-hover:text-white sm:text-base">
                      {post.title}
                    </h4>
                  </div>
                </article>
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
