import express from 'express';
import { listBooks, getBookDetails, createBook } from '../controllers/bookController';
import { body } from 'express-validator';
import { validate } from '../middleware/validate';


const router = express.Router();

router.get('/', listBooks);
router.get('/:id', getBookDetails);
router.post('/', [
    body('name')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Book name is required'),
    validate
], createBook);


export default router;
