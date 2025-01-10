import express from 'express';
import { listUsers, getUserDetails, createUser } from '../controllers/userController';

const router = express.Router();

router.get('/', listUsers);
router.get('/:id', getUserDetails);
router.post('/', createUser);

export default router;
