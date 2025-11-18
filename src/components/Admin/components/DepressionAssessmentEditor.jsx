import React from "react";

const DepressionAssessmentEditor = ({
  depressionQs,
  addQuestion,
  removeQuestion,
  updateQuestion,
  addOption,
  updateOption,
  removeOption,
}) => {
  return (
    <section className="bg-white border shadow-sm rounded-xl p-6 mb-10">
      <h2 className="text-xl font-semibold mb-4">Depression Assessment Questions</h2>

      <button
        className="bg-accent-1 px-4 py-2 rounded-md text-text-black text-sm mb-4"
        onClick={addQuestion}
      >
        + Add Question
      </button>

      {depressionQs.map((q, qIndex) => (
        <div key={qIndex} className="mb-6 border-b pb-4">

          <div className="flex items-center gap-3 mb-2">
            <input
              className="border px-3 py-2 rounded-md w-full"
              value={q.question}
              onChange={(e) => updateQuestion(qIndex, e.target.value)}
            />
            <button className="text-red-500 text-sm" onClick={() => removeQuestion(qIndex)}>
              Remove
            </button>
          </div>

          <div className="ml-4 flex flex-col gap-2">
            {q.options.map((opt, oIndex) => (
              <div key={oIndex} className="flex gap-2 items-center">
                <input
                  className="border px-3 py-1 rounded-md w-[300px]"
                  value={opt}
                  onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                />
                <button className="text-red-500 text-xs" onClick={() => removeOption(qIndex, oIndex)}>
                  Remove
                </button>
              </div>
            ))}

            {q.options.length < 4 && (
              <button className="text-blue-600 text-sm" onClick={() => addOption(qIndex)}>
                + Add Option
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DepressionAssessmentEditor;
