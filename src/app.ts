import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { initializeDatabase } from './database/database';
import userRoutes from './routes/userRoutes';
import bookRoutes from './routes/bookRoutes';
import borrowRoutes from './routes/borrowRoutes';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler);


app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/users', borrowRoutes);



const startServer = async () => {
    const dbInitialized = await initializeDatabase();
    if (dbInitialized) {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } else {
        process.exit(1);
    }
};

startServer();