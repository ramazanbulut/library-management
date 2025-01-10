import { Request, Response } from 'express';
import User from '../models/User';
import Book from '../models/Book';

export const listUsers = async (_req: Request, res: Response) => {
    const users = await User.findAll();
    res.json(users);
};

export const getUserDetails = async (req: Request, res: Response) => {
    const user = await User.findByPk(req.params.id, {
        include: { model: Book },
    });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
    const { name } = req.body;
    const user = await User.create({ name });
    res.status(201).json(user);
};
