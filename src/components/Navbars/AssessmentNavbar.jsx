import { useState, useRef, useEffect } from "react";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import mindsy from "../../assets/mindsylogo.png";

const AssessmentNavbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full px-10 bg-secondary-navbar py-2 relative">
      <ul className="flex items-center justify-between text-white font-semibold text-shadow-[0_1px_0_rgb(0_0_0/40%)] gap-8">
        
        {/* Back */}
        <li onClick={() => navigate("/assessment")} className="hover:underline cursor-pointer">
          Back
        </li>

        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          src={mindsy}
          alt="mindsy logo"
          className="h-10 cursor-pointer"
        />

        {/* Settings */}
        <li
          className="hover:underline cursor-pointer relative"
          onClick={() => setOpen(!open)}
          ref={dropdownRef}
        >
          <CiSettings className="text-xl" />

          {/* DROPDOWN */}
          {open && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 text-gray-700 z-50 border border-gray-200">
              <button
                onClick={() => navigate("/assessment")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-lg"
              >
                Take another assessment
              </button>

              <button
                onClick={() => navigate("/")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-lg"
              >
                Exit Assessment
              </button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default AssessmentNavbar;
