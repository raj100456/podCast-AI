import React from "react";

function SidebarButton({ icon, label, isSelected,onClick }) {
  return (
    <button
        onClick={onClick}
      className={`flex w-[90%] pl-12  items-center p-4 mb-2 rounded-lg transition-colors duration-200 ${
        isSelected
          ? "bg-purple-100 text-purple-700"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <span className="scale-125">{icon}</span>
      <div className="ml-3 text-lg font-medium">{label}</div>
    </button>
  );
}

export default SidebarButton;
