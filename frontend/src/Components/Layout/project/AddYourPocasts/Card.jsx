import React from "react";
import { ReactSVG } from "react-svg";

const Card = ({ title, icon, description ,onClick}) => {
  return (
    <div className="flex justify-around items-center py-8  p-4 bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer" onClick={() => (onClick())}>
      <div className="flex flex-col text-left">
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-gray-500  max-w-44 ">{description}</p>
      </div>
      <ReactSVG src={icon} className="mb-2" />
    </div>
  );
};

export default Card;
