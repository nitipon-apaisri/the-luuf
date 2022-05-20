import axios from "axios";
import { createContext, useState } from "react";
import { accounts } from "../db";
const AccountContext = createContext();
const AccountProvider = (props) => {
    const [account, setAccount] = useState();

    const signIn = (signInInfo) => {
        // const findAccount = accounts.find((acc) => {
        //     return acc.signInInfo.walletAddress === signInInfo.walletAddress && acc.signInInfo.password === signInInfo.walletPassword;
        // });
        // setAccount(findAccount);
        // if (findAccount !== undefined) {
        //     localStorage.setItem("auth", JSON.stringify({ walletAddress: findAccount.signInInfo.walletAddress, walletPassword: findAccount.signInInfo.password }));
        // }
        axios({
            method: "post",
            url: "http://localhost:4200/",
            data: {
                walletAddress: "kamwoo",
                walletPassword: "1234",
            },
        }).then((res) => {
            console.log(res.data);
        });
    };
    const signOut = () => {
        localStorage.removeItem("auth");
        setTimeout(() => {
            window.location.reload();
        }, 350);
    };
    return <AccountContext.Provider value={{ account, signIn, signOut }}>{props.children}</AccountContext.Provider>;
};

export { AccountProvider, AccountContext };
