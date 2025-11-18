import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import mindsy from "../../assets/mindsylogo.png";
import { useNavigate } from "react-router-dom";
import { GrDashboard } from "react-icons/gr";

const Navbar = () => {
  const navigate = useNavigate();
  const [openServices, setOpenServices] = useState(false);

  return (
    <nav className="w-full sticky top-0 flex justify-between px-10 bg-navbar py-2 z-50">
      <img onClick={() => navigate("/")} src={mindsy} alt="mindsy logo" className="cursor-pointer" />

      <ul className="flex items-center cursor-pointer text-white font-semibold text-shadow-[0_1px_0_rgb(0_0_0/40%)] gap-8 relative">

        <li onClick={() => navigate("/")} className="hover:underline">
          Home
        </li>

        <li onClick={() => navigate("/about")} className="hover:underline">
          About Us
        </li>

        {/* QUICK SERVICES DROPDOWN */}
        <li
          onClick={() => setOpenServices(!openServices)}
          className="hover:underline relative"
        >
          Quick Services

          {openServices && (
            <div className="absolute top-7 left-0 bg-white text-text-black shadow-lg rounded-lg px-4 py-3 w-48 flex flex-col gap-3 z-50">

              <p
                onClick={() => {
                  navigate("/assessment");
                  setOpenServices(false);
                }}
                className="hover:bg-gray-200 px-2 py-1 rounded-md"
              >
                Assessments
              </p>

              <p
                onClick={() => {
                  navigate("/mindsybot");
                  setOpenServices(false);
                }}
                className="hover:bg-gray-200 px-2 py-1 rounded-md"
              >
                MindsY Bot
              </p>

              <p
                onClick={() => {
                  navigate("/supportus");
                  setOpenServices(false);
                }}
                className="hover:bg-gray-200 px-2 py-1 rounded-md"
              >
                Support Us
              </p>
            </div>
          )}
        </li>

        <li onClick={() => navigate("/mindsybot")} className="hover:underline">
          Chatbot
        </li>

        <li onClick={() => navigate("/feedback")} className="hover:underline">
          Feedback
        </li>

        <li onClick={() => navigate("/dashboard")} className="hover:underline">
          <GrDashboard className="text-xl" />
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
