import React from "react";

function IconButton({ icon, onClick }) {
  return (
    <button
      className={`w-14 h-14 flex items-center justify-center rounded-full border border-gray-300 transition-colors duration-200 hover:bg-gray-200`}
     onClick={onClick}
    >
      <span className="text-2xl">{icon}</span>
    </button>
  );
}
export default IconButton;