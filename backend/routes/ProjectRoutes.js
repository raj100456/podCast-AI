import express from 'express';
import { verifyUser } from '../middleware/auth.middleware.js';
import { createProject , fetchProjects , fetchProject }from  '../controllers/ProjectController.js'

const router = express.Router();

//create project
router.post('/create',verifyUser,createProject)
router.get('/',verifyUser,fetchProjects)
router.get('/:projectId',verifyUser,fetchProject)

export default router;


// GET http://localhost:3000/project
// POST http://localhost:3000/project/create
// GET http://localhost:3000/project/:projectId //not useful

// POST http://localhost:3000/file/:projectId
// GET http://localhost:3000/file/:projectId
// GET http://localhost:3000/file/:projectId/:fileId
//PUT http://localhost:3000/file/:projectId/:fileId
//DEL http://localhost:3000/file/:projectId/:fileId