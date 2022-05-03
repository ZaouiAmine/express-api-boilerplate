const express = require("express");
const app = express();
const { setUser } = require("./helpers/setUser");
const authedUser = require("./permissions/authedUser");
const isAdmin = require("./permissions/isAdmin");

require("dotenv").config();
require("./helpers/initDatabase");
app.use(express.json());
app.use(setUser);

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");

app.use("/auth", authRoutes);
app.use("/admin", authedUser, isAdmin, adminRoutes);

app.use("/", authedUser, isAdmin, (req, res) => {
  return res.status(200).json("logged in successfully");
});
app.listen(process.env.PORT, (req, res) =>
  console.log(`server started on port ${process.env.PORT} successfully.`)
);
