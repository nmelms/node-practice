const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(405).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
