const db = require("../db/tokens");
const createToken = (tokenData) => {
    db.createToken(tokenData);
    return tokenData;
};

module.exports = {
    createToken,
};
