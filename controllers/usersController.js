const { getUsers } = require("./usersActions/getUsers");
const { createUser } = require("./usersActions/createUser");
const { modifyUser } = require("./usersActions/modifyUser");
const { deleteUser } = require("./usersActions/deleteUser");
const { getOneUser } = require("./usersActions/getOneUser");

module.exports = { getUsers, getOneUser, createUser, modifyUser, deleteUser };
