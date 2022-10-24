const User = require("../models/user");

const emailExists = async (email = "") => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(`El correo: ${email}, ya esta registrado`);
  }
};

const idExists = async (id) => {
  const existId = await User.findById(id);
  if (!existId) {
    throw new Error(`El id: ${id}, no existe`);
  }
};

module.exports = {
  emailExists,
  idExists,
};
