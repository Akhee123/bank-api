const express = require("express");
const router = express.Router();

const { deposit, withdraw, transfer } = require("../utils/transaction");

router.route("/deposit").post(deposit);
router.route("/withdraw").post(withdraw);
router.route("/transfer").post(transfer);

module.exports = router;
