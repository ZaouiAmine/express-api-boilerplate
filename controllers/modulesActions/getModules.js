const ModuleModel = require("../../models/Module");

module.exports = {
  getModules: async (req, res, next) => {
    try {
      const Modules = await ModuleModel.find();
      if (!Modules) return res.status(204).json("no Modules found.");
      return res.status(200).json(Modules);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
