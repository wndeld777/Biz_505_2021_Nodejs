const express = require("express");
const router = express.Router();

const { tbl_bbs } = require("../models/index");

router.get("/update", (req, res) => {
  tbl_bbs.update(req.body).then((result) => {
    res.render("update", { BBS: result.rows });
  });
});
module.exports = router;
