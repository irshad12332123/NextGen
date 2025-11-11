const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Student_Messages = sequelize.define("Student_Messages", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, allowUnique: true },
  message: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Student_Messages;
