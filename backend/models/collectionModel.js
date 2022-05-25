const db = require("../db/collections");
const getACollection = (collectionOwner, collectionName) => {
    const collection = db.collections.find((collection) => {
        return collection.createdBy === collectionOwner && collection.name === collectionName;
    });
    return collection;
};
const getCollectionsByOwner = (owner) => {
    const collections = db.collections.filter((collections) => {
        return collections.createdBy === owner;
    });
    return collections;
};
module.exports = {
    getACollection,
    getCollectionsByOwner,
};
