const db = require("../db/tokens");
const createToken = (tokenData) => {
    db.createToken(tokenData);
    return tokenData;
};

const getTokens = () => {
    return db.tokens;
};
module.exports = {
    createToken,
    getTokens,
};
