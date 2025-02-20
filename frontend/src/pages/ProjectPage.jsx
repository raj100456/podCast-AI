import React, { useState } from "react";
import Sidebar from "../Components/Layout/project/SideBar/Sidebar";
import ProjectNavbar from "../Components/Layout/project/ProjectNavbar/ProjectNavbar";

import { Outlet } from "react-router-dom";

function ProjectPage() {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[20%] h-full bg-[#ffffff] drop-shadow-lg">
        <Sidebar />
      </div>
      <div className="w-[80%] h-full bg-[#f9f9f9]">
        <div className="h-[10%]">
          <ProjectNavbar />
        </div>
        <div className="h-[90%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
