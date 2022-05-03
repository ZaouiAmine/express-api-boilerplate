const userModel = require("../../models/User");
const mongoose = require("mongoose");

module.exports = {
  deleteUser: async (req, res, next) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(500).json("user is not valid");
      const user = await userModel.findOne({ _id: req.params.id });
      if (user == null) return res.status(404).json("user not found");

      await userModel.findOneAndDelete({ _id: req.params.id });
      console.log("user found");
      return res.status(200).json("user deleted successfully");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
