const userModel = require("../../models/User");

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const users = await userModel.find();
      if (!users) return res.status(204).json("no users found.");
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
