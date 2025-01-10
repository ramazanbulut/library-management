import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err.stack || err);

    res.status(err.status || 500).json({
        error: 'Internal Server Error',
        message: err.message || 'Something went wrong',
    });
};
