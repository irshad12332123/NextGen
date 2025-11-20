const sequelize = require("../config/db");

const CourseOverview = require("./course.model/courseOverview.model");
const ProgramDetail = require("./course.model/programDetails.model");
const AdmissionDetail = require("./course.model/admissionDetails.model");
const TutionFee = require("./course.model/tutionFee.model");
const Course = require("./course.model/course.model");

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
