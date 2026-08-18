interface ServiceHeroProps {
  firstBgImage: string;
  title: string;
  tagline: string;
  description: string;
  leftServices: string[];
  rightServices: string[];
  centerImage: string;
  imageAlt: string;
}

const ServiceHero = ({
  firstBgImage,
  title,
  tagline,
  description,
  leftServices,
  rightServices,
  centerImage,
  imageAlt,
}: ServiceHeroProps) => {
  return (
    // <section className="pt-32 pb-0 bg-gradient-to-b from-muted/30 via-muted/30 to-background">
    //   <div className="px-6 md:px-30 lg:px-20">
    //     {/* Header */}
    //     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-2 mt-8">
    //       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
    //         {title}
    //       </h1>
    //       <div className="bg-foreground text-background px-8 py-4 rounded-full">
    //         <h2 className="text-xl md:text-2xl font-bold whitespace-nowrap">
    //           {tagline}
    //         </h2>
    //       </div>
    //     </div>

    //     {/* Description */}
    //     <p className="text-center text-foreground text-lg md:text-xl mb-20 max-w-5xl mx-auto">
    //       {description}
    //     </p>

    //     {/* Services Grid with Center Image */}
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto pb-16">
    //       {/* Left Services */}
    //       <div className="space-y-5">
    //         {leftServices.map((service, index) => (
    //           <div key={index} className="flex items-start gap-3">
    //             <span className="text-primary text-xl mt-1">•</span>
    //             <p className="text-foreground text-base md:text-lg">{service}</p>
    //           </div>
    //         ))}
    //       </div>

    //       {/* Center Image */}
    //       <div className="flex justify-center">
    //         <img
    //           src={centerImage}
    //           alt={imageAlt}
    //           className="w-full max-w-xs h-auto object-contain"
    //         />
    //       </div>

    //       {/* Right Services */}
    //       <div className="space-y-5">
    //         {rightServices.map((service, index) => (
    //           <div key={index} className="flex items-start gap-3">
    //             <span className="text-primary text-xl mt-1">•</span>
    //             <p className="text-foreground text-base md:text-lg">{service}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>

    
<section className="w-full">
  {/* Top Gray Section */}
  <div className="w-full bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 bg-fixed bg-cover bg-center" 
  style={{
    backgroundImage: `url(${firstBgImage})`,
  }}>
    <div className="h-[240px]"></div>
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-48 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
        {/* Left Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black lg:col-span-2 font-cinematic animate-dynamic-hero">
          {title}
        </h1>

        {/* Right Tagline */}
        <div className="flex justify-start lg:justify-end">
          <div className="bg-black text-white px-8 py-3 rounded-full shadow-md">
            <h2 className="text-base md:text-lg font-semibold text-center md:whitespace-nowrap">
              {tagline}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom White Section */}
  <div className="w-full bg-white">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-10 pb-20">
      {/* Description */}
      <p className="text-center text-gray-800 text-sm md:text-md mb-16 max-w-5xl mx-auto leading-relaxed">
        {description}
      </p>

      {/* Services Grid with Center Image */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Services */}
        <div className="space-y-5 pl-2">
          {leftServices.map((service, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-black text-xl mt-1">•</span>
              <p className="text-gray-900 text-base md:text-lg leading-snug whitespace-nowrap">
                {service}
              </p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center">
          <img
            src={centerImage}
            alt={imageAlt}
            className="w-full max-w-[300px] h-auto object-contain opacity-90"
          />
        </div>

        {/* Right Services */}
        <div className="space-y-5 pr-2">
          {rightServices.map((service, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-black text-xl mt-1">•</span>
              <p className="text-gray-900 text-base md:text-lg leading-snug whitespace-nowrap">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default ServiceHero;
