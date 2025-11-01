const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Event = sequelize.define("Event", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  thumbnail: { type: DataTypes.STRING, allowNull: false },
  start: { type: DataTypes.DATE, allowNull: false },
  end: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Event;
