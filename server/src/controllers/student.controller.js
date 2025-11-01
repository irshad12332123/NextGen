const { Op } = require("sequelize");
const Student = require("../models/student.model");

const createStudent = async (req, res) => {
  try {
    const { name, email, phone, course } = req.body;

    // check if student already registered
    const existingStudent = await Student.findOne({
      where: { [Op.or]: [{ email }, { phone }] },
    });
    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Student already registered",
      });
    }

    // If student not found in the database creating one
    const student = Student.create({ name, phone, email, course });
    res.status(201).json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = createStudent;
