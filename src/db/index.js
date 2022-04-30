export const features = [
    {
        title: "Discover",
        info: "viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra",
        icon: "MagnifyingGlass",
    },
    {
        title: "Buy and Sell",
        info: "viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra",
        icon: "Tag",
    },
    {
        title: "Follow",
        info: "viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra",
        icon: "TwitterLogo",
    },
    {
        title: "Have Fun!",
        info: "viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra",
        icon: "Smiley",
    },
];

export const category = [
    { title: "Art", path: "/", bgColor: "#FF5F5F" },
    { title: "Collectibles", path: "/", bgColor: "#FF7B5F" },
    { title: "Photography", path: "/", bgColor: "#FFA25F" },
    { title: "Music", path: "/", bgColor: "#2F5DFF" },
    { title: "Utility", path: "/", bgColor: "#0BA7FF" },
    { title: "Trading Cards", path: "/", bgColor: "#1ABC9C" },
];

export const risingCreators = [{ name: "example1" }, { name: "example2" }, { name: "example3" }];

export const topCollection = [
    { name: "Example1", values: { floorPrice: 5, totalValue: 14000 } },
    { name: "Example2", values: { floorPrice: 5, totalValue: 14000 } },
    { name: "Example3", values: { floorPrice: 5, totalValue: 14000 } },
    { name: "Example4", values: { floorPrice: 5, totalValue: 14000 } },
];

export const trendingCollection = [{ name: "example1" }, { name: "example2" }, { name: "example3" }];
export const tokens = [
    {
        id: "TK0001",
        name: "#OK97",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet ",
        image: "...",
        edition: 1,
        creator: "kamwoo",
        owner: "nitipon-apaisri",
        collection: "It's fine.",
        chain: "Near",
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
        id: "TK0002",
        name: "#OK159",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet ",
        image: "...",
        edition: 1,
        creator: "kamwoo",
        owner: "nitipon-apaisri",
        collection: "It's fine.",
        chain: "Near",
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
    {
        id: "TK0003",
        name: "#OK166",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet ",
        image: "...",
        edition: 1,
        creator: "kamwoo",
        owner: "nitipon-apaisri",
        collection: "It's fine.",
        chain: "Near",
        tradeInfo: {
            sellStatus: false,
            price: 0,
            loyalties: [{ account: "kamwoo", value: 10 }],
        },
        metadata: { contractAddress: "...", tokenId: "...", edition: "...", blockchain: "...", ipfs: "..." },
        // "tradeHistory": [{...},{...},{...}],
        arttributes: [
            { type: "character", value: "Dabi" },
            { type: "status", value: "Positive" },
            { type: "season", value: "2" },
        ],
    },
    {
        id: "TK0004",
        name: "#OK174",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet ",
        image: "...",
        edition: 1,
        creator: "kamwoo",
        owner: "nitipon-apaisri",
        collection: "It's fine.",
        chain: "Near",
        tradeInfo: {
            sellStatus: true,
            price: 6,
            loyalties: [{ account: "kamwoo", value: 10 }],
        },
        metadata: { contractAddress: "...", tokenId: "...", edition: "...", blockchain: "...", ipfs: "..." },
        // "tradeHistory": [{...},{...},{...}],
        arttributes: [
            { type: "character", value: "Dr Strange" },
            { type: "status", value: "Positive" },
            { type: "season", value: "2" },
        ],
    },
    {
        id: "TK0005",
        name: "#OK176",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet ",
        image: "...",
        edition: 1,
        creator: "kamwoo",
        owner: "nitipon-apaisri",
        collection: "It's fine.",
        chain: "Near",
        tradeInfo: {
            sellStatus: true,
            price: 8,
            loyalties: [{ account: "kamwoo", value: 10 }],
        },
        metadata: { contractAddress: "...", tokenId: "...", edition: "...", blockchain: "...", ipfs: "..." },
        // "tradeHistory": [{...},{...},{...}],
        arttributes: [
            { type: "character", value: "Joker" },
            { type: "status", value: "Positive" },
            { type: "season", value: "2" },
        ],
    },
    {
        id: "TK0006",
        name: "#OK0000",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet ",
        image: "...",
        edition: 1,
        creator: "kamwoo",
        owner: "nitipon-apaisri",
        collection: "It's fine.",
        chain: "Near",
        tradeInfo: {
            sellStatus: true,
            price: 8,
            loyalties: [{ account: "kamwoo", value: 10 }],
        },
        metadata: { contractAddress: "...", tokenId: "...", edition: "...", blockchain: "...", ipfs: "..." },
        // "tradeHistory": [{...},{...},{...}],
        arttributes: [
            { type: "character", value: "Kamwoo" },
            { type: "status", value: "none" },
            { type: "season", value: "0" },
        ],
    },
];
export const collections = [
    {
        id: "LVC0001",
        name: "It's fine.",
        createdBy: "kamwoo",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        tokens: ["TK0001", "TK0002", "TK0003", "TK0004", "TK0005", "TK0006"],
    },
];
