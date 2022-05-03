const moduleModel = require("../../models/Module");

module.exports = {
  createModule: async (req, res, next) => {
    try {
      const { name } = req.body;
      const requestedModule = await moduleModel.findOne({ name: name });
      if (requestedModule !== null) {
        return res.status(302).json("Module already exists.");
      }
      const Module = new userModel(req.body);
      const savedModule = Module.save();
      console.log(`Module successfully registered ${savedModule}`);
      return res.status(200).json(`Module successfully registered`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
