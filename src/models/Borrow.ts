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
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' }, allowNull: false},
        bookId: { type: DataTypes.INTEGER, references: { model: Book, key: 'id' }, allowNull: false},
        borrowDate: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        userScore: { type: DataTypes.INTEGER, allowNull: true },
        returnDate: { type: DataTypes.DATE, allowNull: true },
    },
    { sequelize, modelName: 'borrow', timestamps: true }
);

Borrow.belongsTo(Book);
Borrow.belongsTo(User);
Book.hasMany(Borrow);
User.hasMany(Borrow);

export default Borrow;
