const sequelize = require("../config/db");
const Course = require("./course.model");
const CourseOverview = require("./courseOverview.model");
const ProgramDetail = require("./programDetails.model");
const AdmissionDetail = require("./admissionDetails.model");
const TutionFee = require("./tutionFee.model");

// Associations
Course.hasOne(CourseOverview, { foreignKey: "courseId" });
CourseOverview.belongsTo(Course, { foreignKey: "courseId" });

Course.hasMany(ProgramDetail, { foreignKey: "courseId" });
ProgramDetail.belongsTo(Course, { foreignKey: "courseId" });

Course.hasMany(AdmissionDetail, { foreignKey: "courseId" });
AdmissionDetail.belongsTo(Course, { foreignKey: "courseId" });

Course.hasMany(TutionFee, { foreignKey: "courseId" });
TutionFee.belongsTo(Course, { foreignKey: "courseId" });

module.exports = {
  sequelize,
  Course,
  CourseOverview,
  ProgramDetail,
  AdmissionDetail,
  TutionFee,
};
