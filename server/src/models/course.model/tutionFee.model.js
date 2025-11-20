const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const Course = require("./course.model");

const TutionFee = sequelize.define(
  "TutionFee",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "tuition_fees",
    timestamps: true,
  }
);

TutionFee.belongsTo(Course, { foreignKey: "courseId" });
Course.hasMany(TutionFee, { foreignKey: "courseId" });

module.exports = TutionFee;
