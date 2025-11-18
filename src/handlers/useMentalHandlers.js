import { useState } from "react";
import AssessmentQuestions from "../constants/AssessmentQuestions.json";

export const useMentalHandlers = () => {
  const [mentalQs, setMentalQs] = useState(AssessmentQuestions);

  const addQuestion = () => {
    setMentalQs([...mentalQs, { question: "New Question", options: ["Option 1"] }]);
  };

  const removeQuestion = (index) => {
    setMentalQs(mentalQs.filter((_, i) => i !== index));
  };

  const updateQuestion = (index, value) => {
    const updated = [...mentalQs];
    updated[index].question = value;
    setMentalQs(updated);
  };

  const addOption = (index) => {
    const updated = [...mentalQs];
    if (updated[index].options.length >= 4) return;
    updated[index].options.push("New Option");
    setMentalQs(updated);
  };

  const updateOption = (qIndex, oIndex, value) => {
    const updated = [...mentalQs];
    updated[qIndex].options[oIndex] = value;
    setMentalQs(updated);
  };

  const removeOption = (qIndex, oIndex) => {
    const updated = [...mentalQs];
    updated[qIndex].options = updated[qIndex].options.filter((_, i) => i !== oIndex);
    setMentalQs(updated);
  };

  return {
    mentalQs,
    addQuestion,
    removeQuestion,
    updateQuestion,
    addOption,
    updateOption,
    removeOption,
  };
};
