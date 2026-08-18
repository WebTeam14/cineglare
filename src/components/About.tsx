import { Reveal, Stagger } from "@/components/motion/Reveal";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

import { asset, logoAsset } from "@/assets/placeholder";

const aboutUsImage = asset("Cineglare Trans Logo.jpg");
const highlights = [
  "Star Influence",
  "Global Reach",
  "Creative Strategy",
  "Cinematic Production",
  "Impactful Promotions",
  "Flawless Execution",
  "Custom Solutions",
  "Innovation First",
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 bg-transparent w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-6 md:px-12 lg:px-20">
        <div className="relative flex justify-center">
          <div className="relative rounded-[1.5rem] overflow-hidden w-full border border-white/10 media-zoom hover-lift">
            <img
              src={aboutUsImage}
              alt="Cineglare team celebrating"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="pr-6 md:pr-12 lg:pr-20">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-[#800000]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
              About Cineglare
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Crafting vision into reality
          </h2>
          <p className="text-md text-white/65 mb-6 leading-relaxed">
            Cineglare is a creative powerhouse driving brands into the
            spotlight through star influence, cinematic storytelling, and
            unforgettable experiential events. With global reach and
            industry-leading expertise, we turn brand visions into iconic
            moments. Where creativity meets execution — excellence takes
            center stage.
          </p>

          <Stagger step={70} className="grid grid-cols-2 gap-4 mb-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-2 hover:translate-x-2 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Check className="w-5 h-5 text-[#800000] mt-1 flex-shrink-0" />
                <span className="text-white/90">{highlight}</span>
              </div>
            ))}
          </Stagger>

          <div className="grid grid-cols-2 gap-4 mb-8 items-center">
            <div className="mt-2">
              <Button variant="default" size="lg">
                Learn More
              </Button>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white p-6 text-center transition-all duration-300 hover:scale-105">
              <p className="text-5xl font-bold text-[#800000] mb-2">17+</p>
              <p className="text-sm text-black/70">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
