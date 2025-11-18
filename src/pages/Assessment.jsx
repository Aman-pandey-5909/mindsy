import React from "react";
import { useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate();

  const assessments = [
    {
      title: "Mental Health Assessment",
      desc: "Understand your overall mental well-being.",
      bg: "bg-[#F9E9BC]" // soft yellow
    },
    {
      title: "Depression Test",
      desc: "Evaluate signs of depression and mood patterns.",
      bg: "bg-[#C6D8FF]" // soft blue
    },
    {
      title: "Mood Analyzer",
      desc: "Track and understand your emotions better.",
      bg: "bg-[#D7F5D7]" // soft mint green
    }
  ];

  const handleClick = (index) => {
    if (index === 0) navigate("/assessment/mentalhealth");
    if (index === 1) navigate("/assessment/depression");
    if (index === 2) navigate("/assessment/moodanalyze");
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 px-5 pb-20">

      {/* Tagline */}
      <h1 className="text-3xl font-bold text-center text-text-black mb-10">
        Choose the type of assessment you’d like to take
      </h1>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {assessments.map((a, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`cursor-pointer rounded-xl p-6 shadow-md border border-gray-200 ${a.bg}
              hover:shadow-xl hover:-translate-y-1 transition-all duration-200`}
          >
            <h2 className="text-xl font-semibold text-text-black  mb-2">
              {a.title}
            </h2>
            <p className="text-sm text-gray-700 leading-snug">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assessment;
