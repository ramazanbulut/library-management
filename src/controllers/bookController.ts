import { Request, Response } from 'express';
import Book from '../models/Book';
import User from '../models/User';
import Borrow from '../models/Borrow';

export const listBooks = async (_req: Request, res: Response) => {
    const books = await Book.findAll();
    res.json(books);
};

export const getBookDetails = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByPk(req.params.id, {
            include: [
                {
                    model: Borrow,
                    include: [{ model: User }]
                }
            ]
        });

        if (!book) {
            res.status(404).json({ message: 'Book not found' });
            return;
        }

        res.json(book);
    } catch (error) {
        console.error('Error fetching book details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createBook = async (req: Request, res: Response) => {
    const { name } = req.body;
    const book = await Book.create({ name });
    res.status(201).json(book);
};
