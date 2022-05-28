const tokenModel = require("../models/tokenModel");
const collectionDB = require("../db/collections");
const createToken = async (req, res, next) => {
    const { tokenData } = req.body;
    try {
        const token = tokenModel.createToken(tokenData);
        res.json({
            msg: "TOKEN CREATE",
            data: token,
        });
        collectionDB.addCreateToken(tokenData);
    } catch (err) {
        console.log(tokenData);
        next(err);
    }
};
const getTokens = async (req, res, next) => {
    try {
        const tokens = tokenModel.getTokens();
        res.json(tokens);
    } catch (err) {
        next(err);
    }
};
const getAToken = async (req, res, next) => {
    const { tokenId } = req.params;
    try {
        const token = tokenModel.getAToken(tokenId);
        res.json(token);
    } catch (err) {
        next(err);
    }
};
const getTokensByCreator = async (req, res, next) => {
    const { creatorName } = req.params;
    try {
        const tokens = tokenModel.getTokensByCreator(creatorName);
        res.json(tokens);
    } catch (err) {
        next(err);
    }
};
const getTokensByOwner = async (req, res, next) => {
    const { ownerName } = req.params;
    try {
        const tokens = tokenModel.getTokensByOwner(ownerName);
        res.json(tokens);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createToken,
    getTokens,
    getAToken,
    getTokensByCreator,
    getTokensByOwner,
};
