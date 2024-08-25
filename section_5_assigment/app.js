const express = require("express");
const path = require("path");

const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.static("public"));
app.use("/", indexRoutes);
app.use("/users", userRoutes);

app.listen(3000);
