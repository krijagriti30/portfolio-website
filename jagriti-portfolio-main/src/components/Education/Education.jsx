import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] font-sans bg-gray-950"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-purple-500">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg">
          A step-by-step journey of academic growth.
        </p>
      </div>

      {/* Horizontal Stepper */}
      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-gray-700 mx-[6vw]"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-16">
          {education.map((edu, index) => (
            <div key={edu.id} className="relative text-center sm:w-1/4">
              {/* Circle */}
              <div className="w-16 h-16 mx-auto bg-purple-600 rounded-full border-4 border-gray-900 flex items-center justify-center z-10 relative">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Connecting Dots */}
              <div className="hidden sm:block absolute top-11 left-1/2 transform -translate-x-1/2 bg-purple-600 w-3 h-3 rounded-full z-20"></div>

              {/* Details */}
              <div className="mt-8 bg-gray-900 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                <p className="text-sm text-gray-400 mb-1">{edu.school}</p>
                <p className="text-xs text-gray-500">{edu.date}</p>
                <p className="mt-3 text-sm text-purple-300 font-semibold">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-400 text-xs">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
