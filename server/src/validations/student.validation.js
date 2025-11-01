const Joi = require("joi");

const studentSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  phone: Joi.string().min(10).max(10).required(),
  email: Joi.string().email().required(),
  course: Joi.string().required(),
});

module.exports = studentSchema;
