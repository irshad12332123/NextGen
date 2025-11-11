const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Feedback = sequelize.define("Feedback", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Feedback;
