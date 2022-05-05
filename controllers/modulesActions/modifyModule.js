const ModuleModel = require("../../models/Module");

module.exports = {
  modifyModule: async (req, res, next) => {
    try {
      if (req.body._id)
        return res.status(403).json("you can not change the Module's id");
      const { grades, complains, staff, ...others } = req.body;

      if (grades !== undefined) {
        await ModuleModel.findOneAndUpdate(
          { _id: req.params.id },
          {
            $push: { grades: grades[0] },
          },
          { new: true }
        );
      }
      if (complains !== undefined) {
        await ModuleModel.findOneAndUpdate(
          { _id: req.params.id },
          {
            $push: { complains: complains[0] },
          },
          { new: true }
        );
      }
      if (staff !== undefined) {
        await ModuleModel.findOneAndUpdate(
          { _id: req.params.id },
          {
            $push: { staff: staff[0] },
          },
          { new: true }
        );
      }
      await ModuleModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: others,
        },
        { new: true }
      );
      return res.status(200).json("Module updated successfully");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
