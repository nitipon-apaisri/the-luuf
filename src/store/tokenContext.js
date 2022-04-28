import { createContext, useState } from "react";
import { collections, tokens } from "../db";
const TokenContext = createContext();

const TokenProvider = (props) => {
    const [token, setToken] = useState();
    const [tokenCollection, setTokenCollection] = useState();
    const findToken = (tokenId) => {
        const getToken = tokens.find((r) => {
            return r.id === tokenId;
        });
        setToken(getToken);
    };
    const findTokenCollection = (collectionName, creator) => {
        const getCollection = collections.find((r) => {
            return r.name === collectionName && r.createdBy === creator;
        });
        setTokenCollection(getCollection);
    };
    return <TokenContext.Provider value={{ token, tokenCollection, findToken, findTokenCollection }}>{props.children}</TokenContext.Provider>;
};

export { TokenProvider, TokenContext };
