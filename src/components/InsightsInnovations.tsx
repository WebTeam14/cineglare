import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
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

const whiteCard = {
  background: "linear-gradient(145deg, #ffffff 0%, #fafafa 55%, #f7f4f4 100%)",
} as const;

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

          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left — white card, turns solid red on hover */}
            <article
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#800000]/15 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-[#800000] hover:bg-[#800000] hover:shadow-[0_20px_48px_-16px_rgba(128,0,0,0.45)]"
              style={whiteCard}
            >
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                <img
                  src={blogFeatured}
                  alt="Beyond the Inbox: The Power of Personalized Email Marketing"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-xl bg-[#800000] px-3.5 py-2 text-center text-white transition-colors group-hover:bg-white group-hover:text-[#800000]">
                  <div className="text-lg font-bold leading-none">02</div>
                  <div className="text-[10px] uppercase tracking-wider">Sep</div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-neutral-500 transition-colors group-hover:text-white/75">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    September 2, 2024
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    0
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-snug text-neutral-950 transition-colors group-hover:text-white sm:text-2xl">
                  Beyond the Inbox: The Power of Personalized Email Marketing
                </h3>
                <button
                  type="button"
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#800000] transition-colors group-hover:text-white"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>

            {/* Right — solid brand red cards */}
            <div className="flex h-full flex-col gap-4">
              {insightPosts.map((post) => (
                <article
                  key={post.title}
                  className="group flex min-h-0 flex-1 cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-[#800000] bg-[#800000] p-3 shadow-[0_12px_32px_-12px_rgba(128,0,0,0.5)] transition-all duration-300 hover:bg-[#970000] hover:shadow-[0_16px_40px_-12px_rgba(128,0,0,0.55)] sm:p-4"
                >
                  <div className="h-full min-h-[5.5rem] w-28 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/15 sm:w-32">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 items-center py-1">
                    <h4 className="text-sm font-semibold leading-snug text-white sm:text-base">
                      {post.title}
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src={ctaBackground}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#800000]/25 blur-[100px]"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#800000]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
                Let’s collaborate
              </p>
              <span className="h-px w-10 bg-[#800000]" />
            </div>

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {sectionThreeTitle}
            </h2>

            <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
              From concept to curtain call — star influence, cinematic
              storytelling, and flawless execution that turns bold ideas into
              iconic moments.
            </p>

            <Button
              asChild
              className="h-14 rounded-full bg-[#800000] px-9 text-base font-semibold text-white shadow-[0_14px_36px_rgba(128,0,0,.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#970000] hover:shadow-[0_18px_42px_rgba(128,0,0,.45)] sm:h-16 sm:px-10 sm:text-lg"
            >
              <Link to="/contact" className="inline-flex items-center gap-2.5">
                Let’s Talk
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightsInnovations;
