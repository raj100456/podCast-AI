import React from "react";
import { formatDate } from "../../../utils/dataFormat";

function ProjectCard({ title, episodes, lastedited, onClick }) {
  // Function to format the dat
  

  return (
    <div className=" max-w-72 flex items-center bg-white border border-gray-300 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300" onClick={() => (onClick())}>
      {/* Project Icon */}
      <img src={`https://avatar.iran.liara.run/username?username=${title}&background=f7a01d&color=FFFFFF`} alt="" className="w-16 h-16 flex items-center justify-center bg-[#f7a01d] rounded-lg " />

      {/* Project Info */}
      <div className="ml-4 text-left flex flex-col">
        <h3 className="text-xl font-semibold text-purple-700">
          {title}
        </h3>
        <p className="text-gray-600 text-xs">{episodes} Episodes</p>
        <p className="text-gray-400 text-sm mt-2">{formatDate(lastedited)}</p>
      </div>
    </div>
  );
}

export default ProjectCard;