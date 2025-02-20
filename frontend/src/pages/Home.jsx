
import Navbar from "../Components/Layout/home/Navbar";
import Default from "../Components/Layout/home/Default";
import Modal from "../Components/ui/Modal";
import Button from "../Components/ui/Button";
import ProjectList from "../Components/Layout/home/ProjectList";
import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { BACKENDURL } from "../config/BackendUrl";
import { config } from "../config/config";




function Home() {
  const { user } = useAuth();
  const[newProjectName,setNewProjectName]=useState("")

  const handleCreateProject = async () => {

    if (!newProjectName.trim()) {
      return;
    }
  
    try {
      const response = await axios.post(`${BACKENDURL}/api/project/create`, { projectName: newProjectName }, config);
      setProjects([...projects, response.data.doc]);
      setNewProjectName('');
      handleCloseModal();
    } catch (error) {
      console.error('Error creating project:', error);
     
    }
  };

  const[projects,setProjects]=useState([])

        useEffect(() => {
        const fetchProjects = async () => {
            if (user) {
                try {
                    const response = await axios.get(`${BACKENDURL}/api/project`, config);
                   
                    setProjects(response.data.data)
                } catch (error) {
                    console.error('Error fetching projects:', error);
                }
            }
        };

        fetchProjects();
    }, [user]);
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="h-screen">
        <div>
          <Navbar />
        </div>
        <div className="h-[90%]">
          <div className="h-full">
            {projects.length === 0 ? (
              <div className="h-full flex justify-center items-center">
                <Default handleOpenModal={handleOpenModal} />
              </div>
            ) : (
              <ProjectList projects={projects} handleOpenModal={handleOpenModal} />
            )}
            <Modal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              title={"Create projects"}
            >
              <div>
                <input
                  onChange={(e) => setNewProjectName(e.target.value)}
                  value={newProjectName}
                  type="text"
                  placeholder="Enter Project Name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <p className="text-red-600 text-sm mt-2 text-left">
                  Project Name Can't be empty
                </p>
              </div>
              <div className="flex justify-end items-center">
                <button
                  onClick={handleCloseModal}
                  className="mr-4 mt-6 text-red-500"
                >
                  Cancel
                </button>
                <Button className={"py-2"} onClick={handleCreateProject}>Create</Button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  