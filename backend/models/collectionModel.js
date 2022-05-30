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
const getTrendingCollections = () => {
    const collections = db.collections.sort((a, b) => (a.values.totalVolume < b.values.totalVolume ? 1 : -1)).slice(0, 3);
    return collections;
};
const getTopCollections = () => {
    const collections = db.collections.sort((a, b) => (a.values.totalVolume < b.values.totalVolume ? 1 : -1)).slice(0, 9);
    return collections;
};
const createCollection = (collectionData) => {
    db.createCollection(collectionData);
};
module.exports = {
    getACollection,
    getCollectionsByOwner,
    getTrendingCollections,
    getTopCollections,
    createCollection,
};
