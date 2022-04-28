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
        const getCollection = collections.find((r) => {
            return r.name === getToken.collection && r.createdBy === getToken.creator;
        });
        setToken(getToken);
        setTokenCollection(getCollection);
    };
    return <TokenContext.Provider value={{ token, tokenCollection, findToken }}>{props.children}</TokenContext.Provider>;
};

export { TokenProvider, TokenContext };
