const {
  Course,
  CourseOverview,
  ProgramDetail,
  AdmissionDetail,
  TutionFee,
} = require("../models");

exports.createCourse = async (req, res) => {
  const t = await Course.sequelize.transaction();
  try {
    const { course, overview, programDetails, admissionDetails, tutionFees } =
      req.body;

    // Create base course
    const newCourse = await Course.create(course, { transaction: t });

    // Create related data
    if (overview)
      await CourseOverview.create(
        { ...overview, courseId: newCourse.id },
        { transaction: t }
      );

    if (programDetails?.length)
      await ProgramDetail.bulkCreate(
        programDetails.map((pd) => ({ ...pd, courseId: newCourse.id })),
        { transaction: t }
      );

    if (admissionDetails?.length)
      await AdmissionDetail.bulkCreate(
        admissionDetails.map((ad) => ({ ...ad, courseId: newCourse.id })),
        { transaction: t }
      );

    if (tutionFees?.length)
      await TutionFee.bulkCreate(
        tutionFees.map((f) => ({ ...f, courseId: newCourse.id })),
        { transaction: t }
      );

    await t.commit();
    res.status(201).json({
      success: true,
      message: "Course created successfully",
      course: newCourse,
    });
  } catch (error) {
    await t.rollback();
    console.error("Error creating course:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create course" });
  }
};

// ✅ Get all courses with relations
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: [CourseOverview, ProgramDetail, AdmissionDetail, TutionFee],
    });
    res.json({ success: true, message: "Succesfully Loaded", data: courses });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch courses" });
  }
};

// ✅ Get single course by slug
exports.getCourseBySlug = async (req, res) => {
  try {
    const course = await Course.findOne({
      where: { slug: req.params.slug },
      include: [CourseOverview, ProgramDetail, AdmissionDetail, TutionFee],
    });
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching course" });
  }
};
