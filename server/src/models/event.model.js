const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Event = sequelize.define(
  "Event",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    thumbnail: { type: DataTypes.STRING, allowNull: false },
    start: { type: DataTypes.DATEONLY, allowNull: false },
    end: { type: DataTypes.DATEONLY, allowNull: false },
  },  
  {
    tableName: "events",
    timestamps: true,
  }
);

module.exports = Event;
