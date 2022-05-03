const router = require("express").Router();
const usersController = require("../controllers/usersController");
const modulesController = require("../controllers/modulesController");

router
  .get("/users", usersController.getUsers)
  .post("/users", usersController.createUser)
  .get("/user/:id", usersController.getOneUser)
  .put("/user/:id", usersController.modifyUser)
  .delete("/user/:id", usersController.deleteUser);

router
  .get("/modules", modulesController.getModules)
  .post("/modules", modulesController.createModule)
  .get("/module/:id", modulesController.getOneModule)
  .put("/module/:id", modulesController.modifyModule)
  .delete("/module/:id", modulesController.deleteModule);

module.exports = router;
