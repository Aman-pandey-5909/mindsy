import { useNavigate } from "react-router-dom";

export default function Sidebar({ type, menuItems }) {
  const navigate = useNavigate();
  return (
    <div className="w-64 sticky h-screen top-0 left-0 bg-[#EAEAEA] shadow-lg border-r px-4 py-6 flex flex-col space-y-4">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-700 mb-3 text-center">
        {type} Options
      </h2>

      {/* Buttons */}
      <div className="flex flex-col space-y-3">
        {menuItems.map((item, i) => (
          <button
            key={i}
            className="w-full flex items-center cursor-pointer justify-center px-4 py-3 bg-white rounded-xl shadow-sm border hover:bg-gray-50 transition"
            onClick={() => (navigate(item.path))}
          >
            <span className="text-gray-700 font-medium">{item.label}</span> 
          </button>
        ))}
      </div>
    </div>
  );
}
