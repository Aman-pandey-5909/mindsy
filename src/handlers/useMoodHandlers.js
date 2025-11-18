import { useState } from "react";
import MoodsData from "../constants/Moods.json";

export const useMoodHandlers = () => {
  const [moods, setMoods] = useState(MoodsData);

  const addMood = () => {
    setMoods([...moods, { Label: "New Mood", sublabels: ["Sub 1"], Color: "#CCCCCC" }]);
  };

  const removeMood = (index) => {
    setMoods(moods.filter((_, i) => i !== index));
  };

  const updateMoodLabel = (index, value) => {
    const updated = [...moods];
    updated[index].Label = value;
    setMoods(updated);
  };

  const updateMoodColor = (index, value) => {
    const updated = [...moods];
    updated[index].Color = value;
    setMoods(updated);
  };

  const addSubMood = (mIndex) => {
    const updated = [...moods];
    updated[mIndex].sublabels.push("New Submood");
    setMoods(updated);
  };

  const updateSubMood = (mIndex, sIndex, value) => {
    const updated = [...moods];
    updated[mIndex].sublabels[sIndex] = value;
    setMoods(updated);
  };

  const removeSubMood = (mIndex, sIndex) => {
    const updated = [...moods];
    updated[mIndex].sublabels = updated[mIndex].sublabels.filter((_, i) => i !== sIndex);
    setMoods(updated);
  };

  return {
    moods,
    addMood,
    removeMood,
    updateMoodLabel,
    updateMoodColor,
    addSubMood,
    updateSubMood,
    removeSubMood,
  };
};
