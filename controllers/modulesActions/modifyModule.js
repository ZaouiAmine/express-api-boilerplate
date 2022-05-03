const ModuleModel = require("../../models/Module");

module.exports = {
  modifyModule: async (req, res, next) => {
    try {
      if (req.body._id)
        return res.status(403).json("you can not change the Module's id");
      const Module = await ModuleModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json("Module updated successfully");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
