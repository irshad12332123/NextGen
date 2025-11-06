const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Admin = sequelize.define("Admin", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username_id: { type: DataTypes.INTEGER, allowNull: false, allowUnique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Admin;
