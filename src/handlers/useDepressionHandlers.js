import { useState } from "react";
import DepressionQuestions from "../constants/DepressionQuestions.json";

export const useDepressionHandlers = () => {
  const [depressionQs, setDepressionQs] = useState(DepressionQuestions);

  const addQuestion = () => {
    setDepressionQs([...depressionQs, { question: "New Depression Question", options: ["Option 1"] }]);
  };

  const removeQuestion = (index) => {
    setDepressionQs(depressionQs.filter((_, i) => i !== index));
  };

  const updateQuestion = (index, value) => {
    const updated = [...depressionQs];
    updated[index].question = value;
    setDepressionQs(updated);
  };

  const addOption = (index) => {
    const updated = [...depressionQs];
    if (updated[index].options.length >= 4) return;
    updated[index].options.push("New Option");
    setDepressionQs(updated);
  };

  const updateOption = (qIndex, oIndex, value) => {
    const updated = [...depressionQs];
    updated[qIndex].options[oIndex] = value;
    setDepressionQs(updated);
  };

  const removeOption = (qIndex, oIndex) => {
    const updated = [...depressionQs];
    updated[qIndex].options = updated[qIndex].options.filter((_, i) => i !== oIndex);
    setDepressionQs(updated);
  };

  return {
    depressionQs,
    addQuestion,
    removeQuestion,
    updateQuestion,
    addOption,
    updateOption,
    removeOption,
  };
};
