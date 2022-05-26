const walletModel = require("../models/walletModel");
const db = require("../db/wallets");
const createWallet = async (req, res, next) => {
    const { walletAddress, walletPassword } = req.body;
    try {
        const wallet = walletModel.createWallet(walletAddress, walletPassword);
        res.json(wallet);
    } catch (err) {
        next(err);
    }
};

const authentication = async (req, res, next) => {
    const { walletAddress, walletPassword } = req.body;
    try {
        const wallet = walletModel.authentication(walletAddress, walletPassword);
        res.json(wallet);
    } catch (err) {
        next(err);
    }
};
const getAWallet = async (req, res, next) => {
    const { walletAddress } = req.params;
    try {
        const wallet = walletModel.getAWallet(walletAddress);
        res.json(wallet);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    createWallet,
    authentication,
    getAWallet,
};
