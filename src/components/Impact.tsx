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

const Impact = () => {
  return (
    <div className="py-20 sm:py-24 lg:py-28">
      <div className="container-custom">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-12 bg-[#800000]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
            Testimonials
          </p>
        </div>

        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            The Impact We
            <br />
            Create
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/65">
            From brands to celebrities and production partners — trust fuels our
            collaborations. Excellence recognized. Here is how our clients
            describe their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col items-center justify-center rounded-[1.5rem] border border-white/10 bg-white p-10 text-center shadow-[0_25px_60px_rgba(0,0,0,.35)]">
            <p className="text-6xl font-black text-black md:text-7xl">4.9</p>
            <div className="my-3 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#800000] text-[#800000]" />
              ))}
            </div>
            <p className="mb-4 text-sm text-black/55">(240+ Reviews)</p>
            <h3 className="text-2xl font-bold leading-tight text-black">
              Satisfied
              <br />
              Customer
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[.035] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#800000]/60 hover:bg-[#800000]/10"
              >
                <Quote className="mb-5 h-9 w-9 text-[#800000]/70" />
                <p className="mb-6 text-base italic leading-relaxed text-white/85">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-white/50">{testimonial.position}</p>
                </div>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#800000] text-[#800000]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
