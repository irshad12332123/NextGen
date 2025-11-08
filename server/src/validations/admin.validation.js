const validateAdminRegister = (data) => {
  const { username_id, password } = data;
  const errors = {};

  if (!username_id === "") {
    errors.message = "User ID is required";
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!password || !passwordRegex.test(password)) {
    errors.password =
      "Password must be at least 8 chars, include upper, lower, number, and symbol";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

module.exports = {
  validateAdminRegister,
};
