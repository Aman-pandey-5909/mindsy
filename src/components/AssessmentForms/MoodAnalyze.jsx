import React, { useState } from "react";
import MOODS from "../../constants/Moods.json"; // your JSON
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function MoodAnalyzeSimple() {
  const [openMood, setOpenMood] = useState(null);
  const [selectedSubMoods, setSelectedSubMoods] = useState([]);

  const handleMoodClick = (label) => {
    // toggle open mood; if same clicked, close it
    setOpenMood(openMood === label ? null : label);
  };

  const toggleSubMood = (sub) => {
    setSelectedSubMoods((prev) =>
      prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub]
    );
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-2xl text-center font-semibold text-text-black mb-6">
        How are you feeling right now?
      </h1>

      {/* Mood buttons */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {MOODS.map((mood, idx) => (
          <button
            key={mood.Label + idx}
            onClick={() => handleMoodClick(mood.Label)}
            className={`py-4 rounded-lg shadow-md font-semibold  text-center focus:outline-none ${
              openMood === mood.Label ? "ring-2 ring-offset-1" : ""
            }`}
            style={{ backgroundColor: mood.Color }}
          >
            {mood.Label}
          </button>
        ))}
      </div>

      {/* Sublabels row (simple — shown below the mood row) */}
      <div className="mb-4">
        {openMood ? (
          <>
            <h1>Choose submoods for {openMood}:</h1>
            <div className="flex flex-wrap gap-3">
              {(MOODS.find((m) => m.Label === openMood)?.sublabels || []).map(
                (sub, i) => (
                  <button
                    key={sub + i}
                    onClick={() => toggleSubMood(sub)}
                    className={`px-3 py-2 rounded-md border shadow-sm text-sm ${
                      selectedSubMoods.includes(sub)
                        ? "bg-gray-300 border-gray-500"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    {sub}
                  </button>
                )
              )}
            </div>
          </>
        ) : (
          <div className="text-sm text-gray-500">
            Select a mood to see details
          </div>
        )}
      </div>

      {/* Chosen input + analyze button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center items-center gap-3">
        <input
          type="text"
          readOnly
          value={selectedSubMoods.join(", ")}
          placeholder="Chosen Options"
          className="flex-1 bg-white w-full  border rounded-md px-3 py-2 shadow-sm"
        />

        <button className="mt-2 sm:mt-0 inline-flex items-center w-fit gap-2 bg-[#DCD0FF] px-4 py-2 rounded-md font-medium">
          Analyze Mood <FaMagnifyingGlass />
        </button>
      </div>
    </div>
  );
}
