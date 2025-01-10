import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/database';

class Book extends Model {
    public id!: number;
    public name!: string;
    public score!: number;
    public totalReviews!: number; 
} 
Book.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        score: { type: DataTypes.FLOAT, allowNull: true, defaultValue: -1 },
        totalReviews: { type: DataTypes.INTEGER, defaultValue: 0 }, 

    },
    { sequelize, modelName: 'book' }
);

export default Book;
