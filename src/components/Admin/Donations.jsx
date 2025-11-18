import React from "react";

const AdminDonations = () => {
  const donations = [
    { name: "Aman", amount: 200, date: "14 Feb 2025" },
    { name: "Riya", amount: 500, date: "13 Feb 2025" },
  ];

  return (
    <div className="w-[700px] mx-auto my-12">
      <h1 className="text-2xl font-semibold mb-5">Donations</h1>

      <div className="flex flex-col gap-4">
        {donations.map((d, idx) => (
          <div key={idx} className="bg-white shadow-sm border rounded-xl p-4">
            <p className="font-semibold">{d.name}</p>
            <p className="text-gray-700">Amount: ₹{d.amount}</p>
            <p className="text-sm text-gray-500">{d.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDonations;
