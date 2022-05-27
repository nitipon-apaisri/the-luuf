import axios from "axios";
import React, { createContext, useState } from "react";
const TokenContext = createContext();

const TokenProvider = (props) => {
    const [token, setToken] = useState();
    const [tokenCollection, setTokenCollection] = useState();
    const [relateTokens, setRelateTokens] = useState([]);
    const fetchTokenData = (tokenId) => {
        axios
            .get(`http://localhost:4200/tokens/${tokenId}`)
            .then((token) => {
                setToken(token.data);
            })
            .catch((err) => console.log(err.response.data.error));
        if (token !== undefined) {
            axios
                .get(`http://localhost:4200/${token.creator}/collections/${token.collection}`)
                .then((r) => setTokenCollection(r.data))
                .catch((err) => console.log(err.response.data.error));
        }
        if (tokenCollection !== undefined) {
            tokenCollection.tokens.forEach((tokenId) => {
                if (tokenId !== token.id) {
                    axios
                        .get(`http://localhost:4200/tokens/${tokenId}`)
                        .then((token) => {
                            setRelateTokens((arr) => [...arr, token.data]);
                        })
                        .catch((err) => console.log(err.response.data.error));
                }
            });
        }
    };
    return <TokenContext.Provider value={{ token, tokenCollection, relateTokens, fetchTokenData }}>{props.children}</TokenContext.Provider>;
};

export { TokenProvider, TokenContext };
