import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactSVG } from "react-svg";
import axios from "axios";
import { BACKENDURL } from "../../../../config/BackendUrl";
import { config } from "../../../../config/config";
import Logo from "../../../../assets/QuesLogoPurple.svg";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { HiPlus, HiOutlineSquare2Stack } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPencil } from "react-icons/tb";
import SidebarButton from "./SidebarButton";
import Divider from "../../../ui/Divider";


function Sidebar() {
  const { projectId } = useParams();
  const [currentScreen, setCurrentScreen] = useState("Add your Podcast(s)");
  const [userData, setUserData] = useState({ userName: "", email: "" });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BACKENDURL}/api/user/fetch`, config);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleButtonClick = (label) => {
    setCurrentScreen(label);
  };
  return (
    <div className="h-full pt-10 flex flex-col justify-between">
      <div>
        <ReactSVG src={Logo} className="scale-[0.65]" />
        <div className=" flex flex-col justify-center items-center mt-4">
          <Link to={`/projects/${projectId}`} className="w-full">
            <SidebarButton
              icon={<HiPlus />}
              label="Add your Podcast(s)"
              isSelected={currentScreen === "Add your Podcast(s)"}
              onClick={() => handleButtonClick("Add your Podcast(s)")}
            />
          </Link>
          <Link to="comingSoon" className="w-full">
            <SidebarButton
              icon={<TbPencil />}
              label="Create & Repurpose"
              isSelected={currentScreen === "Create & Repurpose"}
              onClick={() => handleButtonClick("Create & Repurpose")}
            />
          </Link>
          <Link to="comingSoon" className="w-full">
            <SidebarButton
              icon={<HiOutlineSquare2Stack />}
              label="Podcast Widget"
              isSelected={currentScreen === "Podcast Widget"}
              onClick={() => handleButtonClick("Podcast Widget")}
            />
          </Link>
          <Link to="comingSoon" className="w-full">
            <SidebarButton
              icon={<PiCurrencyDollarSimple />}
              label="Upgrade"
              isSelected={currentScreen === "Upgrade"}
              onClick={() => handleButtonClick("Upgrade")}
            />
          </Link>
          <Divider className={"mt-6"} />
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center mb-6">
          <Link to="comingSoon" className="w-full">
            <SidebarButton
              icon={<IoSettingsOutline />}
              label="Help"
              isSelected={currentScreen === "Help"}
              onClick={() => handleButtonClick("Help")}
            />
          </Link>
          <Divider className={"my-2"} />
          <Link to="accountSetting" className="w-full">
            <div
              className="w-full ml-8 p-6 flex justify-start items-center cursor-pointer"
              onClick={() => {
                handleButtonClick("Account");
              }}
            >
              <img
                src="https://avatar.iran.liara.run/public/?username=Scott"
                alt=""
                className="w-16 h-16"
              />
              <div className="text-left pl-3">
                <p className="max-w-40">{userData.userName}</p>
                <p className="max-w-40">{userData.email}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;