const { Router } = require("express");
const { check } = require("express-validator");
const { validationDates } = require("../middlewares/user.validate");
const { emailExists } = require("../helpers/db-validators");
const {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
} = require("../controllers/users.controllers");

const router = Router();

router.get("/", getUsers);
router.put("/:id", putUsers);
router.post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El correo es obligatorio").isLength({ min: 6 }),
    check("email", "El email no es valido").isEmail(),
    check("email").custom(emailExists),
    validationDates,
  ],
  postUsers
);
router.delete("/", deleteUsers);

module.exports = router;
