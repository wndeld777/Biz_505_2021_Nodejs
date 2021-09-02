const express = require("express");
const router = express.Router();

const { tbl_product, tbl_orders } = require("../models/index");

router.get("/order/:table_id", async (req, res) => {
  const table_id = req.params.table_id;
  const MENU = await tbl_product.findAll().then({ order: ["p_name", "ASC"] });
  res.render("order_view", { table_id, MENU });
});
