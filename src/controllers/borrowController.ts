import { Request, Response } from 'express';
import User from '../models/User';
import Book from '../models/Book';
import Borrow from '../models/Borrow';

export const borrowBook = async (req: Request, res: Response) => {
    const { id: userId, bookId } = req.params;

    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    // Check if the book exists
    const book = await Book.findByPk(bookId);
    if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return
    }

    // Check if the book is already borrowed
    const existingBorrow = await Borrow.findOne({ where: { bookId } });
    if (existingBorrow) {
        res.status(400).json({ message: 'Book is already borrowed' });
        return;
    }

    // Create borrow record
    await Borrow.create({ userId, bookId, borrowDate: new Date() });
    res.status(204).send(); // No Content
};

export const returnBook = async (req: Request, res: Response) => {
    const { id: userId, bookId } = req.params;
    const { score } = req.body;

    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    // Check if the book exists
    const book = await Book.findByPk(bookId);
    if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
    }

    // Check if the user borrowed the book
    const borrow = await Borrow.findOne({
        where: { userId, bookId, returnDate: null }, // Only active borrows
    });
    if (!borrow) {
        res.status(400)
        .json({ message: 'Book was not borrowed by this user or already returned' });
        return;
    }


    borrow.returnDate = new Date();
    borrow.userScore = score;
    await borrow.save();

    // Update book score and review count
    book.score =
        (book.score * book.totalReviews + score) / (book.totalReviews + 1); // Calculate new average
    book.totalReviews += 1; // Increment review count
    await book.save();

    res.status(204).send(); // No Content
};

