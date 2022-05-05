const express = require("express");
const app = express();

const path = require("path");
const scriptName = path.basename(__filename);

const { setUser } = require("./helpers/setUser");
const { isAuthorized, isLogged } = require("./permissions/authorizations");

require("dotenv").config();
require("./helpers/initDatabase");
app.use(express.json());
app.use(setUser);

const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const modulesRoutes = require("./routes/modules");
const resultsRoutes = require("./routes/results");

app.use("/auth", authRoutes);
app.use(
  isLogged(true, false, "/users", scriptName),
  isAuthorized(true, false, false),
  usersRoutes
);
app.use(
  isLogged(true, false, "/modules", scriptName),
  isAuthorized(true, false, false),
  modulesRoutes
);
app.use(resultsRoutes);

app.use("/", (req, res) => {
  return res.status(200).json("base route");
});
app.listen(process.env.PORT, (req, res) =>
  console.log(`server started on port ${process.env.PORT} successfully.`)
);
