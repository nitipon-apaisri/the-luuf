const { Router } = require("express");
const walletController = require("../controllers/walletController");
const router = new Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
router.post("/createWallet", jsonParser, walletController.createWallet);
router.post("/authentication", jsonParser, walletController.authentication);
module.exports = router;
