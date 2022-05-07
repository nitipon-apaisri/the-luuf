import { createContext, useState } from "react";
import { wallets } from "../db";

const WalletContext = createContext();
const WalletProvider = (props) => {
    const [wallet, setWallet] = useState();
    const authentication = (data) => {
        const findWallet = wallets.find((wallet) => {
            return wallet.walletAddress === data.walletAddress && wallet.password === data.walletPassword;
        });
        setWallet(findWallet);
    };
    return <WalletContext.Provider value={{ wallet, authentication }}>{props.children}</WalletContext.Provider>;
};

export { WalletContext, WalletProvider };
