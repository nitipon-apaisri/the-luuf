const { v4: uuidv4 } = require("uuid");
const db = require("../db/wallets");
const { Unauthorized, InvalidAddress } = require("../errors");
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
    const isWalletExisting = db.wallets.some((wallet) => {
        return wallet.signInInfo.walletAddress === walletAddress;
    });
    if (isWalletExisting === false) {
        db.addWallet(walletModel);
        return "Wallet Created";
    } else {
        return "Wallet Existing";
    }
};
const getAWallet = (walletAddress) => {
    const isWalletExisting = db.wallets.some((wallet) => {
        return wallet.signInInfo.walletAddress === walletAddress;
    });
    if (isWalletExisting === true) {
        const findWallet = db.wallets.find((wallet) => {
            return wallet.signInInfo.walletAddress === walletAddress;
        });
        return findWallet;
    } else {
        throw new InvalidAddress();
    }
};
const authentication = (walletAddress, walletPassword) => {
    const isWalletExisting = db.wallets.some((wallet) => {
        return wallet.signInInfo.walletAddress === walletAddress && wallet.signInInfo.password === walletPassword;
    });
    if (isWalletExisting === true) {
        const findWallet = db.wallets.find((wallet) => {
            return wallet.signInInfo.walletAddress === walletAddress && wallet.signInInfo.password === walletPassword;
        });
        return findWallet;
    } else {
        throw new Unauthorized();
    }
};
module.exports = {
    createWallet,
    authentication,
    getAWallet,
};
