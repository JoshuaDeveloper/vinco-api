const { response, request } = require("express");

const getUsers = (req = request, res = response) => {
  const { nombre, apiKey } = req.query;

  res.json({ name: "GET API- controler", nombre, apiKey });
};

const putUsers = (req, res = response) => {
  res.json({ name: "PUT API- controler" });
};

const postUsers = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    name: "POST API- controler",
    nombre,
    edad,
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
