const express = require("express");
const router = express.Router();

const { tbl_product, tbl_orders } = require("../models/index");

router.get("/product", (req, res) => {
  res.render("product");
});

router.post("/product", (req, res) => {
  tbl_product.create(req.body).then((result) => res.redirect("/"));
});
module.exports = router;
