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
            banner: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/profile-cover/anl-cover.png",
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
        name: "cookiiez31",
        signInInfo: {
            walletAddress: "cookiiez31",
            password: "1234",
        },
        balance: 1000,
        about: "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        medias: {
            pfp: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/cp-pfp.webp",
            banner: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/cg-cover.jpeg",
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
        name: "taitern",
        signInInfo: {
            walletAddress: "taitern",
            password: "1234",
        },
        balance: 1000,
        about: "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        medias: {
            pfp: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/ff-pfp",
            banner: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/ff-cover.jpeg",
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
        name: "hellwrld666",
        signInInfo: {
            walletAddress: "hellwrld666",
            password: "1234",
        },
        balance: 1000,
        about: "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        medias: {
            pfp: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/mbc-pfp.webp",
            banner: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/mbc-pfp.webp",
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
        name: "ngmicrew",
        signInInfo: {
            walletAddress: "ngmicrew",
            password: "1234",
        },
        balance: 1000,
        about: "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        medias: {
            pfp: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/ngm-pfp.webp",
            banner: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/ngm-cover.jpeg",
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
        name: "tdkill",
        signInInfo: {
            walletAddress: "tdkill",
            password: "1234",
        },
        balance: 1000,
        about: "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        medias: {
            pfp: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/tdkill-pfp.webp",
            banner: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/tdkill-cover.jpeg",
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
        name: "nft.alienbearcrew",
        signInInfo: {
            walletAddress: "nft.alienbearcrew",
            password: "1234",
        },
        balance: 1000,
        about: "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        medias: {
            pfp: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/abc-pfp.webp",
            banner: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/abc-cover.png",
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
        name: "sob_gallery",
        signInInfo: {
            walletAddress: "sob_gallery",
            password: "1234",
        },
        balance: 1000,
        about: "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        medias: {
            pfp: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/ma-pfp.webp",
            banner: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/ma-cover.jpeg",
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
            if (findCollectionOwner !== -1) {
                mockWallets[findCollectionOwner].collections.push(collection.id);
            }
        });
        tokens.forEach((token) => {
            const findTokenOwner = mockWallets.findIndex((r) => {
                return r.signInInfo.walletAddress === token.owner;
            });
            if (findTokenOwner !== -1) {
                mockWallets[findTokenOwner].collectibles.push(token.id);
            }
        });
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
