const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const Course = require("./course.model");

const ProgramDetail = sequelize.define(
  "ProgramDetail",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "program_details",
    timestamps: true,
  }
);

ProgramDetail.belongsTo(Course, { foreignKey: "courseId" });
Course.hasMany(ProgramDetail, { foreignKey: "courseId" });

module.exports = ProgramDetail;
