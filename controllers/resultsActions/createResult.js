const resultModel = require("../../models/Result");

module.exports = {
  createResult: async (req, res, next) => {
    try {
      const Result = new resultModel(req.body);
      const savedResult = Result.save();
      console.log(`Result successfully registered ${savedResult}`);
      return res.status(200).json(`Result successfully registered`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
