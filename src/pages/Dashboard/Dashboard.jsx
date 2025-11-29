import React from "react";
import { useUserStore } from "../../store/useUserStore";
import UserCardComponent from "../../components/Card/UserCardComponent";
import { useAppointment } from "../../hooks/useAppointment";
import { useDiary } from "../../hooks/useDiary";

const Dashboard = () => {
  const { user } = useUserStore((s) => s);
  const { data: appointments } = useAppointment();
  const { data: diaries } = useDiary();

  // temporary mock values (replace when backend ready)
  const totalAppointments = appointments?.length ?? 0;
  const totalDiaries = diaries?.length ?? 0;

  return (
    <div className="p-6 my-10 text-text-black">

      {/* Welcome Message */}
      <h1 className="text-2xl font-semibold mb-6">
        Hello, {user?.name || "User"} 👋
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Total Appointments */}
        <div className="bg-navbar rounded-xl p-6 shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold">Total Appointments</h2>
          <p className="text-3xl font-bold mt-2">{totalAppointments}</p>
        </div>

        {/* Total Diary Entries */}
        <div className="bg-accent-1 rounded-xl p-6 shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold">Total Diary Entries</h2>
          <p className="text-3xl font-bold mt-2">{totalDiaries}</p>
        </div>

      </div>
      
    </div>
  );
};

export default Dashboard;
