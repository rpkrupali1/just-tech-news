const {Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create user model
class User extends Model {}

//Define table columns and configuraion
User.init( 
    {
        //table column definitions
        //id column
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //user name column
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [4]
            }
        }
    },
    {
        // table configuration options
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;
