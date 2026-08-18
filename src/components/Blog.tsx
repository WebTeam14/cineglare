import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogFeatured from "@/assets/blog-featured.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogPosts = [
  {
    title: "Cineglare level up Your Look - turning impressions into Impact.",
    image: blog1,
  },
  {
    title: "The Power of Influence: How Celebrity Endorsements Build Brands",
    image: blog2,
  },
  {
    title: "Expanding Horizons: Your Gateway to Worldwide Recognition.",
    image: blog3,
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          The Glare Blog
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          <div className="relative group animate-fade-in">
            <div className="relative overflow-hidden rounded-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <img
                src={blogFeatured}
                alt="Reputation Under Fire: The Art of Managing a Brand Crisis"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary px-4 py-2 rounded group-hover:scale-110 transition-transform duration-300">
                <div className="text-primary-foreground font-bold text-lg">02</div>
                <div className="text-primary-foreground text-xs">Sep</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>September 2, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>0</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Reputation Under Fire: The Art of Managing a Brand Crisis
              </h3>
              <Button variant="default" size="sm">
                Learn more
              </Button>
            </div>
          </div>

          {/* Side Posts */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="flex gap-4 group cursor-pointer hover:bg-card/50 p-4 rounded-lg transition-all duration-300 hover:-translate-x-2 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 150}ms` }} >
                <div className="flex-shrink-0 w-32 h-24 overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-foreground font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
