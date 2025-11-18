import React from "react";
import UserCardComponent from "../../components/Card/UserCardComponent";

const AdminAppointments = () => {
  const data = [
    {
      id: 1,
      name: "Aman → Dr. Priya Sharma",
      speciality: "Anxiety",
      fee: "Free",
      status: "Upcoming",
    },
  ];

  return (
    <div className="w-[750px] mx-auto my-12">
      <h1 className="text-2xl font-semibold mb-5">All Appointments</h1>

      <div className="flex flex-col gap-4">
        {data.map((a) => (
          <UserCardComponent
            key={a.id}
            type="appointment"
            data={a}
            buttons={[
              { label: a.status, variant: "status" },
              { label: "View Details" },
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminAppointments;
