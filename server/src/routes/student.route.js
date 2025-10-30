const express = require("express");
const router = express.Router();
const validateRequest = require("../middlewares/validateRequests");
const studentSchema = require("../validations/student.validation");
const createStudent = require("../controllers/student.controller");

router.post("/", validateRequest(studentSchema), createStudent);

module.exports = router;
