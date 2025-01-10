import { Request, Response } from 'express';
import Book from '../models/Book';

export const listBooks = async (_req: Request, res: Response) => {
    const books = await Book.findAll();
    res.json(books);
};

export const getBookDetails = async (req: Request, res: Response) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
    }
    
    res.json(book);
};

export const createBook = async (req: Request, res: Response) => {
    const { name } = req.body;
    const book = await Book.create({ name });
    res.status(201).json(book);
};
