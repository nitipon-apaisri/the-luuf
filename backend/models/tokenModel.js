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
module.exports = {
    createToken,
    getTokens,
    getAToken,
};
