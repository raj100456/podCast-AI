import React from "react";
import defaultSvg from "../../../assets/Home_screen.svg";
import { ReactSVG } from "react-svg";
import CreateProjectButton from "./CreateProjectButton";

function Default({ handleOpenModal }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white gap-4">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-purple-600">
        Create a New Project
      </h1>

      {/* Image */}
      <ReactSVG src={defaultSvg} className="mt-8" />

      {/* Description */}
      <p className="text-center text-gray-600 max-w-2xl mt-4 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in.
      </p>

      {/* Button */}
      <CreateProjectButton onClick={handleOpenModal} />
    </div>
  );
}

export default Default;
