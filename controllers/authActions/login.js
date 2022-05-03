const userModel = require("../../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const requestedUser = await userModel.findOne({ email: email });

      // check if account exists to continue
      if (requestedUser == null) {
        return res
          .status(204)
          .json("No accounts found, please register to continue.");
      }
      // compares the two passwords
      if (await bcrypt.compare(password, requestedUser.password)) {
        return res.status(200).json(requestedUser._id);
      }
      // wrong password
      return res.status(403).json("Incorrect password, please try again");
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
