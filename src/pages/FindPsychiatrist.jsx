import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCardComponent from "../components/Card/UserCardComponent";

// TEMP mock data (replace with API later)
const psychiatrists = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    exp: "0-4 yrs exp",
    rating: 4.3,
    reviews: 200,
    speciality: "Anxiety, Stress",
    fee: "Free",
  },
  {
    id: 2,
    name: "Dr. Devika Rathode",
    exp: "0-4 yrs exp",
    rating: 4.3,
    reviews: 200,
    speciality: "Anxiety, Stress",
    fee: "₹200 /-",
  },
];

const FindPsychiatrist = () => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("all");
  const [query, setQuery] = useState("");

  const filteredData = psychiatrists.filter((psy) => {
    const matchesQuery = psy.name.toLowerCase().includes(query.toLowerCase());
    const matchesSort =
      sortType === "free"
        ? psy.fee.toLowerCase().includes("free")
        : sortType === "paid"
        ? !psy.fee.toLowerCase().includes("free")
        : true;

    return matchesQuery && matchesSort;
  });

  return (
    <div className="w-full flex justify-center">
      <div className="w-[750px] mt-10">

        {/* TITLE */}
        <h1 className="text-3xl font-semibold text-text-black leading-tight">
          Schedule an Appointment with <br /> a Psychiatrist
        </h1>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search for Psychiatrists"
          className="w-full bg-white shadow px-4 py-2 rounded-md mt-5 border"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* SORT + MY APPOINTMENTS BTN */}
        <div className="flex justify-between items-center mt-4">

          {/* Sort Dropdown */}
          <select
            className="border bg-white px-3 py-2 rounded-md shadow-sm"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="all">Sort by</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>

          {/* My Appointments */}
          <button
            onClick={() => navigate("/my-appointments")}
            className="border border-gray-400 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition"
          >
            My Appointments
          </button>
        </div>

        {/* SMALL SEPARATOR LINE */}
        <div className="w-full h-px bg-gray-300 my-4" />

        {/* LIST OF PSYCHIATRISTS */}
        <div className="flex flex-col gap-4 pb-10">
          {filteredData.map((psy) => (
            <UserCardComponent
              key={psy.id}
              type="psychiatrist"
              data={psy}
              buttons={[
                {
                  label: "Book Appointment",
                  variant: "primary",
                  onClick: () => navigate(`/book/${psy.id}`),
                },
                {
                  label: "View Details",
                  variant: "ghost",
                  onClick: () => navigate(`/psychiatrist/${psy.id}`),
                },
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindPsychiatrist;
