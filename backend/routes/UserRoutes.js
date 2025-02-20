import express from 'express';
import { verifyUser } from '../middleware/auth.middleware.js';
import { fetchUser, updateUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/fetch', verifyUser, fetchUser);
router.put('/update', verifyUser, updateUser);

export default router;