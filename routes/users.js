const router = require("express").Router();
const {
  getOneUser,
  getUsers,
  modifyUser,
  createUser,
  deleteUser,
} = require("../controllers/usersController");

router
  .get("/users/", getUsers)
  .post("/users/", createUser)
  .put("/user/:id", modifyUser)
  .delete("/user/:id", deleteUser)
  .get("/user/:id", getOneUser);

module.exports = router;
