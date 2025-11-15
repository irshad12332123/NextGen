const express = require("express");
const router = express.Router();
const {
  createCourse,
  getAllCourses,
  getCourseBySlug,
} = require("../controllers/course.controller");
const upload = require("../middlewares/upload.middleware");

router.post("/", upload.single("image"), createCourse);
router.get("/", getAllCourses);
router.get("/:slug", getCourseBySlug);

module.exports = router;
