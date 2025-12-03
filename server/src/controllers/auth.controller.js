const jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const { validateAdminRegister } = require("../validations/admin.validation");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const adminLogin = async (req, res) => {
  const { id: username_id, password } = req.body;

  try {
    if (!username_id || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Fields are empty" });
    }

    console.log(password);

    // Check if admin exists
    const admin = await Admin.findOne({ where: { username_id } });

    if (!admin) {
      return res
        .status(400)
        .json({ success: false, message: "You are not an admin" });
    }

    // Check password match
    const isPassMatched = await bcrypt.compare(password, admin.password);
    if (!isPassMatched) {
      return res.status(400).json({
        success: false,
        message: "Username or password does not match",
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: admin.id, username_id: admin.username_id },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Failed to issue a token" });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error while logging in admin: ${error.message}`,
    });
  }
};

const adminRegister = async (req, res) => {
  console.log("HIT");

  const { id: username_id, password } = req.body;
  console.log(req.body);

  try {
    if (!username_id || !password)
      return res
        .status(400)
        .json({ success: false, message: "Feilds are empty" });

    // check password policiys
    const { isValid, errors } = validateAdminRegister(req.body);

    if (!isValid) {
      console.log(isValid);
      console.log(errors);

      return res.status(400).json({ success: false, message: errors.message });
    }

    // Check if admin exists or not
    const existingAdmin = await Admin.findOne({
      where: { username_id },
    });

    if (existingAdmin)
      return res.status(409).json({
        success: false,
        message: "Admin already exists",
      });

    // Register the admin
    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ username_id, password: hashedPassword });
    if (admin) {
      res
        .status(200)
        .json({ success: true, message: "Admin registered succesfully" });
    } else {
      res.status(400).json({ success: false, message: "Registration failed" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Some error ocurred while registering admin ${error.message}`,
    });
  }
};

// const forgotPassword = async (req, res) => {
//   const { id: username_id, password } = req.body;

// }

module.exports = {
  adminLogin,
  adminRegister,
};
