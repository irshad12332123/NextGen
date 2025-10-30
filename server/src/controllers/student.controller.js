const Student = require("../models/student.model");

const createStudent = async (req, res) => {
  try {
    const { name, email, course } = req.body;

    const student = Student.create({ name, email, course });

    res.status(201).json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = createStudent;
