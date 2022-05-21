import axios from "axios";
import { createContext, useState } from "react";
const AccountContext = createContext();
const AccountProvider = (props) => {
    const [account, setAccount] = useState();

    const signIn = (signInInfo) => {
        axios({
            method: "post",
            url: "http://localhost:4200/authentication",
            data: {
                walletAddress: signInInfo.walletAddress,
                walletPassword: signInInfo.walletPassword,
            },
        })
            .then((wallet) => {
                setAccount(wallet.data);
                localStorage.setItem("auth", JSON.stringify({ walletAddress: wallet.data.signInInfo.walletAddress, walletPassword: wallet.data.signInInfo.password }));
            })
            .catch((err) => {
                console.log(err.response.data.error);
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
