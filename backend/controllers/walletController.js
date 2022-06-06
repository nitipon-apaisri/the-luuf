const walletModel = require("../models/walletModel");
const collectionDB = require("../db/collections");
const createWallet = async (req, res, next) => {
    const { walletAddress, walletPassword } = req.body;
    try {
        const wallet = walletModel.createWallet(walletAddress, walletPassword);
        collectionDB.createCollection(wallet.collections[0]);
        res.json({ msg: wallet.msg, data: wallet });
    } catch (err) {
        console.log(err);
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
const getWallets = async (req, res, next) => {
    try {
        const walllets = walletModel.getWallets();
        res.json(walllets);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    createWallet,
    authentication,
    getAWallet,
    getWallets,
};
