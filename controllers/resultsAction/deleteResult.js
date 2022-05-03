const resultModel = require("../../models/Result");
const mongoose = require("mongoose");

module.exports = {
  deleteResult: async (req, res, next) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(500).json("result is not valid");
      const result = await resultModel.findOne({ _id: req.params.id });
      if (result == null) return res.status(404).json("result not found");
      await resultModel.findOneAndDelete({ _id: req.params.id });
      return res.status(200).json("result deleted successfully");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
