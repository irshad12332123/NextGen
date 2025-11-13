const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Course = require("./course.model");

const CourseOverview = sequelize.define(
  "CourseOverview",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    tableName: "course_overviews",
    timestamps: true,
  }
);

CourseOverview.belongsTo(Course, { foreignKey: "courseId" });
Course.hasOne(CourseOverview, { foreignKey: "courseId" });

module.exports = CourseOverview;
