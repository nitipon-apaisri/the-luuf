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
const getTokensByCreator = (creatorName) => {
    const tokens = db.tokens.filter((token) => {
        return token.creator === creatorName;
    });
    return tokens;
};
module.exports = {
    createToken,
    getTokens,
    getAToken,
    getTokensByCreator,
};
