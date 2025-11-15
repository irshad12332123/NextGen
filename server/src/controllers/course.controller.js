const {
  Course,
  CourseOverview,
  ProgramDetail,
  AdmissionDetail,
  TutionFee,
} = require("../models");

// Utility to rename image_url → source
function transform(data) {
  if (!data) return data;
  const result = { ...data };
  result.source = result.image_url;
  delete result.image_url;
  return result;
}

exports.createCourse = async (req, res) => {
  const t = await Course.sequelize.transaction();
  try {
    // Parse JSON if sent as strings (Postman form-data)
    const course =
      typeof req.body.course === "string"
        ? JSON.parse(req.body.course)
        : req.body.course;

    const overview =
      typeof req.body.overview === "string"
        ? JSON.parse(req.body.overview)
        : req.body.overview;

    const programDetails =
      typeof req.body.programDetails === "string"
        ? JSON.parse(req.body.programDetails)
        : req.body.programDetails;

    const admissionDetails =
      typeof req.body.admissionDetails === "string"
        ? JSON.parse(req.body.admissionDetails)
        : req.body.admissionDetails;

    const tutionFees =
      typeof req.body.tutionFees === "string"
        ? JSON.parse(req.body.tutionFees)
        : req.body.tutionFees;

    // If image uploaded → add file path
    if (req.file) {
      course.image_url = `/uploads/courses.image${req.file.filename}`;
    }

    // Create base course
    const newCourse = await Course.create(course, { transaction: t });

    // Create related entries
    if (overview) {
      await CourseOverview.create(
        { ...overview, courseId: newCourse.id },
        { transaction: t }
      );
    }

    if (programDetails?.length) {
      await ProgramDetail.bulkCreate(
        programDetails.map((pd) => ({ ...pd, courseId: newCourse.id })),
        { transaction: t }
      );
    }

    if (admissionDetails?.length) {
      await AdmissionDetail.bulkCreate(
        admissionDetails.map((ad) => ({ ...ad, courseId: newCourse.id })),
        { transaction: t }
      );
    }

    if (tutionFees?.length) {
      await TutionFee.bulkCreate(
        tutionFees.map((f) => ({ ...f, courseId: newCourse.id })),
        { transaction: t }
      );
    }

    await t.commit();

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      course: transform(newCourse.dataValues),
    });
  } catch (error) {
    await t.rollback();
    console.error("Error creating course:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create course",
    });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: [CourseOverview, ProgramDetail, AdmissionDetail, TutionFee],
    });

    const formatted = courses.map((c) => ({
      ...c.dataValues,
      source: c.image_url,
      image_url: undefined,
    }));

    res.json({
      success: true,
      message: "Successfully Loaded",
      data: formatted,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch courses",
    });
  }
};

// Get single course by slug
exports.getCourseBySlug = async (req, res) => {
  try {
    const course = await Course.findOne({
      where: { slug: req.params.slug },
      include: [CourseOverview, ProgramDetail, AdmissionDetail, TutionFee],
    });

    if (!course) return res.status(404).json({ error: "Course not found" });

    res.json(transform(course.dataValues));
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error fetching course" });
  }
};
