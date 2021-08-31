const express = require("express");
const router = express.Router();

const { tbl_product, tbl_orders } = require("../models/index");

router.get("/order", (req, res) => {
  res.render("product");
  tbl_product.create(req.body).then((result) => res.redirect("/"));
});
