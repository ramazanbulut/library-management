import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './database/database';
import userRoutes from './routes/userRoutes';
import bookRoutes from './routes/bookRoutes';
import borrowRoutes from './routes/borrowRoutes';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/users', borrowRoutes);

sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
});
