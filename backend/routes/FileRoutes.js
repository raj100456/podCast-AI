

import express from 'express';
import { verifyUser } from '../middleware/auth.middleware.js';
import { createFile , fetchFiles , fetchFile , editFile , deleteFile } from  '../controllers/FileController.js'

const router = express.Router();



//post 
router.post('/:projectId', verifyUser, createFile)
//get
router.get('/:projectId', verifyUser, fetchFiles)
router.get('/:projectId/:fileId', verifyUser, fetchFile)

//put 
router.put('/:projectId/:fileId', verifyUser, editFile)

//delete
router.delete('/:projectId/:fileId', verifyUser, deleteFile)

export default router;