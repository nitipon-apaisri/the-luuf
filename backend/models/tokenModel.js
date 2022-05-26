const db = require("../db/tokens");
const createToken = (tokenData) => {
    db.createToken(tokenData);
    return tokenData;
};

const getTokens = () => {
    return db.tokens;
};
const getAToken = (tokenId) => {
    const token = db.tokens.find((token) => {
        return token.id === tokenId;
    });
    return token;
};
const getTokensByOwner = (owner) => {
    const findTokensOwner = db.tokens.filter((tokens) => {
        return tokens.owner === owner;
    });
    return findTokensOwner;
};
const getTokensByCreator = (creatorName) => {
    const tokens = db.tokens.filter((tokens) => {
        return tokens.creator === creatorName;
    });
    return tokens;
};

module.exports = {
    createToken,
    getTokens,
    getAToken,
    getTokensByOwner,
    getTokensByCreator,
};
