const userModel = require("../../models/User");

module.exports = {
  modifyUser: async (req, res, next) => {
    try {
      if (req.body._id)
        return res.status(403).json("you can not change the user's id");
      if (
        req.body.email &&
        (await userModel.findOne({ email: req.body.email }))
      ) {
        return res.status(302).json("email already in use.");
      }
      if (req.body.password) {
        const { p, ...o } = req.body;
        const hashedp = await bcrypt.hash(p, 10);
        const user = await userModel.findOneAndUpdate(
          { _id: req.params.id },
          {
            $set: { hashedp, ...o },
          },
          { new: true }
        );
        return res.status(200).json("user updated successfully");
      }
      const user = await userModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json("user updated successfully");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
