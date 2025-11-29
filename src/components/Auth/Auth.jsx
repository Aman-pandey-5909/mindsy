import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin, useRegister } from "../../hooks/useUser";
import toast from "react-hot-toast";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate: login, isPending: isLoggingIn } = useLogin();
  const { mutate: register, isPending: isRegistering } = useRegister();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      login(
        { email: formData.email, password: formData.password },
        {
          onSuccess: () => {
            toast.success("Logged in successfully");
            navigate("/dashboard");
          },
          onError: (err) => {
            toast.error(err.message);
          },
        }
      );
    } else {
      if (formData.password !== formData.confirmPassword) {
        return toast.error("Passwords do not match");
      }
      register(
        { name: formData.name, email: formData.email, password: formData.password },
        {
          onSuccess: () => {
            toast.success("Registered successfully");
            navigate("/dashboard");
          },
          onError: (err) => {
            toast.error(err.message);
          },
        }
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <p onClick={() => navigate("/")} className="text-sm text-gray-600 underline my-2 cursor-pointer">Home</p>

        {/* Toggle buttons */}
        <div className="flex justify-between gap-2 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`w-1/2 py-2 rounded-lg font-semibold transition ${
              mode === "login"
                ? "bg-accent-1 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setMode("signup")}
            className={`w-1/2 py-2 rounded-lg font-semibold transition ${
              mode === "signup"
                ? "bg-accent-1 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-text-black mb-6">
          {mode === "login" ? "Welcome Back" : "Create an Account"}
        </h2>

        {/* FORM */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          {/* Name (Signup Only) */}
          {mode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-white border rounded-lg shadow-sm focus:outline-none"
              required
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-white border rounded-lg shadow-sm focus:outline-none"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-white border rounded-lg shadow-sm focus:outline-none"
            required
            onChange={handleChange}
          />

          {/* Confirm password (Signup Only) */}
          {mode === "signup" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 bg-white border rounded-lg shadow-sm focus:outline-none"
              required
              onChange={handleChange}
            />
          )}

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 bg-navbar py-3 rounded-xl text-text-black font-semibold hover:scale-[1.02] transition"
            disabled={isLoggingIn || isRegistering}
          >
            {isLoggingIn || isRegistering
              ? "Loading..."
              : mode === "login"
              ? "Login"
              : "Signup"}
          </button>
        </form>

        {/* Footer redirect */}
        <p className="text-center text-sm text-gray-600 mt-6">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <span
                className="text-secondary-navbar font-semibold cursor-pointer hover:underline"
                onClick={() => setMode("signup")}
              >
                Signup
              </span>
            </>
          ) : (
            <>
              Already a member?{" "}
              <span
                className="text-secondary-navbar font-semibold cursor-pointer hover:underline"
                onClick={() => setMode("login")}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
