import React from "react";
import CreateProjectButton from "./CreateProjectButton";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";

function ProjectList({ projects, handleOpenModal }) {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="px-16">
      <div className="flex justify-between items-center mt-16">
        <div className="text-4xl font-bold text-purple-600 text-left">
          Projects
        </div>
        <CreateProjectButton onClick={handleOpenModal} />
      </div>
      <div className="mt-16 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.projectName}
            episodes={project.fileCount}
            lastedited={project.updatedAt}
            onClick={() => handleProjectClick(project._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
