const db = require("../db/collections");
const getACollection = (collectionOwner, collectionName) => {
    const collection = db.collections.find((collection) => {
        return collection.createdBy === collectionOwner && collection.name === collectionName;
    });
    return collection;
};

module.exports = {
    getACollection,
};
