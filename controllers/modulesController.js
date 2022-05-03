const { getModules } = require("./modulesActions/getModules");
const { createModule } = require("./modulesActions/createModule");
const { modifyModule } = require("./modulesActions/modifyModule");
const { deleteModule } = require("./modulesActions/deleteModule");
const { getOneModule } = require("./modulesActions/getOneModule");

module.exports = {
  getModules,
  getOneModule,
  createModule,
  modifyModule,
  deleteModule,
};
