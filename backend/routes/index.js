import express from "express"
import ProjectRoutes from "./ProjectRoutes.js"
import FileRoutes from "./FileRoutes.js"
import AuthRoutes from "./AuthRoutes.js"
import UserRoutes from "./UserRoutes.js"

const router=express.Router();

router.use('/project',ProjectRoutes);
router.use('/auth', AuthRoutes);
router.use('/file',FileRoutes);
router.use('/user',UserRoutes)

export default router;