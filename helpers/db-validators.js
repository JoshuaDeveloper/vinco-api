const User = require("../models/user");

const emailExists = async (email = "") => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(`El correo: ${email}, ya esta registrado`);
  }
};

module.exports = {
  emailExists,
};
