import React, { useState } from "react";
import ProgressBar from "../ProgressBar/Progress";
import { AssessmentCard } from "./MentalAssessment";
import QA from "../../constants/DepressionQuestions.json";

export default function DepressionAssessment({heading}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [answers, setAnswers] = useState(Array(QA.length).fill(null));

  const current = QA[currentIndex];

  const handleSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = option;
    setAnswers(newAnswers);
  };

  return (
    <>
      <div className=" w-[700px] mx-auto mt-10">
      <h1 className="text-3xl text-center font-semibold text-text-black my-5">{heading}</h1>
        <div className="bg-assessment-bg rounded-xl w-[600px] mx-auto shadow-md px-6 py-5">
          {/* Progress Bar */}
          <ProgressBar current={currentIndex + 1} total={QA.length} />

          {/* Question Card */}
          <AssessmentCard
            qindex={currentIndex}
            question={current.question}
            options={current.options}
            selected={answers[currentIndex]}
            onSelect={handleSelect}
          />

          {/* Navigation */}
          <div className="flex justify-between mt-5">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              className={`px-5 py-3 rounded-xl text-sm transition-all ${
                currentIndex === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-accent-1 text-text-black hover:scale-110"
              }`}
            >
              Previous
            </button>

            <button
              onClick={() =>
                currentIndex < QA.length - 1
                  ? setCurrentIndex((prev) => prev + 1)
                  : alert("Assessment Completed!")
              }
              className="bg-accent-1 px-5 py-3 rounded-xl text-text-black text-sm hover:scale-110 transition-all"
            >
              {currentIndex < QA.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
