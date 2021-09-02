const express = require("express");
const router = express.Router();

const { tbl_orders, sequelize } = require("../models/index");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const TABLE_COUNT = 12;
  let tables_layout = [];

  const table_order_count = await tbl_orders.findAll({
    attributes: [
      "o_table",
      [sequelize.fn("count", sequelize.col("o_table")), "count"],
    ],
    where: { o_pay: null },
    group: "o_table",
  });
});

module.exports = router;
