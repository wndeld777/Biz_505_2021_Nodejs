const express = require("express");
const router = express.Router();

const { tbl_product } = require("../models/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  tbl_product.findAndCountAll().then((result) => {
    console.log(result);
    res.render("index", { PRODUCT: result.rows });
  });
});

module.exports = router;
