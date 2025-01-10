import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/database';
import User from './User';
import Book from './Book';

class Borrow extends Model {
    public userId!: number;
    public bookId!: number;
    public borrowDate!: Date;
    public userScore!: number;
    public returnDate!: Date;   
 }
Borrow.init(
    {
        userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
        bookId: { type: DataTypes.INTEGER, references: { model: Book, key: 'id' } },
        borrowDate: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        userScore: { type: DataTypes.INTEGER, allowNull: true },
        returnDate: { type: DataTypes.DATE, allowNull: true },
        
    },
    { sequelize, modelName: 'borrow' }
);

User.belongsToMany(Book, { through: Borrow });
Book.belongsToMany(User, { through: Borrow });

export default Borrow;
