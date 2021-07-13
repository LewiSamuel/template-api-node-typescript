// IMPORT MODULES
import db from '../lib/connect'
import {DataTypes} from 'sequelize';

// DEFINE ATTRIBUTES 
const User = db.sequelize.define('User',{
    Name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false,
    },
    Email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    Password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: false,
    },
    Telefone: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: false,
    },
    Obs: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: false,
    },
    DataNasc: {
        type: DataTypes.DATE,
        allowNull: true,
        unique: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        unique: false,
    },
    Linkedin: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: false,
    },
});

User.sync();

export default User;