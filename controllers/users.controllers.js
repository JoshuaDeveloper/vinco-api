const { response, request } = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");

const getUsers = (req = request, res = response) => {
  const { nombre, apiKey } = req.query;

  res.json({ name: "GET API- controler", nombre, apiKey });
};

const putUsers = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, email, ...rest } = req.body;

  if (password) {
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, rest, { new: true });

  console.log(user);
  res.json({ name: "PUT API- controler", user });
};

const postUsers = async (req, res = response) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  //const existEmail = await User.findOne({ email });

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();
  res.json({
    user,
  });
};

const deleteUsers = (req, res = response) => {
  res.json({ name: "DELETE API- controler" });
};

module.exports = {
  getUsers,
  putUsers,
  postUsers,
  deleteUsers,
};
