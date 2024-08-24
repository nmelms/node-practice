const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("in the middleware");
  res.send(`
        <form method="POST" action="/admin/add-product">
            <input type="text" name="title">
            <button type="submit">Add Product</button>
        </form>`);
});

router.post("/add-product", (req, res, next) => {
  console.log("product ran");
  res.redirect("/");
  console.log(req.body);
});

module.exports = router;
