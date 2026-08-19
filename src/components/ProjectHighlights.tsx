import { asset } from "@/assets/placeholder";
import { Reveal, Stagger } from "@/components/motion/Reveal";

const project1 = asset("project-1.jpg");
const project2 = asset("project-2.jpg");
const project3 = asset("project-3.jpg");

const ProjectHighlights = () => {
  return (
    <div id="portfolio" className="py-14 sm:py-16 lg:py-20">
      <div className="container-custom">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#800000]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#800000]">
            Portfolio
          </p>
          <span className="h-px w-12 bg-[#800000]" />
        </div>
        <Reveal
          as="h2"
          className="mb-6 text-center text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Project Highlights
        </Reveal>
        <p className="mx-auto mb-8 max-w-3xl text-center text-base leading-relaxed text-white/65">
          We bring bold ideas to life through standout projects crafted with
          creative brilliance and flawless execution. Each highlight reflects
          our passion for storytelling and global entertainment expertise.
        </p>

        <Stagger step={120} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { src: project1, alt: "Concert event with dramatic stage lighting" },
            { src: project2, alt: "Elegant celebration with confetti" },
            { src: project3, alt: "Evening event with warm lighting" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </Stagger>
      </div>
    </div>
  );
};

export default ProjectHighlights;
