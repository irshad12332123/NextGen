const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Student = sequelize.define("Student", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  course: { type: DataTypes.STRING },
});

module.exports = Student;
