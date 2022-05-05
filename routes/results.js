const router = require("express").Router();
const {
  getOneResult,
  getResults,
  modifyResult,
  createResult,
  deleteResult,
} = require("../controllers/resultsController");

router
  .get("/results/", getResults)
  .post("/results/", createResult)
  .put("/result/:id", modifyResult)
  .delete("/result/:id", deleteResult)
  .get("/result/:id", getOneResult);

module.exports = router;
