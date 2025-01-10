import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/database';

class User extends Model { }
User.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize, modelName: 'user' }
);

export default User;
