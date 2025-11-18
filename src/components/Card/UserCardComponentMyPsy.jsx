import React from "react";
import { BiCalendar, BiUserCircle } from "react-icons/bi";

const UserCardComponentMypsy = ({ type, data }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      {/* LEFT SIDE: Avatar + Info */}
      <div className="flex gap-3">
        <BiUserCircle className="text-4xl text-gray-600" />

        <div className="flex flex-col">
          <h1 className="font-bold text-text-black">
            {data?.name || "Username"}
          </h1>

          {/* Psychiatrist extra */}

          <>
            <p className="text-sm text-gray-700">
              {data?.exp || "0-4 yrs exp"} | ⭐ {data?.rating || "4.3"} (
              {data?.reviews || "200"} reviews)
            </p>
            <p className="text-gray-600">
              {data?.speciality || "Anxiety, Stress"}
            </p>
            <p className="text-sm text-gray-500">{data?.fee || "Free"}</p>
          </>

          {/* Date */}
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <BiCalendar />
            {new Date().toLocaleDateString("en-GB") + " | " + "10:00 AM"}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: dynamic buttons */}
      <div className="flex flex-col gap-2">
        <span className="w-full flex items-center cursor-pointer justify-center px-4 py-3 bg-accent-1 rounded-xl shadow-sm border hover:bg-gray-50 transition">
          {data.status}
        </span>
        <button
          className="w-full flex items-center cursor-pointer justify-center px-4 py-3 bg-white rounded-xl shadow-sm border hover:bg-gray-50 transition"
          onClick={data.buttononclick}
        >
          <span className="text-gray-700 font-medium">View More</span>
        </button>
      </div>
    </div>
  );
};

export default UserCardComponentMypsy;
