const { v4: uuidv4 } = require("uuid");
const db = require("./tokens");
const collections = [];
const mockCollections = [
    {
        id: uuidv4(),
        name: "It's fine.",
        collectionLogo: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/atk-pfp",
        collectionCover: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/atk-cover",
        createdBy: "kamwoo",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        tokens: [],
        values: {
            totalVolume: 555,
            floorPrice: 1,
        },
    },
    {
        id: uuidv4(),
        name: "A Normal Life",
        collectionLogo: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/anl-logo.jpeg",
        collectionCover: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/anl-cover.png",
        createdBy: "nitipon-apaisri",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        tokens: [],
        values: {
            totalVolume: 12,
            floorPrice: 6,
        },
    },
    {
        id: uuidv4(),
        name: "CRYPTO GOD",
        collectionLogo: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/cp-pfp.webp",
        collectionCover: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/cg-cover.jpeg",
        createdBy: "cookiiez31",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        tokens: [],
        values: {
            totalVolume: 1470,
            floorPrice: 3,
        },
    },
    {
        id: uuidv4(),
        name: "Flipped Face",
        collectionLogo: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/ff-pfp",
        collectionCover: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/ff-cover.jpeg",
        createdBy: "taitern",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        tokens: [],
        values: {
            totalVolume: 15224,
            floorPrice: 10,
        },
    },
    {
        id: uuidv4(),
        name: "MAD BEAR$ CLUB",
        collectionLogo: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/mbc-pfp.webp",
        collectionCover: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/mbc.png",
        createdBy: "hellwrld666",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        tokens: [],
        values: {
            totalVolume: 655,
            floorPrice: 1,
        },
    },
    {
        id: uuidv4(),
        name: "NGM! CREW",
        collectionLogo: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/ngm-pfp.webp",
        collectionCover: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/ngm-cover.jpeg",
        createdBy: "ngmicrew",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        tokens: [],
        values: {
            totalVolume: 493,
            floorPrice: 0.8,
        },
    },
    {
        id: uuidv4(),
        name: "TDKILL. Beats",
        collectionLogo: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/tdkill-pfp.webp",
        collectionCover: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/tdkill-cover.jpeg",
        createdBy: "tdkill",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        tokens: [],
        values: {
            totalVolume: 328,
            floorPrice: 9.5,
        },
    },
    {
        id: uuidv4(),
        name: "Alien Bear Crew",
        collectionLogo: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/abc-pfp.webp",
        collectionCover: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/abc-cover.png",
        createdBy: "nft.alienbearcrew",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        tokens: [],
        values: {
            totalVolume: 7828,
            floorPrice: 7.6,
        },
    },
    {
        id: uuidv4(),
        name: "META ANTIHEROES",
        collectionLogo: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-profile-pictures/ma-pfp.webp",
        collectionCover: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/collection-cover/ma-cover.jpeg",
        createdBy: "sob_gallery",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        tokens: [],
        values: {
            totalVolume: 6155,
            floorPrice: 15,
        },
    },
];

const addMockCollections = () => {
    db.tokens.forEach((r) => {
        const findCollection = mockCollections.findIndex((collection) => {
            return r.collection === collection.name;
        });
        if (findCollection !== -1) {
            mockCollections[findCollection].tokens.push(r.id);
        }
    });
    if (collections.length === 0) {
        mockCollections.forEach((token) => collections.push(token));
    }
};
const addCreateToken = (tokenData) => {
    const findCollection = mockCollections.findIndex((collection) => {
        return tokenData.collection === collection.name;
    });
    if (findCollection !== -1) {
        mockCollections[findCollection].tokens.unshift(tokenData.id);
    }
};
const createCollection = (collectionData) => {
    collections.push(collectionData);
};
addMockCollections();

module.exports = {
    collections,
    addCreateToken,
    createCollection,
};
