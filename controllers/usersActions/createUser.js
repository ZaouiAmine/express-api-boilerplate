const userModel = require("../../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { email } = req.body;
      const requestedUser = await userModel.findOne({ email: email });
      if (requestedUser !== null) {
        if (!requestedUser.isApprouved) {
          return res.status(302).json("User exists and pending approval.");
        }
        return res.status(302).json("User already exists.");
      }

      // registering the user
      const { password, ...others } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new userModel({
        ...others,
        password: hashedPassword,
        isApprouved: true,
      });
      const savedUser = user.save();
      console.log(`User successfully registered ${savedUser}`);
      return res.status(200).json(`User successfully registered`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
