const userModel = require("../models/User");
const mongoose = require("mongoose");

const setUser = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.body.id)) return next();
  if (req.body.id) {
    const user = await userModel.findOne({
      _id: req.body.id,
    });
    if (user !== null) {
      req.user = user;
    }
  } else {
    console.log("no id found");
  }
  console.log("setUser");
  return next();
};

module.exports = { setUser };
