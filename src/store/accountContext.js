import { createContext, useState } from "react";
import { accounts } from "../db";
const AccountContext = createContext();
const AccountProvider = (props) => {
    const [account, setAccount] = useState();
    const fetchAccount = (accountName) => {
        const findAccount = accounts.find((r) => {
            return r.name === accountName;
        });
        setAccount(findAccount);
    };
    return <AccountContext.Provider value={{ account, fetchAccount }}>{props.children}</AccountContext.Provider>;
};

export { AccountProvider, AccountContext };
