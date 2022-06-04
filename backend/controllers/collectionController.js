const collectionModel = require("../models/collectionModel");
const getACollection = async (req, res, next) => {
    const { collectionOwner, collectionName } = req.params;
    try {
        const collection = collectionModel.getACollection(collectionOwner, collectionName);
        res.json(collection);
    } catch (err) {
        next(err);
    }
};

const getCollectionsByOwner = async (req, res, next) => {
    const { ownerName } = req.params;
    try {
        const collections = collectionModel.getCollectionsByOwner(ownerName);
        res.json(collections);
    } catch (err) {
        next(err);
    }
};
const getTrendingCollections = async (req, res, next) => {
    try {
        const collections = collectionModel.getTrendingCollections();
        res.json(collections);
    } catch (err) {
        next(err);
    }
};
const getTopCollections = async (req, res, next) => {
    try {
        const collections = collectionModel.getTopCollections();
        res.json(collections);
    } catch (err) {
        next(err);
    }
};
const createCollection = async (req, res, next) => {
    const { collectionData } = req.body;
    try {
        const collection = collectionModel.createCollection(collectionData);
        res.json(collection);
    } catch (err) {
        next(err);
    }
};
module.exports = {
    getACollection,
    getCollectionsByOwner,
    getTrendingCollections,
    getTopCollections,
    createCollection,
};
