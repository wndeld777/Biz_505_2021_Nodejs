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

  for (let index = 0; index < TABLE_COUNT; index++) {
    const result = table_order_count.find((order) => {
      return order.dataValues.o_table == index + 1;
    });

    const table_data = {
      id: index + 1,
      table_name: index + 1 + "번 테이블",
    };

    if (result) {
      table_data.order_count = result.dataValues.count;
    } else {
      table_data.order_count = 0;
    }
    tables_layout.push(table_data);
  }

  res.render("index", { TABLES: tables_layout });
});

module.exports = router;
