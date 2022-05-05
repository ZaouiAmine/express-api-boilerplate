const resultModel = require("../../models/Result");

module.exports = {
  getOneResult: async (req, res, next) => {
    try {
      const result = await resultModel.findOne({
        _id: req.params.id,
      });
      if (!result) return res.status(204);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
