import React from 'react';

const industries = [
  { title: "Aerospace & Defense",                     icon: "/resrc/Defence.png",           iconwidth:24, iconrotation: 350 },
  { title: "Automotive & Transportation",             icon: "/resrc/Transport.png",         iconwidth:24, iconrotation: 0 },
  { title: "High Tech Electronics",                   icon: "/resrc/HighTech.png",          iconwidth:24, iconrotation: 0 },
  { title: "Industrial Manufacturing",                icon: "/resrc/Manufacturing.png",     iconwidth:24, iconrotation: 0 },
  { title: "Engineering, Procurement & Construction", icon: "/resrc/EngPro&Cons.png",       iconwidth:24, iconrotation: 0 },
  { title: "Life Sciences",                           icon: "/resrc/LifeScience.png",       iconwidth:24, iconrotation: 0 },
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-[#e8f1f4] py-12 px-4 sm:px-6 md:px-10 text-center rounded-xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
        We Help In Digital Transformation
      </h2>

      <div className="w-36 h-1 mx-auto bg-gradient-to-r from-blue-700 via-white via-cyan-300 to-blue-900 rounded-full mb-6" />

      <p className="text-base sm:text-lg text-gray-700 mb-10 sm:mb-12">
        Industries We Serve
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12 w-full max-w-[95%] sm:max-w-[90%] md:max-w-6xl mx-auto px-2">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full shadow-md bg-white flex items-center justify-center">
              <img
                src={industry.icon}
                alt={industry.title}
                className="h-12 sm:h-14 md:h-16"
                style={{ transform: `rotate(${industry.iconrotation}deg)` }}
              />
            </div>
            <p className="text-gray-700 text-sm sm:text-base font-bold">
              {industry.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
