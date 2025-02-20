import React from "react";
import { ReactSVG } from "react-svg";
import CloudUpload from "../../../../assets/ProjectPage/CloudUpload.svg";

function DefaultBanner({ handleOpenModal }) {
  return (
    <div 
      className="flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg p-8 cursor-pointer"
      onClick={handleOpenModal}
    >
      <ReactSVG src={CloudUpload} className="mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Upload your first podcast</h2>
      <p className="text-gray-600 text-center">
        Click here to upload your first podcast and start creating content
      </p>
    </div>
  );
}

export default DefaultBanner;