const walletModel = require("../models/walletModel");
const db = require("../db/wallet");
const createWallet = async (req, res, next) => {
    const { walletAddress, walletPassword } = req.body;
    try {
        const wallet = walletModel.createWallet(walletAddress, walletPassword);
        res.json(wallet);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createWallet,
};
