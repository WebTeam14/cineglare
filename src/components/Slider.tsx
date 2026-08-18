import { motion } from "framer-motion";

import { asset, logoAsset } from "@/assets/placeholder";

const I1 = logoAsset("logos/I1.png");
const I2 = logoAsset("logos/I2.png");
const I3 = logoAsset("logos/I3.png");
const I4 = logoAsset("logos/I4.png");
const I5 = logoAsset("logos/I5.png");
const I6 = logoAsset("logos/I6.png");
const I7 = logoAsset("logos/I7.png");
const I8 = logoAsset("logos/I8.png");
const I9 = logoAsset("logos/I9.png");
const I10 = logoAsset("logos/I10.png");
const I11 = logoAsset("logos/I11.png");
const I12 = logoAsset("logos/I12.png");
const I13 = logoAsset("logos/I13.png");
const I14 = logoAsset("logos/I14.png");
const I15 = logoAsset("logos/I15.png");
const I16 = logoAsset("logos/I16.png");
const I17 = logoAsset("logos/I17.png");
const I18 = logoAsset("logos/I18.png");
const I19 = logoAsset("logos/I19.png");
const I20 = logoAsset("logos/I20.png");
const I21 = logoAsset("logos/I21.png");
const I22 = logoAsset("logos/I22.png");
const I23 = logoAsset("logos/I23.png");
const I24 = logoAsset("logos/I24.png");
const I25 = logoAsset("logos/I25.png");
const I26 = logoAsset("logos/I26.png");
const I27 = logoAsset("logos/I27.png");
const I28 = logoAsset("logos/I28.png");
const I29 = logoAsset("logos/I29.png");
const I30 = logoAsset("logos/I30.png");
const I31 = logoAsset("logos/I31.png");
const I32 = logoAsset("logos/I32.png");
const I33 = logoAsset("logos/I33.png");
const I34 = logoAsset("logos/I34.png");
const I35 = logoAsset("logos/I35.png");
const I36 = logoAsset("logos/I36.png");
const I37 = logoAsset("logos/I37.png");
const I38 = logoAsset("logos/I38.png");
const I39 = logoAsset("logos/I39.png");
const I40 = logoAsset("logos/I40.png");
const I41 = logoAsset("logos/I41.png");
const I42 = logoAsset("logos/I42.png");
const I43 = logoAsset("logos/I43.png");
const I44 = logoAsset("logos/I44.png");
const I45 = logoAsset("logos/I45.png");
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
