import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Amazing quality. Exceptional professionalism. Cineglare has become our go-to creative partner in Dubai.",
    author: "Sarah Thompson",
    position: "CEO of InnovateTech",
  },
  {
    quote:
      "From concept to stage, Cineglare made the Indian Community Conference in Qatar a memorable success. A dependable creative partner!",
    author: "Michael Carter",
    position: "Marketing Director",
  },
];

const cardStyle = {
  background: "linear-gradient(145deg, #ffffff 0%, #fff5f5 50%, #fceaea 100%)",
};

const Impact = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[#800000]/12 blur-[110px]"
      />

      <div className="container-custom relative">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-12 bg-[#800000]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
            Testimonials
          </p>
        </div>

        <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            The Impact We
            <br />
            Create
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            From brands to celebrities and production partners — trust fuels our
            collaborations. Excellence recognized. Here is how our clients
            describe their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          <div
            className="flex flex-col items-center justify-center rounded-[1.5rem] border border-[#800000]/50 p-10 text-center shadow-[0_20px_48px_-16px_rgba(128,0,0,0.5)]"
            style={{
              background:
                "linear-gradient(145deg, #a00000 0%, #800000 48%, #6a0000 100%)",
            }}
          >
            <p className="text-6xl font-black tracking-tight text-white md:text-7xl">
              4.9
            </p>
            <div className="my-3 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-white text-white" />
              ))}
            </div>
            <p className="mb-5 text-sm text-white/75">(240+ Reviews)</p>
            <h3 className="text-2xl font-bold leading-tight text-white">
              Satisfied
              <br />
              Customer
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="group flex flex-col rounded-[1.5rem] border border-[#800000]/15 p-7 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-[#800000]/35 hover:shadow-[0_22px_48px_-20px_rgba(128,0,0,0.2)] sm:p-8"
                style={cardStyle}
              >
                <Quote className="mb-4 h-8 w-8 text-[#800000]" />
                <p className="mb-6 flex-1 text-[15px] leading-relaxed text-neutral-700">
                  “{testimonial.quote}”
                </p>
                <div className="mb-4 border-t border-[#800000]/10 pt-4">
                  <p className="font-semibold text-neutral-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-neutral-500">{testimonial.position}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#800000] text-[#800000]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
