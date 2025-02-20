import mongoose from "mongoose";
import Project from "../models/projectSchema.js";


export const createProject = async (req, res) => {
    try {
      const { userId } = req?.decodedUser;
  
      //destructuring elements
      const { projectName } = req.body;
  
      const doc = await Project.create({
        userId: userId,
        projectName: projectName,
      });
  
      res.status(200).json({ success: true, message: "project created", doc });
    } catch (error) {
      console.error(`Error in project controlller :`, error);
      throw new Error(`Failed in project Controller: ${error.message}`);
    }
  };
  
  // fetching projects
  export const fetchProjects = async (req, res) => {
    try {
      const { userId } = req?.decodedUser;
      console.log("here to fetch")
  
      const projectData = await Project.find({
        userId: userId,
      });
  
      res
        .status(200)
        .json({ success: true, message: "project fetched", data: projectData });
    } catch (error) {
      console.error(`Error in project controlller :`, error);
      throw new Error(`Failed in project Controller: ${error.message}`);
    }
  };
  
  // fetching projects
  export const fetchProject = async (req, res) => {
    try {
      const { projectId } = req.params;
  
      const projectData = await Project.findOne({
        _id: projectId,
      });
  
      res
        .status(200)
        .json({ success: true, message: "project fetched", data: projectData });
    } catch (error) {
      console.error(`Error in project controlller :`, error);
      throw new Error(`Failed in project Controller: ${error.message}`);
    }
  };
  