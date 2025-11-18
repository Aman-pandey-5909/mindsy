import React from "react";

const MoodEditor = ({
  moods,
  addMood,
  removeMood,
  updateMoodLabel,
  updateMoodColor,
  addSubMood,
  updateSubMood,
  removeSubMood,
}) => {
  return (
    <section className="bg-white border shadow-sm rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Moods & Submoods</h2>

      <button
        className="bg-accent-1 px-4 py-2 rounded-md text-text-black text-sm mb-4"
        onClick={addMood}
      >
        + Add Mood
      </button>

      {moods.map((m, mIndex) => (
        <div key={mIndex} className="mb-6 border-b pb-4">

          <div className="flex items-center gap-3 mb-2">
            <input
              className="border px-3 py-2 rounded-md w-full"
              value={m.Label}
              onChange={(e) => updateMoodLabel(mIndex, e.target.value)}
            />
            <button className="text-red-500 text-sm" onClick={() => removeMood(mIndex)}>
              Remove
            </button>
          </div>

          <input
            type="color"
            value={m.Color}
            onChange={(e) => updateMoodColor(mIndex, e.target.value)}
            className="w-[80px] h-[40px] cursor-pointer mt-2 mb-4"
          />

          <div className="ml-4 flex flex-col gap-2">
            {m.sublabels.map((s, sIndex) => (
              <div key={sIndex} className="flex gap-2 items-center">
                <input
                  className="border px-3 py-1 rounded-md w-[300px]"
                  value={s}
                  onChange={(e) => updateSubMood(mIndex, sIndex, e.target.value)}
                />
                <button className="text-red-500 text-xs" onClick={() => removeSubMood(mIndex, sIndex)}>
                  Remove
                </button>
              </div>
            ))}

            <button className="text-blue-600 text-sm mt-2" onClick={() => addSubMood(mIndex)}>
              + Add Submood
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MoodEditor;
