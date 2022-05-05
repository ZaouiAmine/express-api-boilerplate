const router = require("express").Router();
const {
  getOneModule,
  getModules,
  modifyModule,
  createModule,
  deleteModule,
} = require("../controllers/modulesController");

router
  .get("/modules/", getModules)
  .post("/modules/", createModule)
  .put("/module/:id", modifyModule)
  .delete("/module/:id", deleteModule)
  .get("/module/:id", getOneModule);

module.exports = router;
