import express from 'express';
import { listBooks, getBookDetails, createBook } from '../controllers/bookController';

const router = express.Router();

router.get('/', listBooks);
router.get('/:id', getBookDetails);
router.post('/', createBook);

export default router;
