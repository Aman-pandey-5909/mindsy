import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCreateAppointment } from "../hooks/useAppointment";
import toast from "react-hot-toast";

const BookAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { mutate, isPending } = useCreateAppointment();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time) {
      return toast.error("Please select a date and time");
    }
    mutate(
      { psychiatristId: id, date, time },
      {
        onSuccess: () => {
          toast.success("Appointment booked successfully");
          navigate("/my-appointments");
        },
        onError: (err) => {
          toast.error(err.message);
        },
      }
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[750px] mt-10">
        <h1 className="text-3xl font-semibold text-text-black leading-tight">
          Book an Appointment
        </h1>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 w-full bg-accent-1 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-accent-1-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-1"
            disabled={isPending}
          >
            {isPending ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
