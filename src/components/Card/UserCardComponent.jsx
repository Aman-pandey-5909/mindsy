import React from "react";
import { BiCalendar, BiUserCircle } from "react-icons/bi";

const UserCardComponent = ({ type, data, buttons = [] }) => {
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
          {type === "psychiatrist" && (
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
          )}

          {/* Date */}
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <BiCalendar />
            {new Date().toLocaleDateString("en-GB")}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: dynamic buttons */}
      <div className="flex flex-col gap-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={btn.onClick}
            className={`px-4 py-2 rounded-lg text-sm shadow 
              ${
                btn.variant === "primary"
                  ? "bg-accent-1 text-text-black hover:opacity-80"
                  : btn.variant === "danger"
                  ? "bg-red-400 text-white hover:bg-red-500"
                  : btn.variant === "status"
                  ? "bg-blue-100 text-blue-700 cursor-default"
                  : "border border-gray-500 hover:bg-gray-100"
              }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserCardComponent;
