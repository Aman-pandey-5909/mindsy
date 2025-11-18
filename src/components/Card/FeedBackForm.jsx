import React, { useState } from "react";

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", form);
  };

  return (
    <div className="w-[600px] mx-auto mt-10 text-text-black">
      <h1 className="text-3xl font-semibold mb-5">Share Your Feedback</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-assessment-bg p-6 rounded-xl shadow flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        />

        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        >
          <option value="">Rate your experience</option>
          <option value="1">⭐ 1 - Very Poor</option>
          <option value="2">⭐ 2 - Poor</option>
          <option value="3">⭐ 3 - Okay</option>
          <option value="4">⭐ 4 - Good</option>
          <option value="5">⭐ 5 - Excellent</option>
        </select>

        <textarea
          name="message"
          placeholder="Write your feedback..."
          value={form.message}
          onChange={handleChange}
          className="bg-white px-4 py-3 rounded-lg shadow border h-32 resize-none outline-none"
        />

        <button
          type="submit"
          className="bg-accent-1 px-5 py-2 rounded-lg text-text-black font-semibold hover:opacity-80 transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;