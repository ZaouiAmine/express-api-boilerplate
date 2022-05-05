const resultModel = require("../../models/Result");

module.exports = {
  modifyResult: async (req, res, next) => {
    try {
      if (req.body._id)
        return res.status(403).json("you can not change the Module's id");
      if (req.body.complains !== undefined) {
        await resultModel.findOneAndUpdate(
          { _id: req.params.id },
          {
            $push: { complains: req.body.complains[0] },
          },
          { new: true }
        );
      }
      await resultModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: req.body.link,
        },
        { new: true }
      );
      return res.status(200).json("Module updated successfully");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
