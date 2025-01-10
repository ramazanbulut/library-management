import express from 'express';
import { borrowBook, returnBook } from '../controllers/borrowController';
import { body } from 'express-validator';
import { validate } from '../middleware/validate';

const router = express.Router();

// Borrow a book
router.post('/:id/borrow/:bookId', borrowBook);

// Return a book with score validation
router.post(
    '/:id/return/:bookId',
    body('score').isInt({ min: 1, max: 10 }).withMessage('Score must be between 1 and 10'),
    validate,
    returnBook
);

export default router;
