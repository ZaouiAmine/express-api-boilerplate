const isLogged = (loggedIn, loggedOut, route, file) => {
  return (req, res, next) => {
    if (loggedIn) {
      if (req.user) return next();
      return res.status(401).json("You Have to be logged in .");
    }
    if (loggedOut) {
      console.log("here");
      if (!req.user) return next();
      return res.status(401).json("You Have to be logged out .");
    }
    return res
      .status(401)
      .json(`you must specify user log status for ${route} route in ${file}`);
  };
};

const isAuthorized = (isManager, isTeacher, isStudent) => {
  return (req, res, next) => {
    if (isManager && req.user.isAdmin.status) return next();
    if (isTeacher && req.user.isTeacher.status) return next();
    if (isStudent && req.user.isStudent.status) return next();
    return res.status(401).json("you are not authorized");
  };
};

module.exports = { isLogged, isAuthorized };
