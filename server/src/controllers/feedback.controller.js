const Feedback = require("../models/feedback.model");

const createFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
      res
        .status(400)
        .json({ success: false, message: "Some fields aren't filled" });

    // All fields are available submit the record to DB,

    const recordSubmitted = Feedback.create({ name, email, message });
    if (!recordSubmitted)
      res.status(400).json({
        success: false,
        message: "Failed to submit the feedback, try again later",
      });
    // Else response with status 200 (OK) and message(success)

    res
      .status(200)
      .json({ success: true, message: "Feedback submmitted successfully" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Some error occured, ${error.message}`,
    });
  }
};

module.exports = {
  createFeedback,
};
