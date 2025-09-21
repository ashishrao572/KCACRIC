import React from "react";

const TrainingPrograms = () => {
  const programs = [
    { title: "Master Batting", icon: "🏏", color: "#9C5455" },
    { title: "Master Bowling", icon: "🎯", color: "#d47476" },
    { title: "Master Fielding", icon: "🧤", color: "#9C5455" },
    { title: "Wicketkeeping", icon: "🧑‍⚖️", color: "#d47476" },
    { title: "Game Sense & Strategy", icon: "🧠", color: "#9C5455" },
    { title: "Fitness & Conditioning", icon: "💪", color: "#d47476" },
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#9C5455]">
        Our Training Programs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 border border-[#f5eddb]"
          >
            <div className="text-5xl mb-4" style={{ color: program.color }}>
              {program.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#9C5455] mb-2">
              {program.title}
            </h3>
            <p className="text-gray-700 text-base">
              A focused module designed to enhance your cricketing performance through skill, discipline, and strategy.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainingPrograms;