const userModel = require("../../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res, next) => {
    try {
      // check if fields exist
      const keyArr = [];
      const valArr = [];
      Object.entries(req.body).forEach(([key, value]) => {
        keyArr.push(key);
        valArr.push(value);
      });
      const keyCheckArr = ["firstName", "lastName", "email", "password"];
      let keyCheck;
      keyCheckArr.forEach(function (key) {
        if (!keyArr.includes(key)) {
          keyCheck = true;
        }
      });

      if (keyCheck) return res.status(500).json("some keys are missing");
      let valCheck;
      valArr.forEach(function (val) {
        if (val == null || val === "") {
          valCheck = true;
        }
      });
      if (valCheck) return res.status(500).json("some values are missing");

      // check if user exists
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
      });
      const savedUser = user.save();
      console.log(`User successfully registered ${savedUser}`);
      return res.status(200).json(`User successfully registered `);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
