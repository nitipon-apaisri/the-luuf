import { createContext, useState } from "react";
import { accounts } from "../db";
const AccountContext = createContext();
const AccountProvider = (props) => {
    const [account, setAccount] = useState();
    const signIn = (signInInfo) => {
        const findAccount = accounts.find((acc) => {
            return acc.signInInfo.walletAddress === signInInfo.walletAddress && acc.signInInfo.password === signInInfo.walletPassword;
        });
        setAccount(findAccount);
    };
    return <AccountContext.Provider value={{ account, signIn }}>{props.children}</AccountContext.Provider>;
};

export { AccountProvider, AccountContext };
