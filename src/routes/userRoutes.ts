import express from 'express';
import { listUsers, getUserDetails, createUser } from '../controllers/userController';
import { body } from 'express-validator';
import { validate } from '../middleware/validate';

const router = express.Router();

router.get('/', listUsers);
router.get('/:id', getUserDetails);
router.post('/', [
    body('name')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Book name is required'),
    validate
], createUser);

export default router;
