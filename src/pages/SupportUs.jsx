import React from "react";

const SupportUs = () => {
  return (
    <div className="max-w-[700px] mx-auto mt-14 text-text-black px-4 pb-20">

      <h1 className="text-3xl font-semibold text-center mb-6">
        Support MindsY ❤️
      </h1>

      <p className="text-center text-gray-700 mb-10 leading-relaxed">
        MindsY runs on a simple mission — make mental health support accessible and affordable
        for everyone.  
        <br />
        If our platform helps you, consider supporting us. Your contribution helps maintain servers,
        improve assessments, and fund mental-health awareness initiatives.
      </p>

      {/* CARD */}
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Choose a Support Option</h2>

        <div className="flex flex-col gap-3">

          <button className="bg-accent-1 px-4 py-3 rounded-lg text-text-black hover:opacity-90 transition">
            Donate ₹50
          </button>

          <button className="bg-accent-1 px-4 py-3 rounded-lg text-text-black hover:opacity-90 transition">
            Donate ₹100
          </button>

          <button className="bg-accent-1 px-4 py-3 rounded-lg text-text-black hover:opacity-90 transition">
            Donate ₹200
          </button>

          <button className="border border-gray-500 px-4 py-3 rounded-lg hover:bg-gray-100 transition">
            Custom Amount
          </button>
        </div>
      </div>

      <p className="text-center text-gray-600 text-sm mt-6">
        Thank you for helping us make mental-health support better 💙
      </p>
    </div>
  );
};

export default SupportUs;
