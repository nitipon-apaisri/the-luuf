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

module.exports = {
    getACollection,
};