const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../utils/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  console.log("in the middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  res.redirect("/");
});

exports.router = router;
exports.products = products;
