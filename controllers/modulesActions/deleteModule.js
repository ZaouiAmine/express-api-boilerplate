const moduleModel = require("../../models/Module");
const mongoose = require("mongoose");

module.exports = {
  deleteModule: async (req, res, next) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(500).json("module is not valid");
      const Module = await moduleModel.findOne({ _id: req.params.id });
      if (Module == null) return res.status(404).json("module not found");
      await moduleModel.findOneAndDelete({ _id: req.params.id });
      console.log("module found");
      return res.status(200).json("module deleted successfully");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
