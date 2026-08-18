import { motion } from "framer-motion";

import I1 from "@/assets/logos/I1.png";
import I2 from "@/assets/logos/I2.png";
import I3 from "@/assets/logos/I3.png";
import I4 from "@/assets/logos/I4.png";
import I5 from "@/assets/logos/I5.png";
import I6 from "@/assets/logos/I6.png";
import I7 from "@/assets/logos/I7.png";
import I8 from "@/assets/logos/I8.png";
import I9 from "@/assets/logos/I9.png";
import I10 from "@/assets/logos/I10.png";
import I11 from "@/assets/logos/I11.png";
import I12 from "@/assets/logos/I12.png";
import I13 from "@/assets/logos/I13.png";
import I14 from "@/assets/logos/I14.png";
import I15 from "@/assets/logos/I15.png";
import I16 from "@/assets/logos/I16.png";
import I17 from "@/assets/logos/I17.png";
import I18 from "@/assets/logos/I18.png";
import I19 from "@/assets/logos/I19.png";
import I20 from "@/assets/logos/I20.png";
import I21 from "@/assets/logos/I21.png";
import I22 from "@/assets/logos/I22.png";
import I23 from "@/assets/logos/I23.png";
import I24 from "@/assets/logos/I24.png";
import I25 from "@/assets/logos/I25.png";
import I26 from "@/assets/logos/I26.png";
import I27 from "@/assets/logos/I27.png";
import I28 from "@/assets/logos/I28.png";
import I29 from "@/assets/logos/I29.png";
import I30 from "@/assets/logos/I30.png";
import I31 from "@/assets/logos/I31.png";
import I32 from "@/assets/logos/I32.png";
import I33 from "@/assets/logos/I33.png";
import I34 from "@/assets/logos/I34.png";
import I35 from "@/assets/logos/I35.png";
import I36 from "@/assets/logos/I36.png";
import I37 from "@/assets/logos/I37.png";
import I38 from "@/assets/logos/I38.png";
import I39 from "@/assets/logos/I39.png";
import I40 from "@/assets/logos/I40.png";
import I41 from "@/assets/logos/I41.png";
import I42 from "@/assets/logos/I42.png";
import I43 from "@/assets/logos/I43.png";
import I44 from "@/assets/logos/I44.png";
import I45 from "@/assets/logos/I45.png";

const logos = [
  I1, I2, I3, I4, I5, I6, I7, I8, I9, I10,
  I11, I12, I13, I14, I15, I16, I17, I18, I19, I20,
  I21, I22, I23, I24, I25, I26, I27, I28, I29, I30,
  I31, I32, I33, I34, I35, I36, I37, I38, I39, I40,
  I41, I42, I43, I44, I45,
];

const PartnerSlider = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#1a0000] via-black to-[#000000] text-white">
      <h3 className="text-xl font-medium text-gray-300 text-center mb-6">
        Our Optimistic Partner & Sponsor
      </h3>

      <div className="overflow-hidden w-full">
        <motion.div
          className="flex items-center gap-10 min-w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 200,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner-${index}`}
              className="h-14 sm:h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSlider;
