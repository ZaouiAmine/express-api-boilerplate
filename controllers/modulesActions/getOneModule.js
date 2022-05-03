const moduleModel = require("../../models/Module");

module.exports = {
  getOneModule: async (req, res, next) => {
    try {
      const Module = await moduleModel.findOne({
        _id: req.params.id,
      });
      if (!Module) return res.status(204);
      return res.status(200).json(Module);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
