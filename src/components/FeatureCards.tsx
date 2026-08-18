// import { Users, Star, MapPin } from "lucide-react";

// const features = [
//   {
//     icon: Users,
//     title: "Amiable Team",
//     description: "We are a team of creative thinkers, strategists, and innovators — delivering impactful and unforgettable experiences.",
//   },
//   {
//     icon: Star,
//     title: "Indelible Experience",
//     description: "We turn brand purpose into powerful stories — and experiences that engage, delight, and keep audiences loyal.",
//   },
//   {
//     icon: MapPin,
//     title: "Premier Venue",
//     description: "Handpicked venues aligned to your brand — crafted into immersive, sensory engagement and unforgettable spaces.",
//   },
// ];

// const FeatureCards = () => {
//   return (
//     <section className="py-20 bg-background">
//       <div className="container-custom">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-card border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg 
//               hover:shadow-primary/10 transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
//             style={{ animationDelay: `${index * 150}ms` }} >
//               <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 
//               group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
//                 <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
//               <p className="text-muted-foreground">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureCards;

import { Users, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Amiable Team",
    description:
      "We are a team of creative thinkers, strategists, and innovators — delivering impactful and unforgettable experiences.",
  },
  {
    icon: Star,
    title: "Indelible Experience",
    description:
      "We turn brand purpose into powerful stories — and experiences that engage, delight, and keep audiences loyal.",
  },
  {
    icon: MapPin,
    title: "Premier Venue",
    description:
      "Handpicked venues aligned to your brand — crafted into immersive, sensory engagement and unforgettable spaces.",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // direction pattern: left → bottom → right
            const directions = ["left", "bottom", "right"];
            const direction = directions[index % 3];

            // animation configuration
            const variants = {
              hidden: {
                opacity: 0,
                x:
                  direction === "left"
                    ? -80
                    : direction === "right"
                    ? 80
                    : 0,
                y: direction === "bottom" ? 80 : 0,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            };

            return (
              <motion.div
                key={index}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-card border border-none p-8 hover:border-primary hover:shadow-lg 
                hover:shadow-primary/10 transition-all duration-300 group hover:-translate-y-2"
              >
                <div
                  className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 
                group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

