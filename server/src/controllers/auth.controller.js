const jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model");

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const adminLogin = async (req, res) => {
  const { name, email } = req.body;
  try {
    if (!name || !email)
      return res
        .status(400)
        .json({ success: false, message: "Feilds are empty" });

    // Check if admin exists or not
    const admin = await Admin.findOne({
      where: email,
    });

    if (!admin)
      return res.status(400).json({
        success: false,
        message: "You are not an admin",
      });
    // ADmin approved issuing an JWT token
    // Create token
    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: admin.role },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    if (!token)
      return res
        .status(400)
        .json({ success: false, message: "Failed to issue a token" });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Some error ocurred while logging admin ${error.message}`,
    });
  }
};

module.exports = {
  adminLogin,
};
