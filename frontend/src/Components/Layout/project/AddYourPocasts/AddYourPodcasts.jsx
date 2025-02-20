
import Card from "./Card";
import Youtube from "../../../../assets/ProjectPage/Youtube.svg";
import RSS from "../../../../assets/ProjectPage/RSSFeed.svg";
import Upload from "../../../../assets/ProjectPage/Upload.svg";
import DefaultBanner from "./DefaultBanner";
import TranscriptList from "./TranscriptList";
import Modal from "../../../ui/Modal";
import TextBox from "../../../ui/TextBox";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BACKENDURL } from "../../../../config/BackendUrl";
import { config } from "../../../../config/config";



function AddYourPodcasts() {
  const [filesData, setFiles] = useState([]);
  const { projectId } = useParams();

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/file/${projectId}`, config);
        console.log(response.data.data)
        setFiles(response.data.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, [projectId]);



  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [transcript, setTranscript] = useState("");
  const [title, setTitle] = useState("");

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${BACKENDURL}/api/file/${projectId}`,
        {
          fileName: name,
          fileDescription: transcript
        },
        config
      );
  
      if (response.data.success) {
        setFiles([...filesData, response.data.doc]);
        setName("");
        setTranscript("");
        setIsModalOpen(false);
      } else {
        console.error("Failed to create file:", response.data.message);
      }
    } catch (error) {
      console.error("Error creating file:", error);
    }
  };

  return (
    <div className=" flex flex-col w-full px-16  p-6">
      <h1 className="text-3xl font-bold mb-6 text-left">Add Podcast</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <Card
          title="RSS Feed"
          icon={RSS}
          onClick={() => {
            handleOpenModal();
            setTitle("Upload from RSS Feed");
          }}
          description="Lorem ipsum dolor sit. Dolor lorem sit."
        />
        <Card
          title="Youtube Video"
          icon={Youtube}
          onClick={() => {
            handleOpenModal();
            setTitle("Upload from Youtube video");
          }}
          description="Lorem ipsum dolor sit. Dolor lorem sit."
        />
        <Card
          title="Upload Files"
          icon={Upload}
          onClick={() => {
            handleOpenModal();
            setTitle("Upload from Files");
          }}
          description="Lorem ipsum dolor sit. Dolor lorem sit."
        />
      </div>
      {filesData.length === 0 ? (
         <DefaultBanner handleOpenModal={handleOpenModal} />
      ) : (
        <TranscriptList files={filesData} setFiles={setFiles} />
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={title}>
        <div className="flex flex-col gap-6">
          <TextBox label={"Name"} isEditable={true} setText={setName}></TextBox>
          <TextBox
            label={"Transcript"}
            isEditable={true}
            setText={setTranscript}
          ></TextBox>
          <div className="flex justify-end">
            <button
              className="bg-gray-700 hover:bg-gray-500 duration-200 text-white py-2 min-w-20 px-4 rounded-lg"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AddYourPodcasts;
