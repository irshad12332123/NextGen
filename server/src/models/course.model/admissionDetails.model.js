const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const Course = require("./course.model");

const AdmissionDetail = sequelize.define(
  "AdmissionDetail",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "admission_details",
    timestamps: true,
  }
);

AdmissionDetail.belongsTo(Course, { foreignKey: "courseId" });
Course.hasMany(AdmissionDetail, { foreignKey: "courseId" });

module.exports = AdmissionDetail;
