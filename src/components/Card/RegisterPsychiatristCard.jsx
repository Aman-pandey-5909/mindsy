import React, { useState } from "react";

const RegisterPsychiatristCard = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    Phone: "",
    experience: "",
    issuingAuthority: "",
    MedicalRegistration: "",
    speciality: "",
    fee: "",
    bio: "",
    profilePic: "",
    rating: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Psychiatrist Registered:", form);
  };

  return (
    <div className="w-[650px] mx-auto my-10 text-text-black">
      <h1 className="text-3xl font-semibold mb-6">Register a Psychiatrist</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-assessment-bg p-6 rounded-xl shadow flex flex-col gap-4"
      >
        {/* Name */}
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        />

        {/* Email */}
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.Phone}
          onChange={handleChange}
          type="number"
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        />

        <input
          name="issuing-authority"
          placeholder="Issuing Authority"
          value={form.issuingAuthority}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        />

        <input
          name="medical-registration"
          placeholder="Medical Registration Number / License ID"
          value={form.MedicalRegistration}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        />

        {/* Experience */}
        <input
          name="experience"
          type="number"
          placeholder="Experience (Years)"
          value={form.experience}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        />

        {/* Speciality */}
        <input
          name="speciality"
          placeholder="Specializations (ex: Anxiety, Stress)"
          value={form.speciality}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        />

        {/* Fee */}
        <select
          name="fee"
          value={form.fee}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        >
          <option value="">Fee Type</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>

        {/* Rating (optional) */}
        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating (optional)"
          value={form.rating}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        />

        {/* Profile Pic */}
        <input
          name="profilePic"
          placeholder="Profile Image URL"
          value={form.profilePic}
          onChange={handleChange}
          className="bg-white px-4 py-2 rounded-lg shadow border outline-none"
        />

        {/* Bio */}
        <textarea
          name="bio"
          placeholder="Short Bio"
          value={form.bio}
          onChange={handleChange}
          className="bg-white px-4 py-3 rounded-lg shadow border outline-none h-28 resize-none"
        />

        <button
          type="submit"
          className="bg-accent-1 px-5 py-2 rounded-lg text-text-black font-semibold hover:opacity-80 transition"
        >
          Register Psychiatrist
        </button>
      </form>
    </div>
  );
};

export default RegisterPsychiatristCard;