import { createContext, useState } from "react";
import { tokens } from "../db";
const TokenContext = createContext();

const TokenProvider = (props) => {
    const [token, setToken] = useState();
    const findToken = (tokenId) => {
        const getToken = tokens.find((r) => {
            return r.id === tokenId;
        });
        setToken(getToken);
    };
    return <TokenContext.Provider value={{ token, findToken }}>{props.children}</TokenContext.Provider>;
};

export { TokenProvider, TokenContext };
