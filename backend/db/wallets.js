const { v4: uuidv4 } = require("uuid");
const { collections } = require("./collections");
const { tokens } = require("./tokens");
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
            pfp: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/profile-pictures/kamwoo",
            banner: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/profile-cover/its-fine-cover",
        },
        links: {
            universal: "...",
            twitter: "...",
            discord: "...",
        },
        collections: [],
        collectibles: [],
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
            pfp: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/profile-pictures/anl-pfp.jpeg",
            banner: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/anl-cover.png",
        },
        links: {
            universal: "...",
            twitter: "...",
            discord: "...",
        },
        collections: [],
        collectibles: [],
        favorited: [],
    },
];
const addMockWallets = () => {
    if (wallets.length === 0) {
        collections.forEach((collection) => {
            const findCollectionOwner = mockWallets.findIndex((r) => {
                return r.signInInfo.walletAddress === collection.createdBy;
            });
            mockWallets[findCollectionOwner].collections.push(collection.id);
        });
        tokens.forEach((token) => {
            const findTokenOwner = mockWallets.findIndex((r) => {
                return r.signInInfo.walletAddress === token.owner;
            });
            mockWallets[findTokenOwner].collectibles.push(token.id);
        });
        mockWallets.forEach((wallet) => wallets.push(wallet));
        console.log(wallets);
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
