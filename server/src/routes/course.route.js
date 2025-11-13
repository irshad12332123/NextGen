const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  getCourseBySlug,
} = require("../controllers/course.controller");

router.post("/", createCourse);
router.get("/", getAllCourses);
router.get("/:slug", getCourseBySlug);

module.exports = router;
