const { Router } = require("express");
const walletController = require("../controllers/walletController");
const router = new Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
router.post("/", jsonParser, walletController.createWallet);
module.exports = router;
