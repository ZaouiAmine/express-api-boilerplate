const userModel = require("../../models/User");

module.exports = {
  getOneUser: async (req, res, next) => {
    try {
      const user = await userModel.findOne({
        _id: req.params.id,
      });
      if (!user) return res.status(204);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
