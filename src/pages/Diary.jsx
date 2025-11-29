import React, { useState, useEffect } from "react";
import { useDiaryStore } from "../store/useDiaryStore";
import UserCardComponent from "../components/Card/UserCardComponent";
import { AiOutlineCalendar } from "react-icons/ai";
import { useDiary, useCreateDiary } from "../hooks/useDiary";

const Diary = () => {
  const { data: entries } = useDiary();
  const { mutate } = useCreateDiary();

  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentEntry, setCurrentEntry] = useState("");

  // Load entry for selected date
  useEffect(() => {
    if (entries) {
      const found = entries.find((e) => e.date === selectedDate);
      setCurrentEntry(found ? found.text : "");
    }
  }, [selectedDate, entries]);

  const isEditable = selectedDate === today;

  const handleSave = () => {
    if (!currentEntry.trim()) return;

    mutate({ date: selectedDate, text: currentEntry });
  };

  // Previous Entries (exclude today)
  const previousEntries =
    entries
      ?.filter((e) => e.date !== today)
      .sort((a, b) => (a.date < b.date ? 1 : -1)) ?? [];

  return (
    <div className="w-[750px] mx-auto mt-10 text-text-black">

      {/* Page Title */}
      <h1 className="text-3xl font-semibold mb-6">Your Diary</h1>

      {/* Date Selector */}
      <div className="flex items-center gap-3 mb-4">
        <AiOutlineCalendar className="text-xl" />
        <input
          type="date"
          className="bg-white shadow px-3 py-2 rounded-md border"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Entry Card */}
      <div className="bg-[#F3EBEB] p-5 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-3">
          {isEditable ? "Today's Entry" : `Entry for ${selectedDate}`}
        </h2>

        <textarea
          className={`w-full h-40 bg-white p-3 rounded-md border shadow resize-none ${
            !isEditable ? "opacity-60 cursor-not-allowed" : ""
          }`}
          placeholder="Write your thoughts here..."
          value={currentEntry}
          onChange={(e) => setCurrentEntry(e.target.value)}
          disabled={!isEditable}
        />

        {/* Save button ONLY if editable (today's entry) */}
        {isEditable && (
          <button
            onClick={handleSave}
            className="mt-3 bg-accent-1 text-text-black px-6 py-2 rounded-lg hover:opacity-80 transition-all shadow"
          >
            Save Entry
          </button>
        )}
      </div>

      {/* Previous Entries */}
      <h2 className="text-xl font-semibold mb-3">Previous Entries</h2>

      <div className="flex flex-col gap-4 pb-10">
        {previousEntries.length === 0 ? (
          <p className="text-gray-600 text-sm">No previous entries found.</p>
        ) : (
          previousEntries.map((entry, index) => (
            <UserCardComponent
              key={index}
              type="diary"
              data={{
                name: "Diary Entry",
                speciality: entry.text.slice(0, 40) + "...",
                date: entry.date,
              }}
              buttons={[]} // ⭐ No edit/delete buttons
            />
          ))
        )}
      </div>

    </div>
  );
};

export default Diary;