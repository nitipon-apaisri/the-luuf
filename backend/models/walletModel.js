const { v4: uuidv4 } = require("uuid");
const db = require("../db/wallet");
const createWallet = (walletAddress, walletPassword) => {
    const walletModel = {
        id: uuidv4(),
        name: walletAddress,
        signInInfo: {
            walletAddress: walletAddress,
            password: walletPassword,
        },
        balance: 0,
        about: " ",
        medias: {
            pfp: "...",
            banner: "...",
        },
        links: {
            universal: "...",
            twitter: "...",
            discord: "...",
        },
        collections: [],
        collectibles: [],
        favorited: [],
    };
    db.addWallet(walletModel);
    return walletModel;
};

module.exports = {
    createWallet,
};
