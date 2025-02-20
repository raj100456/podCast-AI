import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../../../config/BackendUrl";
import { config } from "../../../../config/config";

function TranscriptEditor() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");
  const { projectId, fileId } = useParams();
  const navigate = useNavigate();

  // ... existing state and other code

  const handleBackClick = () => {
    navigate(`/projects/${projectId}`);
  };

  useEffect(() => {
    fetchFileData();
  }, []);

  const fetchFileData = async () => {
    try {
      const response = await axios.get(`${BACKENDURL}/api/file/${projectId}/${fileId}`,config);
      setText(response.data.data.fileDescription);
    } catch (error) {
      console.error("Error fetching file data:", error);
    }
  };

  const handleEditClick = async () => {
    if (isEditing) {
      try {
        await axios.put(`${BACKENDURL}/api/file/${projectId}/${fileId}`, {
          fileDescription: text
        },config);
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating file:", error);
      }
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[90%] h-[90%] p-4">
        <div className="flex justify-between items-center pb-4">
          <div className="flex items-center">
            <button onClick={handleBackClick}  className="pl-2 pr-4 scale-125">
              <FaArrowLeft />
            </button>
            <div className="text-2xl font-medium tracking-wider">
              Edit Transcript
            </div>
          </div>
          <div className="flex justify-center items-center gap-8">
            {isEditing && (
              <button
                onClick={() => setIsEditing(false)}
                className=" min-w-36  text-red-600 border border-red-600 font-semibold rounded px-10 py-3 hover:bg-red-100 "
              >
                Cancel
              </button>
            )}
            <button
              onClick={handleEditClick}
              className=" min-w-36  text-white bg-gray-800 hover:bg-gray-900 font-semibold rounded px-10 py-3"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>
        <div className="border h-full border-gray-200  bg-white rounded-lg shadow-sm">
          <div className="text-purple-600 font-semibold text-lg pt-8 px-10 text-left">
            Speaker
          </div>
          <textarea
            className={`w-full h-[90%] p-4 px-10 border-none focus:outline-none resize-none overflow-y-scroll bg-white`}
            value={text}
            onChange={(e) => setText(e.target.value)}
            readOnly={!isEditing}
          />
        </div>
      </div>
    </div>
  );
}

export default TranscriptEditor;
