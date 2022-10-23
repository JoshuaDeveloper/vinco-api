const { Router } = require("express");
const {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
} = require("../controllers/users.controllers");

const router = Router();

router.get("/", getUsers);
router.put("/", putUsers);
router.post("/", postUsers);
router.delete("/", deleteUsers);

module.exports = router;
