const isAdmin = (req, res, next) => {
  const user = req.user;
  if (!user.isAdmin.status) {
    console.log("is admin");
    return res.status(401).json("admin privileges needed.");
  }
  return next();
};

module.exports = isAdmin;
