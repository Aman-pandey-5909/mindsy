import React from "react";

const AdminFeedback = () => {
  const feedbacks = [
    { name: "Aman", msg: "Loved the UI!", date: "12 Feb 2025" },
    { name: "Sneha", msg: "Helpful platform!", date: "10 Feb 2025" },
  ];

  return (
    <div className="w-[700px] mx-auto my-12">
      <h1 className="text-2xl font-semibold mb-5">User Feedback</h1>

      <div className="flex flex-col gap-4">
        {feedbacks.map((f, idx) => (
          <div
            key={idx}
            className="border bg-white rounded-xl shadow-sm p-4 flex flex-col"
          >
            <p className="font-semibold">{f.name}</p>
            <p className="text-gray-600">{f.msg}</p>
            <p className="text-sm text-gray-500 mt-1">{f.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFeedback;
