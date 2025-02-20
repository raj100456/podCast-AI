import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

function CreateProjectButton({onClick}) {
  return (
    <button onClick={onClick} className="bg-black hover:bg-slate-600 rounded-lg px-2">
      <div className="flex items-center text-white p-3 text-xl gap-2 justify-center">
        <FaCirclePlus className="w-6 h-6"/>
        Create New Project
      </div>
    </button>
  );
}

export default CreateProjectButton;
