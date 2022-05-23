const { v4: uuidv4 } = require("uuid");
const wallets = [];
const mockWallets = [
    {
        id: uuidv4(),
        name: "kamwoo",
        signInInfo: {
            walletAddress: "kamwoo",
            password: "1234",
        },
        balance: 1000,
        about: "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        medias: {
            pfp: "...",
            banner: "...",
        },
        links: {
            universal: "...",
            twitter: "...",
            discord: "...",
        },
        collections: ["LVC0001"],
        collectibles: ["TK0004"],
        favorited: [],
    },
    {
        id: uuidv4(),
        name: "nitipon apaisri",
        signInInfo: {
            walletAddress: "nitipon-apaisri",
            password: "1234",
        },
        balance: 1000,
        about: "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
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
        collectibles: ["TK0001", "TK0002"],
        favorited: [],
    },
];
const addMockWallets = () => {
    if (wallets.length === 0) {
        mockWallets.forEach((wallet) => wallets.push(wallet));
    }
};
const addWallet = (walletData) => {
    wallets.push(walletData);
};
addMockWallets();
module.exports = {
    wallets,
    addWallet,
};
