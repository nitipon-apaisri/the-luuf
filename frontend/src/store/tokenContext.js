import { createContext, useState } from "react";
import { collections, tokens } from "../db";
const TokenContext = createContext();

const TokenProvider = (props) => {
    const [token, setToken] = useState();
    const [tokenCollection, setTokenCollection] = useState();
    const [relateTokens, setRelateTokens] = useState([]);
    const fetchTokenData = (tokenId) => {
        const getToken = tokens.find((r) => {
            return r.id === tokenId;
        });
        const getCollection = collections.find((r) => {
            return r.name === getToken.collection && r.createdBy === getToken.creator;
        });
        getCollection.tokens.forEach((r) => {
            if (r !== getToken.id) {
                const relateToken = tokens.find((x) => {
                    return x.id === r;
                });
                if (relateTokens.length === 0) {
                    setRelateTokens((arr) => [...arr, relateToken]);
                }
            }
        });
        setToken(getToken);
        setTokenCollection(getCollection);
    };
    return <TokenContext.Provider value={{ token, tokenCollection, relateTokens, fetchTokenData }}>{props.children}</TokenContext.Provider>;
};

export { TokenProvider, TokenContext };
