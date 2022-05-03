const { getResults } = require("./resultsActions/getResults");
const { createResult } = require("./resultsActions/createResult");
const { modifyResult } = require("./resultsActions/modifyResult");
const { deleteResult } = require("./resultsActions/deleteResult");
const { getOneResult } = require("./resultsActions/getOneResult");

module.exports = {
  getResults,
  getOneResult,
  createResult,
  modifyResult,
  deleteResult,
};
