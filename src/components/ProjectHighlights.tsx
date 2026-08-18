import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const ProjectHighlights = () => {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
          Project Highlights
        </h2>
        <p className="text-center text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          We bring bold ideas to life through standout projects crafted with creative brilliance and flawless execution. Each highlight reflects our passion for storytelling, our strategic approach, and our global entertainment expertise. From star-led brand campaigns to cinematic productions and unforgettable event experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
              src={project1}
              alt="Concert event with dramatic stage lighting"
              className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative overflow-hidden rounded-lg group cursor-pointer 
          shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 animate-fade-in" 
          style={{ animationDelay: '150ms' }} >
            <img
              src={project2}
              alt="Elegant celebration with confetti"
              className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative overflow-hidden rounded-lg group cursor-pointer 
          shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 animate-fade-in" 
          style={{ animationDelay: '300ms' }} >
            <img
              src={project3}
              alt="Evening event with warm lighting"
              className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
