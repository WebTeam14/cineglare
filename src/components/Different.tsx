import differentiatorsBg from "@/assets/differentiators-bg.jpg";
import StatsCounter from "./StatsCounter";

const Different = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={differentiatorsBg}
          alt="Event celebration background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - What Makes Us Different */}
          <div>
            <div className="inline-block bg-primary px-8 py-4 rounded-lg mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                What makes us different
              </h2>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">•</span>
                <p className="text-foreground text-lg font-medium">
                  Fostered high-impact celebrity collaborations across industries
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">•</span>
                <p className="text-foreground text-lg font-medium">
                  Managed world-class events with flawless execution
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">•</span>
                <p className="text-foreground text-lg font-medium">
                  Created storytelling that drives real audience engagement
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">•</span>
                <p className="text-foreground text-lg font-medium">
                  Built international partnerships with measurable business growth
                </p>
              </li>
            </ul>
          </div>

          {/* Right Side - Statistics */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-end">
            <div className="text-center bg-black text-white">
              {/* <h3 className="text-7xl md:text-8xl font-bold text-foreground mb-2"> */}
                <StatsCounter end={132} label="Projects Completed" />
                {/* 132<span className="text-primary">+</span> */}
              {/* </h3> */}
              {/* <p className="text-muted-foreground text-lg">Projects Completed</p> */}
            </div>
            <div className="text-center bg-black text-white">
              {/* <h3 className="text-7xl md:text-8xl font-bold text-foreground mb-2"> */}
                                <StatsCounter end={84} label="Happy Clients" />

                {/* 84<span className="text-primary">+</span> */}
              {/* </h3> */}
              {/* <p className="text-muted-foreground text-lg">Happy Clients</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Different;
