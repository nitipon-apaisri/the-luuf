const { v4: uuidv4 } = require("uuid");
const db = require("./tokens");
const collections = [];
const mockCollections = [
    {
        id: uuidv4(),
        name: "It's fine.",
        createdBy: "kamwoo",
        description:
            "ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
        tokens: [],
    },
];

const addMockCollections = () => {
    db.tokens.forEach((r) => {
        const findCollection = mockCollections.findIndex((collection) => {
            return r.collection === collection.name;
        });
        mockCollections[findCollection].tokens.push(r.id);
    });
    if (collections.length === 0) {
        mockCollections.forEach((token) => collections.push(token));
    }
};

addMockCollections();

module.exports = {
    collections,
};
