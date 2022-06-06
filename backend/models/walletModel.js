const { v4: uuidv4 } = require("uuid");
const db = require("../db/wallets");
const { Unauthorized, InvalidAddress, ExistingWallet } = require("../errors");
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
        collections: [
            {
                id: uuidv4(),
                name: `${walletAddress}'s collection`,
                collectionLogo: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/collection-mock-pfp.svg",
                collectionCover: "",
                createdBy: walletAddress,
                description:
                    "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
                tokens: [],
                values: {
                    totalVolume: 0,
                    floorPrice: 0,
                },
            },
        ],
        collectibles: [],
        favorited: [],
    };
    const isWalletExisting = db.wallets.some((wallet) => {
        return wallet.signInInfo.walletAddress === walletAddress;
    });
    if (isWalletExisting === false) {
        db.addWallet(walletModel);
        return walletModel;
    } else {
        throw new ExistingWallet();
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
const getWallets = () => {
    const wallets = db.wallets;
    return wallets;
};
module.exports = {
    createWallet,
    authentication,
    getAWallet,
    getWallets,
};
