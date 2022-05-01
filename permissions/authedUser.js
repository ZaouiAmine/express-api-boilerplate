const authedUser = (req, res, next) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json("you are not authorized.");
  }
  console.log("authedUser");
  return next();
};

module.exports = authedUser;
