const resultModel = require("../../models/Result");

module.exports = {
  getResults: async (req, res, next) => {
    try {
      const results = await resultModel.find();
      if (!results) return res.status(204).json("no Results found.");
      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
