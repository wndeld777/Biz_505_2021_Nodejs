const express = require("express");
const router = express.Router();

const moment = require("moment");
const { tbl_product } = require("../models/index");
const tbl_table_orders = require("../models/tbl_table_orders");

// localhost:3000/pos/order/3 이라고 URL 이 전송되어 오면
// 숫자 3이 변수 table_id 에 담겨온다
// 이 table_id 는 req.params.table_id 를 getter 하여 값을 확인할수 있다
router.get("/order/:table_id", async (req, res) => {
  const table_id = req.params.table_id;

  // p_name 칼럼을 기준으로 오름차순정렬하여 보여라
  const MENU = await tbl_product.findAll().then({ order: ["p_name", "ASC"] });
  res.render("order_view", { table_id, MENU });
});

// table id와 menu id가 web 으로부터 전달되어 왔다
// 현재 table 에 손님이 있고 메뉴를 주문하기 시작했다.
// let menu_list = [];
router.get("/order/:table_id/input/:menu_id", (req, res) => {
  const table_id = req.params.table_id;
  const menu_id = req.params.menu_id;

  tbl_product.findByPk(menu_id).then((product) => {
    //menu_list.push(result);
    //console.log(menu_list);

    // tbl_table_orders에 insert 할 데이터 준비
    const table_orders = {
      to_table_id: table_id,
      to_pcode: menu_id,
      to_qty: 1,
      to_price: product.p_price,
      to_date: moment().format("YYYY[-]MM[-]DD"),
      to_time: moment().format("HH:mm:ss"),
    };
    tbl_table_orders.create(table_orders).then((result) => {
      tbl_table_orders
        .findAll({
          where: { to_table_id: table_id },
        })
        .then((order_list) => {
          res.json({ table_id, order_list });
        });
    });
  });

  // const menu = {
  //	table_id,
  //	menu_id,
  //	menu_name: "1000원김밥",
  //	menu_price: 1000,
  //	};
  //	res.json(menu);
});

router.get("getorder/:table_id", (req, res) => {
  const table_id = req.params.table_id;

  tbl_table_orders
    .findAll({ where: { to_table_id: table_id } })
    .then((result) => res.json(result));
});

module.exports = router;
