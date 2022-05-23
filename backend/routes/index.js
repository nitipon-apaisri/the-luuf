const { Router } = require("express");
const walletController = require("../controllers/walletController");
const tokenController = require("../controllers/tokenController");
const router = new Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
router.post("/createWallet", jsonParser, walletController.createWallet);
router.post("/authentication", jsonParser, walletController.authentication);
router.get("/marketplace", (req, res) => {
    res.json({ msg: "Marketplace" });
});
router.post("/:walletAddress/createToken", jsonParser, tokenController.createToken);
module.exports = router;
