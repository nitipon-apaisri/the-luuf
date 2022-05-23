const { v4: uuidv4 } = require("uuid");
const tokens = [];
const mockTokens = [
    {
        id: uuidv4(),
        name: "#OK97",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet ",
        edition: 1,
        image: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/atk-billie",
        creator: "kamwoo",
        owner: "nitipon-apaisri",
        collection: "It's fine.",
        chain: "near",
        tradeInfo: {
            sellStatus: false,
            price: 0,
            loyalties: [{ account: "kamwoo", value: 10 }],
        },
        metadata: { contractAddress: "...", tokenId: "...", edition: "...", blockchain: "...", ipfs: "..." },
        // "tradeHistory": [{...},{...},{...}],
        arttributes: [
            { type: "character", value: "Billie Eilish" },
            { type: "status", value: "Negative" },
            { type: "season", value: "1" },
        ],
    },
    {
        id: uuidv4(),
        name: "#OK159",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet ",
        image: "https://pfjrjbqogbhegczbokwr.supabase.co/storage/v1/object/public/images/atk-nang-rum",
        edition: 1,
        creator: "kamwoo",
        owner: "nitipon-apaisri",
        collection: "It's fine.",
        chain: "near",
        tradeInfo: {
            sellStatus: true,
            price: 12.35,
            loyalties: [
                { account: "kamwoo", value: 5 },
                { account: "optp", value: 5 },
            ],
        },
        metadata: { contractAddress: "...", tokenId: "...", edition: "...", blockchain: "...", ipfs: "..." },
        // "tradeHistory": [{...},{...},{...}],
        arttributes: [
            { type: "character", value: "Nang Rum" },
            { type: "status", value: "Positive" },
            { type: "season", value: "2" },
        ],
    },
];
const addMockTokens = () => {
    if (tokens.length === 0) {
        mockTokens.forEach((token) => tokens.push(token));
    }
};
const createToken = (tokenData) => {
    tokens.push(tokenData);
};
addMockTokens();

module.exports = {
    tokens,
    createToken,
};