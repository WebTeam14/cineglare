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
    <section className="py-20 bg-black/30">
      <div className="container-custom">
        <div className="row">
          <p className="text-md text-foreground font-bold text-red-600 mb-5">
            Testimonials
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start mb-16">
          <div className="md:basis-1/3 md:pr-10">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Impact We <br /> Create
            </h2>
          </div>
          <div className="md:basis-2/3 md:flex md:justify-end">
            <p className="text-lg text-muted-foreground max-w-3xl text-white">
              From brands to celebrities and production partners — trust fuels
              our collaborations. Excellence recognized. Here is how our clients
              describe their experience
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          <div className="bg-white border-none rounded-2xl p-12 shadow-md flex flex-col justify-center items-center text-center">
            <p className="text-6xl md:text-7xl font-bold text-black mb-4">4.9</p>

            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-red-600 fill-red-600" />
              ))}
            </div>

            <p className="text-sm text-gray-600 mb-4">(240+ Reviews)</p>

            <h3 className="text-2xl font-bold text-black">Satisfied</h3>
            <h3 className="text-2xl font-bold text-black">Customer</h3>
          </div>

          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border-none rounded-2xl p-8"
              >
                <Quote className="w-10 h-10 text-gray-400 mb-6" />

                <p className="text-lg text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>

                <div className="flex items-center space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-red-600 fill-red-600"
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
