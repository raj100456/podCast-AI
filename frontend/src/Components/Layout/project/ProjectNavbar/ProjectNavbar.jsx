import React from "react";
import IconButton from "./IconButton";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { useAuth } from "../../../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import BreadCrumb from "./BreadCrumb";

function ProjectNavbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="h-full flex justify-between items-center px-16">
      <BreadCrumb />
      <div className="flex justify-center items-center gap-4">
        <IconButton
          icon={<IoMdNotificationsOutline />}
          hoverColor="bg-gray-700"
        />
        <IconButton
          icon={<TbLogout className="text-red-500 ml-1" />}
          hoverColor="bg-red-500"
          onClick={async () => {
            await logout()
            console.log("Logout clicked");
            navigate("/login");
          }}
        />
      </div>
    </div>
  );
}

export default ProjectNavbar;