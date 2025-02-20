import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../../../config/BackendUrl";
import { config } from "../../../../config/config"
import { formatDate } from "../../../../utils/dataFormat";
const TranscriptList = ({ files,setFiles }) => {
  const { projectId } = useParams();
  const handleDelete = async (fileId) => {
    try {
      await axios.delete(`${BACKENDURL}/api/file/${projectId}/${fileId}`, config);
     setFiles(files.filter(file => file._id !== fileId));
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Your Files</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200 rounded-2xl">
            <th className="px-4  py-4  text-sm font-medium text-gray-700 rounded-s-xl">
              No.
            </th>
            <th className="text-sm font-medium text-gray-700">Name</th>
            <th className="text-sm font-medium text-gray-700">
              Upload Date & Time
            </th>
            <th className="text-sm font-medium text-gray-700">Status</th>
            <th className="text-sm font-medium text-gray-700 rounded-e-xl">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="">
          {files.map((file, index) => (
            <tr key={file._id} className="border-b ">
              <td className="px-4 py-4 text-sm text-gray-700">{index + 1}</td>
              <td className="text-sm text-gray-700">{file.fileName}</td>
              <td className="text-sm text-gray-700">{formatDate(file.createdAt)}</td>
              <td className="px-4  py-4">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-200 text-purple-700">
                  {file.status}
                </span>
              </td>
              <td className="px-4  py-4">
                <Link to={`file/${file._id}`}>
                  <button className="text-blue-500 hover:underline mr-4">
                    View
                  </button>
                </Link>
                <button className="text-red-500 hover:underline" 
                onClick={() => handleDelete(file._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TranscriptList;